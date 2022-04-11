<template>
  <div>
    <h5 class="pagePanel"><b>Premium Rate Key Indicator</b></h5>
    <br />
    <div class="p-fluid grid">
      <div class="field col-12 md:col-6">
        <label for="singlePremium">Single Premium</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.singlePremium"
          id="singlePremium"
          :options="singlePremiumLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="premiumAgeBasis">Premium Age Basis</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.premiumAgeBasis"
          id="premiumAgeBasis"
          :options="premiumAgeBasisLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="ageBasedOn">Age Based on (For Premium)</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.ageBasedOn"
          id="ageBasedOn"
          :options="ageBasedOnLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="automaticPremium"
          >Automatic Premium Increase / Decrease</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.automaticPremium"
          id="automaticPremium"
          :options="automaticPremiumLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="minInitPremMonthly"
          >Minimum Initial Premium For Monthly Mode (by no. Of
          installment)</label
        >
        <InputText
          class="p-inputtext-sm"
          id="minInitPremMonthly"
          type="text"
          value="0"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="premRateFormula">Premium Rate Formula Code</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.premRateFormula"
          id="premRateFormula"
          :options="premRateFormulaLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="premRateDate">Premium Rate Date Indicator</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.premRateDate"
          id="premRateDate"
          :options="premRateDateLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="loadingRateFormula">Loading Rate Formula Code</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.loadingRateFormula"
          id="loadingRateFormula"
          :options="loadingRateFormulaLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="benefitComponent">Benefit Component Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.benefitComponent"
          id="benefitComponent"
          :options="benefitComponentLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="cashFlowAgeBand">Cash Flow Age Band Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.cashFlowAgeBand"
          id="cashFlowAgeBand"
          :options="cashFlowAgeBandLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <!-- Empty Space -->
      </div>
      <div class="field col-12 md:col-6">
        <label for="minAnnPrem">Min Annual/Single Premium Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.minAnnPrem"
          id="minAnnPrem"
          :options="minAnnPremLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="minPremPerPymt"
          >Min Premium per Payment/Installment Table</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.minPremPerPymt"
          id="minPremPerPymt"
          :options="minPremPerPymtLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="minPremPerPlan"
          >Min Installment Premium Per Plan Table</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.minPremPerPlan"
          id="minPremPerPlan"
          :options="minPremPerPlanLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="allowPremMethod">Allowable Premium Method Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.allowPremMethod"
          id="allowPremMethod"
          :options="allowPremMethodLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="noClaimDisc">No Claim Discount Maintenance</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.noClaimDiscMaint"
          id="noClaimDisc"
          :options="noClaimDiscLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="renewDisc">Renewal Discount Maintenance</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.renewDisc"
          id="renewDisc"
          :options="renewDiscLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="famDisc">Family Discount Maintenance</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.famDisc"
          id="famDisc"
          :options="famDiscLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="noClaimBonus">No Claim Bonus Maintenance</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.noClaimBonus"
          id="noClaimBonus"
          :options="noClaimBonusLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="maxTPPerLife">Max TP Per Life Table Maintenance</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.maxTPPerLife"
          id="maxTPPerLife"
          :options="maxTPPerLifeLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="maxSingPremPerLife"
          >Max Single Premium Per Life Table Maintenance</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.maxSingPremPerLife"
          id="maxSingPremPerLife"
          :options="maxSingPremPerLifeLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="serviceTax">Service Tax</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.serviceTax"
          id="serviceTax"
          :options="serviceTaxLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="staffDisc">Staff Discount Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.staffDisc"
          id="staffDisc"
          :options="staffDiscLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="advPremPymtDisc"
          >Advance Premium Payment Discount Table</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.advPremPymtDisc"
          id="advPremPymtDisc"
          :options="advPremPymtDiscLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="advPremPymtBal"
          >Advance Premium Payment Balance (Surrender) Table</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.advPremPymtBal"
          id="advPremPymtBal"
          :options="advPremPymtBalLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="stampDuty">Stamp Duty Table</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.stampDuty"
          id="stampDuty"
          :options="stampDutyLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="policyFee">Policy Fee</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.policyFee"
          id="policyFee"
          :options="policyFeeLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="toleranceLevel">Tolerance Level</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.toleranceLevel"
          id="toleranceLevel"
          :options="toleranceLevelLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="premiumDiscount">Premium Discount</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.premiumDiscount"
          id="premiumDiscount"
          :options="premiumDiscountLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="guaranteedAnnPymt">Guaranteed Annual Payment (GAP)</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.guaranteedAnnPymt"
          id="guaranteedAnnPymt"
          :options="guaranteedAnnPymtLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="guaranteedTriennialCashPymt"
          >Guaranteed Triennial Cash Payment Table Maintenance</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.guaranteedTriennialCashPymt"
          id="guaranteedTriennialCashPymt"
          :options="guaranteedTriennialCashPymtLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="assetsShare">Assets Share</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.assetsShare"
          id="assetsShare"
          :options="assetsShareLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="extraLoadingForInstPrem"
          >Extra Loading % for Installment Premium</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.extraLoadingForInstPrem"
          id="extraLoadingForInstPrem"
          :options="extraLoadingForInstPremLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="sumAssuredByAnnPrem"
          >Sum Assured By Annual Premium Table</label
        >
        <Dropdown
          class="p-inputtext-sm"
          v-model="premRateInd.sumAssuredByAnnPrem"
          id="sumAssuredByAnnPrem"
          :options="sumAssuredByAnnPremLs"
          optionLabel="name"
          optionValue="value"
          placeholder="Select one..."
        />
      </div>
      <KeyTable
        :label="'Sum Assured Rate Table'"
        :combkeyLabel="'Sum Assured Combination Key'"
        :masterCode="'FATBL'"
        :routePath="'/combkeyselect'"
        :combKeyInd="true"
        v-model="premRateInd.sumAssuredRate"
      />
      <KeyTable
        :label="'Guaranteed Revise Sum Assured Rate Table'"
        :combkeyLabel="'Guaranteed Revise Sum Assured Combination Key'"
        :masterCode="'FATBL'"
        :routePath="'/combkeyselect'"
        :combKeyInd="true"
        v-model="premRateInd.guaranteedReviseSum"
      />
      <KeyTable
        :label="'Cash Flow Profit Loading Rate Table'"
        :combkeyLabel="'Cash Flow Profit Loading Combination Key'"
        :masterCode="'PROFITLOADTBL'"
        :routePath="'/combkeyselect'"
        :combKeyInd="true"
        v-model="premRateInd.cashFlowProfitLoading"
      />
      <KeyTable
        :label="'Cash Flow Premium Rate Table'"
        :combkeyLabel="'Cash Flow Premium Combination Key'"
        :masterCode="'CASHFLOWPREMTBL'"
        :routePath="'/combkeyselect'"
        :combKeyInd="true"
        v-model="premRateInd.cashFlowPrem"
      />
      <KeyTable
        :label="'Cash Flow Surrender Value Rate Table'"
        :combkeyLabel="'Cash Flow Surrender Value Combination Key'"
        :masterCode="'CASHFLOWSVTBL'"
        :routePath="'/combkeyselect'"
        :combKeyInd="true"
        v-model="premRateInd.cashFlowSurrenderVal"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import KeyTable from "@/components/common/planmaster/KeyTable";

