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
                            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-check" style="background-color:#000080;" type="button" class="p-button-info mr-2 mb-2" @click="saveExit" /> </div>     
                        </div>  
                    </div>  
                    <div class="card p-fluid">
                        <div class="formgrid grid">
                            <div class="field col-6">
                                <label for="currency">Currency *</label>
                                <Dropdown v-model="inputForm.currency" id="currency" :options="currencyLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-6">
                                <label for="division">Division *</label>
                                <Dropdown v-model="inputForm.division" id="division" :options="divisionLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
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
                                <label for="annualPremiumFrom">Annual Premium From *</label>
                                <InputText id="annualPremiumFrom" type="text" v-model="inputForm.annualPremiumFrom"/>
                            </div>
                            <div class="field col-6">
                                <label for="annualPremiumTo">Annual Premium To *</label>
                                <InputText id="annualPremiumTo" type="text" v-model="inputForm.annualPremiumTo"/>
                            </div>    
                            <div class="field col-6">
                                <label for="sarFrom">Sum At Risk From *</label>
                                <InputText id="sarFrom" type="text" v-model="inputForm.sarFrom"/>
                            </div>    
                            <div class="field col-6">
                                <label for="sarTo">Sum At Risk To *</label>
                                <InputText id="sarTo" type="text" v-model="inputForm.sarTo"/>
                            </div>  
                            <div class="field col-6">
                                <label for="uwLevel">Level *</label>
                                <Dropdown v-model="inputForm.uwLevel" id="uwLevel" :options="uwLevelLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>  
                                <CommonTable
                                    :label="'Underwriter Group Table *'"
                                    :isTruncate="keySetting.isTruncate"
                                    :codeName="keySetting.codeName"
                                    :descName="keySetting.descName"
                                    :dataDispatch="keySetting.dataDispatch"
                                    :storeGetters="keySetting.storeGetters"
                                    :searchObj="keySetting.searchObj"
                                    @displayDialog="displayModal = true"
                                    v-model="inputForm.underWriterGroupTable"
                                />
                                <UwGroupViewModal
                                    v-model="displayModal"
                                />

                        </div>  
                    </div>       
                </div>
            </div>
        </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import masterService from "../../../service/admin/masterDataService";
import CommonTable from '@/components/common/CommonTable';
import UwGroupViewModal from "@/components/nb/maintenance/UwGroupViewModal";


export default {
    components: {
        CommonTable, UwGroupViewModal
    },
    name: 'UwApprovalLimitDetail',
    setup() {
        const store = useStore();
        const router = useRouter();

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        })
 
         const path = 10;

        const displayModal = ref(false)


        const keySetting = ref({
            codeName :'seqId',
            descName : 'uwGroup',
            isTruncate : false,
            dataDispatch : 'uwgrouptable/search',//'uwgrouptable/getAllRecords'
            storeGetters : 'uwgrouptable/getUwGroupTableObj',
            searchObj : {},
        });


        // const codeName = 'code'
        // const descName = 'desc'
        // const isTruncate = false
        // const dataDispatch = 'master/getDetailCode'
        // const storeGetters = 'master/getMastersObj'
        // const searchObj = 'DIVISION'

        


        const data = computed(() => store.state.uwapprovallimit.uwApprovalLimitDetail);

        const inputForm = ref({
            seqId: data.value.seqId,
            currency: data.value.currency,
            division: data.value.division,
            effectiveDateFrom: new Date(data.value.effectiveDateFrom),
            effectiveDateTo: new Date(data.value.effectiveDateTo),
            annualPremiumFrom: data.value.annualPremiumFrom + '',
            annualPremiumTo: data.value.annualPremiumTo  + '',
            sarFrom: data.value.sarFrom  + '',
            sarTo: data.value.sarTo  + '',
            uwLevel: data.value.uwLevel,
            underWriterGroupTable: data.value.underWriterGroupTable
        });

        const uwLevelLs = ref([])
        const currencyLs = ref([])
        const divisionLs = ref([])


        const close = () => {
            router.push({ name: "uwapprovallimit"});
        };     


        const checkError = () => { 
            let errorMsg = ""
            
            if(inputForm.value.currency == "")
            {

                errorMsg += "Please select Currency\n"

            }
            
            if(inputForm.value.division == ""){

               errorMsg += "Please select Division\n"

            }
            
            if(inputForm.value.effectiveDateFrom == ""){

                errorMsg += "Please select Effective Date From\n"

            }
            
            if(inputForm.value.effectiveDateTo == ""){

                errorMsg += "Please select Effective Date To\n"

            }
            
            if(inputForm.value.annualPremiumFrom == ""){

                errorMsg += "Please enter Annual Premium From\n"

            }

            if(inputForm.value.annualPremiumTo == ""){

                errorMsg += "Please enter Annual Premium To\n"

            }

            if(inputForm.value.sarFrom == ""){

                errorMsg += "Please enter Sum At Risk From\n"

            }

            if(inputForm.value.sarTo == ""){

                errorMsg += "Please enter Sum At Risk To\n"

            }

            if(inputForm.value.uwLevel == ""){

                errorMsg += "Please select Level\n"

            }

            if(inputForm.value.uwGroup == ""){

                errorMsg += "Please select Underwriter Group Table\n"

            }

            return errorMsg
        }

        const saveExit = () => {    
            
            if(checkError().length > 0){
                alert(checkError())
            } else{
            
                store.dispatch('uwapprovallimit/updateUwApprovalLimit', inputForm.value).then(() => {
                    alert("Record saved successfully")
                    router.push({ name: "uwapprovallimit"});
                })
            
            }
            
        }

        const delRecord = () => {    
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('uwapprovallimit/deleteUwApprovalLimit', inputForm.value.seqId);
                alert('Record deleted successfully')
                router.push({ name: "uwapprovallimit"});
            }
          
        }

        onMounted(() => {

            masterService.getDetailCode("CURRENCY")
            .then((res) => {
                //console.log("All type detail: " + JSON.stringify(res.data, null, 4));
                currencyLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>

            masterService.getDetailCode("DIVISION")
            .then((res) => {
                //console.log("All code detail: " + JSON.stringify(res.data, null, 4));
                divisionLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>

            masterService.getDetailCode("UNDRLVL")
            .then((res) => {
                //console.log("All code detail: " + JSON.stringify(res.data, null, 4));
                uwLevelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }))
            
            )
            
        })

        return {
            close,
            data,
            inputForm,
            checkError,
            saveExit,
            delRecord,
            currencyLs,
            divisionLs,
            uwLevelLs,
            displayModal,
            keySetting,

        }
    },
}
</script>

<style>

/* [class*="col-"] {
  margin-bottom: 0.8em;
} */



</style>

