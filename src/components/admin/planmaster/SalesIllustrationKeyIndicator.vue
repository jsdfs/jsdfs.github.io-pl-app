<template>
    <div>
        <h5 class="pagePanel"><b>Sales Illustration Key Indicator</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="syncIndicator">Product Sync Indicator</label>
                <Dropdown id="syncIndicator" class="p-inputtext-sm" v-model="inputForm.syncIndicator" :options="ddlSyncIndicator" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="proposalFormType">Proposal Form Type *</label>
                <Dropdown id="proposalFormType" class="p-inputtext-sm" v-model="inputForm.proposalFormType" :options="ddlProposalFormType" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="siFormType">SI Form Type *</label>
                <Dropdown id="siFormType" class="p-inputtext-sm" v-model="inputForm.siFormType" :options="ddlSIformType" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="pdsFormType">PDS Form Type</label>
                <Dropdown id="pdsFormType" class="p-inputtext-sm" v-model="inputForm.pdsFormType" :options="ddlPDSformType" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="rof">Return Of Fund</label>
                <Dropdown id="rof" class="p-inputtext-sm" v-model="inputForm.rof" :options="ddlrof" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="nonGuaranteeFundRate">Non Guarantee Fund Rate</label>
                <Dropdown id="nonGuaranteeFundRate" class="p-inputtext-sm" v-model="inputForm.nonGuaranteeFundRate" :options="ddlNonGuaranteeFundRate" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Accumulation Rate - Low</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00000" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Accumulation Rate - Medium</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00000" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Accumulation Rate - High</label>
                <InputText class="p-inputtext-sm" id="planCode" type="text" value="0.00000" />
            </div> 
            <div class="field col-12 md:col-6">

            </div>     
            <div class="field col-12 md:col-6">
                <label for="code">Cash Dividend Scenario A Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesScenarioA" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="cashDividendScenarioRateTableA">Cash Dividend Scenario A Rate Table</label>
                <Dropdown id="cashDividendScenarioRateTableA" class="p-inputtext-sm" v-model="inputForm.cashDividendScenarioRateTableA" :options="ddlCashDividendScenarioRateTableA" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Cash Dividend Scenario B Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesScenarioB" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="cashDividendScenarioRateTableB">Cash Dividend Scenario B Rate Table</label>
                <Dropdown id="cashDividendScenarioRateTableB" class="p-inputtext-sm" v-model="inputForm.cashDividendScenarioRateTableB" :options="ddlCashDividendScenarioRateTableB" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>   
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Death Scenario A Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesTerminalScenarioA" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendScenarioRateTableA">Terminal Dividend Payable On Death Scenario A Rate Table</label>
                <Dropdown id="terminalDividendScenarioRateTableA" class="p-inputtext-sm" v-model="inputForm.terminalDividendScenarioRateTableA" :options="ddlTerminalDividendScenarioRateTableA" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Death Scenario B Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesTerminalScenarioB" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendScenarioRateTableB">Terminal Dividend Payable On Death Scenario B Rate Table</label>
                <Dropdown id="terminalDividendScenarioRateTableB" class="p-inputtext-sm" v-model="inputForm.terminalDividendScenarioRateTableB" :options="ddlTerminalDividendScenarioRateTableB" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Surrender Scenario A Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesSurrenderScenarioA" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendSurrenderScenarioRateTableA">Terminal Dividend Payable On Surrender Scenario A Rate Table</label>
                <Dropdown id="terminalDividendSurrenderScenarioRateTableA" class="p-inputtext-sm" v-model="inputForm.terminalDividendSurrenderScenarioRateTableA" :options="ddlTerminalDividendSurrenderScenarioRateTableA" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Surrender Scenario B Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesSurrenderScenarioB" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendSurrenderScenarioRateTableB">Terminal Dividend Payable On Surrender Scenario B Rate Table</label>
                <Dropdown id="terminalDividendSurrenderScenarioRateTableB" class="p-inputtext-sm" v-model="inputForm.terminalDividendSurrenderScenarioRateTableB" :options="ddlTerminalDividendSurrenderScenarioRateTableB" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div> 
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Maturity Scenario A Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesMaturityScenarioA" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendMaturityScenarioRateTableA">Terminal Dividend Payable On Maturity Scenario A Rate Table</label>
                <Dropdown id="terminalDividendMaturityScenarioRateTableA" class="p-inputtext-sm" v-model="inputForm.terminalDividendMaturityScenarioRateTableA" :options="ddlTerminalDividendMaturityScenarioRateTableA" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="code">Terminal Dividend Payable On Maturity Scenario B Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categoriesMaturityScenarioB" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>  
            <div class="field col-12 md:col-6">
                <label for="terminalDividendMaturityScenarioRateTableB">Terminal Dividend Payable On Maturity Scenario B Rate Table</label>
                <Dropdown id="terminalDividendMaturityScenarioRateTableB" class="p-inputtext-sm" v-model="inputForm.terminalDividendMaturityScenarioRateTableB" :options="ddlTerminalDividendMaturityScenarioRateTableB" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div> 
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'SalesIllustrationKeyIndicator',
    components: {

    },
    setup() {

        const inputForm = reactive({
            syncIndicator: 'N',
            proposalFormType: '',
            siFormType: '',
            pdsFormType: '',
            rof: '',
            nonGuaranteeFundRate: '',
            categoriesScenarioA: '',
            categoriesScenarioB: '',
            categoriesTerminalScenarioA: '',
            categoriesTerminalScenarioB: '',
            cashDividendScenarioRateTableA: '',
            cashDividendScenarioRateTableB: '',
            categoriesSurrenderScenarioA: '',
            categoriesSurrenderScenarioB: '',
            categoriesMaturityScenarioA: '',
            categoriesMaturityScenarioB: '',
            terminalDividendScenarioRateTableA: '',
            terminalDividendScenarioRateTableB: '',
            terminalDividendSurrenderScenarioRateTableA: '',
            terminalDividendSurrenderScenarioRateTableB: '',
            terminalDividendMaturityScenarioRateTableA: '',
            terminalDividendMaturityScenarioRateTableB: ''
        })

        const ddlSyncIndicator = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])
        
        const ddlProposalFormType = ref([
           
        ])

        const ddlSIformType = ref([
            { name: 'ILP01 - ILP01', value: 'ILP01' },
            { name: 'TL01 - TL01', value: 'TL01' },
            { name: 'TL02 - TL02', value: 'TL02' },
            { name: 'TL03 - TL03', value: 'TL03' },
            { name: 'TL04 - TL04', value: 'TL04' },
            { name: 'TL05 - TL05', value: 'TL05' },                        
        ])

        const ddlPDSformType = ref([

        ])

        const ddlrof = ref ([

        ])

        const nonGuaranteeFundRate = ref ([

        ])

        const ddlCashDividendScenarioRateTableA = ref ([

        ])

        const ddlCashDividendScenarioRateTableB = ref ([

        ])    

        const ddlTerminalDividendScenarioRateTableA = ref ([

        ])  

        const ddlTerminalDividendScenarioRateTableB = ref ([

        ])    

        const ddlTerminalDividendSurrenderScenarioRateTableA = ref ([

        ])  

        const ddlTerminalDividendSurrenderScenarioRateTableB = ref ([

        ])  

        const ddlTerminalDividendMaturityScenarioRateTableA = ref ([

        ])    

        const ddlTerminalDividendMaturityScenarioRateTableB = ref ([

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

        return {
            ddlSyncIndicator,
            ddlProposalFormType,
            ddlSIformType,
            ddlPDSformType,
            inputForm,
            ddlrof,
            categories,
            ddlCashDividendScenarioRateTableA,
            ddlCashDividendScenarioRateTableB,
            ddlTerminalDividendScenarioRateTableA,
            ddlTerminalDividendScenarioRateTableB,
            ddlTerminalDividendSurrenderScenarioRateTableA,
            ddlTerminalDividendSurrenderScenarioRateTableB,
            ddlTerminalDividendMaturityScenarioRateTableA,
            ddlTerminalDividendMaturityScenarioRateTableB,
            nonGuaranteeFundRate,
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>