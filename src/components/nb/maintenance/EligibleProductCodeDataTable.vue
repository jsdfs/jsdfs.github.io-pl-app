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
                    <EligibleProductCodeAddModal
                        :data="inputForm"
                        @reload-table-data="search"
                    />
                </div>
            </div> 
        </template>
        <template #empty>
            No record found.
        </template>



        <Column field="productCode" header="Product Code" :sortable="true" style="width:60%;">
            <template #editor="slotProps">
                <Dropdown v-model="slotProps.data.productCode" :options="prodCodeLs" optionLabel="desc" optionValue="code" style="width:100%;"/>
            </template>
        </Column>


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
import { useStore } from 'vuex'       
import masterDataService from '@/service/admin/masterDataService';
import EligibleProductCodeAddModal from '@/components/nb/maintenance/EligibleProductCodeAddModal';

export default {
    name: 'EligibleProductCodeDataTable',
    components: {
        EligibleProductCodeAddModal
    },
    props: {
        tableData: Object,
        inputForm: Object,
    },
    setup(props, { emit }) {
        const dataList = toRef(props, 'tableData');
        const searchForm = toRef(props, 'inputForm');
        const store = useStore()
        const eligibleProdCodeLs = ref({});
        const editingRows = ref([]);
        

        onBeforeUpdate(() => {

            masterDataService.getDetailByHeaderCode('JETELIGIBLEPRODTBL').then(res => {
                eligibleProdCodeLs.value = res.data;
            });
        })

        const prodCodeLs = ref([
            { desc: '01.02.45 - TUGU DANA MAKSIMA', code: '01.02.45' },
            { desc: '01.06.01 - TM POWER LINK REGULAR', code: '01.06.01' },
            { desc: '01.06.32 - TM POWERLINK SINGLE', code: '01.06.32' },
            { desc: '02.02.02 - MANDIRI GUNA II', code: '02.02.02' },
            { desc: '02.02.03 - MG III TUGU PRATAMA INDONESIA', code: '02.02.03' },
            { desc: '02.02.05 - MANDIRI GUNA I PERTAMINA (SINGLE)', code: '02.02.05' },
            { desc: '02.02.06 - MANDIRI GUNA I PERTAMINA (REGULAR)', code: '02.02.06' },
            { desc: '02.06.01 - MANDIRI ASURANSI PESANGON SEJAHTERA', code: '02.06.01' },
            { desc: '02.06.0201 - TM SEVERANCE PROGRAM (PTC)', code: '02.06.0201' },
            { desc: '02060201TS - TM SEVERANCE PROGRAM (PTC) TEST', code: '02060201TS' },
        ])

        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('eligibleproductcode/delete', record.seqId).then(() => {
                    emit('search') 
                    alert('Record deleted successfully')
                })
            }
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            let updateObj = {
                seqId:  dataList.value.list[index].seqId,
                tableNo: dataList.value.list[index].tableNo,
                productCode: newData.productCode
            }
                    
            store.dispatch('eligibleproductcode/save', updateObj)

            dataList.value.list[index] = updateObj;
        }
        
        const changed = () => {
            emit('search')
        }
        
        const clearFilter = () => {
            emit('clearFilter')
        }

        return {
            dataList,
            onRowEditSave,
            changed,
            editingRows,
            eligibleProdCodeLs,
            clearFilter,
            deleteData,
            prodCodeLs,
            searchForm
        }
    }
}
</script>