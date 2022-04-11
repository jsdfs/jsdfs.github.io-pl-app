<template>    
    <Toast />
    <h5>Beneficiary Details</h5><Button label="Add" style="width:7rem" class="p-button-info mr-2 mb-2" @click="openModal" /><br/><br/>
    <template v-if="dataList == null">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
            v-model:expandedRows="expandedRows"
            editMode="row"
            v-model:editingRows="editingRows"
            @row-edit-save="onRowEditSave"
        >
            <!-- <Column :expander="true" headerStyle="width: 3rem" /> -->
            <Column field="code" header="Name">
                <template #editor="slotProps">
                    <template v-if="slotProps.data.predefined === false">
                        <InputText v-model="slotProps.data.code" autofocus />
                    </template>
                </template>
            </Column>
            <Column field="desc" header="Gender">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.desc" />
                </template>
            </Column>
            <Column field="desc" header="DOB">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.desc" />
                </template>
            </Column>
            <Column field="desc" header="Relation To Insured">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.desc" />
                </template>
            </Column>
            <Column field="desc" header="Percentage (%)">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.desc" />
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action"></Column>
            <Column>
                <template #body="slotProps">
                    <div class="table-header">
                        <Button type="button" icon="pi pi-bars" class="p-button-rounded p-button-success" style="margin-right: .5em" @click="masterDetail(slotProps.data)" />
                        <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning" />
                    </div>
                </template>
            </Column>
            <!-- <template #expansion="slotProps">
                <div class="orders-subtable">
                    <DataTable :value="slotProps.data.details" responsiveLayout="scroll">
                        <Column field="code" header="Child Master Code" sortable></Column>
                        <Column field="desc" header="Child Master Description" sortable></Column>
                    </DataTable>
                </div>
            </template> -->
        </DataTable>            
    </template>

    <Dialog v-model:visible="masterDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '65vw'}" :modal="true" class="p-fluid">
        <template #header>
            <h5><b>Master Header</b></h5>
        </template>
        <div class="grid">
            <div class="col-12">
                <div class="formgrid grid">
                    <div class="field col">
                        <!-- <label for="code">Master Code</label> -->
                        <InputText id="code" type="text" v-model="masterHeaderObj.code" disabled/>
                    </div>
                    <div class="field col">
                        <!-- <label for="desc">Master Description</label> -->
                        <InputText id="desc" type="text" v-model="masterHeaderObj.desc" disabled/>
                    </div>
                </div>
            </div>
        </div>
        <h5><b>Master Detail</b></h5>
        <DataTable :value="masterHeaderObj?.details" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
            
        >
            <Column field="code" header="Code">
                <template #editor="slotProps">
                    <template v-if="slotProps.data.predefined === false">
                        <InputText v-model="slotProps.data.code" autofocus />
                    </template>
                </template>
            </Column>
            <Column field="desc" header="Description">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.desc" autofocus />
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action"></Column>
            <Column>
                <template #body="slotProps">
                    <div class="table-header">
                        <Button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-success" style="margin-right: .5em" @click="editMasterDetail(slotProps.data)" />
                        <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteData(slotProps.data)" />
                    </div>
                </template>
            </Column>
        </DataTable>
        <template #footer>
            <Button type="button" icon="pi pi-plus" class="p-button-sm p-button-success" @click="addMasterDetail" />
        </template>
    </Dialog>

    <Dialog v-model:visible="editDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '65vw'}" header="Edit Master Details" :modal="true" class="p-fluid">
        <div class="grid">
            <div class="col-12">
                <div class="formgrid grid">
                    <div class="field col">
                        <label for="code">MasterDetail Code</label>
                        <InputText id="code" type="text" v-model="masterDetailObj.code" />
                    </div>
                    <div class="field col">
                        <label for="desc">MasterDetail Description</label>
                        <InputText id="desc" type="text" v-model="masterDetailObj.desc" />
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button type="button" label="Save" class="p-button-sm p-button-info" @click="saveEditMasterDetail" />
        </template>
    </Dialog>

    <Dialog v-model:visible="addMasterDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '65vw'}" header="Add Master Details" :modal="true" class="p-fluid">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="code">MasterDetail Code</label>
                            <InputText id="code" type="text" v-model="inputForm.code"/>
                        </div>
                        <div class="field col">
                            <label for="desc">MasterDetail Description</label>
                            <InputText id="desc" type="text" v-model="inputForm.desc"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
        <template #footer>
            <Button type="button" label="Add" class="p-button-sm p-button-info" @click="saveAddMasterDetail" />
        </template>
    </Dialog>

