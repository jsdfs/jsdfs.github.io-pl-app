<template>
<div class="grid">
    <div class="col-12">
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
            <LoadingRangeDataTable
                :tableDataWithDesc="tableDataWithDesc"
            />  
            <Pagination
                :pagingObj="tableData.params"
                @change-page="updatePaging"
            />  
        </div>
    </div>
      </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import LoadingRangeDataTable from '@/components/nb/maintenance/LoadingRangeDataTable'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'LoadingRangeView',
    components: {
        LoadingRangeDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        const router = useRouter();

        // Data
        const inputForm = reactive({
            loadCode: '',
            effectiveDateFrom: '',
            effectiveDateTo: '',
        })

        const loadCodeLs = computed(() => store.getters['master/getMastersObj'])

        const tableData = computed(() => store.getters['loadingrange/getLoadingRangeObj'])

        const tableDataWithDesc = ref([])

        const path = 5;

        const listitemLs = ref([
            { name: "loadCode", label: "Load Code", type: "dropdown", options: loadCodeLs, optionLabel:"desc", optionValue:"code" },
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
        ]);
        

        onMounted(() => {
            search()
            store.dispatch('breadcrumb/set', path);
        });


        // Funciton

        const clear = () => {
            inputForm.loadCode = ''
            inputForm.effectiveDateFrom = ''
            inputForm.effectiveDateTo = ''

            search()
        }


        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    loadCode: inputForm.loadCode,
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    loadCode: inputForm.loadCode,
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const search = () => {

            if(inputForm.effectiveDateFrom != '' && inputForm.effectiveDateTo != '' && inputForm.effectiveDateFrom != null && inputForm.effectiveDateTo != null)
            {
                if(inputForm.effectiveDateFrom.getTime() > inputForm.effectiveDateTo.getTime()){
                    alert("Effective Date To must be >= Effective Date From")
                }else{
                    store.dispatch('master/getDetailCode', 'LDPREMCODE').then(() => {
                        store.dispatch('loadingrange/search', map()).then(() => {
                            tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
                        })
                    })
                }
            }else{
                store.dispatch('master/getDetailCode', 'LDPREMCODE').then(() => {
                    store.dispatch('loadingrange/search', map()).then(() => {
                        tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
                    })
                })
            }

            

        }
    
        const updatePaging = (paging) => {
            store.dispatch('loadingrange/search', map(paging)).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const add = () => {
            router.push({ name: "loadingrangeadd"});
        };

        const concateDesc = (loadingRangeRow) => {
            var loadCodeRecord = [{code: '', desc: ''}]


            loadCodeRecord = loadCodeLs.value.filter(elem => { return elem.code === loadingRangeRow.loadCode })

            if(typeof loadCodeRecord[0].code === 'undefined')
            {
                loadCodeRecord[0] = {code: '', desc: ''}
            }

            return {
                seqId: loadingRangeRow.seqId,
                loadCode: loadingRangeRow.loadCode,
                effectiveDateFrom: loadingRangeRow.effectiveDateFrom,
                effectiveDateTo: loadingRangeRow.effectiveDateTo,
                minLoadRate: loadingRangeRow.minLoadRate,
                maxLoadRate: loadingRangeRow.maxLoadRate,
                loadCodeDesc: loadCodeRecord[0].desc
            }
        }


        return {
            inputForm,
            router,
            loadCodeLs,
            tableData,
            map,
            clear,
            search,
            add,
            updatePaging,
            tableDataWithDesc,
            concateDesc,
            listitemLs
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>