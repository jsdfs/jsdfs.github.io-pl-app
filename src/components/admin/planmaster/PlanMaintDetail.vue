<template>
  <div class="relative w-full max-w-full flex flex-row justify-content-between">
    <div
      class="relative card w-11 flex flex-column justify-content-between max-w-full"
    >
      <PlanMenu @next="next" :tabIndex="tabIndex" />
      <component
        :is="progressTabs[tabIndex]"
        class="tab"
        :planMasterObj="inputForm"
        @updatePlanInd="data = $event"
      >
      </component>
    </div>
    <div
      class="fixed card mr-3 w-5rem right-0 flex-column flex align-items-center"
      style="height: 606px"
    >
      <PlanProgressBar @change-tab="changeTab" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PlanMenu from "@/components/admin/planmaster/PlanMenu";
import PlanProgressBar from "@/components/admin/planmaster/PlanProgressBar";
import PlanMaintHeader from "@/components/admin/planmaster/PlanMaintHeader";
import PlanIndicator from "@/components/admin/planmaster/PlanIndicator";
import PremiumRateKeyIndicator from "@/components/admin/planmaster/PremiumRateKeyIndicator";
import KeyBenefitsIndicator from "@/components/admin/planmaster/KeyBenefitsIndicator";
import NonParGuaranteedBonus from "@/components/admin/planmaster/NonParGuaranteedBonus";
import ParNonGuaranteedBonus from "@/components/admin/planmaster/ParNonGuaranteedBonus";
import ProductFeatures from "@/components/admin/planmaster/ProductFeatures";
import CommissionIndicator from "@/components/admin/planmaster/CommissionIndicator";
import SpecialFeaturesForPremiumWaiverRider from "@/components/admin/planmaster/SpecialFeaturesForPremiumWaiverRider";
import UnitLinkProductFeatures from "@/components/admin/planmaster/UnitLinkProductFeatures";
import COICORPremiumRateKeyIndicator from "@/components/admin/planmaster/COICORPremiumRateKeyIndicator";
import SalesIllustrationKeyIndicator from "@/components/admin/planmaster/SalesIllustrationKeyIndicator";

export default {
  name: "PlanMaintDetail",
  components: {
    PlanProgressBar,
    PlanMenu,
  },
  setup() {
    const router = useRouter();

    const inputForm = ref({
      planHeader: {},
      planInd: {},
      PremRateKeyInd: {},
    });

    const tabIndex = ref(0);
    const progressTabs = ref([
      PlanMaintHeader,
      PlanIndicator,
      PremiumRateKeyIndicator,
      KeyBenefitsIndicator,
      NonParGuaranteedBonus,
      ParNonGuaranteedBonus,
      ProductFeatures,
      CommissionIndicator,
      SpecialFeaturesForPremiumWaiverRider,
      UnitLinkProductFeatures,
      COICORPremiumRateKeyIndicator,
      SalesIllustrationKeyIndicator,
    ]);

    const changeTab = (tabs) => {
      tabIndex.value = tabs;
    };

    const next = () => {
      if (tabIndex.value < progressTabs.value.length - 1) {
        tabIndex.value = tabIndex.value + 1;
      } else {
        // console.log("im called save exit")
        // console.log("Proposal Input details:", data)
        // console.log("Insured details:", insuredSend.value)
        // console.log("Policyholder details:", policyholderSend.value)
        // store.dispatch('proposalinput/save', data);
        // store.dispatch('proposalinput/saveInsureDetail', insuredSend.value);
        // store.dispatch('proposalinput/savePolicyholder', policyholderSend.value);
        alert("Details saved successfully");
        router.push("/planmaster");
      }
    };

    return {
      inputForm,
      tabIndex,
      progressTabs,
      changeTab,
      next,
    };
  },
};
</script>

<style></style>
