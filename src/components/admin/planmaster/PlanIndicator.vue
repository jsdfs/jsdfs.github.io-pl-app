<template>
  <div>
    <h5 class="pagePanel"><b>Plan Indicator</b></h5>
    <br />
    <div class="p-fluid formgrid grid">
      <div class="field col-12 md:col-6">
        <label for="code"
          >Pol. Commencement Date Backdating Period (by month)</label
        >
        <InputText
          class="p-inputtext-sm"
          id="planCode"
          type="text"
          v-model="planInd.commBackDt"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code"
          >Pol. Commencement Date Forward Dating Period (by month)</label
        >
        <InputText
          class="p-inputtext-sm"
          id="planName"
          type="text"
          v-model="planInd.commForwardDt"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">NB Production Date Backdating Period (by days)</label>
        <InputText
          class="p-inputtext-sm"
          id="prodCat"
          type="text"
          v-model="planInd.nbProdBackDt"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="desc"
          >NB Production Date Forward Dating Period (by days)</label
        >
        <InputText
          class="p-inputtext-sm"
          id="planType"
          type="text"
          v-model="planInd.nbProdForwardDt"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Cooling Off Period (by days)</label>
        <InputText
          class="p-inputtext-sm"
          id="planCode"
          type="text"
          v-model="planInd.coolOffPeriod"
        />
      </div>
      <KeyTable
        :label="'Max Rider Coverage (multiple Of base SA) Table'"
        :routePath="'/example'"
        :masterCode="'MAXRIDCOVTBL'"
        v-model="planInd.maxRiderCov"
      />
      <KeyTable
        :label="'Allowable Basic Riders Combination Table'"
        :routePath="'/example'"
        :masterCode="'ABRCTBL'"
        v-model="planInd.allowBasicRider"
      />
      <KeyTable
        :label="'Allowable Rider Riders Combination Table'"
        :routePath="'/example'"
        :masterCode="'ARRCTBL'"
        v-model="planInd.allowRiderRider"
      />
      <KeyTable
        :label="'Compulsory Rider'"
        :routePath="'/test'"
        :masterCode="'COMPULSORYRID'"
        v-model="planInd.compulsoryRider"
      />
    </div>
  </div>
</template>

<script>
import { onUpdated, ref, toRef, computed } from "vue";
import { useStore } from "vuex";
import KeyTable from "@/components/common/planmaster/KeyTable";

export default {
  name: "PlanIndicator",
  components: {
    KeyTable,
  },
  props: {
    planMasterObj: Object,
  },
  setup(props, { emit }) {
    const store = useStore();
    const localPlanMaster = toRef(props, "planMasterObj");

    onUpdated(() => {
      emit("updatePlanInd", planInd.value);
    });

    const planInd = computed(
      () => store.state.planmaster.planMasterObj.planInd
    );
    // const planInd = ref({
    //     commBackDt: 84,
    //     commForwardDt: 0,
    //     nbProdBackDt: 12,
    //     nbProdForwardDt: 0,
    //     coolOffPeriod: 14,
    //     maxRiderCov: 'A',
    //     allowBasicRider: 'KTUGU',
    //     allowRiderRider: '',
    //     compulsoryRider: ''
    // });
    const maxRiderCovArr = ref([
      { code: "A", desc: "0" },
      { code: "B", desc: "1" },
      { code: "C", desc: "2" },
    ]);
    const allowBasicRiderArr = ref([
      { code: "JHT", desc: "TIMAH JHT" },
      { code: "KTUGU", desc: "KOPERASI TUGU" },
    ]);
    const allowRiderRiderArr = ref([
      { code: "JHT", desc: "TIMAH JHT" },
      { code: "KTUGU", desc: "KOPERASI TUGU" },
    ]);
    const compulsoryRiderArr = ref([
      { code: "BNDF", desc: "MG DP PERTAMINA" },
      { code: "NIKEL", desc: "NIKEL" },
    ]);

    const test = (event) => {
      console.log("event: " + event);
    };
    const test2 = (value) => {
      console.log("test value: " + value);
      planInd.value = value;
    };

    return {
      planInd,
      maxRiderCovArr,
      allowBasicRiderArr,
      allowRiderRiderArr,
      compulsoryRiderArr,
      localPlanMaster,
      test,
      test2,
    };
  },
};
</script>

<style scoped>
.pagePanel {
  color: #000080;
}
</style>
