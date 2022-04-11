<template>
    <div class="relative w-full max-w-full flex flex-row justify-content-between">
        <div class="relative card w-11 flex flex-column justify-content-between max-w-full">
            <component v-if="itemsLoaded" :is="progressTabs[tabIndex]" class="tab" :data="data" :insuredSend="insuredSend" :policyholderSend="policyholderSend" @updateData="data = $event" @updateinsuredSend="insuredSend = $event" @updatepolicyholderSend="policyholderSend = $event"></component>
            <ProposalMenu 
                @next="next"
                @cancel="cancel"
                :tabIndex= "tabIndex"
            />
        </div>
        <div class="fixed card mr-3 w-5rem right-0 flex-column flex align-items-center" style="height: 525px">
            <ProposalProgressBar 
                @change-tab="changeTab"
            />
        </div>
    </div>

       


</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import ProposalInputHeader from '@/components/nb/process/proposalinput/ProposalInputHeader';
import AgentDetails from '@/components/nb/process/proposalinput/AgentDetails';
import InsuredDetails from '@/components/nb/process/proposalinput/InsuredDetails';
import PolicyholderDetails from '@/components/nb/process/proposalinput/PolicyholderDetails';
import Beneficiary from '@/components/nb/process/proposalinput/Beneficiary';
import ProposalProgressBar from '@/components/nb/process/proposalinput/ProposalProgressBar';
import CoverageDetail from '@/components/nb/process/proposalinput/CoverageDetail';
import ForUnitLinkedUniLifeUseDetail from '@/components/nb/process/proposalinput/ForUnitLinkedUniLifeUseDetail';
import BenefitComponentCoverageDetail from '@/components/nb/process/proposalinput/BenefitComponentCoverageDetail';
import HealthDetail from '@/components/nb/process/proposalinput/HealthDetail';
import OtherDetail from '@/components/nb/process/proposalinput/OtherDetail';
import SumAtRiskInformationDetail from '@/components/nb/process/proposalinput/SumAtRiskInformationDetail';
import RemarksAndPrintHistory from '@/components/nb/process/proposalinput/RemarksAndPrintHistory';
import DocumentAndMedicalRequirementDetail from '@/components/nb/process/proposalinput/DocumentAndMedicalRequirementDetail';
import planMaintDataService from '@/service/admin/planMaintDataService';
import ProposalMenu from '@/components/nb/process/proposalinput/ProposalMenu';

export default {
    name: 'ProposalInputDetail',
    components: {
        ProposalInputHeader, ProposalProgressBar, ProposalMenu
    },
    setup() {

        const route = useRoute();
        const router = useRouter();
        const data = JSON.parse(route.params.data)
        const store = useStore();
        const insuredData = ref({});
        const policyholderData = ref({});
        const insuredSend = ref({});
        const policyholderSend = ref({});
        const itemsLoaded = ref(false);

        const tabIndex = ref(0);
        const progressTabs = ref([
            ProposalInputHeader,
            AgentDetails,
            InsuredDetails,
            PolicyholderDetails,
            Beneficiary,
            CoverageDetail,
            ForUnitLinkedUniLifeUseDetail,
            BenefitComponentCoverageDetail,
            HealthDetail,
            OtherDetail,
            SumAtRiskInformationDetail,
            RemarksAndPrintHistory,
            DocumentAndMedicalRequirementDetail
        ]);

        const changeTab = (tabs) => {
            tabIndex.value = tabs;
        };


        onMounted(() => {

            planMaintDataService.getProposalInsured().then(data => insuredData.value = data).then(() => {
                
              planMaintDataService.getProposalPolicyholder().then(data => policyholderData.value = data).then(() => {

                  for(let i = 0; i < insuredData.value.length; i++)
                  {

                    if(data.id === insuredData.value[i].lfkpropdet)
                    {
                        insuredSend.value = insuredData.value[i]
                    }
                  }

                  for(let i = 0; i < policyholderData.value.length; i++)
                  {
        
                    if(data.id === policyholderData.value[i].lfkpropdet)
                    {
                        policyholderSend.value = policyholderData.value[i]
                    }
                  }

                  


                  itemsLoaded.value = true
                
              })                
                
                
            })  
            


        });

        const next = () => {
            if(tabIndex.value < (progressTabs.value.length - 1)){
               tabIndex.value = tabIndex.value + 1
            }else{
            console.log("Proposal Input details:", data)
            console.log("Insured details:", insuredSend.value)
            console.log("Policyholder details:", policyholderSend.value)
            store.dispatch('proposalinput/save', data);
            store.dispatch('proposalinput/saveInsureDetail', insuredSend.value);
            store.dispatch('proposalinput/savePolicyholder', policyholderSend.value);
            alert("Details saved successfully")
            router.push('/proposalinput')
            }
        }

        const cancel = () => {
            console.log("im called cancel")
            router.push('/proposalinput')
        }

        // const next = () => {
        //     tabIndex.value = tabIndex.value + 1
        // }
        

        return {
            tabIndex,
            progressTabs,
            changeTab,
            route,
            data,
            insuredData,
            policyholderData,
            insuredSend,
            policyholderSend,
            itemsLoaded,
            next,
            cancel,
            
        }
    },
}
</script>