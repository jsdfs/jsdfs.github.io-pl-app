<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave"
            >
                <Column field="sourceTypeDesc" header="Source Type" :sortable="true" style="width:35%">
                    <template #editor="slotProps">
                        <Dropdown id="ddlSourceType" v-model="slotProps.data.sourceType" :options="typeList" optionLabel="desc" optionValue="code" class="editview"> </Dropdown>
                    </template>
                </Column>
                <Column field="proposalStatusCodeDesc" header="Proposal Status Code" :sortable="true" style="width:35%">
                    <template #editor="slotProps">
                        <Dropdown id="ddlProposalStatusText" v-model="slotProps.data.proposalStatusCode" :options="codeList" optionLabel="desc" optionValue="code" class="editview"> </Dropdown>
                    </template>
                </Column>
                <Column :rowEditor="true" headerStyle="width:7rem;" bodyStyle="text-align:center" header="Action" class="centerAlign"></Column>
                <Column>
                    <template #body="slotProps">
                        <div class="table-header flex justify-content-end">
                            <div><Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning p-button-text" style="margin-right: .5em" @click="deleteData(slotProps.data)" /></div>
                            <div><Button type="button" icon="pi pi-bars" class="p-button-rounded p-button-success p-button-text" @click="proposalStatusDetail(slotProps.data)" /></div>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </template>
    </div>

    <Dialog v-model:visible="proposalStatusDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '65vw'}" :modal="true" class="p-fluid">
        <template #header>
            <h5><b>Proposal Status Control Header</b></h5>
        </template>
        <div class="grid">
            <div class="col-12">
                <div class="formgrid grid">
                    <div class="field col">
                        <Dropdown id="sourceTypeText" v-model="proposalStatusHeaderObj.sourceType" :options="typeList" optionLabel="desc" optionValue="code" placeholder="Select one..." disabled />
                    </div>
                    <div class="field col">
                        <Dropdown id="proposalStatusText" v-model="proposalStatusHeaderObj.proposalStatusCode" :options="codeList" optionLabel="desc" optionValue="code" placeholder="Select one..." disabled />
                    </div>
                </div>
            </div>
        </div>
        <h5><b>Proposal Status Control Details</b></h5>
        <DataTable :value="proposalStatusHeaderObj.details" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingDetailRows"
                @row-edit-save="onRowEditSaveDetail"
        >
            <Column field="rows" header="Allowable Proposal Status Code" :sortable="true">
                <template #body="slotProps">
                       {{ findCodeDesc(slotProps.data.allowableProposalStatusCode)}}
                </template>
                <template #editor="slotProps">
                        <Dropdown id="proposalStatusText" v-model="slotProps.data.allowableProposalStatusCode" :options="codeList" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem;" bodyStyle="text-align:center;" header="Action" class="centerAlign" ></Column>
            <Column>
                <template #body="slotProps">
                    <div class="table-header">
                        <Button type="button" icon="pi pi-trash" class="p-button-warning" @click="deleteProposalStatusDetail(slotProps.data)" />
                    </div>
                </template>
            </Column>
        </DataTable>
        <template #footer>
            <Button type="button" icon="pi pi-plus" style="background-color:#000080" class="p-button-sm p-button-success" @click="addProposalStatusDetail" />
        </template>
    </Dialog>

    <Dialog v-model:visible="addProposalStatusDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '35vw'}" header="Add Allowable Proposal Status Code" :modal="true" class="p-fluid">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="code">Allowable Proposal Status Code *</label>
                            <Dropdown id="proposalStatusTextAddDetails" v-model="proposalStatusDetailObj.allowableProposalStatusCode" :options="codeList" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>                
        <template #footer>
            <Button type="button" icon="pi pi-plus" style="background-color:#000080" class="p-button-sm" @click="saveAddProposalStatusDetail" />
        </template>
    </Dialog>

</template>

