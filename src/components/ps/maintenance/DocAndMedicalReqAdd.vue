<template>

        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
                    <div>
                        <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-outlined mr-2 mb-2" @click="close" /></div> 
                        </div>  
                        <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-plus" style="background-color:#000080;" type="button" class="mr-2 mb-2" @click="saveExit" /> </div>     
                        </div>  
                    </div>
                    <div class="card p-fluid">
                        <div class="p-fluid formgrid grid">
                                <div class="field col-12 md:col-6">
                                    <label for="tableNo">Table No</label>
                                    <Dropdown id="tableNo" v-model="inputForm.tableNo" :options="tableNoLs" optionLabel="desc" optionValue="code" placeholder="Select one..." disabled />
                                </div>
                                <div class="field col-12 md:col-6">
                                </div>
                                <div class="field col-6">
                                    <label for="effectiveDateFrom">Effective Date From *</label>
                                    <Calendar class="p-inputtext-sm" id="effectiveDateFrom" v-model="inputForm.effectiveDateFrom" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
                                </div>
                                <div class="field col-6">
                                    <label for="effectiveDateTo">Effective Date To *</label>
                                    <Calendar class="p-inputtext-sm" id="effectiveDateTo" v-model="inputForm.effectiveDateTo" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="distributionChannel">Distribution Channel</label>
                                    <Dropdown id="distributionChannel" v-model="inputForm.distributionChannel" :options="distributionChannelLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="agentPrivilegeStatus">Agent Priviledge Status</label>
                                    <Dropdown id="agentPrivilegeStatus" v-model="inputForm.agentPrivilegeStatus" :options="agentPriviledgeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                                </div>
                                <div class="field col-12 md:col-6">
                                    <label for="entryAgeFrom">Entry / Attained Age From</label>
                                    <InputText id="entryAgeFrom" type="text" v-model="inputForm.entryAgeFrom"/>
                                </div>  
                                <div class="field col-12 md:col-6">
                                    <label for="entryAgeTo">Entry / Attained Age To</label>
                                    <InputText id="entryAgeTo" type="text" v-model="inputForm.entryAgeTo"/>
                                </div> 
                                <div class="field col-12 md:col-6">
                                    <label for="sarFrom">Sum At Risk From</label>
                                    <InputText id="sarFrom" type="text" v-model="inputForm.sarFrom"/>
                                </div>  
                                <div class="field col-12 md:col-6">
                                    <label for="sarTo">Sum At Risk To</label>
                                    <InputText id="sarTo" type="text" v-model="inputForm.sarTo"/>
                                </div>  
                                <div class="field col-12 md:col-6">
                                    <label for="medical">Medical *</label>
                                    <Dropdown id="medical" v-model="inputForm.medical" :options="medicalLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                                </div>
                                <CommonTable
                                    :label="'Document And Medical Table *'"
                                    :isTruncate="keySetting.isTruncate"
                                    :routePath="keySetting.routePath"
                                    :codeName="keySetting.codeName"
                                    :descName="keySetting.descName"
                                    :dataDispatch="keySetting.dataDispatch"
                                    :storeGetters="keySetting.storeGetters"
                                    :searchObj="keySetting.searchObj"
                                    v-model="inputForm.medicalDocTableNo"
                                />                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
import CommonTable from '@/components/common/CommonTable';
import masterService from "../../../service/admin/masterDataService";


export default {
    name: 'DocAndMedicalReqAdd',
    components: {
        CommonTable
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const inputForm = ref({
            tableNo: route.params.data,
            effectiveDateFrom: '',
            effectiveDateTo: '',
            agentPrivilegeStatus: '',
            distributionChannel: '',
            entryAgeFrom: '0',
            entryAgeTo: '0',
            sarFrom: '0.00',
            sarTo: '0.00',
            medical: '',
            medicalDocTableNo: ''
        });

        const tableNoLs = ref();

        const distributionChannelLs = ref();

        const agentPriviledgeLs = ref();

        const medicalLs = ref();

        const keySetting = ref({
            codeName :'code',
            descName : 'desc',
            isTruncate : false,
            routePath : '/docandmedicalcode',
            dataDispatch : 'master/getDetailCode',
            storeGetters : 'master/getMastersObj',
            searchObj : "POSDMCODETBL",
        });



        
        const close = () => {
            router.push({ name: "docandmedicalreq"});
        };   

        const checkError = () => { 

            let errorMsg = ""
            
            if(inputForm.value.effectiveDateFrom == ""){

                errorMsg += "Please select Effective Date From\n"

            }
            
            if(inputForm.value.effectiveDateTo == ""){

                errorMsg += "Please select Effective Date To\n"

            }

            if(inputForm.value.medical == ""){

                errorMsg += "Please select Medical\n"

            }
            
            if(inputForm.value.medicalDocTableNo == ""){

                errorMsg += "Please select Document And Medical Table\n"

            }

            return errorMsg
        }

        const saveExit = () => {    
            
            if(checkError().length > 0){
                alert(checkError())
            } else{

                    store.dispatch('docandmedicalreq/addDocAndMedicalReq', inputForm.value).then(() => {
                    alert("Record added successfully")
                    router.push({ name: "docandmedicalreq"});
                })             
            }
            
        }

        onMounted(() => {

            masterService.getDetailCode("TASKOUTREQTBL")
            .then((res) => {
                tableNoLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() => {
            masterService.getDetailCode("DISTCHAN")
            .then((res) => {
                distributionChannelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() => {
            masterService.getDetailCode("AGTPRIVSTATS")
            .then((res) => {
                agentPriviledgeLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })     
            }).then(() => {
            masterService.getDetailCode("MEDICAL")
            .then((res) => {
                medicalLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })     
            })
            })   
        

        });

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + " - " + mastercode.desc
            }
        }

        return {
            inputForm,
            saveExit,
            close,
            keySetting,
            distributionChannelLs,
            agentPriviledgeLs,
            medicalLs,
            tableNoLs,
            concateCodeDesc

        }
    },
}
</script>
