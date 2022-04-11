<template>
    <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal"  />

    <Dialog header="Add Mastercode" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="code">Code</label>
                            <InputText id="code" type="text" v-model="inputForm.code" @input="inputForm.code = $event.target.value.toUpperCase()"/>
                        </div>
                        <div class="field col">
                            <label for="desc">Description</label>
                            <InputText id="desc" type="text" v-model="inputForm.desc" @input="inputForm.desc = $event.target.value.toUpperCase()"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button type="button" icon="pi pi-times" class="p-button-sm p-button-danger" @click="closeModal" />
            <template v-if="btnName === 'Add'">
                <Button type="button" icon="pi pi-plus" style="background-color:#000080;" class="p-button-sm" @click="add" />
            </template>
            <template v-else-if="btnName === 'Update'">
                <Button type="button" icon="pi pi-check" style="background-color:#000080;" class="p-button-sm" @click="addUpdateFunc" />
            </template>
        </template>
    </Dialog>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'MasterAddModal',
    emits: ['reloadTableData'],
    props: {
        btnName: String
    },
    setup(props, { emit }) {
        const store = useStore();
        const displayModal = ref(false);
        const inputForm = ref({
            code: '',
            desc: ''
        });

        const openModal = () => {
            inputForm.value.code = '';
            inputForm.value.desc = '';
            displayModal.value = true;
        };
        const closeModal = () => {
            displayModal.value = false;
            inputForm.value = {
                code: '',
                desc: ''
            }
        };        
        const addUpdateFunc = () => {
            emit('add-master', inputForm.value);
            displayModal.value = false;
            inputForm.value.code = '';
            inputForm.value.desc = '';
        };

        const add = () => {            
            store.dispatch('master/addMaster', inputForm.value);
            displayModal.value = false;
            emit('reloadTableData');
        }

        return {
            displayModal,
            openModal,
            closeModal,
            inputForm,
            addUpdateFunc,
            add,
        }
    },
}
</script>
