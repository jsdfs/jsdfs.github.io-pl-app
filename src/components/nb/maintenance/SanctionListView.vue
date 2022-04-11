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
            <SanctionListDataTable
                :tableData="tableData"
            />
            <Pagination
            :pagingObj="tableData.params"
            @change-page="updatePaging"
            /> 
    </div>   
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import SanctionListDataTable from '@/components/nb/maintenance/SanctionListDataTable';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import Pagination from '@/components/common/Pagination';
import SearchSelection from '@/components/common/SearchSelection';

export default {
    name: 'SanctionList',
    components: {
        SanctionListDataTable, Pagination, SearchSelection
    },
    setup() {

        const router = useRouter();
        const store = useStore()

        const tableData = computed(() => store.getters['sanctionlist/getSanctionlistObj']);
        const path = 7;

        const listitemLs = ref([
            { name: "newIcNo", label: "New IC No", type: "input" },
            { name: "type", label: "Type", type: "input" },
            { name: "oldIcNo", label: "Old IC No", type: "input" },
            { name: "name", label: "Name", type: "input" },
            { name: "nationality", label: "Nationality", type: "input" },
            { name: "dob", label: "Date Of Birth", type: "date" },
            { name: "businessRegistrationNo", label: "Business Reg No", type: "input" },
            { name: "passport", label: "Passport", type: "input" },
        ]);
        

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
            search()
        })

        const search = () => {
            store.dispatch('sanctionlist/search', map());
        }

        const add = () => {
            router.push("/sanctionlistadd");
        }

        const clear = () => {
            inputForm.value.newIcNo = '';
            inputForm.value.type = '';
            inputForm.value.oldIcNo = '';
            inputForm.value.name = '';
            inputForm.value.nationality = '';
            inputForm.value.dob = '';
            inputForm.value.businessRegistrationNo = '';
            inputForm.value.passport = '';
            store.dispatch('sanctionlist/search', map());
        }

        const map = (paging) => {
            let searchObj = {};
        
            if ( paging != null ) {
                searchObj = {
                    newIcNo: inputForm.value.newIcNo,
                    type: inputForm.value.type,
                    oldIcNo: inputForm.value.oldIcNo,
                    name: inputForm.value.name,
                    nationality: inputForm.value.nationality,
                    dob: inputForm.value.dob,
                    businessRegistrationNo: inputForm.value.businessRegistrationNo,
                    passport: inputForm.value.passport,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    newIcNo: inputForm.value.newIcNo,
                    type: inputForm.value.type,
                    oldIcNo: inputForm.value.oldIcNo,
                    name: inputForm.value.name,
                    nationality: inputForm.value.nationality,
                    dob: inputForm.value.dob,
                    businessRegistrationNo: inputForm.value.businessRegistrationNo,
                    passport: inputForm.value.passport,
                    pager:{
                        page: 0,
                        size: 10
                    }
                }
            }
            return searchObj;
        }

        const updatePaging = (paging) => {

            store.dispatch('sanctionlist/search', map(paging));
        }

        const inputForm = ref({
            newIcNo: '',
            type: '',
            oldIcNo: '',
            name: '',
            nationality: '',
            dob: '',
            businessRegistrationNo: '',
            passport: '',
            paging: {
                page: 0,
                rows: 10
            }
        })


        return {
            inputForm,
            clear,
            add,
            search,
            map,
            updatePaging,
            tableData,
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