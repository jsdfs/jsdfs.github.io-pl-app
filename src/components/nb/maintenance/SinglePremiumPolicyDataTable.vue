<template>

        <div class="card">
    <DataTable 
    :value="dataList?.list" 
    dataKey="seqId" 
    responsiveLayout="scroll"
    editMode="row" 
    filterDisplay="menu"
    :globalFilterFields="['tableNo']"
    v-model:editingRows="editingRows"
    v-model:filters="filters1"
    @row-edit-save="onRowEditSave"
    >
        <template #header>
            <div class="flex justify-content-between">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <Dropdown
                        style="width: 16rem;"
                        v-model="searchForm.tableNo"
                        :options="occClassLs"
                        optionLabel="desc"
                        optionValue="code"
                        placeholder="Select Table No"
                        @change="changed()"
                    />
                    <Button type="button" icon="pi pi-filter-slash" class="p-button-rounded p-button-text" @click="clearFilter()"/>
                </span>
                <div>
                <SinglePremiumPolicyAddModal
                    :data="inputForm"
                    @reload-table-data="search"
                />
                </div>
            </div>
            
        </template>
        <template #empty>
            No record found.
        </template>

        <Column field="totalSinglePrem" header="Total Single Premium"></Column>
        <Column field="productCode" header="Product Code"></Column>

        <Column :rowEditor="true" headerStyle="width:10rem" bodyStyle="text-align:center" header="Action">
        </Column>
        <Column >
            <template #body="slotProps">
                <div class="table-header">
                    <div><Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning" style="margin-right: .5em" @click="deleteData(slotProps.data)" /></div>
                </div>
            </template>
        </Column>
    </DataTable>

    </div>
</template>

<script>
import { toRef, onBeforeUpdate, ref } from 'vue';
import masterDataService from '@/service/admin/masterDataService';
import SinglePremiumPolicyAddModal from '@/components/nb/maintenance/SinglePremiumPolicyAddModal';

export default {
    name: 'SinglePremiumPolicyDataTable',
    components: {
        SinglePremiumPolicyAddModal
    },
    props: {
        tableData: Object,
        inputForm: Object,
    },
    setup(props, { emit }) {
        const dataList = toRef(props, 'tableData');
        const singlePremiumLs = ref({});
        const searchForm = toRef(props, 'inputForm');
        
        onBeforeUpdate(() => {

            masterDataService.getDetailByHeaderCode('JETSGLPREMPOLTBL').then(res => {
                singlePremiumLs.value = res.data;
            });
        })

        const clearFilter = () => {
            emit('clearFilter')
        }


        return {
            singlePremiumLs,
            searchForm,
            clearFilter,
            dataList,
        }
    }

}
</script>