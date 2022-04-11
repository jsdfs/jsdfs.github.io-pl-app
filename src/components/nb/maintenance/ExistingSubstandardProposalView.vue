<template>

    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">
                    <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" />
                    <ExistingSubstandardProposalDataTable
                        :tableData="tableData"
                        @clearFilter="clear"
                        :inputForm="inputForm"
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
import ExistingSubstandardProposalDataTable from '@/components/nb/maintenance/ExistingSubstandardProposalDataTable';
import { useRouter } from 'vue-router';
import Pagination from '@/components/common/Pagination';

export default {
    name: 'ExistingSubstandardProposal',
    components: {
        ExistingSubstandardProposalDataTable, Pagination
    },
    setup() {
        const store = useStore()
        const tableData = computed(() => store.getters['existingsubstandardproposal/getExistSubsProposal'])
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
 
        const updatePaging = (paging) => {
            store.dispatch('existingsubstandardproposal/search', map(paging));
        }

        const search = () => {
            store.dispatch('existingsubstandardproposal/search', map());
        }

        const clear = () => {
            inputForm.value.tableNo = ' ';
            search()
        }

        const inputForm = ref({
            tableNo: ' ',
        })

        
        return {
            inputForm,
            tableData,
            clear,
            updatePaging,
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