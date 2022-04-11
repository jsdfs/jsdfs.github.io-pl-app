<template>

        <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">
                <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" />
                <SinglePremiumPolicyDataTable
                    :inputForm="inputForm"
                    :tableData="tableData"
                    @clearFilter="clear"
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
import SinglePremiumPolicyDataTable from '@/components/nb/maintenance/SinglePremiumPolicyDataTable';
import Pagination from '@/components/common/Pagination';
import { useRouter } from 'vue-router';

export default {
    name: 'SinglePremiumPolicy',
    components: {
        SinglePremiumPolicyDataTable, Pagination
    },
    setup() {
        const store = useStore()
        const tableData = computed(() => store.getters['singlepremiumpolicy/getSinglePremPolicyObj'])
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

                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        } 
            
        const search = () => {
            store.dispatch('singlepremiumpolicy/search', map());
        }

        const clear = () => {
            inputForm.value.tableNo = ' ';
            search()
        }

        const inputForm = ref({
            tableNo: ' ',
        })

        const updatePaging = (paging) => {
            store.dispatch('singlepremiumpolicy/search', map(paging));
        }
        
        return {
            inputForm,
            tableData,
            updatePaging,
            clear,
            cancel,
            search,
            map,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>