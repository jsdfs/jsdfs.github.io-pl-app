<template>

    <Button icon="pi pi-plus" class="p-button-rounded p-button-text p-button-info mr-2" @click="openModal" />

    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true"  @update:visible="closeModal">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                        <div class="field">
                            <label for="uwGroup">Underwriter Group Table *</label>
                            <InputText id="uwGroup" type="text" v-model="inputForm.uwGroup"/>
                        </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-plus" type="button" style="background-color:#000080" class="p-button-sm" @click="add" />
        </template>
    </Dialog>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'


export default {
    name: 'ProposalStatusAddModal',
    emits: ['reloadTableData'],
    setup(props, { emit }) {
        const store = useStore();
        const displayModal = ref(false);
        const inputForm = ref({
            uwGroup: '',
        });

        const openModal = () => {
            displayModal.value = true;
        };


        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                uwGroup: '',
            }
        };     

        const add = () => {    
            
            if(inputForm.value.uwGroup == "")
            {

                alert("Please enter Underwriter Group Table")

            }else{
                    store.dispatch('uwgrouptable/addUwGroupTable', inputForm.value).then(() => {
                    displayModal.value = false
                    inputForm.value = {
                        uwGroup: ''
                    }
                    emit('reloadTableData')
                    alert("Record added successfully")
                })             
            }
            
        }

        return {
            add,
            displayModal,
            openModal,
            closeModal,
            inputForm,
        }
    },
}
</script>
