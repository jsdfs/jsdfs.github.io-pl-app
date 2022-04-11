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
                            <div class="field col-6">
                                <label for="loadCode">Loading/Extra Premium Code *</label>
                                <Dropdown v-model="inputForm.loadCode" id="loadCode" :options="loadCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-6">
                            </div>
                            <div class="field col-6">
                                <label for="effectiveDateFrom">Effective Date From *</label>
                                <Calendar class="p-inputtext-sm" id="effectiveDateFrom" v-model="inputForm.effectiveDateFrom" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
                            </div>
                            <div class="field col-6">
                                <label for="effectiveDateTo">Effective Date To *</label>
                                <Calendar class="p-inputtext-sm" id="effectiveDateTo" v-model="inputForm.effectiveDateTo" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
                            </div>
                            <div class="field col-6">
                                <label for="minLoadRate">Min Per Mile / %</label>
                                <InputText id="minLoadRate" type="text" v-model="inputForm.minLoadRate"/>
                            </div>
                            <div class="field col-6">
                                <label for="maxLoadRate">Max Per Mile / %</label>
                                <InputText id="maxLoadRate" type="text" v-model="inputForm.maxLoadRate"/>
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
    name: 'LoadingRangeAdd',
    setup() {
        const router = useRouter();
        const store = useStore();
        const addExclusionObj = ref({});
        const inputForm = ref({
            loadCode: '',
            effectiveDateFrom: '',
            effectiveDateTo: '',
            minLoadRate: 0.00,
            maxLoadRate: 0.00
        });

        store.dispatch('master/getDetailCode', 'LDPREMCODE')
        const loadCodeLs = computed(() => store.getters['master/getMastersObj'])


        const close = () => {
            router.push({ name: "loadingrange"});
        };   
        
        const checkError = () => { 
            let errorMsg = ""
            
            if(inputForm.value.loadCode == "")
            {

                errorMsg += "Please select Loading/Extra Premium\n"

            }
            
            if(inputForm.value.effectiveDateFrom == ""){

               errorMsg += "Please select Effective Date From\n"

            }
            
            if(inputForm.value.effectiveDateTo == ""){

                errorMsg += "Please select Effective Date To\n"

            }

            return errorMsg
        }

        const saveExit = () => {    
            
            if(checkError().length > 0){
                alert(checkError())
            } else{
                    store.dispatch('loadingrange/addLoadingRange', inputForm.value).then(() => {
                    alert("Record added successfully")
                    router.push({ name: "loadingrange"});
                })             
            }
            
        }



        return {
            saveExit,
            close,
            router,
            addExclusionObj,
            inputForm,
            loadCodeLs,

        }
    },
}
</script>
