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
                <Button icon="pi pi-plus" style="background-color:#000080;" class="p-button-info mb-2 float-end" @click="add" v-tooltip.top="'Add'" />
        </div>
        <UwApprovalLimitDataTable v-if="tableVisible"
            :tableDataWithDesc="tableDataWithDesc"
            :uwLevelLs="uwLevelLs"
            :uwGroupLs="uwGroupLs"
            @add="add"
        />  
        <Pagination
            :pagingObj="tableData.params"
            @change-page="updatePaging"
        />  
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import UwApprovalLimitDataTable from '@/components/nb/maintenance/UwApprovalLimitDataTable'
import Pagination from '@/components/common/Pagination';
import masterService from "../../../service/admin/masterDataService";
//import uwGroupTableDataService from "../../../service/nb/uwGroupTableDataService";
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'UwApprovalLimitView',
    components: {
        UwApprovalLimitDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        const path = 2;
        

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        });

        const router = useRouter();
        const tableData = computed(() => store.getters['uwapprovallimit/getUwApprovalLimitObj'])
        const tableDataWithDesc = ref([])

        const tableVisible = ref(false)

        const divisionLs = ref([])
        const uwLevelLs = ref([])
        const uwGroupLs = ref([])

        // Data
        const addBtnName = ref('Add');
        const updateBtnName = ref('Update');
        const inputForm = reactive({
            effectiveDateFrom: '',
            effectiveDateTo: '',
        })

        const listitemLs = ref([
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
        ]);

        onMounted(() => {
            masterService.getDetailCode("DIVISION")
            .then((res) => {
                divisionLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("UNDRLVL")
            .then((res) => {
                uwLevelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })
            // .then(() =>

            // uwGroupTableDataService.getAllRecords()
            // .then((res) => {
            //     uwGroupLs.value = res.data;
            //     tableVisible.value = true
            // })
            // .catch(e => {
            //     console.error(e.response.status);
            // }))
            ).then(() => {
        
                tableVisible.value = true
        
               search()
        
            })
        });


        // Funciton


        const clear = () => {
            inputForm.effectiveDateFrom = ''
            inputForm.effectiveDateTo = ''

            search()
        }


        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const search = () => {


            if(inputForm.effectiveDateFrom != '' && inputForm.effectiveDateTo != '' && inputForm.effectiveDateFrom != null && inputForm.effectiveDateTo != null)
            {
                if(inputForm.effectiveDateFrom.getTime() > inputForm.effectiveDateTo.getTime()){
                    alert("Effective Date To must be >= Effective Date From")
                }else{
                    store.dispatch('uwapprovallimit/search', map()).then(() => {
                        tableDataWithDesc.value = tableData.value.list.map(concateDesc)   
                    })

                }
            }else{
                store.dispatch('uwapprovallimit/search', map()).then(() => {
                    tableDataWithDesc.value = tableData.value.list.map(concateDesc)
                })
            }
  

        }
    
        const updatePaging = (paging) => {
            store.dispatch('uwapprovallimit/search', map(paging)).then(() => {
                    tableDataWithDesc.value = tableData.value.list.map(concateDesc)
            })
        }

        const add = () => {
            router.push({ name: "uwapprovallimitadd"});
        };

        const concateDesc = (uwApprovalLimitRow) => {

            var divisionRecord = [{code: '', desc: ''}]
            var uwLevelRecord = [{code: '', desc: ''}] 
            var uwGroupRecord = [{seqId: '', uwGroup: ''}]    

            divisionRecord = divisionLs.value.filter(elem => { return elem.code === uwApprovalLimitRow.division })
            uwLevelRecord = uwLevelLs.value.filter(elem => { return elem.code === uwApprovalLimitRow.uwLevel })
            uwGroupRecord = uwGroupLs.value.filter(elem => { return elem.seqId === uwApprovalLimitRow.underWriterGroupTable })

            if(typeof divisionRecord[0].code === 'undefined')
            {
                divisionRecord[0] = {code: '', desc: ''}
            }

            if(typeof uwLevelRecord[0] === 'undefined')
            {
                uwLevelRecord[0] = {code: '', desc: ''}
            }

            if(typeof uwGroupRecord[0] === 'undefined')
            {
                uwGroupRecord[0] = {seqId: '', uwGroup: ''}
            }

            return {
                seqId: uwApprovalLimitRow.seqId,
                currency: uwApprovalLimitRow.currency,
                division: uwApprovalLimitRow.division,
                effectiveDateFrom: uwApprovalLimitRow.effectiveDateFrom,
                effectiveDateTo: uwApprovalLimitRow.effectiveDateTo,
                annualPremiumFrom: uwApprovalLimitRow.annualPremiumFrom,
                annualPremiumTo: uwApprovalLimitRow.annualPremiumTo,
                sarFrom: uwApprovalLimitRow.sarFrom,
                sarTo: uwApprovalLimitRow.sarTo,
                uwLevel: uwApprovalLimitRow.uwLevel,
                underWriterGroupTable: uwApprovalLimitRow.underWriterGroupTable,
                divisionDesc: divisionRecord[0].desc,
                uwLevelDesc: uwLevelRecord[0].desc,
                underWriterGroupTableDesc: uwGroupRecord[0].uwGroup
            }
        }

        return {
            addBtnName,
            updateBtnName,
            inputForm,
            router,
            tableData,
            uwLevelLs,
            uwGroupLs,
            tableVisible,
            map,
            clear,
            search,
            add,
            updatePaging,
            concateDesc,
            tableDataWithDesc,
            divisionLs,
            listitemLs
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>