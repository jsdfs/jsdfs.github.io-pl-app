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
            <FinancialClosingPeriodDataTable
                v-if="tableVisible"
                :tableData="tableData"
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
import FinancialClosingPeriodDataTable from '@/components/accounting/maintenance/FinancialClosingPeriodDataTable';
import masterService from "../../../service/admin/masterDataService";
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    name: 'FinancialClosingPeriodView',
    components: {
        FinancialClosingPeriodDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()
        const financialYearLs = ref();
        const financialMonthLs = ref();
        const calenderMonthLs = ref();
    
        const tableVisible = ref(false)
        const router = useRouter();
        const tableData = computed(() => store.getters['financialclosingperiod/getFinincialObj']);
        const inputForm = ref({
            financialYear: '',  
            financialMonth: '',
            calenderMonth: '',
            startDate: '',
            endDate: ''
        })

        const listitemLs = ref([
            { name: "financialYear", label: "Financial Year", type: "dropdown", options: financialYearLs, optionLabel:"desc", optionValue:"code" },
            { name: "financialMonth", label: "Financial Month", type: "dropdown", options: financialMonthLs, optionLabel:"desc", optionValue:"code" },
            { name: "calenderMonth", label: "Calendar Month", type: "dropdown", options: calenderMonthLs, optionLabel:"desc", optionValue:"code" },
            { name: "startDate", label: "Start Date", type: "date" },
            { name: "endDate", label: "End Date", type: "date" }
        ]);

        onMounted(() => {
            masterService.getDetailCode("FINANCEYR")
            .then((res) => {
                financialYearLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("FINMONTH")
            .then((res) => {
                financialMonthLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() =>
            masterService.getDetailCode("MONTH")
            .then((res) => {
                calenderMonthLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() => {
                tableVisible.value = true
        
                search()
            })

            
        });

        const add = () => {
            router.push("/financialclosingadd");
        }

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    financialYear: inputForm.value.financialYear,  
                    financialMonth: inputForm.value.financialMonth,
                    calenderMonth: inputForm.value.calenderMonth,
                    startDate: inputForm.value.startDate,
                    endDate: inputForm.value.endDate,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    financialYear: inputForm.value.financialYear,  
                    financialMonth: inputForm.value.financialMonth,
                    calenderMonth: inputForm.value.calenderMonth,
                    startDate: inputForm.value.startDate,
                    endDate: inputForm.value.endDate,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const search = () => {
            store.dispatch("financialclosingperiod/search", map())
        };


        const updatePaging = (paging) => {

            store.dispatch('financialclosingperiod/search', map(paging));
        }

        const clear = () => {
            inputForm.value.financialYear = '';
            inputForm.value.financialMonth = '';
            inputForm.value.calenderMonth = '';
            inputForm.value.startDate = '';
            inputForm.value.endDate = '';
            search();
        }


        return {
            inputForm,
            financialYearLs,
            financialMonthLs,
            calenderMonthLs,
            tableVisible,
            updatePaging,
            search,
            clear,
            listitemLs,
            add,
            tableData,

        }
    },
}
</script>