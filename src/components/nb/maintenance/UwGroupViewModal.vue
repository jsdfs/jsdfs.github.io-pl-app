<template>

  <Dialog
    header=" "
    v-model:visible="displayUwGroup"
    :style="{ width: '50vw'}"
    :modal="true"
    @update:visible="closeModal"
    id="dialog"
    

  >
        <div class="dialogHeight">
                    <template v-if="tableData != null">
                        <DataTable :value="tableData.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                            editMode="row"
                            filterDisplay="menu"
                            :globalFilterFields="['uwGroup']"
                            v-model:editingRows="editingRows"
                            v-model:filters="filters1"
                            @row-edit-save="onRowEditSave"
                        >
                            <template #header>
                                <div class="flex justify-content-between">
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="inputForm.uwGroup" placeholder="Keyword Search" @input="search()" />
                                        <Button type="button" icon="pi pi-filter-slash" class="p-button-rounded p-button-text" @click="clear()"/>
                                    </span>
                                    <div>
                                    <!-- <UwGroupAddModal
                                        @reload-table-data="search"
                                    /> -->
                                    </div>
                                </div>
                            </template>
                            <template #empty>
                                No record found.
                            </template>
                            <Column field="uwGroup" header="Underwriter Group Table" :sortable="true" style="width:70%;">
                                <template #editor="slotProps">
                                    <InputText v-model="slotProps.data.uwGroup" style="width:100%;" />
                                </template>
                            </Column>

                            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" style="width:15%;" class="centerAlign"></Column>
                            <Column style="width:15%;">
                                <template #body="slotProps">
                                    <div class="table-header" style="display: flex;">
                                        <div><Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-text p-button-warning" style="margin-right: .5em" @click="deleteData(slotProps.data)" /></div>
                                        <div><Button type="button" icon="pi pi-bars" class="p-button-rounded p-button-text p-button-success" @click="uwGroupDetail(slotProps.data)" /></div>
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </template>
                    <div class="grid mt-2">
                        <div class="col-12">
                            <div class="formgrid grid">
                                <div class="field col-6 d-flex" style="text-align:left">
                                    <InputText id="uwGroup" type="text" v-model="uwGroupInputForm.uwGroup"/>
                                    <Button type="button" icon="pi pi-plus" style="background-color:#000080" class="p-button-sm p-button-success ml-2 mr-2" @click="addUwGroup" />
                                </div>
                                <div class="field col-6">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footerHeight">
                        <Pagination
                            :pagingObj="tableData.params"
                            @change-page="updatePaging"
                        />
                    </div> 




        </div> 
    
        <!-- <template #footer>
            <div class="footerHeight">
                <Pagination
                    :pagingObj="tableData.params"
                    @change-page="updatePaging"
                />
            </div>
        </template> -->

    </Dialog>


    <Dialog v-model:visible="uwGroupDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '40vw'}" :modal="true" class="p-fluid" @update:visible="closeModalDetailed">
        <template #header>
            <h5><b>Underwriter Group Header</b></h5>
        </template>
        <div class="grid">
            <div class="col-12">
                <div class="formgrid grid">
                    <div class="field col-6">
                        <InputText v-model="uwGroupHeaderObj.uwGroup" disabled />
                    </div>
                </div>
            </div>
        </div>
        <DataTable :value="uwGroupHeaderObj.details" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingDetailRows"
                @row-edit-save="onRowEditSaveDetail"
        >
            <Column field="userId" header="User ID" :sortable="true" style="width:70%;">
                <template #editor="slotProps">
                        <Dropdown id="userId" v-model="slotProps.data.userId" :options="userList" optionLabel="userId" optionValue="userId" placeholder="Select one..." />
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" class="centerAlign" header="Action" ></Column>
            <Column>
                <template #body="slotProps">
                    <div class="table-header">
                        <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-text p-button-warning" @click="deleteUwGroupDetail(slotProps.data)" />
                    </div>
                </template>
            </Column>
        </DataTable>
        <template #footer>
        <div class="grid">
            <div class="col-12">
                <div class="formgrid grid">
                    <div class="field col-6" style="text-align:left">
                        <Dropdown id="uwGroupTextAddDetails" v-model="uwGroupDetailObj.userId" :options="userList" optionLabel="userId" optionValue="userId" placeholder="Select one..." />
                    </div>
                    <div class="field col-1">
                         <Button type="button" icon="pi pi-plus" style="background-color:#000080" class="p-button-sm p-button-success" @click="saveAddUwGroupDetail" />
                    </div>
                    <div class="field col-5">
                        
                    </div>
                </div>
            </div>
        </div>
        </template>
    </Dialog>

    <Dialog v-model:visible="addUwGroupDetailModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '35vw'}" header="Add Allowable Proposal Status Code" :modal="true" class="p-fluid">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="code">User ID *</label>
                            <Dropdown id="uwGroupTextAddDetails" v-model="uwGroupDetailObj.userId" :options="userList" optionLabel="userId" optionValue="userId" placeholder="Select one..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>                
        <template #footer>
            <Button type="button" icon="pi pi-plus" style="background-color:#000080" class="p-button-sm" @click="saveAddUwGroupDetail" />
        </template>
    </Dialog>







