<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card p-fluid ">
            <div>
                <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-rounded p-button-text mr-2 mb-2" @click="close" /></div> 
                </div>  
                <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-plus" style="background-color:#000080;" type="button" class="mr-2 mb-2" @click="saveExit" /> </div>     
                </div>  
            </div>
            <div class="card p-fluid ">
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
                        <label for="accountCode">Account Code *</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.accountCode" id="accountCode" :options="accountCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="accountType">Account Type *</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.accountType" id="acctype" :options="accountTypeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="fundByTransLvl">Fund Type by Transaction Level *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.fundByTransLvl == 'Y') ? inputForm.subFundClass = '': inputForm.subFundClass" v-model="inputForm.fundByTransLvl" id="fundByTransLvl" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="subFundClass">Fund Type Class *</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.subFundClass" id="subFundClass" :options="subFundLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.fundByTransLvl == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t0">T0 (Fund Type) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t0 == 'Y') ? inputForm.glt0 = '' : inputForm.glt0" v-model="inputForm.t0" id="t0" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt0">Fund Type (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt0" id="glt0" :options="fundTypeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t0 == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t1">T1 (Product Group) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t1 == 'Y') ? inputForm.glt1 = '' : inputForm.glt1" v-model="inputForm.t1" id="t1" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt1">Product Group (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt1" id="glt1" :options="productGroupLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t1 == 'Y'" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t2">T2 (Product) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t2 == 'Y') ? inputForm.glt2 = '' : inputForm.glt2" v-model="inputForm.t2" id="t2" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt2">Product (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt2" id="glt2" :options="notAnalzyed" optionLabel="name" optionValue="value" placeholder="Select one..." :disabled="inputForm.t2 == 'Y'" />
                    </div>            
                    <div class="field col-12 md:col-6">
                        <label for="t3">T3 (Distribution Channel) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t3 == 'Y') ? inputForm.glt3 = '' : inputForm.glt3" v-model="inputForm.t3" id="t3" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt3">Distribution Channel (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt3" id="glt3" :options="distributionChannelLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t3 == 'Y'"/>
                    </div>  
                    <div class="field col-12 md:col-6">
                        <label for="t4">T4 (Policy Year) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t4 == 'Y') ? inputForm.glt4 = '' : inputForm.glt4" v-model="inputForm.t4" id="t4" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt4">Policy Year (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt4" id="glt4" :options="policyYearLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t4 == 'Y'" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t5">T5 (Cost Center) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t5 == 'Y') ? inputForm.glt5 = '' : inputForm.glt5" v-model="inputForm.t5" id="t5" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt5">Cost Center (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt5" id="glt5" :options="costCenterLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t5 == 'Y'"  />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t6">T6 (Supplier) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t6 == 'Y') ? inputForm.glt6 = '' : inputForm.glt6" v-model="inputForm.t6" id="t6" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt6">Supplier (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt6" id="glt6" :options="notAnalzyed" optionLabel="name" optionValue="value" placeholder="Select one..." :disabled="inputForm.t6 == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t7">T7 (Customer) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t7 == 'Y') ? inputForm.glt7 = '' : inputForm.glt7" v-model="inputForm.t7" id="t7" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt7">Customer (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt7" id="glt7" :options="customerLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.t7 == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t8">T8 (Reinsurance) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t8 == 'Y') ? inputForm.glt8 = '' : inputForm.glt8" v-model="inputForm.t8" id="t8" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt8">Reinsurance (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt8" id="glt8" :options="reinsuranceDefaultLs" optionLabel="name" optionValue="value" placeholder="Select one..." :disabled="inputForm.t8 == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="t9">T9 (Cash Flow) *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.t9 == 'Y') ? inputForm.glt9 = '' : inputForm.glt9" v-model="inputForm.t9" id="t9" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glt9">Cash Flow (Default)</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glt9" id="glt9" :options="cashFlowDefaultLs" optionLabel="name" optionValue="value" placeholder="Select one..." :disabled="inputForm.t9 == 'Y'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="collectionBank">Collection Bank *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.collectionBank == 'N') ? inputForm.glColloctionBankAccountNo = '' : inputForm.glColloctionBankAccountNo" v-model="inputForm.collectionBank" id="collectionBank" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glColloctionBankAccountNo">Collection Bank Account No</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glColloctionBankAccountNo" id="glColloctionBankAccountNo" :options="colbankLs" optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.collectionBank == 'N'"/>
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="disbursementBank">Disbursement Bank *</label>
                        <Dropdown class="p-inputtext-sm" v-bind:model="(inputForm.disbursementBank == 'N') ? inputForm.glDisbursementBankAccountNo = '' : inputForm.glDisbursementBankAccountNo" v-model="inputForm.disbursementBank" id="disbursementBank" :options="yesNoQuestion" optionLabel="name" optionValue="value" placeholder="Select one..." />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="glDisbursementBankAccountNo">Disbursement Bank Account No</label>
                        <Dropdown class="p-inputtext-sm" v-model="inputForm.glDisbursementBankAccountNo" id="glDisbursementBankAccountNo" :options="disbankLs"  optionLabel="desc" optionValue="code" placeholder="Select one..." :disabled="inputForm.disbursementBank == 'N'"/>
                    </div>     
            </div>                                                 
            </div>
            </div>   
        </div>   
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import masterService from "../../../service/admin/masterDataService";
import { useStore } from 'vuex';

