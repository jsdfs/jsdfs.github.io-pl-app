<template>
        <div>
            <h5 class="pagePanel"><b>Par : Non Guaranteed Bonus</b></h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="reversionaryBonusFormula">Reversionary Bonus Formula</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.reversionaryBonusFormula" id="ReversionaryBonusFormula" :options="ReversionaryBonusFormulaLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Non-Guaranteed Reversionary Bonus Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="nGuaranteedReversionaryBonus">Non-Guaranteed Reversionary Bonus Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedReversionaryBonus" id="nGuaranteedReversionaryBonus" :options="nGuaranteedReversionaryBonusLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Non-Guaranteed Bonus / Dividend (Annual) Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="nGuaranteedBonusDividend">Non-Guaranteed Bonus / Dividend (Annual) Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedBonusDividend" id="nGuaranteedBonusDividend" :options="nGuaranteedBonusDividendLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Non-Guaranteed Terminal Bonus on Death Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="nGuaranteedTerminalBonusDeath">Non-Guaranteed Terminal Bonus on Death Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedTerminalBonusDeath" id="nGuaranteedTerminalBonusDeath" :options="nGuaranteedTerminalBonusDeathLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Non-Guaranteed Terminal Bonus on Surrender Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="nGuaranteedTerminalBonusSurrender">Non-Guaranteed Terminal Bonus on Surrender Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedTerminalBonusSurrender" id="nGuaranteedTerminalBonusSurrender" :options="nGuaranteedTerminalBonusSurrenderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="categories">Non-Guaranteed Terminal Bonus on Maturity Rate Combination Key</label><br><br>
                    <div v-for="category of categories" :key="category.key" class="field-checkbox">
                        <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
                        <label :for="category.key">{{category.name}}</label>
                    </div>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="nGuaranteedTerminalBonusMaturity">Non-Guaranteed Terminal Bonus on Maturity Rate Table</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nGuaranteedTerminalBonusMaturity" id="nGuaranteedTerminalBonusMaturity" :options="nGuaranteedTerminalBonusMaturityLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="vestingFactor">Vesting Factor Maintenance</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.vestingFactor" id="vestingFactor" :options="vestingFactorLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
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
            reversionaryBonusFormula: 'S1520',
            nGuaranteedReversionaryBonus: '',
            nGuaranteedBonusDividend: '',
            nGuaranteedTerminalBonusDeath: '',
            nGuaranteedTerminalBonusSurrender: '',
            nGuaranteedTerminalBonusMaturity: '',
            vestingFactor: '',



        })

        const ReversionaryBonusFormulaLs = ref([
            { name: 'AMFS - AMFS AMFS+', value: 'AMFS' },
            { name: 'AMFS2 - AMFS2', value: 'AMFS2' },
            { name: 'S1520 - S1520', value: 'S1520' },
            { name: 'S2025 - S2025', value: 'S2025' },
        ])

        const nGuaranteedReversionaryBonusLs = ref([

        ])

        const nGuaranteedBonusDividendLs = ref([

        ])

        const nGuaranteedTerminalBonusDeathLs = ref([

        ])

        const nGuaranteedTerminalBonusSurrenderLs = ref([

        ])
    
        const nGuaranteedTerminalBonusMaturityLs = ref([

        ])

        const vestingFactorLs = ref([

        ])



        return {
            inputForm,
            categories,
            ReversionaryBonusFormulaLs,
            nGuaranteedReversionaryBonusLs,
            nGuaranteedBonusDividendLs,
            nGuaranteedTerminalBonusDeathLs,
            nGuaranteedTerminalBonusSurrenderLs,
            nGuaranteedTerminalBonusMaturityLs,
            vestingFactorLs


        }

    },
}
</script>

<style scoped>
.pagePanel {
    color: #000080;
}
</style>