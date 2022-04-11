<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">
                <Button icon="pi pi-chevron-left" class="p-button-outlined mr-2 mb-2" @click="cancel" v-tooltip.top="'Back'" />
                <OccupationClassDataTable
                    :tableData="tableData"
                    :inputForm="inputForm"
                    @search="search"
                    :oClassDropDownLs="oClassDropDownLs"
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
import { ref, computed, onBeforeUpdate, onMounted } from 'vue';
import { useStore } from 'vuex'       
import OccupationClassDataTable from '@/components/nb/maintenance/OccupationClassDataTable';
import { useRouter } from 'vue-router';
import Pagination from '@/components/common/Pagination';

export default {
    name: 'OccupationClass',
    components: {
        OccupationClassDataTable, Pagination
    },
    setup() {
        const store = useStore()
        const tableData = computed(() => store.getters['occupationclass/getOccClassObj'])
        const router = useRouter();
        const oClassDropDownLs = ref();
        const getClassValue = []
        store.dispatch('master/getDetailCode', 'OCCUCLS');
        const occupationClass = computed(() => store.getters['master/getMastersObj'])
        
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
                    occupationClassCode: inputForm.value.occupationClassCode,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    tableNo: inputForm.value.tableNo,
                    occupationClassCode: inputForm.value.occupationClassCode,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        } 
            
        const search = () => {
            store.dispatch('occupationclass/search', map());
        }

        const mergeDesc = () => {

            getClassValue.length = 0;
            const oClass = []

            // for sorting use
            for(let i = 0; i < Object.keys(occupationClass.value).length; i++){
                oClass.push(occupationClass.value[i].code + " - " + occupationClass.value[i].desc)
            }
            oClass.sort()

            // insert array
            for(let i = 0; i < oClass.length; i++){
                const getCode = oClass[i].slice(0, oClass[i].indexOf("-"));
                const getDesc = oClass[i].slice(oClass[i].indexOf("-") + 1);

                getClassValue.push({desc: getDesc.trim(), code: getCode.trim()})
            }
            oClassDropDownLs.value = getClassValue;
        }

        onBeforeUpdate(() => {
            mergeDesc();
        })
        
        const updatePaging = (paging) => {
            store.dispatch('occupationclass/search', map(paging));
        }

        const clear = () => {
            inputForm.value.tableNo = ' ';
            search()
        }

        const inputForm = ref({
            tableNo: ' ',
            occupationClassCode: ''
        })

        
        return {
            inputForm,
            oClassDropDownLs,
            tableData,
            getClassValue,
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