export default {
    setup() {
        const router = useRouter();
        const accountCodeLs = ref();
        const accountTypeLs = ref();
        const subFundLs = ref();
        const fundTypeLs = ref();
        const productGroupLs = ref()
        const distributionChannelLs = ref()
        const policyYearLs = ref()
        const costCenterLs = ref()
        const customerLs = ref()
        const colbankLs = ref()
        const disbankLs = ref()
        const store = useStore();

        const inputForm = ref({
            effectiveDateFrom: '',
            effectiveDateTo: '',
            accountCode: '',
            accountType: '',
            fundByTransLvl: 'N',
            subFundClass: '',
            t0: 'Y',
            glt0: '',
            t1: 'Y',
            glt1: '',
            t2: 'Y',
            glt2: '',
            t3: 'Y',
            glt3: '',
            t4: 'Y',
            glt4: '',
            t5: 'Y',
            glt5: '',
            t6: 'Y',
            glt6: '',
            t7: 'Y',
            glt7: '',
            t8: 'Y',
            glt8: '',
            t9: 'Y',
            glt9: '',
            collectionBank: 'N',
            glColloctionBankAccountNo: '',
            disbursementBank: 'N',
            glDisbursementBankAccountNo: '',
        })

        const saveExit = () => {
            store.dispatch('chartofaccount/add', inputForm.value);
            alert("Record saved successfully")
            router.push('/chartofaccount')
        }

        const close = () => {
            router.push("/chartofaccount");
        }

        onMounted(() => {
            masterService.getDetailCode("GLBALCODEMAP")
            .then((res) => {
                accountCodeLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("GLBALCODETYPE")
            .then((res) => {
                accountTypeLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("SUBFUNDCLS")
            .then((res) => {
                subFundLs.value = res.data.map(concateCodeDesc);
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("FUNDTYPE")
            .then((res) => {
                fundTypeLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("PRODUCTCLS")
            .then((res) => {
                productGroupLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("DISTCHAN")
            .then((res) => {
                distributionChannelLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("GLPOLYR")
            .then((res) => {
                policyYearLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("REPOFFCODE")
            .then((res) => {
                costCenterLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("GLT7")
            .then((res) => {
                customerLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("COLLBANK")
            .then((res) => {
                colbankLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            })).then(() =>
            masterService.getDetailCode("BANKDIS")
            .then((res) => {
                disbankLs.value = res.data;
            })
            .catch(e => {
                console.error(e.response.status);
            }))
        });

        const concateCodeDesc = (mastercode) => {
            return {
                code: mastercode.code,
                desc: mastercode.code + ' - ' + mastercode.desc
            }
        }

        const yesNoQuestion = ref([
            { name: 'Yes', value: 'Y' },
            { name: 'No', value: 'N' },        
        ])
        
        const notAnalzyed = ref([
            { name: '# - NOT ANALYZED', value: '#' },                             
        ])

        const reinsuranceDefaultLs = ref([
            { name: '# - NOT ANALYZE', value: '#' },
            { name: 'MRN - MAREIN', value: 'MRN' }, 
            { name: 'NURSE - NURSATARARE', value: 'NURSE' }, 
            { name: 'TGR - TUGU RE', value: 'TGR' },                                        
        ])


        const cashFlowDefaultLs = ref([
            { name: '# - NOT ANALYZE', value: '#' },
            { name: '1 - Penerimaan premi', value: '1' }, 
            { name: '2 - Pembayaran pajak', value: '2' }, 
            { name: '3 - Pembayaran premi reasuransi', value: '3' },                                        
        ])

        return {
            inputForm, 
            yesNoQuestion,
            close,
            fundTypeLs,
            accountCodeLs,
            accountTypeLs,
            productGroupLs,
            notAnalzyed,
            subFundLs,
            saveExit,
            costCenterLs,
            policyYearLs,
            cashFlowDefaultLs,
            distributionChannelLs,
            customerLs,
            concateCodeDesc,
            colbankLs,
            disbankLs,
            reinsuranceDefaultLs,
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>