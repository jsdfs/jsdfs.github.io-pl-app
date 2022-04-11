<template>
            <h5>Benefit Component Coverage Details</h5>
            <br/>
            <div class="card">
                <BenefitComponentCoverageDetailDataTable

                />
            </div>

</template>

<script>
import BenefitComponentCoverageDetailDataTable from '@/components/nb/process/proposalinput/BenefitComponentCoverageDetailDataTable';

export default {
    name: 'BenefitComponentCoverageDetail',
    components: {
        BenefitComponentCoverageDetailDataTable
    },
    setup() {

        return{

        }
        
    },
}
</script>