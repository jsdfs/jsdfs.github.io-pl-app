<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">

                <!-- <div class="p-fluid formgrid grid" style="margin-bottom:5%;">   
                    <div class="field col-12 md:col-6">
                        <MasterOptions 
                            :label="'Table No'"
                            :masterCode="'JETNATIONALITYTBL'" v-model="inputForm.tableNo"
                        />
                    </div>

                    <div class="col-12">
                        <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 mb-2" @click="search"/>
                        <Button icon="pi pi-plus" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="add" />
                        <Button icon="pi pi-times-circle" class="p-button-danger mr-2 mb-2" @click="clear"/>
                    </div>                                                                                                         
                </div> -->
                    <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" />
                    <NationalityDataTable
                        v-if="visible"
                        :tableData="tableData"
                        :inputForm="inputForm"
                        :nationalityLs="nationalityLs"
                        @search="search"
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
import { ref, computed, onMounted  } from 'vue';
import { useStore } from 'vuex'       
import NationalityDataTable from '@/components/nb/maintenance/NationalityDataTable';
import { useRouter } from 'vue-router';
import Pagination from '@/components/common/Pagination';

export default {
    name: 'NationalityView',
    components: {
        NationalityDataTable, Pagination
    },
    setup() {
        const store = useStore()
        const tableData = computed(() => store.getters['nationality/getNationalObj'])
        const router = useRouter();

        const visible = ref(false);

        store.dispatch('master/getDetailCode', 'JETNATIONALITYTBL');
        const nationalityLs = computed(() => store.getters['master/getMastersObj'])

        const cancel = () => {
            router.push({ name: "jetcasedet"});
        };


        onMounted(() => {
  
            search()
        })

        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    nationalCode: inputForm.value.nationalCode,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    nationalCode: inputForm.value.nationalCode,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        } 
            
        const search = () => {
            store.dispatch('nationality/search', map()).then (() => {
                visible.value = true
            })
        }

        const clear = () => {
            inputForm.value.tableNo = ' ';
            search()
        }

        const updatePaging = (paging) => {
            store.dispatch('nationality/search', map(paging));
        }

        const inputForm = ref({
            tableNo: ' ',
            nationalCode: ''
        })

        
        return {
            inputForm,
            tableData,
            nationalityLs,
            updatePaging,
            cancel,
            clear,
            search,
            map,
            visible,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>