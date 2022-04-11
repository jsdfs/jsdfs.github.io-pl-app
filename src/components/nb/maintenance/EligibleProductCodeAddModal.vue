<template>
    
    <Button icon="pi pi-plus" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="openModal" />

    <Dialog header="Add Eligible Product Code" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <div class="p-fluid formgrid grid">  
                        <div class="field col-12 md:col-6">
                            <label for="tableNo">Table No</label>
                            <InputText id="tableNo" type="text"  v-model="inputForm.tableNo" disabled/>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="productCode">Product Code</label>
                            <Dropdown class="p-inputtext-sm" v-model="inputForm.productCode" id="productCode" :options="prodCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
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
import { ref, toRef } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'NBExchangeRateAdd',
    components: {

    },
    props: {
        data: Object
    },
    setup(props, { emit }) {
        const store = useStore();
        const dataInput = toRef(props, 'data');
        const displayModal = ref(false);

        const openModal = () => {
            inputForm.value.tableNo = dataInput.value.tableNo

            if(inputForm.value.tableNo !== " "){
                displayModal.value = true;
            }else{
                alert("Please select Table No");
                return;
            }
            
        };

        const closeModal = () => {
                inputForm.value = {
                tableNo: ' ',
                productCode: "",
            }
            displayModal.value = false;
        };  

        const add = () =>{

            if(inputForm.value.productCode !== ""){
                store.dispatch('eligibleproductcode/add', inputForm.value);
                alert("Record added successfully")
                closeModal()
                emit('reloadTableData')
            }else{
                alert("Please select Product Code");
                return;
            }
        }

        const inputForm = ref({
            tableNo: ' ',
            productCode: "",
        })

        const prodCodeLs = ref([
            { desc: '01.02.45 - TUGU DANA MAKSIMA', code: '01.02.45' },
            { desc: '01.06.01 - TM POWER LINK REGULAR', code: '01.06.01' },
            { desc: '01.06.32 - TM POWERLINK SINGLE', code: '01.06.32' },
            { desc: '02.02.02 - MANDIRI GUNA II', code: '02.02.02' },
            { desc: '02.02.03 - MG III TUGU PRATAMA INDONESIA', code: '02.02.03' },
            { desc: '02.02.05 - MANDIRI GUNA I PERTAMINA (SINGLE)', code: '02.02.05' },
            { desc: '02.02.06 - MANDIRI GUNA I PERTAMINA (REGULAR)', code: '02.02.06' },
            { desc: '02.06.01 - MANDIRI ASURANSI PESANGON SEJAHTERA', code: '02.06.01' },
            { desc: '02.06.0201 - TM SEVERANCE PROGRAM (PTC)', code: '02.06.0201' },
            { desc: '02060201TS - TM SEVERANCE PROGRAM (PTC) TEST', code: '02060201TS' },
        ])

        return {
            inputForm,
            prodCodeLs,
            displayModal,
            openModal,
            closeModal,
            close,
            dataInput,
            add,
        }
    },
}
</script>