<template>

    <Button icon="pi pi-plus" class="p-button-rounded p-button-text p-button-info mr-2" @click="openModal" />

    <Dialog header="Add Nationality" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <div class="p-fluid formgrid grid">  
                        <div class="field col-12 md:col-6">
                            <label for="tableNo">Table No</label>
                            <InputText id="tableNo" type="text"  v-model="inputForm.tableNo" disabled/>
                        </div>
                        <div class="field col-12 md:col-6">
                            <MasterOptions 
                                :label="'Nationality'"
                                :masterCode="'NATION'" v-model="inputForm.nationalCode"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-times" type="button" class="p-button-sm p-button-danger" @click="closeModal" />
            <Button icon="pi pi-plus" type="button" style="background-color:#000080" class="p-button-sm" @click="add" />
        </template>
    </Dialog>
</template>

<script>
import { ref, toRef, onBeforeUpdate } from 'vue';

import { useStore } from 'vuex';
import MasterOptions from '@/components/common/planmaster/MasterOptions';

export default {
    name: 'NationalityAdd',
    components: {
        MasterOptions
    },    
    props: {
        data: Object,
        nationalityLs: Object,
    },
    setup(props, { emit } ) {
        const store = useStore();
        const displayModal = ref(false);
        const dataInput = toRef(props, 'data');
        const nationList = toRef(props, 'nationalityLs');
        const nationObj = ref ([{}])

        const openModal = () => {
            inputForm.value.tableNo = dataInput.value.tableNo

            if(inputForm.value.tableNo !== " "){
                displayModal.value = true;
            }else{
                alert("Please select Table No");
                return;
            }
            
        };

        onBeforeUpdate(() => {
            if(dataInput.value.tableNo !== " "){
                inputForm.value.tableNo = dataInput.value.tableNo
                nationObj.value = nationList.value.filter(elem => { return elem.code === inputForm.value.tableNo })
                inputForm.value.tableNo = nationObj.value[0].desc
            }
        })

        const closeModal = () => {
                inputForm.value = {
                tableNo: ' ',
                nationalCode: "",
            }
            displayModal.value = false;
        };  

        const add = () =>{

            if(inputForm.value.nationalCode !== ""){
                inputForm.value.tableNo = nationObj.value[0].code
                store.dispatch('nationality/add', inputForm.value);
                inputForm.value.tableNo = nationObj.value[0].desc
                alert("Record added successfully")
                closeModal()
                emit('reloadTableData')
            }else{
                alert("Please select Nationality");
                return;
            }
        }

        const inputForm = ref({
            tableNo: ' ',
            nationalCode: "",
        })


        return {
            inputForm,
            nationList,
            displayModal,
            dataInput,
            openModal,
            close,
            add,
            closeModal,
        }
    },
}
</script>