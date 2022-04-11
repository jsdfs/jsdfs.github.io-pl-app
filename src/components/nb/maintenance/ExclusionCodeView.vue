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
        <ExclusionCodeDataTable
            :tableDataWithDesc="tableDataWithDesc"
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
import { computed, ref, reactive, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import ExclusionCodeDataTable from '@/components/nb/maintenance/ExclusionCodeDataTable'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'ExclusionCodeView',
    components: {
        ExclusionCodeDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()

        // Data
        const inputForm = reactive({
            division: '',
            exclusionCode: '',
            effectiveDateFrom: '',
            effectiveDateTo: '',
            descriptionEnglish: '',
            descriptionBm: '',
            paging: {
                page: 0,
                rows: 10
            }
        })

        const tableData = computed(() => store.getters['exclusion/getExclusionCodeObj'])

        const tableDataWithDesc = ref([])

        store.dispatch('master/getDetailCode', 'DIVISION')
        const tableDivision = computed(() => store.getters['master/getMastersObj'])

        const divisionDetails = []

        const divisionDropdownLs = ref(null)

        const listitemLs = ref([
            { name: "division", label: "Division", type: "dropdown", options: tableDivision, optionLabel:"desc", optionValue:"code" },
            { name: "exclusionCode", label: "Exclusion Code", type: "input" },
            { name: "effectiveDateFrom", label: "Effective Date From", type: "date" },
            { name: "effectiveDateTo", label: "Effective Date To", type: "date" },
        ]);

        // Funciton

        const clear = () => {
            inputForm.division = ''
            inputForm.exclusionCode = ''
            inputForm.effectiveDateFrom = ''
            inputForm.effectiveDateTo = ''

            search()
        }

        const search = () => {
            store.dispatch('exclusion/search', map()).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const router = useRouter();

        const add = () => {
            router.push({ name: "exclusioncodeadd", params: {data: divisionDropdownLs}});
        };

        onBeforeMount(() => {

                search()

        })

        const path = 4;
        

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        });

        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    division: inputForm.division,
                    exclusionCode: inputForm.exclusionCode,
                    effectiveDateFrom: inputForm.effectiveDateFrom,
                    effectiveDateTo: inputForm.effectiveDateTo,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    division: inputForm.division,
                    exclusionCode: inputForm.exclusionCode,
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

        const updatePaging = (paging) => {

            store.dispatch('exclusion/search', map(paging)).then(() => {
                tableDataWithDesc.value = tableData.value.list.map(concateDesc)     
            })
        }

        const concateDesc = (exclusionCodeRow) => {
            var divisionRecord = [{code: '', desc: ''}]


            divisionRecord = tableDivision.value.filter(elem => { return elem.code === exclusionCodeRow.division })

            if(typeof divisionRecord[0].code === 'undefined')
            {
                divisionRecord[0] = {code: '', desc: ''}
            }

            return {
                seqId: exclusionCodeRow.seqId,
                division: exclusionCodeRow.division,
                exclusionCode: exclusionCodeRow.exclusionCode,
                effectiveDateFrom: exclusionCodeRow.effectiveDateFrom,
                effectiveDateTo: exclusionCodeRow.effectiveDateTo,
                descriptionEnglish: exclusionCodeRow.descriptionEnglish,
                descriptionBm: exclusionCodeRow.descriptionBm,
                divisionDesc: divisionRecord[0].desc
            }
        }


        return {
            inputForm,
            tableData,
            tableDivision,
            divisionDetails,
            divisionDropdownLs,
            clear,
            search,
            add,
            updatePaging,
            map,
            tableDataWithDesc,
            concateDesc,
            listitemLs,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}

</style>