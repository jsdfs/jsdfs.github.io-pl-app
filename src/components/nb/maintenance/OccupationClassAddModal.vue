<template>
    <Button icon="pi pi-plus" class="p-button-rounded p-button-text p-button-info mr-2" @click="openModal" />

    <Dialog header="Add Occupation Class" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <div class="p-fluid formgrid grid">  
                        <div class="field col-12 md:col-6">
                            <label for="tableNo">Table No</label>
                            <InputText id="tableNo" type="text"  v-model="inputForm.tableNo" disabled/>
                        </div>
                        <KeyTable 
                            :label="'Occupation Class'"
                            :routePath="'/'" :masterCode="'OCCUCLS'" v-model="inputForm.occupationClassCode"
                        />
                        
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
import { onMounted, ref, toRef, onBeforeUpdate } from 'vue';
import { useStore } from 'vuex';
import KeyTable from '@/components/common/planmaster/KeyTable';
import masterDataService from '@/service/admin/masterDataService';

export default {
    name: 'OccupationClassAdd',
    components: {
        KeyTable
    },
    props: {
        data: Object,
        oClassDropDownLs: Object,
    },
    setup(props, { emit }) {
        const store = useStore();
        const displayModal = ref(false);
        const classList = toRef(props, 'oClassDropDownLs');
        const dataInput = toRef(props, 'data');
        const occClassLs = ref({});
        const classObj = ref ([{}])
        const openModal = () => {

            inputForm.value.tableNo = dataInput.value.tableNo

            if(inputForm.value.tableNo !== " "){
                displayModal.value = true;
            }else{
                alert("Please select Table No");
                return;
            }
            
        };

        onMounted(() => {
            masterDataService.getDetailByHeaderCode('JETOCCCLSTBL').then(res => {
                occClassLs.value = res.data;
            });
        })

        onBeforeUpdate(() => {
            if(dataInput.value.tableNo !== " "){
                inputForm.value.tableNo = dataInput.value.tableNo
                classObj.value = occClassLs.value.filter(elem => { return elem.code === inputForm.value.tableNo })
                inputForm.value.tableNo = classObj.value[0].desc
            }
        })
        
        const closeModal = () => {
            dataInput.value = ' '
            inputForm.value = {
                tableNo: ' ',
                occupationClassCode: '',
            }
            displayModal.value = false;
        };  

        const add = () =>{
            if(inputForm.value.occupationClassCode !== ""){
                inputForm.value.tableNo = classObj.value[0].code
                store.dispatch('occupationclass/add', inputForm.value);
                inputForm.value.tableNo = classObj.value[0].desc
                alert("Record added successfully")
                closeModal()
                emit('reloadTableData')
            }else{
                alert("Please select Occupation Class");
                return;
            }
        }

        const inputForm = ref({
            tableNo: ' ',
            occupationClassCode: ''
        })



        return {
            inputForm,
            dataInput,
            openModal,
            occClassLs,
            closeModal,
            classList,
            displayModal,
            close,
            add,
        }
    },
}
</script>