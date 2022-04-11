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
                    <StandardTATAddModal
                        :distributionChannelLs="distributionChannelLs"
                        :tatStageLs="tatStageLs"
                        @reload-table-data="search"
                    />
            </div>  
            <StandardTATDataTable
                :tableDataWithDesc="tableDataWithDesc"
                :distributionChannelLs="distributionChannelLs"
                :tatStageLs="tatStageLs"
                @search="search"
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
import StandardTATDataTable from '@/components/nb/maintenance/StandardTATDataTable'
import StandardTATAddModal from '@/components/nb/maintenance/StandardTATAddModal'
import masterService from "../../../service/admin/masterDataService";
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'StandardTATView',
    components: {
      StandardTATDataTable, Pagination, SearchSelection, StandardTATAddModal
    },
    setup() {
        const store = useStore()

        const router = useRouter();

        // Data
        const inputForm = reactive({
            distributionChannel: '',
            tatStage: '',
            standardTatDays: '',
        })

        const path = 3;
        

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        });


        const tableData = computed(() => store.getters['standardtat/getStandardTatObj'])

        const tableDataWithDesc = ref([])

        const distributionChannelLs = ref([])

        const tatStageLs = ref([])

        const tableVisible = ref(false)

        const listitemLs = ref([
            { name: "distributionChannel", label: "Distribution Channel", type: "dropdown", options: distributionChannelLs, optionLabel:"desc", optionValue:"code" },
            { name: "tatStage", label: "TAT Stage", type: "dropdown", options: tatStageLs, optionLabel:"desc", optionValue:"code" },
            { name: "standardTatDays", label: "Standard TAT (days)", type: "input" },
        ]);

        onMounted(() => {

            masterService.getDetailCode("DISTCHAN")
            .then((res) => {
                //console.log("All type detail: " + JSON.stringify(res.data, null, 4));
                distributionChannelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>

            masterService.getDetailCode("TATSTAGE")
            .then((res) => {
                tatStageLs.value = res.data;
                tableVisible.value = true
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>

               search()        
            
            )

        })


        // Funciton


        const clear = () => {
            inputForm.distributionChannel = ''
            inputForm.tatStage = ''
            inputForm.standardTatDays = ''
            search()
        }


        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    distributionChannel: inputForm.distributionChannel,
                    tatStatus: inputForm.tatStage,
                    standardTatDays: inputForm.standardTatDays,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    distributionChannel: inputForm.distributionChannel,
                    tatStatus: inputForm.tatStage,
                    standardTatDays: parseInt(inputForm.standardTatDays),
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const search = () => {
            store.dispatch('standardtat/search', map()).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)
            })

        }
    
        const updatePaging = (paging) => {

            store.dispatch('standardtat/search', map(paging)).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)
            })
        }

        const concateDesc = (standardTatRecord) => {
            var distributionChannelRecord = [{code: '', desc: ''}]
            var tatStageRecord = [{code: '', desc: ''}]


            distributionChannelRecord = distributionChannelLs.value.filter(elem => { return elem.code === standardTatRecord.distributionChannel })
            tatStageRecord = tatStageLs.value.filter(elem => { return elem.code === standardTatRecord.tatStatus })

            if(typeof distributionChannelRecord[0].code === 'undefined')
            {
                distributionChannelRecord[0] = {code: '', desc: ''}
            }

            if(typeof tatStageRecord[0] === 'undefined')
            {
                tatStageRecord[0] = {code: '', desc: ''}
            }

            return {
                seqId: standardTatRecord.seqId,
                distributionChannel: standardTatRecord.distributionChannel,
                tatStatus: standardTatRecord.tatStatus,
                standardTatDays: standardTatRecord.standardTatDays,
                distributionChannelDesc: distributionChannelRecord[0].desc,
                tatStatusDesc: tatStageRecord[0].desc
            }
        }

 
        return {
            inputForm,
            router,
            distributionChannelLs,
            tatStageLs,
            tableData,
            map,
            clear,
            search,
            updatePaging,
            tableDataWithDesc,
            concateDesc,
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