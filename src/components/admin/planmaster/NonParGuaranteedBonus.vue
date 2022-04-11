<template>
        <div>
            <h5 class="pagePanel"><b>Non-Par : Guaranteed Bonus</b></h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="bonusDividendFormula">Bonus / Dividend Formula Code</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.bonusDividendFormula" id="bonusDividendFormula" :options="bonusDividendFormulaLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Guaranteed Bonus / Dividend (Annual) Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="guaranteedBonusDividend">Guaranteed Bonus / Dividend (Annual) Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.guaranteedBonusDividend" id="guaranteedBonusDividend" :options="guaranteedBonusDividendLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Guaranteed Terminal Bonus on Death Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="guaranteedTerminalBonusDeath">Guaranteed Terminal Bonus on Death Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.guaranteedTerminalBonusDeath" id="guaranteedTerminalBonusDeath" :options="guaranteedTerminalBonusDeathLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Guaranteed Terminal Bonus on Surrender Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="guaranteedTerminalBonusSurrender">Guaranteed Terminal Bonus on Surrender Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.guaranteedTerminalBonusSurrender" id="guaranteedTerminalBonusSurrender" :options="guaranteedTerminalBonusSurrenderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Guaranteed Terminal Bonus on Maturity Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="guaranteedTerminalBonusMaturity">Guaranteed Terminal Bonus on Maturity Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.guaranteedTerminalBonusMaturity" id="guaranteedTerminalBonusMaturity" :options="guaranteedTerminalBonusMaturityLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'


export default {
    name: 'NonParGuaranteedBonus',
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
            bonusDividendFormula: 'FA',
            guaranteedBonusDividend: '',
            guaranteedTerminalBonusDeath: '',
            guaranteedTerminalBonusSurrender: '',
            guaranteedTerminalBonusMaturity: '',

        })

        const bonusDividendFormulaLs = ref([
            { name: 'FA - RATE * SUM ASSURED / UNIT MULTIPLIER', value: 'FA' },
            { name: 'SP - RATE * SINGLE PREMIUM / UNIT MULTIPLIER', value: 'SP' },
            { name: 'UPLOADCD - UPLOADED CASH DIVIDEND', value: 'UPLOADCD' },
        ])

        const guaranteedBonusDividendLs = ref([
 
        ])

        const guaranteedTerminalBonusDeathLs = ref([
 
        ])

        const guaranteedTerminalBonusSurrenderLs = ref([
 
        ])

        const guaranteedTerminalBonusMaturityLs = ref([
 
        ])



        return {
            inputForm,
            categories,
            bonusDividendFormulaLs,
            guaranteedBonusDividendLs,
            guaranteedTerminalBonusDeathLs,
            guaranteedTerminalBonusSurrenderLs,
            guaranteedTerminalBonusMaturityLs,


        }

    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>