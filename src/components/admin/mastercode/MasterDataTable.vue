<template>    
    <Toast />
    <template v-if="dataList != null">
        <div class="card">
            <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                v-model:expandedRows="expandedRows"
                editMode="row"
                v-model:editingRows="editMasterHeaderRows"
                @row-edit-save="editMasterHeader"
            >
                <!-- <Column :expander="true" headerStyle="width: 3rem" /> -->
                <Column field="code" header="Master Code" style="width:25%" :sortable="true">
                    <template #editor="slotProps">
                        <template v-if="slotProps.data.predefined === false">
                            <InputText style="width:100%" v-model="slotProps.data.code" autofocus @input="slotProps.data.code = $event.target.value.toUpperCase()"/>
                        </template>
                    </template>
                </Column>
                <Column field="desc" header="Master Description" style="width:35%" :sortable="true">
                    <template #editor="slotProps">
                        <InputText style="width:100%" v-model="slotProps.data.desc" @input="slotProps.data.desc = $event.target.value.toUpperCase()"/>
                    </template>
                </Column>
                <Column field="predefined" header="System Predefined" style="width:20%" :sortable="true"></Column>
                <Column style="width:10%" :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" class="centerAlign"></Column>
                <Column style="width:10%">
                    <template #body="slotProps">
                        <div class="table-header">
                            <Button type="button" icon="pi pi-bars" class="p-button-rounded p-button-success p-button-text" style="margin-right: .5em" @click="masterDetail(slotProps.data)" />
                            <!-- <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning" /> -->
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
        </div>            
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
            editMode="row"
            v-model:editingRows="editMasterDetailRows"
            @row-edit-save="editMasterDetail"
        >
            <Column field="code" header="Code" style="width:40%">
                <template #editor="slotProps">
                    <InputText style="width:100%" v-model="slotProps.data.code" autofocus @input="slotProps.data.code = $event.target.value.toUpperCase()"/>
                </template>
            </Column>
            <Column field="desc" header="Description" style="width:40%">
                <template #editor="slotProps">
                    <InputText style="width:100%" v-model="slotProps.data.desc" autofocus @input="slotProps.data.desc = $event.target.value.toUpperCase()"/>
                </template>
            </Column>
            <Column style="width:10%" :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" class="centerAlign"></Column>
            <Column style="width:10%">
                <template #body="slotProps">
                    <div class="table-header">
                        <!-- <Button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-success" style="margin-right: .5em" @click="editMasterDetail(slotProps.data)" /> -->
                        <Button type="button" icon="pi pi-trash" class="p-button-warning" @click="deleteMasterDetail(slotProps)" />
                    </div>
                </template>
            </Column>
        </DataTable>
        <template #footer>
            <Button type="button" icon="pi pi-plus" style="background-color:#000080;" class="p-button-sm mt-2 mr-2" @click="detail" />
        </template>
    </Dialog>

    <Dialog v-model:visible="addMasterDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '65vw'}" header="Add Master Details" :modal="true" class="p-fluid">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="code">Code</label>
                            <InputText id="code" type="text" v-model="inputForm.code" @input="convertCase"/>
                        </div>
                        <div class="field col">
                            <label for="desc">Description</label>
                            <InputText id="desc" type="text" v-model="inputForm.desc" @input="convertCase"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
        <template #footer>
            <Button type="button" icon="pi pi-plus" style="background-color:#000080;" class="p-button-sm mt-2 mr-2" @click="addMasterDetail" />
        </template>
    </Dialog>
    
</template>

<script>
import { ref, toRef, computed } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast';
// import { useGlobalUtility } from '@/utility/globalutility';

export default {
    name: 'MasterDataTable',
    components: {
    },
    props: {
        tableData: Object,
    },
    setup (props) {
        const store = useStore();
        const toast = useToast();
        // const { upperCase } = useGlobalUtility();
        const dataList = toRef(props, 'tableData');
        const expandedRows = ref([]);
        const editMasterHeaderRows = ref([]);
        const editMasterDetailRows = ref([]);
        const masterHeaderObj = computed(() => store.getters['master/getMasterHeaderObj']);
        const masterDetailObj = ref({});
        const masterDetailModal = ref(false);
        const editDetailModal = ref(false);
        const addMasterDetailModal = ref(false);
        const inputForm = ref({
            code: '',
            desc: ''
        });

        const convertCase = (event) => {
            console.log('event: ' + JSON.stringify(event.target.value));

            inputForm.value.code = inputForm.value.code.toUpperCase();
            inputForm.value.desc = inputForm.value.desc.toUpperCase();
        }

        const onRowExpand = (event) => {
            toast.add({severity: 'info', summary: 'Data Expanded', detail: event.code, life: 2000})
        }

        const onRowCollapse = (event) => {
            toast.add({severity: 'success', summary: 'Data Collapsed', detail: event.code, life: 2000})
        }

        const masterDetail = (data) => {

            store.dispatch('master/getMasterDetByHeaderId', { headerId: data.seqId, isDetail: true });
            masterDetailModal.value = true;
        }

        const editMasterHeader = (event) => {
            let { newData, index } = event;

            store.dispatch('master/updateMasterHeader', newData);
            dataList.value.list[index] = newData;
        }

        const editMasterDetail = (event) => {
            let { newData, index } = event;

            store.dispatch('master/updateMasterDetail', newData);
            masterHeaderObj.value.details[index] = newData;
        }

        const deleteMasterDetail = (slotProps) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('master/deleteMasterDetail', slotProps.data);
                arrayRemove(masterHeaderObj.value.details, slotProps.index, 1);
            }
        }

        const detail = () => {
            addMasterDetailModal.value = true;
            inputForm.value.code = '';
            inputForm.value.desc = '';
        }

        const addMasterDetail = () => {
            
            const mastersObj = {
                code: inputForm.value.code,
                desc: inputForm.value.desc,
                headerId: masterHeaderObj.value.seqId,
                operatorId: 'SYSTEM'
            };

            store.dispatch('master/addMasterDetail', mastersObj);
            masterHeaderObj.value.details.push();
            addMasterDetailModal.value = false;
        }

        return {
            dataList,
            expandedRows,
            editMasterHeaderRows,
            editMasterDetailRows,
            onRowExpand,
            onRowCollapse,
            editMasterHeader,
            masterHeaderObj,
            masterDetailObj,
            masterDetailModal,
            editDetailModal,
            addMasterDetailModal,            
            masterDetail,
            editMasterDetail,
            detail,
            addMasterDetail,
            deleteMasterDetail,
            inputForm,
            convertCase,
        }
    },
}

const arrayRemove = (arr, index, value) => { 
    arr.splice(index, value);
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

<style>

.p-datatable-table {
    font-size: 0.8rem;
}

.p-inputtext {
    font-size: 0.8rem;
}

</style>
