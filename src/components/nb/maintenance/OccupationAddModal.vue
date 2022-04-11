<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal" />

    <Dialog header=" " v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true" @update:visible="closeModal">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="occupationCode">Occupation Code</label>
                            <InputText id="occupationCode" type="text" v-model="inputForm.occupationCode"/>
                        </div>
                        <div class="field col">
                            <label for="occupationDesc">Occupation Description</label>
                            <InputText id="occupationDesc" type="text" v-model="inputForm.occupationDesc"/>
                        </div>
                    </div>

                    <div class="formgrid grid"> 
                        <div class="field col-12 md:col-6">
                            <label for="occupationClass">Occupation Class</label>
                             <Dropdown id="occupationClass" v-model="inputForm.occupationClass" :options="dataList" optionLabel="desc" optionValue="code" placeholder="Select one..." required/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-plus" type="button" style="background-color:#000080" class="p-button-sm" @click="addUpdateFunc" />
        </template>
    </Dialog>
</template>

<script>
import { ref, toRef } from 'vue'
// import { useStore } from 'vuex'

export default {
    name: 'OccupationAddModal',
    emits: ['addUpdateFunc'],
    props: {
        btnName: String,
        oClassDropDownLs: Object
    },
    setup(props, { emit }) {
        const displayModal = ref(false);
        const addMasterObj = ref({});
        const dataList = toRef(props, 'oClassDropDownLs');
        const inputForm = ref({
            occupationCode: '',
            occupationDesc: '',
            occupationClass: ''
        });

        const openModal = () => {
            displayModal.value = true;
        };
        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                occCode: '',
                occDesc: '',
                occClass: ''
            }
        };        
        const addUpdateFunc = () => {
            emit('addUpdateFunc', inputForm.value);
            emit('searchFunc');
            closeModal()
        };

        return {
            displayModal,
            openModal,
            closeModal,
            addMasterObj,
            dataList,
            inputForm,
            addUpdateFunc,
        }
    },
}
</script>
