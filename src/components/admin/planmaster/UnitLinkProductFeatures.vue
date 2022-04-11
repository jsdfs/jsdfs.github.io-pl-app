<template>
    <div>
        <h5 class="pagePanel"><b>Unit Link Product Features</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Annual Regular Top Up</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Single Top Up Per Payment</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Annual Insurance Portion</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Annual Investment Portion</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Single Premium - Sum Assured % Min</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00000" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Single Premium - Sum Assured % Max</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00000" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Guarantee Inforce Month (by month)</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="compRegularTopup">Compulsory Regular Top Up</label>
                <Dropdown class="p-inputtext-sm" id="compRegularTopup" v-model="inputForm.compRegularTopup" :options="ddlCompRegularTopup" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Withdrawal Amount</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Remaining Amount Available After Withdrawal</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Min Switching Amount</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">

            </div>
            <div class="field col-12 md:col-6">
                <label for="allGuaranteedCash">Allowable Guaranteed Cash Units Table</label>
                <Dropdown class="p-inputtext-sm" id="allGuaranteedCash" v-model="inputForm.allGuaranteedCash" :options="ddlAllGuaranteedCash" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="allocationAndChargesTable">Allocation And Charges Table</label>
                <Dropdown class="p-inputtext-sm" id="allocationAndChargesTable" v-model="inputForm.allocationAndChargesTable" :options="ddlAllocationAndChargesTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="allowableFundTable">Allowable Fund Table</label>
                <Dropdown class="p-inputtext-sm" id="allowableFundTable" v-model="inputForm.allowableFundTable" :options="ddlAllowableFundTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="policyFeeTable">Policy Fee Table</label>
                <Dropdown class="p-inputtext-sm" id="policyFeeTable" v-model="inputForm.policyFeeTable" :options="ddlPolicyFeeTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="premiumAllocationType">Premium Allocation Type</label>
                <Dropdown class="p-inputtext-sm" id="premiumAllocationType" v-model="inputForm.premiumAllocationType" :options="ddlPremiumAllocationType" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Debt Account Period (Year)</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Debt Payment Period (Year)</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="debtPaymentAllocation">Debt Payment Allocation</label>
                <Dropdown class="p-inputtext-sm" id="debtPaymentAllocation" v-model="inputForm.debtPaymentAllocation" :options="ddlDebtPaymentAllocation" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Compulsory Premium Payment Period (Year)</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="debtAccountMaintenance">Debt Account Maintenance</label>
                <Dropdown class="p-inputtext-sm" id="debtAccountMaintenance" v-model="inputForm.debtAccountMaintenance" :options="ddlDebtAccountMaintenance" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Commission Rate Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="sumAssuredMultiplierTable">Sum Assured Multiplier Table</label>
                <Dropdown class="p-inputtext-sm" id="sumAssuredMultiplierTable" v-model="inputForm.sumAssuredMultiplierTable" :options="ddlSumAssuredMultiplierTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">SA Multiplier Reduce Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesSA" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="multiplierReduceTable">SA Multiplier Reduce Table</label>
                <Dropdown class="p-inputtext-sm" id="multiplierReduceTable" v-model="inputForm.multiplierReduceTable" :options="ddlMultiplierReduceTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="closeEndFund">Close End Fund</label>
                <Dropdown class="p-inputtext-sm" id="closeEndFund" v-model="inputForm.closeEndFund" :options="ddlCloseEndFund" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="closeEndFundMaintenance">Close End Fund Maintenance</label>
                <Dropdown class="p-inputtext-sm" id="closeEndFundMaintenance" v-model="inputForm.closeEndFundMaintenance" :options="ddlCloseEndFundMaintenance" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="oneTimeChargesMaintenance">One Time Charges Maintenance</label>
                <Dropdown class="p-inputtext-sm" id="oneTimeChargesMaintenance" v-model="inputForm.oneTimeChargesMaintenance" :options="ddlOneTimeChargesMaintenance" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">i for BIK Notional Premium %</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0" />
            </div> 
        </div>
    </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
    name: 'UnitLinkProductFeatures',
    components: {

    },
    setup() {

        const inputForm = reactive({
            compRegularTopup: 'N',
            allGuaranteedCash: '',
            allocationAndChargesTable: 'DANAMAKSI', 
            allowableFundTable: '', 
            policyFeeTable: '', 
            premiumAllocationType: '', 
            debtPaymentAllocation: '', 
            debtAccountMaintenance: '',
            categories: '',
            categoriesSA: '',
            multiplierReduceTable: '',
            closeEndFund: 'N',
            closeEndFundMaintenance: '',
            oneTimeChargesMaintenance: '',
            sumAssuredMultiplierTable: 'DANAMAKSI',
        })

        const ddlCompRegularTopup = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])

        const ddlCloseEndFund = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])

        const ddlCloseEndFundMaintenance = ref([

        ])

        const ddlAllGuaranteedCash = ref([

        ])

        const ddlOneTimeChargesMaintenance = ref([

        ])

        const ddlAllocationAndChargesTable = ref([
            { name: 'DANAMAKSI - DANA MAKSIMA', value: 'DANAMAKSI' },
            { name: 'AJTM - AJ TUGU MANDIRI', value: 'AJTM' },
            { name: 'DPP - DP PERTAMINA', value: 'DPP' },
            { name: 'JHT - JHT', value: 'JHT' },
            { name: 'PTC - PTC', value: 'PTC' },
        ])

        const ddlAllowableFundTable = ref([
            { name: 'POWERLKREG - POWERLINK REGULAR', value: 'POWERLKREG' },
            { name: 'POWERLKSGL - POWERLINK SINGLE', value: 'POWERLKSGL' },
        ])
        
        const ddlPolicyFeeTable = ref([

        ])

        const ddlPremiumAllocationType = ref([

        ])

        const ddlDebtPaymentAllocation = ref([
            { name: 'DEFERCOI - DEFER COI CHARGES', value: 'DEFERCOI' },
        ])

        const ddlDebtAccountMaintenance = ref([
            { name: 'DEFERCOI - DEFER COI CHARGES', value: 'DEFERCOI' },
        ])

        const categories = [
            {name: 'Distribution Channel', key: 'D'}, 
            {name: 'Gender', key: 'G'}, 
            {name: 'Smoker / Non smoker', key: 'S'}, 
            {name: 'Coverage Expiry Age', key: 'C'},
            {name: 'Pension Age / Benefit Expiry Age', key: 'A'},
            {name: 'Premium Payment Expiry Age', key: 'R'},
            {name: 'Coverage Term', key: 'T'},
            {name: 'Benefit Term', key: 'B'},
            {name: 'Premium Payment Period', key: 'Y'},
            {name: 'Benefit Component Code', key: 'O'},
            {name: 'Monthly/ Yearly', key: 'M'}
            ]

        const ddlSumAssuredMultiplierTable = ref([
            { name: 'DANAMAKSI - TUGU DANA MAKSIMA', value: 'DANAMAKSI' },
            { name: 'POWERLKREG - POWERLINK REGULAR', value: 'POWERLKREG' },
            { name: 'POWERLKSGL - POWERLINK SINGLE', value: 'POWERLKSGL' }
        ])

        const ddlMultiplierReduceTable = ref([

        ])

        return {
            ddlCompRegularTopup,
            ddlAllGuaranteedCash,
            ddlAllocationAndChargesTable,
            ddlAllowableFundTable,
            ddlPolicyFeeTable,
            ddlPremiumAllocationType,
            ddlDebtPaymentAllocation,
            ddlDebtAccountMaintenance,
            ddlSumAssuredMultiplierTable,
            ddlCloseEndFundMaintenance,
            ddlMultiplierReduceTable,
            ddlCloseEndFund,
            ddlOneTimeChargesMaintenance,
            categories,
            inputForm,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>