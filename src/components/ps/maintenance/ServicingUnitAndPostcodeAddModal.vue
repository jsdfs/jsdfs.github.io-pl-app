<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal" />

    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true" @update:visible="closeModal">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="postCode">Post Code</label>
                            <InputText class="p-inputtext-sm" id="postCode" type="text" v-model="inputForm.postCode" />
                        </div>
                        <div class="field col">
                            <label for="postCode">Servicing Unit</label>
                            <Dropdown v-model="inputForm.servUnitCode" id="servUnitCode" :options="serveUnit" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-plus" type="button" style="background-color:#000080" class="p-button-sm" @click="saveExit" />
        </template>
    </Dialog>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import masterService from "../../../service/admin/masterDataService";

export default {
    name: 'ServicingUnitAndPostcodeAddModal',
    components: {

    },
    setup(props,{ emit }) {
        const displayModal = ref(false);
        const serveUnit = ref();
        const store = useStore();



        const saveExit = () =>{
            store.dispatch('servicingunit/add', inputForm.value)
            alert("Record added successfully")
            emit('searchFunc');
            closeModal()
        }

        onMounted(() => {
            masterService.getDetailCode("REPOFFCODE").then((res) => {
                serveUnit.value = res.data;
            }).catch((e) => {
                console.error(e.response.status);
            })
        });
        
        const openModal = () => {
            displayModal.value = true;
        };

        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                servUnitCode: '',  
                postCode: ''
            }
        };  

        const inputForm = ref({
            servUnitCode: '',  
            postCode: ''
        })


        return {
            inputForm,
            close,
            displayModal,
            saveExit,
            openModal,
            closeModal,
            serveUnit,
        }
    },
}
</script>