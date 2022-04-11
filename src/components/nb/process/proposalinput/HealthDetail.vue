<template>
            <h5>Health Details</h5>
            <br/>
            <div class="card">
                <HealthDetailDataTable

                />
            </div>


</template>

<script>
import HealthDetailDataTable from '@/components/nb/process/proposalinput/HealthDetailDataTable';

export default {
    name: 'HealthDetail',
    components: {
        HealthDetailDataTable
    },
    setup() {

        return{

        }
        
    },
}
</script>