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
                        <div class="p-fluid formgrid grid">
                                <div class="field col-12 md:col-6">
                                    <label for="taskType">Task Type *</label>
                                    <Dropdown id="taskType" v-model="inputForm.taskType" :options="taskTypeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                                </div>
                                <div class="field col-12 md:col-6">
                                </div>
                                <CommonTable
                                    :label="'Outstanding Requirement Table'"
                                    :isTruncate="outstandingReqkeySetting.isTruncate"
                                    :routePath="alterationStatusKeySetting.routePath"
                                    :codeName="outstandingReqkeySetting.codeName"
                                    :descName="outstandingReqkeySetting.descName"
                                    :dataDispatch="outstandingReqkeySetting.dataDispatch"
                                    :storeGetters="outstandingReqkeySetting.storeGetters"
                                    :searchObj="outstandingReqkeySetting.searchObj"
                                    v-model="inputForm.outstandingRequirementTable"
                                />
                                <CommonTable
                                    :label="'Alteration Status Table'"
                                    :isTruncate="alterationStatusKeySetting.isTruncate"
                                    :routePath="alterationStatusKeySetting.routePath"
                                    :codeName="alterationStatusKeySetting.codeName"
                                    :descName="alterationStatusKeySetting.descName"
                                    :dataDispatch="alterationStatusKeySetting.dataDispatch"
                                    :storeGetters="alterationStatusKeySetting.storeGetters"
                                    :searchObj="alterationStatusKeySetting.searchObj"
                                    @displayDialog="displayModal = true"
                                    v-model="inputForm.alterationStatusTable"
                                />
                                <div class="field col-12 md:col-6">
                                    <label for="autoCancelDuration">Auto Cancellation Duration (Days) - After Register Before Approval</label>
                                    <InputText id="autoCancelDuration" type="text" v-model="inputForm.autoCancelDuration"/>
                                </div>  
                                <div class="field col-12 md:col-6">
                                    <label for="expireDuration">Expiry Duration (Days) - After Approval Before Activation</label>
                                    <InputText id="expireDuration" type="text" v-model="inputForm.expireDuration"/>
                                </div>                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AlterationStatusViewModal
            v-model="displayModal"
        />
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import CommonTable from '@/components/common/CommonTable';
import masterService from "../../../service/admin/masterDataService";
import AlterationStatusViewModal from "@/components/ps/maintenance/AlterationStatusViewModal";


export default {
    name: 'AlterationControlByGlobalDetail',
    components: {
        AlterationStatusViewModal, CommonTable
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const data = computed(() => store.state.alterationcontrol.alterationControlDetail);
        const inputForm = ref({
            seqId: data.value.seqId,
            taskType: data.value.taskType,
            outstandingRequirementTable: data.value.outstandingRequirementTable,
            alterationStatusTable: data.value.alterationStatusTable,
            chargeCurrency: data.value.chargeCurrency,
            chargeAmount: data.value.chargeAmount,
            autoCancelDuration: data.value.autoCancelDuration,
            expireDuration: data.value.expireDuration,
            stampCurrency: data.value.stampCurrency,
            stampAmount: data.value.stampAmount,
        });

        const outstandingReqkeySetting = ref({
            codeName :'code',
            descName : 'desc',
            isTruncate : false,
            routePath : '/docandmedicalreq',
            dataDispatch : 'master/getDetailCode',
            storeGetters : 'master/getMastersObj',
            searchObj : "TASKOUTREQTBL",
        });

        const alterationStatusKeySetting = ref({
            codeName :'code',
            descName : 'desc',
            isTruncate : false,
            routePath : '/docandmedicalreq',
            dataDispatch : 'master/getDetailCode',
            storeGetters : 'master/getMastersObj',
            searchObj : "ALTSTATTBL",
        });

        const displayModal = ref(false)

        const taskTypeLs = ref();

        onMounted(() => {
            masterService.getDetailCode("TASKTYPCLT")
            .then((res) => {
                taskTypeLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })


            store.dispatch('breadcrumb/set', path);
        })
 
        const path = 11;
        
        const close = () => {
            router.push({ name: "alterationcontrol"});
        };   

        const checkError = () => { 

            let errorMsg = ""
            
            if(inputForm.value.taskType == "")
            {

                errorMsg += "Please select Task Type\n"

            }
            
            if(inputForm.value.outstandingRequirementTable == ""){

               errorMsg += "Please enter Outstanding Requirement Table\n"

            }
            
            if(inputForm.value.alterationStatusTable == ""){

                errorMsg += "Please select Alteration Status Table\n"

            }
            
            if(inputForm.value.autoCancelDuration == ""){

                errorMsg += "Please select Auto Cancellation Duration\n"

            }
            
            if(inputForm.value.expireDuration == ""){

                errorMsg += "Please enter Expiry Duration\n"

            }

            return errorMsg
        }

        const saveExit = () => {    
            
            if(checkError().length > 0){
                alert(checkError())
            } else{
                store.dispatch('alterationcontrol/updateAlterationControl', inputForm.value).then(() => {
                    alert("Record saved successfully")
                    router.push({ name: "alterationcontrol"});          
                })             
            }
            
        }

        const delRecord = () => {    
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('alterationcontrol/deleteAlterationControl', inputForm.value.seqId);
                alert('Record deleted successfully')
                router.push({ name: "alterationcontrol"});
            }
          
        }



        return {
            inputForm,
            saveExit,
            delRecord,
            close,
            data,
            outstandingReqkeySetting,
            alterationStatusKeySetting,
            taskTypeLs,
            displayModal
        }
    },
}
</script>
