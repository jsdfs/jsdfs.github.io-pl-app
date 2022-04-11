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

                <ServicingUnitAndPostcodeAddModal
                    :serveUnit="serveUnit"
                    @searchFunc="search"
                />
        </div>
            <ServicingUnitAndPostcodeDataTable
                v-if="tableVisible"
                :tableData="tableData"
                :serveUnit="serveUnit"
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
import ServicingUnitAndPostcodeDataTable from '@/components/ps/maintenance/ServicingUnitAndPostcodeDataTable';
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import { useStore } from 'vuex'
import ServicingUnitAndPostcodeAddModal from '@/components/ps/maintenance/ServicingUnitAndPostcodeAddModal';

export default {
    name: 'ServicingUnitAndPostcodeView',
    components: {
        ServicingUnitAndPostcodeDataTable, Pagination, SearchSelection, ServicingUnitAndPostcodeAddModal
    },
    setup() {
        const store = useStore()
        const serveUnit = ref();
        const tableVisible = ref(false)
        const tableData = computed(() => store.getters['servicingunit/getServicingUnitObj']);
        const inputForm = ref({
            servUnitCode: '',  
            postCode: ''
        })


        const listitemLs = ref([
            { name: "postCode", label: "Post Code", type: "input" },
            { name: "servUnitCode", label: "Servicing Unit", type: "dropdown", options: serveUnit, optionLabel:"desc", optionValue:"code" }
        ]);

        onMounted(() => {
            masterService.getDetailCode("REPOFFCODE").then((res) => {
                serveUnit.value = res.data;
            }).catch((e) => {
                console.error(e.response.status);
            }).then(() => {
                tableVisible.value = true
                search();
            })
        });

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    postCode: inputForm.value.postCode,
                    servUnitCode: inputForm.value.servUnitCode,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    postCode: inputForm.value.postCode,
                    servUnitCode: inputForm.value.servUnitCode,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const search = () => {
            store.dispatch("servicingunit/search", map())
        };


        const updatePaging = (paging) => {

            store.dispatch('servicingunit/search', map(paging));
        }

        const clear = () => {
            inputForm.value.servUnitCode = '';
            inputForm.value.postCode = '';
            search();
        }
        

        return {
            inputForm,
            tableData,
            serveUnit,
            search,
            updatePaging,
            tableVisible,
            map,
            clear,
            listitemLs,
        }
    },
}
</script>