<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
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
            <JetCaseDataTable
                :dataList="tableData"
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
import { ref, onMounted, computed } from 'vue';
import JetCaseDataTable from '@/components/nb/maintenance/JetCaseDataTable';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'JetCase',
    components: {
        JetCaseDataTable, Pagination, SearchSelection
    },
    setup() {
        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
            search()
        })
 
         const path = 9;

        const router = useRouter();
        const store = useStore()

        const add = () => {
            router.push("/jetcaseadd");
        }

        const tableData = computed(() => store.getters['jetcase/getJetCaseObj']);

        const inputForm = ref({
            effectiveDateFrom: '',
            effectiveDateTo: '',  
            paging: {
                page: 0,
                rows: 10
            }        
        })

        const listitemLs = ref([
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
        ]);

        const clear = () => {
            inputForm.value.effectiveDateFrom = '';
            inputForm.value.effectiveDateTo = '';
            store.dispatch('jetcase/search', map());
        }

        const search = () => {
            store.dispatch('jetcase/search', map());
        }

        const updatePaging = (paging) => {
            store.dispatch('jetcase/search', map(paging));
        }

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    effectiveDateFrom: inputForm.value.effectiveDateFrom,
                    effectiveDateTo: inputForm.value.effectiveDateTo,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    effectiveDateFrom: inputForm.value.effectiveDateFrom,
                    effectiveDateTo: inputForm.value.effectiveDateTo,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        return {
            inputForm,
            tableData,
            search,
            clear,
            updatePaging,
            add,
            map,
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