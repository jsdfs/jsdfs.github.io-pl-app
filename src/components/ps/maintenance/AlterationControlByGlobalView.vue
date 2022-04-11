<template>
        <div class="card">
        <SearchSelection
            :listitemLs="listitemLs"
            :inputForm="inputForm"
            @changeItem="listitemLs = $event"
        />  
        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="add" v-tooltip.top="'Add'" />
        </div>
        <AlterationControlByGlobalDataTable
            :tableDataWithDesc="tableDataWithDesc"
        />    
        <Pagination
            v-if="tableDataWithDesc.length > 0"
            :pagingObj="tableData.params"
            @change-page="updatePaging"
        />  
        </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed, ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import AlterationControlByGlobalDataTable from '@/components/ps/maintenance/AlterationControlByGlobalDataTable'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import masterService from "../../../service/admin/masterDataService";

export default {
    name: 'AlterationControlByGlobalView',
    components: {
        AlterationControlByGlobalDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        // Data
        const inputForm = reactive({
            taskType: '',
            paging: {
                page: 0,
                rows: 10
            }
        })

        const tableData = computed(() => store.getters['alterationcontrol/getAlterationControlObj'])

        const tableDataWithDesc = ref([])

        const taskTypeLs = ref();

        const listitemLs = ref([
            { name: "taskType", label: "Task Type *", type: "dropdown", options: taskTypeLs, optionLabel:"desc", optionValue:"code" },
        ]);

        // Funciton

        const clear = () => {
            inputForm.taskType = ''

            tableDataWithDesc.value = []

        }

        const search = () => {
            if(inputForm.taskType != "")
            {
                store.dispatch('alterationcontrol/search', map()).then(() => {
                    console.log("tableData", tableData.value)
                    tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
                })
            }
            else{
                alert("Please enter Task Type")
            }

        }

        const router = useRouter();

        const add = () => {
            router.push('/alterationcontroladd');
        };


        const path = 4;
        

        onMounted(() => {

            masterService.getDetailCode("TASKTYPCLT")
            .then((res) => {
                taskTypeLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })

            store.dispatch('breadcrumb/set', path);
        });

        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    taskType: inputForm.taskType,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    taskType: inputForm.taskType,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const updatePaging = (paging) => {

            store.dispatch('alterationcontrol/search', map(paging)).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const concateDesc = (alterationControlRow) => {
            var tasktypeRecord = [{code: '', desc: ''}]


            tasktypeRecord = taskTypeLs.value.filter(elem => { return elem.code === alterationControlRow.taskType })

            if(typeof tasktypeRecord[0].code === 'undefined')
            {
                tasktypeRecord[0] = {code: '', desc: ''}
            }

            return {
                seqId: alterationControlRow.seqId,
                taskType: alterationControlRow.taskType,
                outstandingRequirementTable: alterationControlRow.outstandingRequirementTable,
                alterationStatusTable: alterationControlRow.alterationStatusTable,
                chargeCurrency: alterationControlRow.chargeCurrency,
                chargeAmount: alterationControlRow.chargeAmount,
                autoCancelDuration: alterationControlRow.autoCancelDuration,
                expireDuration: alterationControlRow.expireDuration,
                stampCurrency: alterationControlRow.stampCurrency,
                stampAmount: alterationControlRow.stampAmount,
                taskTypeDesc: tasktypeRecord[0].desc
            }
        }


        return {
            inputForm,
            tableData,
            taskTypeLs,
            clear,
            search,
            add,
            updatePaging,
            map,
            tableDataWithDesc,
            concateDesc,
            listitemLs,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}

</style>