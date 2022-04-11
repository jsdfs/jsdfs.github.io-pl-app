<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal"  />


    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true" @update:visible="closeModal" >
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                        <div class="field">
                            <label for="tableNo">Table No</label>
                            <Dropdown id="tableNo" v-model="selectedTableNo" :options="docAndMedTableLs" optionLabel="desc" optionValue="code" placeholder="Select one..." disabled />
                        </div>
                        <div class="field">
                            <label for="requirementCode">Document Medical Code *</label>
                            <Dropdown id="requirementCode" v-model="inputForm.requirementCode" :options="requirementCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                        <div class="field">
                            <label for="firstReminder">1st Reminder *</label>
                            <InputText id="firstReminder" type="text" v-model="inputForm.firstReminder"/>
                        </div>
                        <div class="field">
                            <label for="secondReminder">2nd Reminder *</label>
                            <InputText id="secondReminder" type="text" v-model="inputForm.secondReminder"/>
                        </div> 
                        <div class="field">
                            <label for="expiryPeriod">Expiry *</label>
                            <InputText id="expiryPeriod" type="text" v-model="inputForm.expiryPeriod"/>
                        </div>                          
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-plus" type="button" style="background-color:#000080;" class="p-button-sm" @click="add" />
        </template>
    </Dialog>
</template>

<script>
import { ref, toRef } from 'vue'
import { useStore } from 'vuex'


export default {
    name: 'StandardTATAddModal',
    emits: ['reloadTableData'],
    props: {
        docAndMedTableLs: Object,
        requirementCodeLs: Object,
        tableNo: String,
    },
    setup(props, { emit }) {
        const store = useStore();
        const displayModal = ref(false);
        const inputForm = ref({
            tableNo: '',
            requirementCode: '',
            firstReminder: 0,
            secondReminder: 0,
            expiryPeriod: 0,
        });

        const selectedTableNo = toRef(props, 'tableNo')

        const openModal = () => {
            if(props.tableNo != ""){
                displayModal.value = true;
            }
            else{
                alert("Please select Table No")
            }

            
        };


        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                tableNo: '',
                requirementCode: '',
                firstReminder: 0,
                secondReminder: 0,
                expiryPeriod: 0,
            }
        };     

        const add = () => {    

            let errorMsg = ""
            
            if(inputForm.value.requirementCode == "")
            {

                errorMsg += "Please select Document Medical Code\n"

            }
            
            if(inputForm.value.firstReminder == ""){

               errorMsg += "Please enter 1st Reminder\n"

            }

            if(inputForm.value.secondReminder == "")
            {

                errorMsg += "Please enter 2nd Reminder\n"

            }
            
            if(inputForm.value.expiryPeriod == ""){

               errorMsg += "Please enter Expiry\n"

            }
            
            
            
            if(errorMsg.length > 0){
                alert(errorMsg)
            } else{
                inputForm.value.tableNo = selectedTableNo.value
                store.dispatch('docandmedicalcode/addDocAndMedicalCode', inputForm.value).then(() => {
                    emit('reloadTableData')
                    alert("Record added successfully")
                    closeModal()             
                })
            }
        };

        return {
            add,
            displayModal,
            openModal,
            closeModal,
            inputForm,
            selectedTableNo
        }
    },
}
</script>