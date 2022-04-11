<template>

  <Dialog
    header=" "
    v-model:visible="dropDownValue"
    :style="{ width: '50vw'}"
    :modal="true"
    @update:visible="closeModal"
    id="dialog"
    

  >
    <!-- <div class="card">
        <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" /> -->
    <div class="dialogHeight">
        <UwGroupDataTable
            :tableData="tableData"
            :inputForm="inputForm"
            @search="search"
            @clearFilter="clear"
        /> 
        <Pagination
            :pagingObj="tableData.params"
            @change-page="updatePaging"
        />
    </div> 
    
    <!-- </div> -->

    </Dialog>
</template>

<script>
import { reactive, onMounted, ref, toRef, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import UwGroupDataTable from '@/components/nb/maintenance/UwGroupDataTable'
import Pagination from '@/components/common/Pagination';

export default {
    name: 'ProposalStatusView',
    components: {
        UwGroupDataTable, Pagination
    },
    props: {
        modelValue: String
    },
    setup(props, {emit}) {
        const store = useStore()

        const displayDialog = toRef(props, 'displayModal')

        const router = useRouter();

        const dropDownValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });

        const closeModal = () => {
            inputForm.uwGroup = ''
            dropDownValue.value = false;
            search()

        };

        // Data
        const inputForm = reactive({
            uwGroup: '',
        })
        
        const tableData = ref([])
        const tableDataWithDesc = ref([])



        // Funciton
        const clear = () => {
            inputForm.uwGroup = ''
            search()
        }


        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    uwGroup: inputForm.uwGroup,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    uwGroup: inputForm.uwGroup,
                    pager:{
                        page: 0,
                        size: 5
                    }
                }
            }

            return searchObj;
        }

        const search = () => {
            store.dispatch('uwgrouptable/search', map()).then(() => {
                tableData.value = store.getters['uwgrouptable/getUwGroupTableObj']
            })
        }
    
        const updatePaging = (paging) => {

            store.dispatch('uwgrouptable/search', map(paging)).then(() => {
                tableData.value = store.getters['uwgrouptable/getUwGroupTableObj']
            })
        }

        const add = (inputForm) => {
            console.log('inputForm.value.desc: ' + inputForm);
            store.dispatch('exclusionCode/addExclusionCode', inputForm);
        };

        const cancel = () => {
            router.push({ name: "uwapprovallimitdet"});
        };

        onMounted(() => {

            search()

        })


        return {
            inputForm,
            tableData,
            map,
            clear,
            search,
            add,
            updatePaging,
            cancel,
            tableDataWithDesc,
            displayDialog,
            closeModal,
            dropDownValue
        }
    },
}
</script>


<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>


<style>
/* 
.p-dialog{
    max-height: 50%;
    min-height: 50%;
    height:50%;
} */

</style>


<style>

.dialogHeight{
    min-height: 28vw;
    max-height: 28vw;
    min-width: 350px;
}

</style>
