<template>
        <div class="card">
            <SearchSelection
                :listitemLs="listitemLs"
                :inputForm="inputForm"
                @changeItem="listitemLs = $event"
            />  
            <div class="p-fluid formgrid grid" style="margin-bottom:3%;">
                <div class="field col-12 md:col-6">
                    <span class="p-float-label">
                        <InputText id="keyType" style="width:90%" type="text" v-model="keyType" value="UWSAR - UW SAR EXCHANGE RATE" disabled/>
                        <label for="keyType">Key Type</label>
                    </span>
                </div>                                                                                                       
            </div>
            <div style="margin-bottom:1%;">
                    <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                    <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="add" v-tooltip.top="'Add'" />
            </div>
            <NBExchangeRateDataTable
                :tableData="tableData"
                :currencyLs="currencyLs"
            />
            <Pagination
                :pagingObj="tableData.params"
                @change-page="updatePaging"
            /> 
        </div>   
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import NBExchangeRateDataTable from '@/components/nb/maintenance/NBExchangeRateDataTable';
import Pagination from '@/components/common/Pagination';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import SearchSelection from '@/components/common/SearchSelection';
        
export default {
    name: 'NBExchangeRate',
    components: {
        NBExchangeRateDataTable,Pagination, SearchSelection
    },
    setup() {

        const store = useStore()
        const router = useRouter();
        const tableData = computed(() => store.getters['exchangerate/getExchangeRateObj']);

        store.dispatch('master/getDetailCode', 'CUR');
        const currencyLs = computed(() => store.getters['master/getMastersObj'])

        const listitemLs = ref([
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
        ]);

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
            search()
        })
 
        const path = 8;

        const keyType = ref('UWSAR - UW SAR EXCHANGE RATE')
        

        const add = () => {
            router.push({ name: "nbexchangerateadd", params: {currency: JSON.stringify(currencyLs.value)}});

        }

        const search = () => {
            store.dispatch('exchangerate/search', map());
        }

        const clear = () => {
            inputForm.value.effectiveDateFrom = '';
            inputForm.value.effectiveDateTo = '';
            store.dispatch('exchangerate/search', map());
        }

        const inputForm = ref({
            keyType: '',
            effectiveDateFrom: '',
            effectiveDateTo: '', 
            paging: {
                page: 0,
                rows: 10
            }     
        })

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    keyType: inputForm.value.keyType,
                    effectiveDateFrom: inputForm.value.effectiveDateFrom,
                    effectiveDateTo: inputForm.value.effectiveDateTo,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    keyType: inputForm.value.keyType,
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

        const updatePaging = (paging) => {

            store.dispatch('exchangerate/search', map(paging));
        }

        return {
            inputForm,
            tableData,
            currencyLs,
            add,
            updatePaging,
            clear,
            search,
            map,
            listitemLs,
            keyType
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>