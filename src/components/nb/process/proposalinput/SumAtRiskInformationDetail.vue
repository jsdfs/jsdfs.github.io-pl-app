<template>
            <h5>Sum At Risk Information</h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="underwritingSumAtRisk">Underwriting Sum At Risk TSAR(F)</label>
                    <InputText class="p-inputtext-sm" id="underwritingSumAtRisk" type="text" value="0.00" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="tsar">TSAR (M)</label>
                    <InputText class="p-inputtext-sm" id="tsar" type="text" value="0.00" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="standardSub-Standard">Standard / Sub-Standard</label>
                    <InputText class="p-inputtext-sm" id="standardSub-Standard" type="text" value="STD - STANDARD" disabled/>
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>
                <div class="field col-12 md:col-6">
                    <label for="medical">Medical</label>
                    <InputText class="p-inputtext-sm" id="medical" type="text" value="N - NON-MEDICAL" disabled/>
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>              
            </div>
                <div class="card">
                <TotalSumAtRiskDataTable

                />
                </div>  
                <div class="card">
                <DetailsSumAtRiskDataTable

                />
                </div> 

</template>

<script>
import TotalSumAtRiskDataTable from '@/components/nb/process/proposalinput/TotalSumAtRiskDataTable';
import DetailsSumAtRiskDataTable from '@/components/nb/process/proposalinput/DetailsSumAtRiskDataTable';

export default {
    name: 'SumAtRiskInformationDetail',
    components: {
        TotalSumAtRiskDataTable, DetailsSumAtRiskDataTable
    },
    setup() {

        return{

        }
    },
}
</script>