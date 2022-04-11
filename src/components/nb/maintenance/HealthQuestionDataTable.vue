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
                        :options="healthQuestionLs"
                        optionLabel="desc"
                        optionValue="code"
                        placeholder="Select Table No"
                        @change="changed()"
                    />
                    <Button type="button" icon="pi pi-filter-slash" class="p-button-rounded p-button-text" @click="clearFilter()"/>
                </span>
                <div>
                    <HealthQuestionAddModal
                        :data="inputForm"
                        @reload-table-data="search"
                    />
                </div>
            </div>     
        </template>
        <template #empty>
            No record found.
        </template>

        <Column field="tableNo" header="Table No"></Column>

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
import { toRef, ref, onBeforeUpdate } from 'vue';
import masterDataService from '@/service/admin/masterDataService';
import HealthQuestionAddModal from '@/components/nb/maintenance/HealthQuestionAddModal';

export default {
    name: 'HealthQuestionDataTable',
    components: {
        HealthQuestionAddModal
    },
    props: {
        tableData: Object,
        inputForm: Object,
    },
    setup(props,  { emit }) {
        const dataList = toRef(props, 'tableData');
        const healthQuestionLs = ref({});
        const searchForm = toRef(props, 'inputForm');

        onBeforeUpdate(() => {
            masterDataService.getDetailByHeaderCode('JETHEAQUESTBL').then(res => {
                healthQuestionLs.value = res.data;
            });
        })

        const clearFilter = () => {
            emit('clearFilter')
        }

        return {
            dataList,
            clearFilter,
            healthQuestionLs,
            searchForm
        }
    }
}
</script>