<script>
import { toRef, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ProposalStatusDataTable',
    components: {
    },
    props: {
        tableHeader: Array,
        tableDataWithDesc: Object,
        proposalStatusFullref: Object,
        tableType: Object,
        tableCode: Object,
    },
    setup (props, {emit}) {

        const store = useStore();
        const editDetailModal = ref(false);
        const proposalStatusDetailModal = ref(false);
        const addProposalStatusDetailModal = ref(false);
        const proposalStatusHeaderObj = ref({});
        const proposalStatusDetailObj = ref({
            headerId: '',
            allowableProposalStatusCode: '',
        });
        const expandedRows = ref([]);
        const editingRows = ref([]);
        const editingDetailRows = ref([]);
        const proposalStatusDetailsDesc = ref([])

        const dataList = toRef(props, 'tableDataWithDesc');
        const typeList = toRef(props, 'tableType');
        const codeList = toRef(props, 'tableCode');


        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('proposalstatus/deleteProposalStatusHeader', record.seqId).then(() => {
                    emit('search') 
                    emit('updatePaging') 
                    alert('Record deleted successfully')
                })
            }
        }


        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('proposalstatus/updateProposalStatusHeader', newData).then(() => {
                newData.sourceTypeDesc = findTypeDesc(newData.sourceType)
                newData.proposalStatusCodeDesc = findCodeDesc(newData.proposalStatusCode)
                dataList.value[index] = newData;     
            })    
 
        }


        const onRowEditSaveDetail = (event) => {

            store.dispatch('proposalstatus/addUpdateProposalStatusDetail', event.newData).then(() => {
                store.dispatch('proposalstatus/getByIdWithDetails', proposalStatusHeaderObj.value.seqId).then(() => {
                    proposalStatusHeaderObj.value = store.getters['proposalstatus/getProposalStatusObj']; 
                })
            })    
 
        }

        const proposalStatusDetail = (data) => {
            console.log('data: ' + JSON.stringify(data, null, 4));
            console.log('data.id: ' + data.seqId);
            
            store.dispatch('proposalstatus/getByIdWithDetails', data.seqId).then(() => {
                proposalStatusHeaderObj.value = store.getters['proposalstatus/getProposalStatusObj']; 
                proposalStatusDetailModal.value = true;   
            })
        
        }



        const addProposalStatusDetail = () => {
            proposalStatusDetailObj.value.allowableProposalStatusCode = "";
            addProposalStatusDetailModal.value = true;

        }

        const saveAddProposalStatusDetail = () => {
            proposalStatusDetailObj.value.headerId = proposalStatusHeaderObj.value.seqId;
            console.log('add proposalStatusDetailObj Origin: ' + JSON.stringify(proposalStatusDetailObj.value, null, 4));
            store.dispatch('proposalstatus/addUpdateProposalStatusDetail', proposalStatusDetailObj.value).then(() => {
                store.dispatch('proposalstatus/getByIdWithDetails', proposalStatusHeaderObj.value.seqId).then(() => {
                    proposalStatusHeaderObj.value = store.getters['proposalstatus/getProposalStatusObj']; 
                    addProposalStatusDetailModal.value = false;  
                })
                console.log('proposalStatusHeaderObj.value: ' + JSON.stringify(proposalStatusHeaderObj.value, null, 4));
            })
            
        }

        const deleteProposalStatusDetail = (event) => {

            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('proposalstatus/deleteProposalStatusDetail', event).then(() => {
                    store.dispatch('proposalstatus/getByIdWithDetails', proposalStatusHeaderObj.value.seqId).then(() => {
                        proposalStatusHeaderObj.value = store.getters['proposalstatus/getProposalStatusObj']; 
                        alert('Record deleted successfully')
                    }) 
                })

            }
        }


        const findCodeDesc = (value) => {

            let desc = ""
            

            for(let k = 0; k < codeList.value.length; k++){
                if(codeList.value[k].code == value){
                    desc = codeList.value[k].desc
                }
            }

            return desc       

        }

        const findTypeDesc = (value) => {

            let desc = ""
            

            for(let k = 0; k < typeList.value.length; k++){
                if(typeList.value[k].code == value){
                    desc = typeList.value[k].desc
                }
            }

            return desc       

        }

        const search = () => {

            emit('search')

        }



        return {
            dataList,
            typeList,
            codeList,
            deleteData,
            expandedRows,
            editingRows,           
            onRowEditSave,
            proposalStatusDetail,
            proposalStatusDetailModal,
            proposalStatusHeaderObj,
            editDetailModal,
            addProposalStatusDetailModal,
            saveAddProposalStatusDetail,
            addProposalStatusDetail,
            deleteProposalStatusDetail,
            proposalStatusDetailObj,
            proposalStatusDetailsDesc,
            editingDetailRows,
            onRowEditSaveDetail,
            findCodeDesc,
            findTypeDesc,
            search,
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

