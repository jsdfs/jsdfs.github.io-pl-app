<template>
    <div class="grid">
        <div class="col-12">
            <div class="card p-fluid">
            <div>
                <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-rounded p-button-text mr-2 mb-2" @click="close" /></div> 
                </div>  
                <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-plus" style="background-color:#000080;" type="button" class="mr-2 mb-2" @click="saveExit" /> </div>     
                </div>  
            </div>
            <div class="card p-fluid">
            <div class="formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="newIcNo">New IC No</label>
                    <InputText id="newIcNo" type="text" v-model="inputForm.newIcNo"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="oldIcNo">Old IC No</label>
                    <InputText id="oldIcNo" type="text" v-model="inputForm.oldIcNo"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="businessRegistrationNo">Business Reg No</label>
                    <InputText id="businessRegistrationNo" type="text" v-model="inputForm.businessRegistrationNo"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="passport">Passport</label>
                    <InputText id="passport" type="text" v-model="inputForm.passport"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="name">Name</label>
                    <InputText id="name" type="text" v-model="inputForm.name"/>
                </div>
                <div class="field col-12 md:col-6">

                </div>  
                <div class="field col-12 md:col-6">
                    <label for="nationality">Nationality</label>
                    <InputText id="nationality" type="text" v-model="inputForm.nationality"/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="dob">Date Of Birth</label>
                    <Calendar class="p-inputtext-sm" id="dob" dateFormat="dd/mm/yy" v-model="inputForm.dob" :showIcon="true" :showOnFocus="false" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="type">Type</label>
                    <InputText id="type" type="text" v-model="inputForm.type"/>
                </div>     
                <div class="field col-12 md:col-6">
                    <label for="typeDescription">Type Description</label>
                    <InputText id="typeDescription" type="text" v-model="inputForm.typeDescription"/>
                </div>                                                                                          
            </div>
                </div>
            </div>   
        </div>   
    </div>
 
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: 'SanctionList',
    components: {

    },
    setup() {
        
        const router = useRouter();
        const store = useStore();

        const close = () => {
            router.push("/sanctionlist");
        }

        const saveExit = () => {
            store.dispatch('sanctionlist/add', inputForm.value);
            alert("Record added successfully")
            router.push("/sanctionlist");
        }

        const inputForm = ref({
            newIcNo: '',
            type: '',
            oldIcNo: '',
            name: '',
            nationality: '',
            dob: '',
            businessRegistrationNo: '',
            passport: '',
            typeDescription: ''
        })


        return {
            inputForm,
            saveExit,
            close,
        }
    },
}
</script>