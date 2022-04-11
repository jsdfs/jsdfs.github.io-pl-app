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
            <CodeStringsGLEntriesDataTable
                v-if="tableVisible"
                :tableData="tableData"
                :processTypeLs="processTypeLs"
                :tableNameLs="tableNameLs"
                :applicationCodeLs="applicationCodeLs"
                :accountCodeLs="accountCodeLs"
                @searchFunc="search"
            />
            <Pagination
            :pagingObj="tableData.params"
            @change-page="updatePaging"
            /> 
    </div>   
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import CodeStringsGLEntriesDataTable from '@/components/accounting/maintenance/CodeStringsGLEntriesDataTable';
import masterService from "../../../service/admin/masterDataService";
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    name: 'CodeStringsGLEntriesView',
    components: {
        CodeStringsGLEntriesDataTable, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()
        const processTypeLs = ref();
        const tableNameLs = ref();
        const applicationCodeLs = ref();
        const accountCodeLs = ref();
        const tableVisible = ref(false)
        const router = useRouter();
        const tableData = computed(() => store.getters['codestringglentries/getCodeStringObj']);
        const inputForm = ref({
            processType: '',  
            tableName: '',
            applicationCode: ''
        })

        const listitemLs = ref([
            { name: "processType", label: "Process Code", type: "dropdown", options: processTypeLs, optionLabel:"desc", optionValue:"code" },
            { name: "tableName", label: "Table Name Code", type: "dropdown", options: tableNameLs, optionLabel:"desc", optionValue:"code" },
            { name: "applicationCode", label: "Application Code", type: "dropdown", options: applicationCodeLs, optionLabel:"desc", optionValue:"code" }
        ]);

        onMounted(() => {
            masterService.getDetailCode("GLPROCESS")
            .then((res) => {
                processTypeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLTBLNAME")
            .then((res) => {
                tableNameLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() =>
            masterService.getDetailCode("APPLCODE")
            .then((res) => {
                applicationCodeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLBALCODEMAP")
            .then((res) => {
                accountCodeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }))
            ).then(() => {
                tableVisible.value = true
        
                search()
            })

            
        });

        const add = () => {
            router.push("/codestringadd");
        }

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    processType: inputForm.value.processType,  
                    tableName: inputForm.value.tableName,
                    applicationCode: inputForm.value.applicationCode,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    processType: inputForm.value.processType,  
                    tableName: inputForm.value.tableName,
                    applicationCode: inputForm.value.applicationCode,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const search = () => {
            store.dispatch("codestringglentries/search", map())
        };


        const updatePaging = (paging) => {

            store.dispatch('codestringglentries/search', map(paging));
        }

        const clear = () => {
            inputForm.value.processType = '';
            inputForm.value.tableName = '';
            inputForm.value.applicationCode = '';
            search();
        }


        return {
            inputForm,
            processTypeLs,
            applicationCodeLs,
            accountCodeLs,
            tableNameLs,
            tableVisible,
            updatePaging,
            search,
            clear,
            listitemLs,
            add,
            tableData,

        }
    },
}
</script>