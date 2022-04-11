<template>
    <div>
        <h5 class="pagePanel"><b>Product Features</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="surrenderFormula">Surrender Formula Code</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.surrenderFormula" id="surrenderFormula" :options="surrenderFormulaLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Surrender Value Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="surrenderValueTable">Surrender Value Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.surrenderValueTable" id="surrenderValueTable" :options="surrenderValueTableLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="csvFactor">CSV Factor</label>
                <InputText class="p-inputtext-sm" id="csvFactor" type="text" value="0.00000" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Commutation Function - Surrender Value Calculation Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="commutationFunctionSurrender">Commutation Function - Surrender Value Calculation Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.commutationFunctionSurrender" id="commutationFunctionSurrender" :options="commutationFunctionSurrenderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Non-Guaranteed Surrender Value Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="nGuaranteedSurrender">Non-Guaranteed Surrender Value Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedSurrender" id="nGuaranteedSurrender" :options="nGuaranteedSurrenderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Cancellation Value Combination Key Maintenance</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="cancellationValue">Cancellation Value Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.cancellationValue" id="cancellationValue" :options="cancellationValueLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Reduced Paid-up Insurance Rate Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="reducedPaidUpInsuranceRate">Reduced Paid-up Insurance Rate Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.reducedPaidUpInsuranceRate" id="reducedPaidUpInsuranceRate" :options="reducedPaidUpInsuranceRateLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Commutation Function - Reduce Paid Up Table Maintenance Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="commutationFuncReducePaidUp">Commutation Function - Reduce Paid Up Table Maintenance</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.commutationFuncReducePaidUp" id="commutationFuncReducePaidUp" :options="commutationFuncReducePaidUpLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="reducedPaidUpInsurancePlan">Reduced Paid-up Insurance Plan</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.reducedPaidUpInsurancePlan" id="reducedPaidUpInsurancePlan" :options="reducedPaidUpInsurancePlanLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Paid-up Insurance Rate Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="paidUpInsuranceRate">Paid-up Insurance Rate Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.paidUpInsuranceRate" id="paidUpInsuranceRate" :options="paidUpInsuranceRateLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="paidUpRider">Paid-up Rider</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.paidUpRider" id="paidUpRider" :options="paidUpRiderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="paidUpInsurancePlan">Paid-up Insurance Plan</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.paidUpInsurancePlan" id="paidUpInsurancePlan" :options="paidUpInsurancePlanLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="categories">Extended Term Insurance Rate Combination Key</label><br><br>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="extendedTermInsuranceRate">Extended Term Insurance Rate Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.extendedTermInsuranceRate" id="extendedTermInsuranceRate" :options="extendedTermInsuranceRateLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="extendedTermInsurancePlan">Extended Term Insurance Plan</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.extendedTermInsurancePlan" id="extendedTermInsurancePlan" :options="extendedTermInsurancePlanLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="aplOption">APL Option</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.aplOption" id="aplOption" :options="aplOptionLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="allowableAltType">Allowable Alteration Type Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.allowableAltType" id="allowableAltType" :options="allowableAltTypeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="altControl">Alteration Control Table</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.altControl" id="altControl" :options="altControlLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="maturityOption">Maturity Option</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.maturityOption" id="maturityOption" :options="maturityOptionLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="minAltRefundAmt">Min Alteration Refund Amount</label>
                <InputText class="p-inputtext-sm" v-model="inputForm.minAltRefundAmt" id="minAltRefundAmt" type="text" value="0.00" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="guaranteedInsurability">Guaranteed Insurability</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.guaranteedInsurability" id="guaranteedInsurability" :options="guaranteedInsurabilityLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="withdrawalCashBenefit">Withdrawal Cash Benefit In Advance Interest</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.withdrawalCashBenefit" id="withdrawalCashBenefit" :options="withdrawalCashBenefitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="discRateForFutureBenefit">Discount Rate For Future Benefit Payment</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.discRateForFutureBenefit" id="discRateForFutureBenefit" :options="discRateForFutureBenefitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="claimTypeLimit">Claim Type Limit Maintenance</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.claimTypeLimit" id="claimTypeLimit" :options="claimTypeLimitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
        </div>            
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    name: 'ProductFeatures',
    components: {
    },
    setup() {

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

        const inputForm = ref({
            surrenderFormula: 'FA',
            surrenderValueTable: 'TPIK87',
            commutationFunctionSurrender: '',
            nGuaranteedSurrender: '',
            cancellationValue: '',
            reducedPaidUpInsuranceRate: '',
            commutationFuncReducePaidUp: '',
            reducedPaidUpInsurancePlan: '',
            paidUpInsuranceRate: '',
            paidUpRider: '',
            paidUpInsurancePlan: '',
            extendedTermInsuranceRate: '',
            extendedTermInsurancePlan: '',
            aplOption: 'N',
            allowableAltType: 'ALTMG',
            altControl: 'CTRTABMG',
            maturityOption: '',
            minAltRefundAmt: '0.00',
            guaranteedInsurability: 'N',
            withdrawalCashBenefit: '',
            discRateForFutureBenefit: '',
            claimTypeLimit: ''


        })

        const surrenderFormulaLs = ref([
            { name: '1 - CODE 1', value: '1' },
            { name: '2 - CODE 2', value: '2' },
            { name: 'CASHFLOW - CASH FLOW', value: 'CASHFLOW' },
            { name: 'FA - RATE * SUM ASSURED / UNIT MULTIPLIER', value: 'FA' },
        ])

        const surrenderValueTableLs = ref([
            { name: 'RPTP1.5 - RIDER K870001 PERTAMINA INC 1.5MIO PER YEAR', value: 'RPTP1.5' },
            { name: 'TMEXEC - TM EXECUTIVE SEVERANCE', value: 'TMEXEC' },
            { name: 'TPIK87 - TUGU PRATAMA INDONESIA', value: 'TPIK87' },
        ])

        const commutationFunctionSurrenderLs = ref([

        ])

        const nGuaranteedSurrenderLs = ref([

        ])

        const cancellationValueLs = ref([

        ])

        const reducedPaidUpInsuranceRateLs = ref([

        ])

        const commutationFuncReducePaidUpLs = ref([

        ])

        const reducedPaidUpInsurancePlanLs = ref([

        ])

        const paidUpInsuranceRateLs = ref([

        ])

        const paidUpRiderLs = ref([

        ])

        const paidUpInsurancePlanLs = ref([

        ])

        const extendedTermInsuranceRateLs = ref([

        ])

        const extendedTermInsurancePlanLs = ref([

        ])

        const aplOptionLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const allowableAltTypeLs = ref([
            { name: 'ALTMAPS - ALTERATION MAPS', value: 'ALTMAPS' },
            { name: 'ALTMG - ALTERATION MANDIRI GUNA', value: 'ALTMG' },
            { name: 'ALTPL - ALTERATION POWER LINK', value: 'ALTPL' },
        ])

        const altControlLs = ref([
            { name: 'CTRTABEXSV - CONTROL TABLE TM EXECUTIVE SEVERANCE', value: 'CTRTABEXSV' },
            { name: 'CTRTABMAPS - CONTROL TABLE MAPS', value: 'CTRTABMAPS' },
            { name: 'CTRTABMG - CONTROL TABLE MANDIRI GUNA', value: 'CTRTABMG' },
        ])

        const maturityOptionLs = ref([

        ])

        const guaranteedInsurabilityLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const withdrawalCashBenefitLs = ref([

        ])

        const discRateForFutureBenefitLs = ref([

        ])

        const claimTypeLimitLs = ref([

        ])

        return {
            inputForm,
            categories,
            surrenderFormulaLs,
            surrenderValueTableLs,
            commutationFunctionSurrenderLs,
            nGuaranteedSurrenderLs,
            cancellationValueLs,
            reducedPaidUpInsuranceRateLs,
            commutationFuncReducePaidUpLs,
            reducedPaidUpInsurancePlanLs,
            paidUpInsuranceRateLs,
            paidUpRiderLs,
            paidUpInsurancePlanLs,
            extendedTermInsuranceRateLs,
            extendedTermInsurancePlanLs,
            aplOptionLs,
            allowableAltTypeLs,
            altControlLs,
            maturityOptionLs,
            guaranteedInsurabilityLs,
            withdrawalCashBenefitLs,
            discRateForFutureBenefitLs,
            claimTypeLimitLs

        }

    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>