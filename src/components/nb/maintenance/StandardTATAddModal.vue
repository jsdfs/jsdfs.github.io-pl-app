<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal"  />


    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true" @update:visible="closeModal" >
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                        <div class="field">
                            <label for="distributionChannel">Distribution Channel *</label>
                            <Dropdown id="distributionChannel" v-model="inputForm.distributionChannel" :options="distributionChannelLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                        <br />
                        <div class="field">
                            <label for="tatStage">TAT Stage *</label>
                            <Dropdown id="tatStage" v-model="inputForm.tatStage" :options="tatStageLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                        <br />
                        <div class="field">
                            <label for="standardTatDays">Standard TAT (days)</label>
                            <InputText id="standardTatDays" type="text" v-model="inputForm.standardTatDays"/>
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
import { ref } from 'vue'
import { useStore } from 'vuex'


export default {
    name: 'StandardTATAddModal',
    emits: ['reloadTableData'],
    props: {
        distributionChannelLs: Object,
        tatStageLs: Object,
    },
    setup(props, { emit }) {
        const store = useStore();
        const displayModal = ref(false);
        const addExclusionObj = ref({});
        const inputForm = ref({
            distributionChannel: '',
            tatStage: '',
            standardTatDays: 0,
        });


        const openModal = () => {
            displayModal.value = true;
        };


        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
            distributionChannel: '',
            tatStage: '',
            standardTatDays: 0
            }
        };     

        const add = () => {    

            let errorMsg = ""
            
            if(inputForm.value.distributionChannel == "")
            {

                errorMsg += "Please select Distribution Channel\n"

            }
            
            if(inputForm.value.tatStatus == ""){

               errorMsg += "Please select TAT Stage\n"

            }
            
            
            
            if(errorMsg.length > 0){
                alert(errorMsg)
            } else{

                store.dispatch('standardtat/addStandardTat', inputForm.value).then(() => {
                displayModal.value = false
                inputForm.value = {
                    distributionChannel: '',
                    tatStage: '',
                    standardTatDays: 0
                }
                emit('reloadTableData')
                alert("Record added successfully")
                closeModal()             

                })
            }
        };

        const addUpdateFunc = () => {
            emit('addUpdateFunc', inputForm.value);
        };

        return {
            add,
            displayModal,
            openModal,
            closeModal,
            addExclusionObj,
            inputForm,
            addUpdateFunc,
        }
    },
}
</script>
