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
                                <label for="effectiveDateFrom">Effective Date From *</label>
                                <Calendar class="p-inputtext-sm" id="effectiveDateFrom" v-model="inputForm.effectiveDateFrom" :showIcon="true" :showOnFocus="false" />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="effectiveDateTo">Effective Date To *</label>
                                <Calendar class="p-inputtext-sm" id="effectiveDateTo" v-model="inputForm.effectiveDateTo" :showIcon="true" :showOnFocus="false" />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="processType">Process Code *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.processType" id="processType" :options="processTypeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="tableName">Table Name Code *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.tableName" id="tableName" :options="tableNameLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="applicationCode">Application Code *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.applicationCode" id="applicationCode" :options="applicationCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="normalIndicator">Normal Indicator *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.normalIndicator" id="normalIndicator" :options="normalIndicatorLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.fundByTransLvl == true"/>
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="glCodeString">GL Code String</label>
                                <InputText class="p-inputtext-sm" v-model="inputForm.glCodeString" id="glCodeString" type="text"/>
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="glCodeStringMapping">GL Code String Mapping</label>
                                <InputText class="p-inputtext-sm" v-model="inputForm.glCodeStringMapping" id="glCodeStringMapping" type="text"/>
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="debit">Debit (DR) *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.debit" id="debit" :options="accountCodeLs" optionLabel="desc" optionValue="code"  placeholder="Select one..." />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="credit">Credit (CR) *</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.credit" id="credit" :options="accountCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t1 == true" />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="drFundTypeClass">Fund Type Class (DR)</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.drFundTypeClass" id="drFundTypeClass" :options="fundTypeLs"  optionLabel="desc" optionValue="code" placeholder="Select one..." />
                            </div>
                            <div class="field col-12 md:col-6">
                                <label for="crFundTypeClass">Fund Type Class (CR)</label>
                                <Dropdown class="p-inputtext-sm" v-model="inputForm.crFundTypeClass" id="crFundTypeClass" :options="fundTypeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t2 == true" />
                            </div>            
                            <div class="field col-12 md:col-6">
                                <label for="description">Description</label>
                                <InputText class="p-inputtext-sm" v-model="inputForm.description" id="description" type="text"/>
                            </div>
                            
                        </div>  
                    </div>  
                </div>
            </div>
        </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import masterService from "../../../service/admin/masterDataService";

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const data = JSON.parse(route.params.data)
        const processTypeLs = ref();
        const tableNameLs = ref();
        const applicationCodeLs = ref();
        const accountCodeLs = ref();
        const fundTypeLs = ref();

        const store = useStore();
        const inputForm = ref({
            effectiveDateFrom: new Date(data.effectiveDateFrom),
            effectiveDateTo: new Date (data.effectiveDateTo),
            seqId: data.seqId,
            normalIndicator: '',
            processType: data.processType,
            tableName: data.tableName,
            applicationCode: data.applicationCode,
            glCodeString: data.glCodeString,
            glCodeStringMapping: data.glCodeStringMapping,
            debit: data.debit,
            credit: data.credit,
            description: data.description,
            drFundTypeClass: data.drFundTypeClass,
            crFundTypeClass: data.crFundTypeClass,
        })

        const saveExit = () => {
            store.dispatch('codestringglentries/save', inputForm.value);
            alert("Record saved successfully")
            router.push('/codestring')
        }

        const delRecord = () => {    
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('codestringglentries/delete', inputForm.value.seqId);
                alert('Record deleted successfully')
                router.push("/codestring");
            }
        }

        const close = () => {
            router.push("/codestring");
        }

        onMounted(() => {
            masterService.getDetailCode("GLPROCESS")
            .then((res) => {
                processTypeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLTBLNAME")
            .then((res) => {
                tableNameLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() =>
            masterService.getDetailCode("APPLCODE")
            .then((res) => {
                applicationCodeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLBALCODEMAP")
            .then((res) => {
                accountCodeLs.value = res.data.map(concateCodeDesc)
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("SUBFUNDCLS")
            .then((res) => {
                fundTypeLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ))
            
        });

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + ' - ' + mastercode.desc
            }
        }

        const normalIndicatorLs = ref([
            { desc: "POSITIVE", code: "P" },
            { desc: "NEGATIVE", code: "N" },
        ]);

        return {
            inputForm, 
            close,
            processTypeLs,
            tableNameLs,
            applicationCodeLs,
            normalIndicatorLs,
            accountCodeLs,
            fundTypeLs,
            saveExit,
            delRecord,
            concateCodeDesc,
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>