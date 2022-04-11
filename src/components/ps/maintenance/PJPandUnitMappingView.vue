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

                <PJPandUnitMappingAddModal 
                    :pjpLs="pjpLs"
                    :unitLs="unitLs"
                    @searchFunc="search"
                />
        </div>
            <PJPandUnitMappingDataTable 
                v-if="tableVisible"
                :tableData="tableData"
                :pjpLs="pjpLs"
                :unitLs="unitLs"
                @searchFunc="search"
            />
            <Pagination
            :pagingObj="tableData.params"
            @change-page="updatePaging"
            /> 
    </div>   
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import masterService from "../../../service/admin/masterDataService";
import PJPandUnitMappingDataTable  from '@/components/ps/maintenance/PJPandUnitMappingDataTable ';
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import { useStore } from 'vuex'
import PJPandUnitMappingAddModal from '@/components/ps/maintenance/PJPandUnitMappingAddModal';

export default {
    name: 'PJPandUnitMappingView',
    components: {
        PJPandUnitMappingDataTable , Pagination, SearchSelection, PJPandUnitMappingAddModal
    },
    setup() {
        const store = useStore()
        const pjpLs = ref();
        const unitLs = ref();
        const tableVisible = ref(false)
        const tableData = computed(() => store.getters['pjpandunitmapping/getPjpUnitObj']);
        const inputForm = ref({
            pjp: '',  
            unit: ''
        })


        const listitemLs = ref([
            { name: "pjp", label: "PJP", type: "dropdown", options: pjpLs, optionLabel:"desc", optionValue:"code" },
            { name: "unit", label: "Unit", type: "dropdown", options: unitLs, optionLabel:"desc", optionValue:"code" }
        ]);

        onMounted(() => {

            masterService.getDetailCode("GRPPJP")
            .then((res) => {
                pjpLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GRPUNIT")
            .then((res) => {
                unitLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() => {
                tableVisible.value = true
        
                search()
            })
        });

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    pjp: inputForm.value.pjp,
                    unit: inputForm.value.unit,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    pjp: inputForm.value.pjp,
                    unit: inputForm.value.unit,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const search = () => {
            store.dispatch("pjpandunitmapping/search", map())
        };


        const updatePaging = (paging) => {

            store.dispatch('pjpandunitmapping/search', map(paging));
        }

        const clear = () => {
            inputForm.value.pjp = '';
            inputForm.value.unit = '';
            search();
        }
        

        return {
            inputForm,
            tableData,
            pjpLs,
            search,
            updatePaging,
            tableVisible,
            unitLs,
            map,
            clear,
            listitemLs,
        }
    },
}
</script>