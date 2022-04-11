<template>
        <div>
            <h5 class="pagePanel"><b>Key Benefits Indicator</b></h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="coverageMeasurement">Coverage Measurement</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.coverageMeasurement" id="coverageMeasurement" :options="coverageMeasurementLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="coverageUnitMultiple">Coverage Unit Multiple</label>
                    <InputText class="p-inputtext-sm" id="coverageUnitMultiple" type="text" value="1,000" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="cashBenefitFormulaCode">Cash Benefit Formula Code</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.cashBenefitFormulaCode" id="cashBenefitFormulaCode" :options="cashBenefitFormulaCodeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="maturityValueFormulaCode">Maturity Value Formula Code</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.maturityValueFormulaCode" id="maturityValueFormulaCode" :options="maturityValueFormulaCodeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="installmentBasedOn">Installment Based on (For Maturity Value)</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.installmentBasedOn" id="installmentBasedOn" :options="installmentBasedOnLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="noOfInstallment">No. of Installment (For Maturity Value)</label>
                    <InputText class="p-inputtext-sm" id="noOfInstallment" type="text" value="0" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="yearBaseOn">Year Base On</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.yearBaseOn" id="yearBaseOn" :options="yearBaseOnLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Cash Benefit Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="cashBenefitRateTable">Cash Benefit Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.cashBenefitRateTable" id="cashBenefitRateTable" :options="cashBenefitRateTableLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Cash Benefit (Annuity Certain) Payable Upon Death Rate Combination</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="cashBenefitPayableDeath">Cash Benefit (Annuity Certain) Payable Upon Death Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.cashBenefitPayableDeath" id="cashBenefitPayableDeath" :options="cashBenefitPayableDeathLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Cash Benefit (Annuity Certain) Payable Upon Maturity/End Of Premium Payment Period Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="cashBenefitPayableMaturity">Cash Benefit (Annuity Certain) Payable Upon Maturity/End Of Premium Payment Period Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.cashBenefitPayableMaturity" id="cashBenefitPayableMaturity" :options="cashBenefitPayableMaturityLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Cash Benefit (Annuity Certain) Payable Upon TPD/DD Rate Combination</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="cashBenefitPayableTPDDD">Cash Benefit (Annuity Certain) Payable Upon TPD/DD Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.cashBenefitPayableTPDDD" id="cashBenefitPayableTPDDD" :options="cashBenefitPayableTPDDDLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Death Benefit Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="deathBenefit">Death Benefit Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.deathBenefit" id="deathBenefit" :options="deathBenefitLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Annuity Benefit Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="annuityBenefitRateTable">Annuity Benefit Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.annuityBenefitRateTable" id="annuityBenefitRateTable" :options="annuityBenefitRateTableLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Annuity Benefit After Death Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="annuityBenefitAfterDeath">Annuity Benefit After Death Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.annuityBenefitAfterDeath" id="annuityBenefitAfterDeath" :options="annuityBenefitAfterDeathLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Refund Premium Bonus Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="refundPremiumBonus">Refund Premium Bonus Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.refundPremiumBonus" id="refundPremiumBonus" :options="refundPremiumBonusLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Death/TPD Formula Code Table Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="deathTPDFormula">Death/TPD Formula Code Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.deathTPDFormula" id="deathTPDFormula" :options="deathTPDFormulaLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="additionalDeductionFormula">Additional and Deduction Formula Code</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.additionalDeductionFormula" id="additionalDeductionFormula" :options="additionalDeductionFormulaLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="lienTable">Lien Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.lienTable" id="lienTable" :options="lienTableLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
            </div>
        </div>

</template>

<script>
import { ref } from 'vue'