</template>

<script>
import { reactive, onMounted, ref, toRef, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import Pagination from '@/components/common/Pagination';
import uwGroupTableDataService from '@/service/nb/uwGroupTableDataService';
//import UwGroupAddModal from '@/components/nb/maintenance/UwGroupAddModal'

export default {
    name: 'ProposalStatusView',
    components: {
     Pagination
    },
    props: {
        modelValue: String
    },
    setup(props, {emit}) {
        const store = useStore()

        const displayDialog = toRef(props, 'displayModal')

        const router = useRouter();

        const displayUwGroup = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });

        const closeModal = () => {
            inputForm.uwGroup = ''
            displayUwGroup.value = false;
            search()

        };

        const closeModalDetailed = () => {
            uwGroupDetailObj.value.userId = ''
            addUwGroupDetailModal.value = false; 

        };

        // Data
        const inputForm = reactive({
            uwGroup: '',
        })

        const uwGroupInputForm = reactive({
            uwGroup: '',
        })
        
        const tableData = ref([])
        const tableDataWithDesc = ref([])



        // Funciton
        const clear = () => {
            inputForm.uwGroup = ''
            search()
        }


        const map = (paging) => {
            let searchObj = {};

            if ( paging != null ) {
                searchObj = {
                    uwGroup: inputForm.uwGroup,
                    pager:{
                        page: paging.page + 1,
                        size: paging.rows
                    }
                }
            } else {
                searchObj = {
                    uwGroup: inputForm.uwGroup,
                    pager:{
                        page: 0,
                        size: 5
                    }
                }
            }

            return searchObj;
        }

        const search = () => {
            store.dispatch('uwgrouptable/search', map()).then(() => {
                tableData.value = store.getters['uwgrouptable/getUwGroupTableObj']
            })
        }
    
        const updatePaging = (paging) => {

            store.dispatch('uwgrouptable/search', map(paging)).then(() => {
                tableData.value = store.getters['uwgrouptable/getUwGroupTableObj']
            })
        }

        const add = (inputForm) => {
            console.log('inputForm.value.desc: ' + inputForm);
            store.dispatch('exclusionCode/addExclusionCode', inputForm);
        };

        const cancel = () => {
            router.push({ name: "uwapprovallimitdet"});
        };

        onMounted(() => {

            search()

            uwGroupTableDataService.getUsers().then(data => userList.value = data)

        })

        const editDetailModal = ref(false);
        const uwGroupDetailModal = ref(false);
        const addUwGroupDetailModal = ref(false);
        const uwGroupHeaderObj = ref({});
        const uwGroupDetailObj = ref({
            userId: '',
        });
        const editingRows = ref([]);
        const editingDetailRows = ref([]);
        const uwGroupDetailsDesc = ref([])

        const userList = toRef([]);


        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('uwgrouptable/deleteUwGroupTable', record.seqId).then(() => {
                    emit('search') 
                    alert('Record deleted successfully')
                })
            }
        }


        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('uwgrouptable/updateUwGroupTable', newData).then(() => {
                tableData.value.list[index] = newData;     
            })    
 
        }


        const onRowEditSaveDetail = (event) => {

            store.dispatch('uwgrouptable/addUpdateUwGroupDetail', event.newData).then(() => {
                store.dispatch('uwgrouptable/getByIdWithDetails', uwGroupHeaderObj.value.seqId).then(() => {
                    uwGroupHeaderObj.value = store.getters['uwgrouptable/getUwGroupTableObj']; 
                })
            })    
 
        }

        const uwGroupDetail = (data) => {
           
            store.dispatch('uwgrouptable/getByIdWithDetails', data.seqId).then(() => {
                uwGroupHeaderObj.value = store.getters['uwgrouptable/getUwGroupTableObj']; 
                uwGroupDetailModal.value = true;   
            })
        
        }


        const addUwGroupDetail = () => {
            uwGroupDetailObj.value.userId = "";
            addUwGroupDetailModal.value = true;

        }

        const saveAddUwGroupDetail = () => {
            uwGroupDetailObj.value.headerId = uwGroupHeaderObj.value.seqId;
            console.log('add uwGroupDetailObj Origin: ' + JSON.stringify(uwGroupDetailObj.value, null, 4));
            store.dispatch('uwgrouptable/addUpdateUwGroupDetail', uwGroupDetailObj.value).then(() => {
                store.dispatch('uwgrouptable/getByIdWithDetails', uwGroupHeaderObj.value.seqId).then(() => {
                    uwGroupHeaderObj.value = store.getters['uwgrouptable/getUwGroupTableObj']; 
                    uwGroupDetailObj.value.userId = ''
                })
                console.log('uwGroupHeaderObj.value: ' + JSON.stringify(uwGroupHeaderObj.value, null, 4));
            })
            
        }

        const deleteUwGroupDetail = (event) => {

            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('uwgrouptable/deleteUwGroupTableDetail', event).then(() => {
                    store.dispatch('uwgrouptable/getByIdWithDetails', uwGroupHeaderObj.value.seqId).then(() => {
                        uwGroupHeaderObj.value = store.getters['uwgrouptable/getUwGroupTableObj']; 
                        alert('Record deleted successfully')
                    }) 
                })

            }
        }

        const addUwGroup = () => {    
            
            if(uwGroupInputForm.uwGroup == "")
            {

                alert("Please enter Underwriter Group Table")

            }else{
                store.dispatch('uwgrouptable/addUwGroupTable', uwGroupInputForm).then(() => {
                    uwGroupInputForm.uwGroup = ""
                    search()
                })             
            }
            
        }


        return {
            inputForm,
            tableData,
            map,
            clear,
            search,
            add,
            updatePaging,
            cancel,
            tableDataWithDesc,
            displayDialog,
            closeModal,
            displayUwGroup,
            closeModalDetailed,
            deleteData,
            editingRows,           
            onRowEditSave,
            uwGroupDetail,
            uwGroupDetailModal,
            uwGroupHeaderObj,
            editDetailModal,
            addUwGroupDetailModal,
            saveAddUwGroupDetail,
            addUwGroupDetail,
            deleteUwGroupDetail,
            uwGroupDetailObj,
            uwGroupDetailsDesc,
            editingDetailRows,
            onRowEditSaveDetail,
            userList,
            addUwGroup,
            uwGroupInputForm
        }
    },
}
</script>


<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>


<style>

.dialogHeight{
    min-height: 32vw;
    max-height: 32vw;
    min-width: 350px;
}

.footerHeight{
    min-height: 3vw;
    max-height: 3vw;
    min-width: 350px;
}

</style>
