<template>
        <div class="card">
        <SearchSelection
            :listitemLs="listitemLs"
            :inputForm="inputForm"
            :backRoutePath="'/docandmedicalreqdet'"
            @changeItem="listitemLs = $event"
        />  
        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                <DocAndMedicalCodeAddModal
                    :docAndMedTableLs="docAndMedTableLs"
                    :requirementCodeLs="requirementCodeLs"
                    :tableNo="inputForm.tableNo"
                    @reload-table-data="search"
                />    
        </div>
        <DocAndMedicalCodeDataTable
            :tableDataWithDesc="tableDataWithDesc"
            :requirementCodeLs="requirementCodeLs"
            @search="search"
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
import DocAndMedicalCodeDataTable from '@/components/ps/maintenance/DocAndMedicalCodeDataTable'
import DocAndMedicalCodeAddModal from '@/components/ps/maintenance/DocAndMedicalCodeAddModal'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import masterService from "../../../service/admin/masterDataService";

export default {
    name: 'DocAndMedicalCodeView',
    components: {
        DocAndMedicalCodeDataTable, DocAndMedicalCodeAddModal, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        // Data
        const inputForm = reactive({
            tableNo: '',
            paging: {
                page: 0,
                rows: 10
            }
        })

        const tableData = computed(() => store.getters['docandmedicalcode/getDocAndMedicalCodeObj'])

        const tableDataWithDesc = ref([])

        const docAndMedTableLs = ref();

        const requirementCodeLs = ref();


        const clearTable = ref(true);

        const listitemLs = ref([
            { name: "tableNo", label: "Table No *", type: "dropdown", options: docAndMedTableLs, optionLabel:"desc", optionValue:"code" },
        ]);

        // Funciton

        const clear = () => {
            inputForm.tableNo = ''

            tableDataWithDesc.value = []
            clearTable.value = true
        }

        const search = () => {
            if(inputForm.tableNo != "")
            {
                store.dispatch('docandmedicalcode/search', map()).then(() => {
                    clearTable.value = false
                    tableDataWithDesc.value = tableData.value.list.map(concateDesc)    
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
                router.push({ name: "docandmedicalcodeadd", params: {data: inputForm.tableNo}});
            }
            else{
                alert("Please select Table No")
            }
        };


        const path = 4;
        

        onMounted(() => {

            masterService.getDetailCode("POSDMCODETBL")
            .then((res) => {
                docAndMedTableLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() => {
                masterService.getDetailCode("DOCMEDCODE")
                .then((res) => {
                    requirementCodeLs.value = res.data.map(concateCodeDesc);
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
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.tableNo,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const updatePaging = (paging) => {

            store.dispatch('docandmedicalcode/search', map(paging)).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + " - " + mastercode.desc
            }
        }

        const concateDesc = (docAndMedicalCodeRow) => {

            var requirementCodeRecord = [{code: '', desc: ''}]


            requirementCodeRecord = requirementCodeLs.value.filter(elem => { return elem.code === docAndMedicalCodeRow.requirementCode })

            if(typeof requirementCodeRecord[0].code === 'undefined')
            {
                requirementCodeRecord[0] = {code: '', desc: ''}
            }

            return {
                seqId: docAndMedicalCodeRow.seqId,
                tableNo: docAndMedicalCodeRow.tableNo,
                requirementCode: docAndMedicalCodeRow.requirementCode,
                firstReminder: docAndMedicalCodeRow.firstReminder,
                secondReminder: docAndMedicalCodeRow.secondReminder,
                expiryPeriod: docAndMedicalCodeRow.expiryPeriod,
                requirementCodeDesc: requirementCodeRecord[0].desc
            }
        }


        return {
            inputForm,
            tableData,
            docAndMedTableLs,
            clear,
            search,
            add,
            updatePaging,
            map,
            tableDataWithDesc,
            concateDesc,
            clearTable,
            concateCodeDesc,
            listitemLs,
            requirementCodeLs
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}

</style>