export default {
    name: 'KeyBenefitsIndicator',
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
            coverageMeasurement: 'FA',
            coverageUnitMultiple: '0',
            cashBenefitFormulaCode: 'SP',
            maturityValueFormulaCode: 'FA',
            installmentBasedOn: 'YEARLY',
            noOfInstallment: '0',
            yearBaseOn: 'TABLE 1',
            cashBenefitRateTable: 'GUNAIII',
            cashBenefitPayableDeath: '',
            cashBenefitPayableMaturity: '',
            cashBenefitPayableTPDDD: '',
            deathBenefit: 'GUNAIII',
            annuityBenefitRateTable: 'PUPUK',
            annuityBenefitAfterDeath: 'ANNAFTDTH',
            refundPremiumBonus: '',
            deathTPDFormula: 'GUNAIII',
            additionalDeductionFormula: 'BBDRCP',
            lienTable: 'LIEN'


        })

        const coverageMeasurementLs = ref([
            { name: 'BASEUNIT - UNIT ON BASE', value: 'BASEUNIT' },
            { name: 'FA - FACE AMOUNT', value: 'FA' },
            { name: 'PREMIUM - PREMIUM', value: 'PREMIUM' },
        ])

        const cashBenefitFormulaCodeLs = ref([
            { name: 'FA - RATE * SUM ASSURED / UNIT MULTIPLIER', value: 'FA' },
            { name: 'SP - RATE * SINGLE PREMIUM / UNIT MULTIPLIER', value: 'SP' },
        ])

        const maturityValueFormulaCodeLs = ref([
            { name: 'CA - SINGLE PREMIUM PAID + CAPITAL APPRECIATION', value: 'CA' },
            { name: 'CV - REFER TO SURRENDER FORMULA', value: 'CV' },
            { name: 'FA - RATE * SUM ASSURED / UNIT MULTIPLIER', value: 'FA' },
            { name: 'FAWP - RATE * SUM ASSURED / UNIT MUTIPLIER (WITHOUT DEDUCT OUTSTANDING PREMIUM)', value: 'FAWP' },
            { name: 'MAXSACV - MAX(SUM ASSURED OR CASH VALUE)', value: 'MAXSACV' },
        ])

        const installmentBasedOnLs = ref([
            { name: 'YEARLY - YEARLY', value: 'YEARLY' },
        ])

        const yearBaseOnLs = ref([
            { name: 'TABLE 1 - TABLE 1', value: 'TABLE 1' },
            { name: 'TABLE 2 - TABLE 2', value: 'TABLE 2' },
        ])

        const cashBenefitRateTableLs = ref([
            { name: 'DPP - DP PERTAMINA', value: 'DPP' },
            { name: 'GUNAII - MANDIRI GUNA II', value: 'GUNAII' },
            { name: 'GUNAIII - MANDIRI GUNA III', value: 'GUNAIII' },
            { name: 'GUNAIREG - MANDIRI GUNA I (REGULAR)', value: 'GUNAIREG' },
            { name: 'GUNAISGL - MANDIRI GUNA I (SINGLE)', value: 'GUNAISGL' },
        ])

        const cashBenefitPayableDeathLs = ref([

        ])

        const cashBenefitPayableMaturityLs = ref([

        ])

        const cashBenefitPayableTPDDDLs = ref([

        ])

        const deathBenefitLs = ref([
            { name: 'DPP - DP PERTAMINA', value: 'DPP' },
            { name: 'GUNAII - MANDIRI GUNA II', value: 'GUNAII' },
            { name: 'GUNAIII - MANDIRI GUNA III', value: 'GUNAIII' },
            { name: 'GUNAIREG - MANDIRI GUNA I (REGULAR)', value: 'GUNAIREG' },
            { name: 'GUNAISGL - MANDIRI GUNA I (SINGLE)', value: 'GUNAISGL' },
        ])

        const annuityBenefitRateTableLs = ref([
            { name: 'ANNUITY01 - ANNUITY TABLE 01', value: 'ANNUITY01' },
            { name: 'PUPUK - PUPUK KALTIM', value: 'PUPUK' },
            { name: 'PUPUK2 - PUPUK KALTIM 2', value: 'PUPUK2' },
        ])


        const annuityBenefitAfterDeathLs = ref([
            { name: 'ANNAFTDTH - ANNUITY AFTER DEATH TABLE 01', value: 'ANNAFTDTH' },
            { name: 'PUPUK - PUPUK KALTIM', value: 'PUPUK' },
            { name: 'PUPUK2 - PUPUK KALTIM 2', value: 'PUPUK2' },
        ])

        const refundPremiumBonusLs = ref([

        ])

        const deathTPDFormulaLs = ref([
            { name: 'DPP - DP PERTAMINA', value: 'DPP' },
            { name: 'GUNAII - MANDIRI GUNA II', value: 'GUNAII' },
            { name: 'GUNAIII - MANDIRI GUNA III', value: 'GUNAIII' },
            { name: 'GUNAIREG - MANDIRI GUNA I (REGULAR)', value: 'GUNAIREG' },
            { name: 'GUNAISGL - MANDIRI GUNA I (SINGLE)', value: 'GUNAISGL' },
        ])

        const additionalDeductionFormulaLs = ref([
            { name: 'BBDRCP - BONUS + BENEFIT + DIV - RECOVERY PREMIUM', value: 'BBDRCP' },
        ])

        const lienTableLs = ref([
            { name: 'LIEN - LIEN TABLE', value: 'LIEN' },
        ])

        return {
            categories,
            coverageMeasurementLs,
            cashBenefitFormulaCodeLs,
            maturityValueFormulaCodeLs,
            installmentBasedOnLs,
            yearBaseOnLs,
            cashBenefitRateTableLs,
            cashBenefitPayableDeathLs,
            cashBenefitPayableMaturityLs,
            cashBenefitPayableTPDDDLs,
            deathBenefitLs,
            annuityBenefitRateTableLs,
            annuityBenefitAfterDeathLs,
            refundPremiumBonusLs,
            deathTPDFormulaLs,
            additionalDeductionFormulaLs,
            lienTableLs,
            inputForm

        }

    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>