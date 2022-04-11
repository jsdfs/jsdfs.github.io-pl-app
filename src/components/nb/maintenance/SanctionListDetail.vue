<template>
    <div class="grid">
        <div class="col-12">
            <div class="card p-fluid">
            <div>
                <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-outlined mr-2 mb-2" @click="close" /></div> 
                </div>  
                <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-trash" type="button" class="p-button-warning mr-2 mb-2" @click="delRecord" /> </div>
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-check" type="button" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="saveExit" /> </div>     
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
import { ref , computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: 'SanctionListDetail',
    components: {

    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const data = computed(() => store.state.sanctionlist.sanctionlistDetail);
        const tableData = computed(() => store.getters['sanctionlist/getSanctionlistObj']);

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        })
 
        const path = 13;

        const close = () => {
            router.push("/sanctionlist");
        }

        const saveExit = () => {
            store.dispatch('sanctionlist/save', inputForm.value)
            alert("Record saved successfully")
            router.push("/sanctionlist");
        }

        const delRecord = () => {    
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('sanctionlist/delete', inputForm.value.seqId)
                alert('Record deleted successfully')
                router.push("/sanctionlist");
            }
        }

        const inputForm = ref({
            seqId: data.value.seqId,
            newIcNo: data.value.newIcNo,
            type: data.value.type,
            oldIcNo: data.value.oldIcNo,
            name: data.value.name,
            nationality: data.value.nationality,
            dob: new Date(data.value.dob),
            businessRegistrationNo: data.value.businessRegistrationNo,
            passport: data.value.passport,
            typeDescription: data.value.typeDescription
        })


        return {
            inputForm,
            data,
            saveExit,
            delRecord,
            close,
            tableData
        }
    },
}
</script>