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
                        <div class="p-fluid formgrid grid">
                                <div class="field col-12 md:col-6">
                                    <label for="division">Division *</label>
                                    <Dropdown id="division" v-model="inputForm.division" :options="tableDivision" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                                </div>
                                <br/>
                                <div class="field col-12 md:col-6">
                                    <label for="exclusionCode">Exclusion Code *</label>
                                    <InputText id="exclusionCode" type="text" v-model="inputForm.exclusionCode"/>
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="effectiveDatefrom">Effective Date From *</label>
                                    <Calendar class="p-inputtext-sm" id="effectiveDatefrom" v-model="inputForm.effectiveDatefrom" :showIcon="true" :showOnFocus="false" />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="effectiveDateTo">Effective Date To *</label>
                                    <Calendar class="p-inputtext-sm" id="effectiveDateTo" v-model="inputForm.effectiveDateTo" :showIcon="true" :showOnFocus="false" />
                                </div>
                                <div class="field col-12 md:col-12">
                                    <label for="descriptionEnglish">Description In English *</label>
                                    <Textarea id="descriptionEnglish" :autoResize="true" rows="3" cols="30" v-model="inputForm.descriptionEnglish" />
                                </div>
                                <div class="field col-12 md:col-12">
                                    <label for="descriptionBm">Description In Bahasa Indonesia</label>
                                    <Textarea id="descriptionBm" :autoResize="true" rows="3" cols="30" v-model="inputForm.descriptionBm" />
                                </div>                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';


export default {
    name: 'ExclusionAddModal',
    setup() {
        const router = useRouter();
        const store = useStore();
        const addExclusionObj = ref({});
        const inputForm = ref({
            division: '',
            exclusionCode: '',
            effectiveDatefrom: '',
            effectiveDateTo: '',
            descriptionEnglish: '',
            descriptionBm: ''
        });

        store.dispatch('master/getDetailCode', 'DIVISION')
        const tableDivision = computed(() => store.getters['master/getMastersObj'])


        
        const close = () => {
            router.push({ name: "exclusioncode"});
        };   

        const checkError = () => { 

            let errorMsg = ""
            
            if(inputForm.value.division == "")
            {

                errorMsg += "Please select Division\n"

            }
            
            if(inputForm.value.exclusionCode == ""){

               errorMsg += "Please enter Exclusion Code\n"

            }
            
            if(inputForm.value.effectiveDatefrom == ""){

                errorMsg += "Please select Effective Date From\n"

            }
            
            if(inputForm.value.effectiveDateTo == ""){

                errorMsg += "Please select Effective Date To\n"

            }
            
            if(inputForm.value.descriptionEnglish == ""){

                errorMsg += "Please enter Description In English\n"

            }

            return errorMsg
        }

        const saveExit = () => {    
            
            if(checkError().length > 0){
                alert(checkError())
            } else{

                    store.dispatch('exclusion/addExclusionCode', inputForm.value).then(() => {
                    inputForm.value = {
                        division: '',
                        exclusionCode: '',
                        defffr: '',
                        deffto: '',
                        descenglish: '',
                        descbm: ''
                    }
                    alert("Record added successfully")
                    router.push({ name: "exclusioncode"});
                })             
            }
            
        }

        return {
            addExclusionObj,
            inputForm,
            saveExit,
            close,
            tableDivision,

        }
    },
}
</script>
