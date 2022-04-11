<template>

    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">
                <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" />
                <EligibleProductCodeDataTable
                    :inputForm="inputForm"
                    :tableData="tableData"
                    @clearFilter="clear"
                    @search="search"
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
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex'       
import EligibleProductCodeDataTable from '@/components/nb/maintenance/EligibleProductCodeDataTable';
import { useRouter } from 'vue-router';
import Pagination from '@/components/common/Pagination';

export default {
    name: 'EligibleProductCode',
    components: {
        EligibleProductCodeDataTable, Pagination
    },
    setup() {
        const store = useStore()
        const tableData = computed(() => store.getters['eligibleproductcode/getProdCodeObj'])
        const router = useRouter();

        onMounted(() => {
            search()
        })

        const cancel = () => {
            router.push({ name: "jetcasedet"});
        };
            
        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    productCode: inputForm.value.productCode,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    productCode: inputForm.value.productCode,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        } 

        const search = () => {
            store.dispatch('eligibleproductcode/search', map());
        }

        const clear = () => {
            inputForm.value.tableNo = ' ';
            search()
        }

        const inputForm = ref({
            tableNo: ' ',
            productCode: ''
        })

 
        const updatePaging = (paging) => {
            store.dispatch('eligibleproductcode/search', map(paging));
        }
        
        return {
            inputForm,
            tableData,
            updatePaging,
            clear,
            search,
            map,
            cancel,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>