</template>

<script>
import { ref, toRef } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast';

export default {
    name: 'OtherInsuredDetailsDataTable',
    components: {
    },
    props: {
        tableData: Object,
    },
    setup (props) {
        const store = useStore();
        const toast = useToast();
        const dataList = toRef(props, 'tableData');
        const expandedRows = ref([]);
        const editingRows = ref([]);
        const editingRows2 = ref([]);
        const masterHeaderObj = ref({});
        const masterDetailObj = ref({});
        const masterDetailModal = ref(false);
        const editDetailModal = ref(false);
        const addMasterDetailModal = ref(false);
        const inputForm = ref({
            code: '',
            desc: ''
        });

        const onRowExpand = (event) => {
            toast.add({severity: 'info', summary: 'Data Expanded', detail: event.code, life: 2000})
        }

        const onRowCollapse = (event) => {
            toast.add({severity: 'success', summary: 'Data Collapsed', detail: event.code, life: 2000})
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            console.log('dataList Origin: ' + JSON.stringify(dataList.value));
            console.log('index: ' + index);
            console.log('newData: ' + JSON.stringify(newData));
            console.log('newData: ' + JSON.stringify(newData.id));
            console.log('dataList.value.list: ' + JSON.stringify(dataList.value.list));
            console.log('dataList.value.list[index]: ' + JSON.stringify(dataList.value.list[0]));

            store.dispatch('master/updateMaster', newData);
            dataList.value.list[index] = newData;
        }

        const masterDetail = (data) => {
            console.log('data: ' + JSON.stringify(data, null, 4));
            console.log('data.id: ' + data.id);
            console.log('data.code: ' + data.code);

            masterHeaderObj.value = data;
            masterDetailModal.value = true;
        }

        const editMasterDetail = (data) => {
            console.log('data: ' + JSON.stringify(data, null, 4));
            masterDetailObj.value = data;
            editDetailModal.value = true;
        }

        const addMasterDetail = () => {
            addMasterDetailModal.value = true;
            inputForm.value.code = '';
            inputForm.value.desc = '';
        }

        const saveEditMasterDetail = () => {
            console.log('masterDetailObj Origin: ' + JSON.stringify(masterDetailObj.value, null, 4));
            store.dispatch('master/updateMaster', masterDetailObj.value);
        }

        const saveAddMasterDetail = () => {
            // store.dispatch('master/addMasterDetail', masterDetailObj.value);
            addMasterDetailModal.value = false;
        }

        const saveDeleteMasterDetail = () => {
            // store.dispatch('master/deleteMasterDetail', masterDetailObj.value);
        }

        const onEditMasterDetail = (event) => {
            let { newData, index } = event;

            console.log('dataList Origin: ' + JSON.stringify(dataList.value));
            console.log('index: ' + index);
            console.log('newData: ' + JSON.stringify(newData));

            // store.dispatch('master/updateMasterDetail', masterDetailObj.value);
        }

        return {
            dataList,
            expandedRows,
            editingRows,
            editingRows2,
            onRowExpand,
            onRowCollapse,
            onRowEditSave,
            masterHeaderObj,
            masterDetailObj,
            masterDetailModal,
            editDetailModal,
            addMasterDetailModal,            
            masterDetail,
            editMasterDetail,
            saveEditMasterDetail,
            addMasterDetail,
            saveAddMasterDetail,
            saveDeleteMasterDetail,
            onEditMasterDetail,
            inputForm,
        }
    },
}
</script>

<style lang="scss" scoped>
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style> 
