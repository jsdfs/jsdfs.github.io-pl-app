<template>
        <h5>Proposal Input Details</h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="proposalType">Proposal Type</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.proposalType" id="proposalType" :options="proposalTypeLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="relatedParties">Related Parties</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.relatedParties" id="relatedParties" :options="relatedPartiesLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="planCode">Plan Code</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.planCode" id="planCode" :options="planCodeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>        
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>    
            <div class="field col-12 md:col-6">
                <label for="proposalNo">Proposal No</label>
                <InputText class="p-inputtext-sm" v-model="inputForm.proposalNo" id="proposalNo" type="text" />
            </div> 
            <div class="field col-12 md:col-6">
                <label for="proposalStatus">Proposal Status</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.proposalStatus" id="proposalStatus" :options="proposalStatusLs" optionLabel="name" optionValue="value" placeholder="Select one..." @change="format"/>
            </div>   
            <div class="field col-12 md:col-6">
                <label for="branchProposalDate">Branch Received Proposal Date</label>
                <Calendar class="p-inputtext-sm" id="branchProposalDate" v-model="inputForm.branchProposalDate" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="hqReceivedDate">HQ Received Date</label>
                <Calendar class="p-inputtext-sm" id="hqReceivedDate" v-model="inputForm.hqReceivedDate" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="declarationDate">Declaration Date</label>
                <Calendar class="p-inputtext-sm" id="declarationDate" v-model="inputForm.declarationDate" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="proposalSigningDate">Proposal Signing Date</label>
                <Calendar class="p-inputtext-sm" id="proposalSigningDate" v-model="inputForm.proposalSigningDate" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="cardNumber">Card Number</label>
                <InputText class="p-inputtext-sm" id="cardNumber" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="unit">Unit</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.unit" id="unit" :options="unitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="pjp">PJP</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.pjp" id="pjp" :options="pjpLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="proposalRefNo">Proposal Ref No</label>
                <InputText class="p-inputtext-sm" id="proposalRefNo" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="masterPolicyNo">Master Policy No</label>
                <InputText class="p-inputtext-sm" id="masterPolicyNo" type="text" value="K110044E" disabled />
            </div> 
            <div class="field col-12 md:col-6">
                <label for="staffIdIcEmpNo">Staff ID / Staff IC / Employee No</label>
                <InputText class="p-inputtext-sm" id="staffIdIcEmpNo" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="bankAccountNumber">Bank Account Number</label>
                <InputText class="p-inputtext-sm" id="bankAccountNumber" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="bankCode">Bank Code</label>
                <InputText class="p-inputtext-sm" id="bankCode" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="bankBranch">Bank Branch</label>
                <InputText class="p-inputtext-sm" id="bankBranch" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="allowNBEalier">Allow NB Production Date earlier than Policy Commence Date</label><br>
                <b><label class="p-inputtext-sm" id="allowNBEalier" style="color:darkblue;">N - NO</label></b>&nbsp;&nbsp;&nbsp;
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-outlined" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="nbProductionDateOption">NB Production Date Option</label><br>
                <b><label class="p-inputtext-sm" id="nbProductionDateOption" style="color:darkblue;">D - DEFAULT</label></b>&nbsp;&nbsp;&nbsp;
            </div>
            <div class="field col-12 md:col-6">
                <label for="nbProductionDate">NB Production Date</label>
                <Calendar class="p-inputtext-sm" id="nbProductionDate" v-model="inputForm.nbProductionDate" :showIcon="true" disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="policyCommenceDateOption">Policy Commence Date Option</label><br>
                <b><label class="p-inputtext-sm" id="policyCommenceDateOption" style="color:darkblue;">D - DEFAULT</label></b>&nbsp;&nbsp;&nbsp;
            </div>
            <div class="field col-12 md:col-6">
                <label for="policyCommenceDate">Policy Commence Date</label>
                <Calendar class="p-inputtext-sm" id="policyCommenceDate" v-model="inputForm.policyCommenceDate" :showIcon="true" disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="joinDate">Join Date</label>
                <Calendar class="p-inputtext-sm" id="joinDate" v-model="inputForm.joinDate" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="appBranchCode*">Application Branch Code*</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.appBranchCode" id="appBranchCode" :options="appBranchCodeLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="servicingUnit">Servicing Unit</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.servicingUnit" id="servicingUnit" :options="servicingUnitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="takeOverIndicator">Take Over Indicator</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.takeOverIndicator" id="takeOverIndicator" :options="takeOverIndicatorLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="previousPolicy">Previous Policy</label>
                <InputText class="p-inputtext-sm" id="previousPolicy" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="previousInsurer">Previous Insurer</label>
                <InputText class="p-inputtext-sm" id="previousInsurer" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="takeOverClauseDate">Take Over Clause Date</label>
                <InputText class="p-inputtext-sm" id="takeOverClauseDate" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="fullCustomerFactFinding">Full Customer Fact Finding (CFF)</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.fullCustomerFactFinding" id="fullCustomerFactFinding" :options="fullCustomerFactFindingLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="delayDataEntry">Delay in Data Entry</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.delayDataEntry" id="delayDataEntry" :options="delayDataEntryLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="reasonDelayDataEntry">Reason Delay in Data Entry</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.reasonDelayDataEntry" id="reasonDelayDataEntry" :options="reasonDelayDataEntryLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="lastModifiedUserID">Last Modified User ID</label><br>
                <b><label class="p-inputtext-sm" id="lastModifiedUserID" style="color:darkblue;">{{lastModifiedUserID}}</label></b>&nbsp;&nbsp;&nbsp;
            </div>
            <div class="field col-12 md:col-6">
                <label for="entryDate">Entry Date</label><br>
                <b><label class="p-inputtext-sm" id="entryDate" style="color:darkblue;">02/07/2047</label></b>&nbsp;&nbsp;&nbsp;
            </div>
        </div>