export default {
  name: "PremiumRateKeyIndicator",
  components: {
    KeyTable,
  },
  props: {
    inputForm: Object,
  },
  setup() {
    const store = useStore();

    const premRateInd = computed(
      () => store.state.planmaster.planMasterObj.premRateInd
    );

    const singlePremiumLs = ref([
      { name: "Y - YES", value: "Y" },
      { name: "N - NO", value: "N" },
    ]);

    const premiumAgeBasisLs = ref([
      { name: "L - LAST", value: "L" },
      { name: "N - NEXT", value: "N" },
      { name: "R - NEAREST", value: "R" },
    ]);

    const ageBasedOnLs = ref([
      { name: "AA - ATTAINED AGE", value: "AA" },
      { name: "EA - ENTRY AGE", value: "EA" },
    ]);

    const automaticPremiumLs = ref([
      { name: "Y - YES", value: "Y" },
      { name: "N - NO", value: "N" },
    ]);

    const premRateFormulaLs = ref([
      { name: "AMPREFER - PREMIUM RATE AMPREFERED", value: "AMPREFER" },
      { name: "AMPREFER1 - PREMIUM RATE AMPREFERED 1", value: "AMPREFER1" },
      { name: "ANNPREM - ANNUAL PREMIUM", value: "ANNPREM" },
      { name: "ANNPREMPI - ANNUAL PREMIUM PRO INVESTA", value: "ANNPREMPI" },
      { name: "FA - FA/UNIT MULTIPLIER * RATE", value: "FA" },
    ]);

    const premRateDateLs = ref([
      { name: "COMM - COMMENCEMENT DATE", value: "COMM" },
      { name: "LASTANN - LAST ANNIVERSARY", value: "LASTANN" },
    ]);

    const loadingRateFormulaLs = ref([
      {
        name: "ANNPREMINS - ANNPREMINS * INSURANCE % * PREMIUM",
        value: "ANNPREMINS",
      },
      {
        name: "FA - %EM / BASE %EM *RATE EM * FA /UM + PM * FA / UM",
        value: "FA",
      },
      {
        name: "FAPBR - %EM / BASE %EM *RATE EM * FA / UM + PM * FA*TERM*0.5 / UM",
        value: "FAPBR",
      },
      {
        name: "FARATE - %EM / BASE %EM *FA/RATE EM* UM + PM * FA / UM",
        value: "FARATE",
      },
      { name: "FAREDUCE - FACE AMOUNT REDUCE", value: "FAREDUCE" },
    ]);

    const benefitComponentLs = ref([
      { name: "ADB - ACCIDENTAL DEATH BENEFIT", value: "ADB" },
      {
        name: "ADDB - ACCIDENTAL DEATH & DISMEMBERMENT BENEFIT",
        value: "ADDB",
      },
      { name: "AHCP - ACCIDENTAL HOSPITAL CASH PLAN", value: "AHCP" },
      { name: "AJTM - AJ TUGU MANDIRI", value: "AJTM" },
      { name: "CI - CRITICAL ILLNESS", value: "CI" },
    ]);

    const cashFlowAgeBandLs = ref([{ name: "BSNPL - BSNPL", value: "BSNPL" }]);

    const minAnnPremLs = ref([
      { name: "100MIL - 100 MILLION", value: "100MIL" },
      { name: "MIN 1 - MIN 1USD", value: "MIN 1" },
      { name: "MIN 1 M - MINIMUM 1.000.000", value: "MIN 1 M" },
      { name: "MIN 100 - MINIMUM 100 RUPIAH", value: "MIN 100" },
      { name: "MIN 200K - MIN 200,000", value: "MIN 200K" },
    ]);

    const minPremPerPymtLs = ref([
      { name: "100MIL - 100 MILLION", value: "100MIL" },
      { name: "MIN 1 - MIN 1USD", value: "MIN 1" },
      { name: "MIN 1 M - MINIMUM 1.000.000", value: "MIN 1 M" },
      { name: "MIN 100 - MINIMUM 100 RUPIAH", value: "MIN 100" },
      { name: "MIN 200K - MIN 200,000", value: "MIN 200K" },
    ]);

    const minPremPerPlanLs = ref([
      { name: "100MIL - 100 MILLION", value: "100MIL" },
      { name: "MIN 1 - MIN 1USD", value: "MIN 1" },
      { name: "MIN 1 M - MINIMUM 1.000.000", value: "MIN 1 M" },
      { name: "MIN 100 - MINIMUM 100 RUPIAH", value: "MIN 100" },
      { name: "MIN 200K - MIN 200,000", value: "MIN 200K" },
    ]);

    const allowPremMethodLs = ref([
      { name: "ALL - ALL PREMIUM METHOD", value: "ALL" },
      { name: "ALLANN - ALL PREMIUM METHOD WITH ANNUAL MODE", value: "ALLANN" },
      { name: "ALLSGL - ALL PREMIUM METHOD WITH SINGLE MODE", value: "ALLSGL" },
    ]);

    const noClaimDiscLs = ref([]);

    const renewDiscLs = ref([]);

    const famDiscLs = ref([]);

    const noClaimBonusLs = ref([]);

    const maxTPPerLifeLs = ref([]);

    const maxSingPremPerLifeLs = ref([]);

    const serviceTaxLs = ref([]);

    const staffDiscLs = ref([]);

    const advPremPymtDiscLs = ref([]);

    const advPremPymtBalLs = ref([]);

    const stampDutyLs = ref([]);

    const policyFeeLs = ref([]);

    const toleranceLevelLs = ref([]);

    const premiumDiscountLs = ref([]);

    const guaranteedAnnPymtLs = ref([
      { name: "3G10/3G10+ - 3G10/3G10+", value: "3G10/3G10+" },
      { name: "3G15/3G15+ - 3G15/3G15+", value: "3G15/3G15+" },
      { name: "3G20 - 3G20", value: "3G20" },
    ]);

    const guaranteedTriennialCashPymtLs = ref([
      { name: "BIJAK - BIJAK MALAYSIA", value: "BIJAK" },
      { name: "BJK2 - BIJAK MALAYSIA", value: "BJK2" },
      { name: "FLXW - FLXW", value: "FLXW" },
    ]);

    const assetsShareLs = ref([
      { name: "TABLE1 - TEMPORARY USED FOR ALL PLAN", value: "TABLE1" },
    ]);

    const extraLoadingForInstPremLs = ref([
      { name: "10% - 10%", value: "10%" },
    ]);

    const sumAssuredByAnnPremLs = ref([]);

    const sumAssuredRateLs = ref([]);

    const guaranteedReviseSumLs = ref([]);

    const cashFlowProfitLoadingLs = ref([]);

    const cashFlowPremLs = ref([]);

    const cashFlowSurrenderValLs = ref([]);

    const sumAssuredRt = ref([
      { code: "PSP", desc: "PROTECTSECURE PLAN" },
      { code: "RTP", desc: "RETIREMENT PLAN" },
    ]);

    return {
      singlePremiumLs,
      premiumAgeBasisLs,
      ageBasedOnLs,
      automaticPremiumLs,
      premRateFormulaLs,
      premRateDateLs,
      loadingRateFormulaLs,
      benefitComponentLs,
      cashFlowAgeBandLs,
      minAnnPremLs,
      minPremPerPymtLs,
      minPremPerPlanLs,
      allowPremMethodLs,
      noClaimDiscLs,
      renewDiscLs,
      famDiscLs,
      noClaimBonusLs,
      maxTPPerLifeLs,
      maxSingPremPerLifeLs,
      serviceTaxLs,
      staffDiscLs,
      advPremPymtDiscLs,
      advPremPymtBalLs,
      stampDutyLs,
      policyFeeLs,
      toleranceLevelLs,
      premiumDiscountLs,
      guaranteedAnnPymtLs,
      guaranteedTriennialCashPymtLs,
      assetsShareLs,
      extraLoadingForInstPremLs,
      sumAssuredByAnnPremLs,
      sumAssuredRateLs,
      guaranteedReviseSumLs,
      cashFlowProfitLoadingLs,
      cashFlowPremLs,
      cashFlowSurrenderValLs,
      premRateInd,
      sumAssuredRt,
    };
  },
};
</script>

<style scoped>
.pagePanel {
  color: #000080;
}
</style>
