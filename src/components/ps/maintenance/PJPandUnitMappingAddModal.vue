<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal" />

    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true" @update:visible="closeModal">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                         <div class="field col">
                            <label for="pjp">PJP</label>
                            <Dropdown v-model="inputForm.pjp" id="pjp" :options="pjpLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                        </div>
                        <div class="field col">
                            <label for="unit">Unit</label>
                            <Dropdown v-model="inputForm.unit" id="unit" :options="unitLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
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
    name: 'PJPandUnitMappingAddModal',
    components: {

    },
    setup(props,{ emit }) {
        const displayModal = ref(false);
        const store = useStore();
        const pjpLs = ref();
        const unitLs = ref();


        const saveExit = () =>{
            store.dispatch('pjpandunitmapping/add', inputForm.value)
            alert("Record added successfully")
            emit('searchFunc');
            closeModal()
        }

        onMounted(() => {
            masterService.getDetailCode("GRPPJP")
            .then((res) => {
                pjpLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GRPUNIT")
            .then((res) => {
                unitLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })
            )
        });
        
        const openModal = () => {
            displayModal.value = true;
        };

        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                pjp: '',  
                unit: ''
            }
        };  

        const inputForm = ref({
            pjp: '',  
            unit: ''
        })


        return {
            inputForm,
            close,
            displayModal,
            saveExit,
            openModal,
            closeModal,
            pjpLs,
            unitLs,
        }
    },
}
</script>