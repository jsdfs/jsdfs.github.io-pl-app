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
            <ChartOfAccountDataTable
                v-if="tableVisible"
                :tableData="tableData"
                :accountCodeLs="accountCodeLs"
                :accountTypeLs="accountTypeLs"
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
import ChartOfAccountDataTable from '@/components/accounting/maintenance/ChartOfAccountDataTable';
import masterService from "../../../service/admin/masterDataService";
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    name: 'ChartOfAccount',
    components: {
        ChartOfAccountDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()
        const accountCodeLs = ref();
        const accountTypeLs = ref();
        const tableVisible = ref(false)
        const router = useRouter();
        const tableData = computed(() => store.getters['chartofaccount/getChartOfAccountObj']);
        const inputForm = ref({
            accountCode: '',  
            accountType: ''
        })

        const listitemLs = ref([
            { name: "accountCode", label: "Account Code", type: "dropdown", options: accountCodeLs, optionLabel:"desc", optionValue:"code" },
            { name: "accountType", label: "	Account Type", type: "dropdown", options: accountTypeLs, optionLabel:"desc", optionValue:"code" }
        ]);

        onMounted(() => {
            masterService.getDetailCode("GLBALCODEMAP")
            .then((res) => {
                accountCodeLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLBALCODETYPE")
            .then((res) => {
                accountTypeLs.value = res.data.map(concateCodeDesc);
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
            router.push("/chartofaccountadd");
        }

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    accountCode: inputForm.value.accountCode,
                    accountType: inputForm.value.accountType,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    accountCode: inputForm.value.accountCode,
                    accountType: inputForm.value.accountType,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const search = () => {
            store.dispatch("chartofaccount/search", map())
        };


        const updatePaging = (paging) => {

            store.dispatch('chartofaccount/search', map(paging));
        }

        const clear = () => {
            inputForm.value.accountCode = '';
            inputForm.value.accountType = '';
            search();
        }

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + ' - ' + mastercode.desc
            }
        }

        return {
            inputForm,
            concateCodeDesc,
            accountCodeLs,
            accountTypeLs,
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