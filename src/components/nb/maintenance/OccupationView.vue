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
                    <OccupationAddModal
                        :btnName="addBtnName"
                        :oClassDropDownLs="oClassDropDownLs"
                        @addUpdateFunc="add"
                        @searchFunc="search"
                    />
            </div>
            <input type="hidden" class="form-control" :value="occupationClass" />
            <OccupationDataTable
                :tableData="tableData"
                :oClassDropDownLs="oClassDropDownLs"
                @searchFunc="search"
            />
            <Pagination
                :pagingObj="tableData.params"
                @change-page="updatePaging"
            /> 
        </div>
</template>

<script>
import { computed, ref, reactive,  onUnmounted, onMounted } from 'vue'
import { useStore } from 'vuex'
import OccupationDataTable from '@/components/nb/maintenance/OccupationDataTable'
import OccupationAddModal from '@/components/nb/maintenance/OccupationAddModal'
import Pagination from '@/components/common/Pagination';
import SearchSelection from "@/components/common/SearchSelection";

export default {
    name: 'Occupation',
    components: {
        OccupationDataTable, OccupationAddModal, Pagination, SearchSelection
    },
    setup() {
        const store = useStore()
        const getClassValue = []
        const oClassDropDownLs = ref();
        const occupationClass = computed(() => store.getters['master/getMastersObj'])
        // Data
        const addBtnName = ref('Add');
        const updateBtnName = ref('Update');
        const inputForm = reactive({
            occupationCode: '',
            occupationDesc: '',
            occupationClass: '',
            paging: {
                page: 0,
                rows: 10
            }
        })


        const tableData = computed(() => store.getters['occupation/getOccupationObj'])


        const listitemLs = ref([
            { name: "occupationClass", label: "Occupation Class", type: "dropdown", options: oClassDropDownLs, optionLabel:"desc", optionValue:"code" },
            { name: "occupationCode", label: "Occupation Code", type: "input" },
            { name: "occupationDesc", label: "Occupation Description", type: "input" }
        ]);

        const clear = () => {
            inputForm.occupationCode = ''
            inputForm.occupationDesc = ''
            inputForm.occupationClass = ' '

            store.dispatch('occupation/search', map())
        }

        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    occupationCode: inputForm.occupationCode,
                    occupationDesc: inputForm.occupationDesc,
                    occupationClass: inputForm.occupationClass,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    occupationCode: inputForm.occupationCode,
                    occupationDesc: inputForm.occupationDesc,
                    occupationClass: inputForm.occupationClass,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }

            return searchObj;
        }

        const search = () => {
            if((inputForm.occupationClass !== "" && inputForm.occupationClass !== " " ) || inputForm.occupationCode !== "" || inputForm.occupationDesc !== ""){
                if(inputForm.occupationClass === " "){
                    inputForm.occupationClass = ""
                }
                store.dispatch('occupation/search', map())
            }else{
                alert("Please enter at least 1 search criteria");
                return;
            }
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

        onUnmounted(() => {
            clear();
        })

        const path = 6;

        onMounted(() => {
            store.dispatch('master/getDetailCode', 'OCCUCLS').then(() => {
                mergeDesc();
            });

            store.dispatch('breadcrumb/set', path);
        });

        const add = (inputForm) => {
            store.dispatch('occupation/addOccupation', inputForm);
            inputForm.occupationCode = ''
            inputForm.occupationDesc = ''
            inputForm.occupationClass = ''
            alert("Record added successfully")
        };

        const updatePaging = (paging) => {

            store.dispatch('occupation/search', map(paging));
        }

        return {
            addBtnName,
            updateBtnName,
            inputForm,
            occupationClass,
            getClassValue,
            tableData,
            oClassDropDownLs,
            map,
            mergeDesc,
            clear,
            search,
            add,
            updatePaging,
            listitemLs
        }
    }
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>