</template>

<script>
import { ref, onUpdated, toRef } from 'vue'
//import { useRoute } from 'vue-router';


export default {
    props: {
        data: Object,
        insuredSend: Object,
        policyholderSend: Object
    },
    name: 'ProposalInputHeader',
    components: {
    },
    setup(props, {emit}) {

        const dataTest = toRef(props, 'data');
        const insuredTest = toRef(props, 'insuredSend');
        const policyholderTest = toRef(props, 'policyholderSend');
        const lastModifiedUserID = dataTest.value.lastModifiedUserID

        onUpdated(() => {
            dataTest.value.proposalNo = inputForm.value.proposalNo
            dataTest.value.planCode = inputForm.value.planCode
            dataTest.value.proposalStatus = inputForm.value.proposalStatus
            emit('updateData', dataTest.value)
        })
        


        const inputForm = ref({
            proposalType: 'EXEC',
            relatedParties: 'N',
            planCode: dataTest.value.planCode,
            proposalNo: dataTest.value.proposalNo,
            proposalStatus: dataTest.value.proposalStatus,
            branchProposalDate: '01/07/2047',
            hqReceivedDate: '01/07/2047',
            declarationDate: '01/07/2047',
            proposalSigningDate: '01/07/2047',
            cardNumber: '',
            unit: 'A3',
            pjp: '002',
            proposalRefNo: '',
            masterPolicyNo:'K110044E',
            staffIdIcEmpNo: '',
            bankAccountNumber: '',
            bankCode: '',
            bankBranch: '',
            nbProductionDate: dataTest.value.nbProductionDate,
            policyCommenceDate: dataTest.value.policyCommenceDate,
            joinDate: '02/07/2047',
            appBranchCode: '1090',
            servicingUnit: '1090',
            takeOverIndicator: 'N',
            previousPolicy: '',
            previousInsurer: '',
            takeOverClauseDate: '',
            fullCustomerFactFinding: 'N',
            delayDataEntry: 'N',
            reasonDelayDataEntry: '',
        })


        const proposalTypeLs = ref([
            { name: 'EXEC - TM EXECUTIVE', value: 'EXEC' },
        ])

        const relatedPartiesLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const planCodeLs = ref([
            { name: '02.06.03 - TM EXECUTIVE SEVERANCE', value: '02.06.03' },
            { name: 'TMEX1 - TM EXECUTIVE SEVERANCE (99%)', value: 'TMEX1' },
            { name: 'TMEX1.5 - TM EXECUTIVE SEVERANCE (98.5%)', value: 'TMEX1.5' },
        ])

        const proposalStatusLs = ref([
            { name: 'UW - UNDERWRITING', value: 'UW' },
            { name: 'VALIDATE - VALIDATION', value: 'VALIDATE' },
            { name: 'PROP - PROPOSAL', value: 'PROP' },
        ])

        const unitLs = ref([
            { name: 'A1 - PT PERTAMINA (PERSERO) - KANTOR PUSAT', value: 'A1' },
            { name: 'A2 - PT PERTAMINA TRAINING & CONSULTING', value: 'A2' },
            { name: 'A3 - PT PERTAMINA MARINE REGION (PT PERTAMINA PERKAPALAN)', value: 'A3' },
            { name: 'A4 - PT PERTAMINA LUBRICANTS', value: 'A4' },
            { name: 'A5 - PT PERTAMINA DANA VENTURA', value: 'A5' },
        ])

        const pjpLs = ref([
            { name: '001 - CV PRIMA JAYA ABADI', value: '001' },
            { name: '002 - PT KOPADA JAYA', value: '002' },
            { name: '003 - KOPERASI PATRA AVIA (PERTAMINA SHAFTI)', value: '003' },
        ])

        const appBranchCodeLs = ref([
            { name: '1090 - JAKARTA HEAD OFFICE', value: '1090' },
        ])

        const servicingUnitLs = ref([
            { name: '1090 - JAKARTA HEAD OFFICE', value: '1090' },
            { name: '1091 - JAKARTA HEAD OFFICE CAPTVE', value: '1091' },
            { name: '12.04.01 - KANTOR PEMASARAN CAPTIVE', value: '12.04.01' },
        ])

        const takeOverIndicatorLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const fullCustomerFactFindingLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const delayDataEntryLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const reasonDelayDataEntryLs = ref([

        ])


        return {
            dataTest,
            proposalTypeLs,
            relatedPartiesLs,
            planCodeLs,
            proposalStatusLs,
            unitLs,
            pjpLs,
            appBranchCodeLs,
            servicingUnitLs,
            takeOverIndicatorLs,
            fullCustomerFactFindingLs,
            delayDataEntryLs,
            reasonDelayDataEntryLs,
            inputForm,
            insuredTest,
            policyholderTest,
            lastModifiedUserID,

        }
    }
}
</script>