<template>
            <h5>Other Details</h5>
            <br/>
            <div class="card">
                <FamilyHistoryDataTable

                />
            </div>
            <div class="card">
                <OthersInsuranceDataTable

                />
            </div>   
            <div class="card">
                <AgentDeclarationDataTable

                />
            </div>    
            <div class="card">
                <AgentAgreementDataTable

                />
            </div>          

</template>

<script>
import FamilyHistoryDataTable from '@/components/nb/process/proposalinput/FamilyHistoryDataTable';
import OthersInsuranceDataTable from '@/components/nb/process/proposalinput/OthersInsuranceDataTable';
import AgentDeclarationDataTable from '@/components/nb/process/proposalinput/AgentDeclarationDataTable';
import AgentAgreementDataTable from '@/components/nb/process/proposalinput/AgentAgreementDataTable';

export default {
    name: 'OtherDetail',
    components: {
        FamilyHistoryDataTable,
        OthersInsuranceDataTable,
        AgentDeclarationDataTable,
        AgentAgreementDataTable
    },
    setup() {


        return{

        }
        
    },
}
</script>