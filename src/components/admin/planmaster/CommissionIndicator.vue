<template>
    <div>
        <h5 class="pagePanel"><b>Commission Indicator</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="basicPlan">Commission Based On Basic Plan</label>
                <Dropdown id="basicPlan" class="p-inputtext-sm" v-model="inputForm.basicPlan" :options="ddlBasicPlan" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="code">Commission Rate Combination Key</label>
                <div v-for="category of categories" :key="category.key" class="field-checkbox">
                    <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <label for="rateTable">Commission Rate Table</label>
                <Dropdown id="rateTable" class="p-inputtext-sm" v-model="inputForm.rateTable" :options="ddlRateTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="clawBackComm">Claw Back Commission Upon Surrender</label>
                <Dropdown id="clawBackComm" class="p-inputtext-sm" v-model="inputForm.clawBackComm" :options="ddlClawBackComm" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>
            <div class="field col-12 md:col-6">
                <label for="overCommRateTable">Overriding Commission Rate Table</label>
                <Dropdown id="overCommRateTable" class="p-inputtext-sm" v-model="inputForm.overCommRateTable" :options="ddlOverCommRateTable" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>  
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'CommissionIndicator',
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
            basicPlan: 'N',
            rateTable: 'TDM',
            clawBackComm: '',
            overCommRateTable: 'TDM',
            categories: ''
        })

        const ddlBasicPlan = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])
        
        const ddlRateTable = ref([
            { name: 'COMM01 - COMMISSION RATE TABLE 01', value: 'COMM01' },
            { name: 'TDM - TUGU DANA MAKSIMA COMMISION', value: 'TDM' },
        ])

        const ddlClawBackComm = ref([

        ])

        const ddlOverCommRateTable = ref([
            { name: 'PLINKSGL - POWER LINK SINGLE OR', value: 'PLINKSGL' },
            { name: 'TDM - TUGU DANA MAKSIMA OR', value: 'TDM' },
        ])


        return {
            ddlBasicPlan,
            ddlRateTable,
            ddlOverCommRateTable,
            ddlClawBackComm,
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