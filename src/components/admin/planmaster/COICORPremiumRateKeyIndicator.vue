<template>
    <div>
        <h5 class="pagePanel"><b>COI/COR Premium Rate Key Indicator</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="ageBasis">COI/COR Age Basis</label>
                <Dropdown id="ageBasis" class="p-inputtext-sm" v-model="inputForm.ageBasis" :options="ddlAgeBasis" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="ageBasedOn">COI/COR Age Based On</label>
                <Dropdown id="ageBasedOn" class="p-inputtext-sm" v-model="inputForm.ageBasedOn" :options="ddlAgeBasedOn" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="rateDateIndicator">COI/COR Rate Date Indicator</label>
                <Dropdown id="rateDateIndicator" class="p-inputtext-sm" v-model="inputForm.rateDateIndicator" :options="ddlRateDateIndicator" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Commission Rate Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="rateTable">COI/COR Rate Table</label>
                <Dropdown id="rateTable" class="p-inputtext-sm" v-model="inputForm.rateTable" :options="ddlRateTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="rateFormulaCode">COI/COR Rate Formula Code</label>
                <Dropdown id="rateFormulaCode" class="p-inputtext-sm" v-model="inputForm.rateFormulaCode" :options="ddlRateFormulaCode" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="durationCode">COI Duration Code</label>
                <Dropdown id="durationCode" class="p-inputtext-sm" v-model="inputForm.durationCode" :options="ddlDurationCode" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>  
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'COI/CORPremiumRateKeyIndicator',
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

        const inputForm = reactive({
            ageBasis: '',
            ageBasedOn: '',
            rateDateIndicator: '',
            categories: '',
            rateTable: '',
            rateFormulaCode: '',
            durationCode: ''
        })

        const ddlAgeBasis = ref([
            { name: 'L - Last', value: 'L' },
            { name: 'N - Next', value: 'N' },
            { name: 'R - Nearest', value: 'R' },
        ])
        
        const ddlAgeBasedOn = ref([
            { name: 'AA - ATTAINED AGE', value: 'AA' },
            { name: 'EA - ENTRY AGE', value: 'EA' },
        ])

        const ddlRateDateIndicator = ref([
            { name: 'COMM - COMMENCEMENT DATE', value: 'COMM' },
            { name: 'LASTANN - LAST ANNIVERSARY', value: 'LASTANN' },
        ])

        const ddlRateTable = ref([
            { name: 'ADB - ACCIDENTAL DEATH BENEFIT', value: 'ADB' },
            { name: 'AHCP100 - ACCIDENTAL HOSPITAL CASH PLAN 100', value: 'AHCP100' },
            { name: 'AHCP200 - ACCIDENTAL HOSPITAL CASH PLAN 200', value: 'AHCP200' },
            { name: 'AHCP300 - ACCIDENTAL HOSPITAL CASH PLAN 300', value: 'AHCP300' },
            { name: 'AHCP400 - ACCIDENTAL HOSPITAL CASH PLAN 400', value: 'AHCP400' },
            { name: 'AHCP500 - ACCIDENTAL HOSPITAL CASH PLAN 500', value: 'AHCP500' },                                    
            { name: 'CI - CRITICAL ILLNESS', value: 'CI' },
        ])

        const ddlRateFormulaCode = ref([
            { name: 'FA - FA / UNIT / MULTIPLER', value: 'FA' },
            { name: 'RATE - RATE / UNIT / MULTIPLER', value: 'RATE' },
            { name: 'TOTALPREM - TOTAL PREMIUM / UNIT MULTIPLER', value: 'TOTALPREM' },
        ])

        const ddlDurationCode = ref([
            { name: 'BPPP - FOLLOW BASIC PPP', value: 'BPPP' },
            { name: 'CERTPRD - CERTAIN PERIOD', value: 'CERTPRD' },
            { name: 'COVAGEMAX - COVERAGE AGE MAX', value: 'COVAGEMAX' },
            { name: 'SINGPYMT - SINGLE PAYMENT', value: 'SINGPYMT' },
        ])


        return {
            ddlAgeBasis,
            ddlAgeBasedOn,
            ddlRateDateIndicator,
            ddlRateFormulaCode,
            ddlRateTable,
            ddlDurationCode,
            inputForm,
            categories
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>