<template>
        <div class="card">
        <SearchSelection
            :listitemLs="listitemLs"
            :inputForm="inputForm"
            :backRoutePath="'/alterationcontroldet'"
            @changeItem="listitemLs = $event"
        />  
        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="add" v-tooltip.top="'Add'" />
        </div>
        <DocAndMedicalReqDataTable
            :tableData="tableData"
        />    
        <Pagination
            v-if="!clearTable"
            :pagingObj="tableData.params"
            @change-page="updatePaging"
        />  
        </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed, ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import DocAndMedicalReqDataTable from '@/components/ps/maintenance/DocAndMedicalReqDataTable'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import masterService from "../../../service/admin/masterDataService";

export default {
    name: 'DocAndMedicalReqView',
    components: {
        DocAndMedicalReqDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        // Data
        const inputForm = reactive({
            tableNo: '',
            effectiveDateFrom: '',
            effectiveDateTo: '',
            distributionChannel: '',
            agentPrivilegeStatus: '',
            paging: {
                page: 0,
                rows: 10
            }
        })

        const tableData = computed(() => store.getters['docandmedicalreq/getDocAndMedicalReqObj'])

        //const tableDataWithDesc = ref([])

        const tableNoLs = ref();

        const distributionChannelLs = ref();

        const agentPriviledgeLs = ref();

        const clearTable = ref(true);

        const listitemLs = ref([
            { name: "tableNo", label: "Table No *", type: "dropdown", options: tableNoLs, optionLabel:"desc", optionValue:"code" },
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
            { name: "distributionChannel", label: "Distribution Channel", type: "dropdown", options: distributionChannelLs, optionLabel:"desc", optionValue:"code" },
            { name: "agentPrivilegeStatus", label: "Agent Priviledge Status", type: "dropdown", options: agentPriviledgeLs, optionLabel:"desc", optionValue:"code" },
        ]);

        // Funciton

        const clear = () => {
            inputForm.tableNo = ''
            inputForm.effectiveDateFrom = ''
            inputForm.effectiveDateTo = ''
            inputForm.distributionChannel = ''
            inputForm.agentPrivilegeStatus = ''

            tableData.value.list = []
            clearTable.value = true
        }

        const search = () => {
            if(inputForm.tableNo != "")
            {
                store.dispatch('docandmedicalreq/search', map()).then(() => {
                    clearTable.value = false
                    //tableDataWithDesc.value = tableData.value.list.map(concateDesc)    
                })
            }
            else{
                alert("Please select Table No")
            }

            

        }

        const router = useRouter();

        const add = () => {
            if(inputForm.tableNo != "")
            {
                router.push({ name: "docandmedicalreqadd", params: {data: inputForm.tableNo}});
            }
            else{
                alert("Please select Table No")
            }
        };


        const path = 4;
        

        onMounted(() => {

            masterService.getDetailCode("TASKOUTREQTBL")
            .then((res) => {
                tableNoLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() => {
            masterService.getDetailCode("DISTCHAN")
            .then((res) => {
                distributionChannelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })     
            }).then(() => {
            masterService.getDetailCode("AGTPRIVSTATS")
            .then((res) => {
                agentPriviledgeLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })     
            })

            clear()

            store.dispatch('breadcrumb/set', path);
        });

        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    tableNo: inputForm.tableNo,
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    distributionChannel: inputForm.distributionChannel,
                    agentPrivilegeStatus: inputForm.agentPrivilegeStatus,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.tableNo,
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    distributionChannel: inputForm.distributionChannel,
                    agentPrivilegeStatus: inputForm.agentPrivilegeStatus,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const updatePaging = (paging) => {

            store.dispatch('docandmedicalreq/search', map(paging)).then(() => {
                //tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + " - " + mastercode.desc
            }
        }

        // const concateDesc = (alterationControlRow) => {
        //     var tasktypeRecord = [{code: '', desc: ''}]


        //     tasktypeRecord = taskTypeLs.value.filter(elem => { return elem.code === alterationControlRow.taskType })

        //     if(typeof tasktypeRecord[0].code === 'undefined')
        //     {
        //         tasktypeRecord[0] = {code: '', desc: ''}
        //     }

        //     return {
        //         seqId: alterationControlRow.seqId,
        //         taskType: alterationControlRow.taskType,
        //         outstandingRequirementTable: alterationControlRow.outstandingRequirementTable,
        //         alterationStatusTable: alterationControlRow.alterationStatusTable,
        //         chargeCurrency: alterationControlRow.chargeCurrency,
        //         chargeAmount: alterationControlRow.chargeAmount,
        //         autoCancelDuration: alterationControlRow.autoCancelDuration,
        //         expireDuration: alterationControlRow.expireDuration,
        //         stampCurrency: alterationControlRow.stampCurrency,
        //         stampAmount: alterationControlRow.stampAmount,
        //         taskTypeDesc: tasktypeRecord[0].desc
        //     }
        // }


        return {
            inputForm,
            tableData,
            tableNoLs,
            clear,
            search,
            add,
            updatePaging,
            map,
            //tableDataWithDesc,
            //concateDesc,
            listitemLs,
            distributionChannelLs,
            agentPriviledgeLs,
            clearTable,
            concateCodeDesc
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}

</style>