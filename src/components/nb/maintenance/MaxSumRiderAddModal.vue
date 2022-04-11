<template>

    <Button icon="pi pi-plus" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="openModal" />

    <Dialog header="Add Maximum Sum Assured For Rider" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <div class="p-fluid formgrid grid">  
                        <div class="field col-12 md:col-6">
                            <label for="tableNo">Table No</label>
                            <InputText id="tableNo" type="text"  v-model="inputForm.tableNo" disabled/>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="minSumAssured">Min Sum Assured</label>
                            <InputText id="minSumAssured" type="text"  v-model="inputForm.minSumAssured" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="maxSumAssured">Max Sum Assured</label>
                            <InputText id="maxSumAssured" type="text"  v-model="inputForm.maxSumAssured" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="productCode">Product Code</label>
                            <InputText id="productCode" type="text"  v-model="inputForm.productCode" />
                        </div>
                        
                        <!-- <KeyTable 
                            :label="'Occupation Class'"
                            :routePath="'/'" :masterCode="'OCCUCLS'" v-model="inputForm.occupationClassCode"
                        /> -->
                        
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
import { ref } from 'vue';
// import KeyTable from '@/components/common/planmaster/KeyTable';


export default {
    name: 'MaxSumRiderAdd',
    components: {
        // KeyTable
    },
    setup() {
        const displayModal = ref(false);
        const openModal = () => {
            displayModal.value = true;
        };

        const add = () =>{
            //store.dispatch('maxsumrider/add', inputForm.value);
            alert("Record added successfully")
            closeModal()
        }

        const inputForm = ref({
            tableNo: '',
        })

        const closeModal = () => {

            displayModal.value = false;
        };  

        return {
            inputForm,
            displayModal,
            close,
            openModal,
            add,
        }
    },
}
</script>