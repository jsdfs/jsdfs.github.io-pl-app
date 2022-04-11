<template>
    <div>
        <h5 class="pagePanel"><b>Special Features For Premium Waiver Rider</b></h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-12">
                <label for="premiumPlan">List Of Plan Eligible for Premium Waiver Table</label>
                <Dropdown id="premiumPlan" class="p-inputtext-sm" v-model="inputForm.premiumPlan" :options="ddlPremiumPlan" optionLabel="name" optionValue="value" placeholder="Select one..." required/>
            </div>             
        </div>
    </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
    name: 'SpecialFeaturesForPremiumWaiverRider',
    components: {

    },
    setup() {

        const inputForm = reactive({
            premiumPlan: '',
        })

        const ddlPremiumPlan = ref([
            { name: 'POWERLINK - POWERLINK', value: 'POWERLINK' }
        ])

        return {
            ddlPremiumPlan,
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