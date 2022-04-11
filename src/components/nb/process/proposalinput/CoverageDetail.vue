<template>
            <h5>Coverage Details</h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="lifeNo">Life No</label>
                    <InputText class="p-inputtext-sm" id="lifeNo" type="text" value="L1" disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="planCode">Plan Code</label>
                    <InputText class="p-inputtext-sm" id="planCode" type="text" value="02.06.03" disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="interestRate">Interest Rate (%)</label>
                    <InputText class="p-inputtext-sm" id="interestRate" type="text" value="0.00" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="PSL">PSL</label>
                    <InputText class="p-inputtext-sm" id="PSL" type="text" value="0.00" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="sumAssured">Sum Assured</label>
                    <InputText class="p-inputtext-sm" id="sumAssured" type="text" value="0.00" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="policyCurrency">Policy Currency</label>
                    <InputText class="p-inputtext-sm" id="policyCurrency" type="text" value="IDR" disabled/>
                </div>
                <div class="field col-12 md:col-6">
                    <label for="premiumPaymentPeriod">Premium Payment Period</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.premiumPaymentPeriod" id="premiumPaymentPeriod" :options="premiumPaymentPeriodLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="coverageTerm">Coverage Term</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.coverageTerm" id="coverageTerm" :options="coverageTermLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="benefitTerm">Benefit Term</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.benefitTerm" id="benefitTerm" :options="benefitTermLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="pensionAge">Pension Age</label>
                    <InputText class="p-inputtext-sm" id="pensionAge" type="text" value="0" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="premiumMode">Premium Mode</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.premiumMode" id="premiumMode" :options="premiumModeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="premiumMethod">Premium Method</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.premiumMethod" id="premiumMethod" :options="premiumMethodLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>     
                <div class="field col-12 md:col-6">
                    <Button label="Reccuring Registration" style="width:15rem; background-color:#000080;" class="p-button-info mt-3" />
                </div>    
                <div class="field col-12 md:col-6">
                    <label for="apType">AP Type</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.apType" id="apType" :options="apTypeLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>   
                <div class="field col-12 md:col-6">
                    <label for="premiumTerm">Premium Term</label>
                    <InputText class="p-inputtext-sm" id="premiumTerm" type="text" value="" />
                </div>  
                <div class="field col-12 md:col-6">
                    <label for="wmIndicator">WM Indicator (Worksite Marketing)</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.wmIndicator" id="wmIndicator" :options="wmIndicatorLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>   
                <div class="field col-12 md:col-6">
                    <label for="apw">APW</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.apw" id="apw" :options="apwLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>       
                <div class="field col-12 md:col-6">
                    <label for="withdrawalOfAdvancedPaymentInterest">Withdrawal Of Advanced Payment Interest</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.withdrawalOfAdvancedPaymentInterest" id="withdrawalOfAdvancedPaymentInterest" :options="withdrawalOfAdvancedPaymentInterestLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>                                                                
            </div>

            <hr />
            <div class="card">
                <RiderDetailDataTable

                />
            </div>

            <hr />
            <div class="card">
                <ExclusionDetailDataTable

                />
            </div>

            <hr />
            <div class="card">
                <LoadingExtraPremiumDetailDataTable

                />
            </div>
            <hr />
            <div class="card">
                <CoverageSummaryDetailDataTable

                />
            </div>
            <hr />
            <div class="card">
                <DiscountDetailDataTable

                />
            </div>
</template>

<script>
import { ref } from 'vue'
import LoadingExtraPremiumDetailDataTable from '@/components/nb/process/proposalinput/LoadingExtraPremiumDetailDataTable';
import RiderDetailDataTable from '@/components/nb/process/proposalinput/RiderDetailDataTable';
import ExclusionDetailDataTable from '@/components/nb/process/proposalinput/ExclusionDetailDataTable';
import CoverageSummaryDetailDataTable from '@/components/nb/process/proposalinput/CoverageSummaryDetailDataTable';
import DiscountDetailDataTable from '@/components/nb/process/proposalinput/DiscountDetailDataTable';

export default {
    name: 'CoverageDetail',
    components: {
        LoadingExtraPremiumDetailDataTable, RiderDetailDataTable, ExclusionDetailDataTable, CoverageSummaryDetailDataTable, DiscountDetailDataTable
    },
    setup() {

        const inputForm = ref({
            premiumPaymentPeriod: '',
            coverageTerm: '',
            benefitTerm: '',
            premiumMode: '',
            premiumMethod: '',
            apType: '',
            wmIndicator: 'N',
            apw: '',
            withdrawalOfAdvancedPaymentInterest: ''
        })

        const premiumPaymentPeriodLs = ref([
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
        ])

        const coverageTermLs = ref([
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
        ])

        const benefitTermLs = ref([
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
        ])

        const premiumModeLs = ref([

        ])

        const premiumMethodLs = ref([
            { name: 'ADOTH - AUTO DEBIT OTHER', value: 'ADOTH' },
            { name: 'CC - CREDIT CARD', value: 'CC' },
            { name: 'CHEQUE - CHEQUE', value: 'CHEQUE' },
            { name: 'RN - CASH/CHEQUE', value: 'RN' },
            { name: 'TRF - TRANSFER', value: 'TRF' },
            { name: 'VA - VIRTUAL ACCOUNT', value: 'VA' }
        ])
       
        const apTypeLs = ref([
            { name: 'DISC - DISCOUNTED', value: 'DISC' }
        ])

        const wmIndicatorLs = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])

        const apwLs = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])

        const withdrawalOfAdvancedPaymentInterestLs = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },
        ])

        
        

        return {
            premiumPaymentPeriodLs,
            coverageTermLs,
            inputForm,
            benefitTermLs,
            premiumModeLs,
            apTypeLs,
            wmIndicatorLs,
            premiumMethodLs,
            apwLs,
            withdrawalOfAdvancedPaymentInterestLs,
        }
    },
}
</script>