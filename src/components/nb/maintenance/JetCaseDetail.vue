<template>
  <div class="card w-full">
    <div>
        <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-outlined mr-2 mb-2" @click="close" /></div> 
        </div>  
        <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-trash" type="button" class="p-button-warning mr-2 mb-2" @click="delRecord" /> </div>
            <div class="flex align-items-center justify-content-center"><Button icon="pi pi-check" type="button" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="saveExit" /> </div>     
        </div>  
    </div>
    <div class="d-inline-flex align-items-start" >
      <div class="card mr-3" style="width: 18rem; min-width: 105px; max-width: 105px; padding-left: 8px"> 
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
  
        >
          <button
            class="nav-link active border-bottom btn-sm text-left me-3 ps-3"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Basic Details
          </button>
          <button
            class="nav-link border-bottom btn-sm text-left me-3 ps-3"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Existing policies
          </button>
          <button
            class="nav-link btn-sm text-left me-3 ps-3"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Additional Details
          </button>
        </div>
      </div>

      <div class="card w-100" >
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div class="p-fluid formgrid grid">
              <div class="field col-12 md:col-6">
                <label for="effectiveDateFrom">Effective Date From *</label>
                <Calendar
                  class="p-inputtext-sm"
                  id="effectiveDateFrom"
                  dateFormat="dd/mm/yy"
                  v-model="inputForm.effectiveDateFrom"
                  :showIcon="true"
                  :showOnFocus="false"
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="effectiveDateTo">Effective Date To *</label>
                <Calendar
                  class="p-inputtext-sm"
                  id="effectiveDateTo"
                  dateFormat="dd/mm/yy"
                  v-model="inputForm.effectiveDateTo"
                  :showIcon="true"
                  :showOnFocus="false"
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="bmiEmFrm">BMI for EM From</label>
                <InputText
                  class="p-inputtext-sm"
                  id="bmiEmFrm"
                  type="text"
                  v-model="inputForm.bmiEmFrm"
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="bmiEmTo">BMI for EM To</label>
                <InputText
                  class="p-inputtext-sm"
                  id="bmiEmTo"
                  type="text"
                  v-model="inputForm.bmiEmTo"
                />
              </div>
              <KeyTable
                :label="'Occupation Class'"
                :routePath="'/occupationclass'"
                :masterCode="'JETOCCCLSTBL'"
                v-model="inputForm.occupationClass"
              />
              <div class="field col-12 md:col-6">
                <label for="caiApp">CAI Application *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.caiApp"
                  id="caiApp"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="juvenileApplication">Juvenile Application *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.juvenileApplication"
                  id="juvenileApplication"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="juvenileApplicationAge"
                  >Juvenile Application Age</label
                >
                <InputText
                  class="p-inputtext-sm"
                  id="juvenileApplicationAge"
                  type="text"
                  v-model="inputForm.juvenileApplicationAge"
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="insInterest"
                  >Insurable interest-can purchase for spouse and children (up
                  to insurable interest age only) *</label
                >
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.insInterest"
                  id="insInterest"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="insInterestChildAge">Insurable interest age</label>
                <InputText
                  class="p-inputtext-sm"
                  id="insInterestChildAge"
                  type="text"
                  v-model="inputForm.insInterestChildAge"
                />
              </div>
              <KeyTable
                :label="'Nationality'"
                :routePath="'/nationality'"
                :masterCode="'JETNATIONALITYTBL'"
                v-model="inputForm.nationality"
              />
              <div class="field col-12 md:col-6">
                <label for="income">Income vs premium payable</label>
                <InputText
                  class="p-inputtext-sm"
                  id="income"
                  type="text"
                  v-model="inputForm.income"
                />
              </div>
              <KeyTable
                :label="'Payment Method'"
                :routePath="'/paymentmethod'"
                :masterCode="'JETPAYMENTMTHTBL'"
                v-model="inputForm.paymentMethod"
              />
              <div class="field col-12 md:col-6">
                <label for="health"
                  >Health questions in proposal form = " Yes " *</label
                >
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.health"
                  id="health"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <KeyTable
                :label="'Maximum sum assured for rider(LTR/CIT/CAI/AB)'"
                :routePath="'/maxsumrider'"
                :masterCode="'JETMAXSATBL'"
                v-model="inputForm.max"
              />

              <div class="field col-12 md:col-6">
                <label for="calForTotalM"
                  >Calculate for Total Sum At Risk(TSAR(M)) *</label
                >
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.calForTotalM"
                  id="calForTotalM"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="calcForTotalF"
                  >Calculate for Total Sum At Risk(TSAR(F))</label
                >
                <InputText
                  class="p-inputtext-sm"
                  id="calcForTotalF"
                  type="text"
                  v-model="inputForm.calcForTotalF"
                />
              </div>
              <KeyTable
                :label="'Health Question Maintenance'"
                :routePath="'/healthquestion'"
                :masterCode="'JETHEAQUESTBL'"
                v-model="inputForm.healthTblNo"
              />
            </div>
          </div>
          <div
            class="tab-pane"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div class="p-fluid formgrid grid">
              <div class="field col-12 md:col-6">
                <label for="exstSub">Existing substandard policy *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.exstSub"
                  id="exstSub"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <KeyTable
                :label="'Existing Substandard Proposal'"
                :routePath="'/existingsubstandardproposal'"
                :masterCode="'JETEXCPROPSTATTBL'"
                v-model="inputForm.exception"
              />
              <div class="field col-12 md:col-6">
                <label for="liamShd">LIAM SHD *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.liamShd"
                  id="liamShd"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="liamAcid">LIAM ACID *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.liamAcid"
                  id="liamAcid"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="extsClaim">Existing Claim Record *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.extsClaim"
                  id="extsClaim"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6"></div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div class="p-fluid formgrid grid">
              <div class="field col-12 md:col-6">
                <label for="keyMan">Keyman Insurance *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.keyMan"
                  id="keyMan"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="bnmSanctionList">BNM Sanction List *</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.bnmSanctionList"
                  id="bnmSanctionList"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="smoker">Smoker</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.smoker"
                  id="smoker"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="noOfCigarettes"
                  >If Smoker = 'Yes', No of cigarettes</label
                >
                <InputText
                  class="p-inputtext-sm"
                  id="noOfCigarettes"
                  type="text"
                  v-model="inputForm.noOfCigarettes"
                />
              </div>
              <KeyTable
                :label="'Single Premium Policy'"
                :routePath="'/singlepremiumpolicy'"
                :masterCode="'JETSGLPREMPOLTBL'"
                v-model="inputForm.singlePremium"
              />
              <KeyTable
                :label="'Eligible Product Code'"
                :routePath="'/eligibleproductcode'"
                :masterCode="'JETELIGIBLEPRODTBL'"
                v-model="inputForm.eligibleProductCode"
              />
              <div class="field col-12 md:col-6">
                <label for="alcoholConsumption"
                  >Do you consume beer, wine or other alcohol?</label
                >
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.alcoholConsumption"
                  id="alcoholConsumption"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="noOfGlassPerWeek"
                  >If yes, how many bottle / glass per week?</label
                >
                <InputText
                  class="p-inputtext-sm"
                  id="noOfGlassPerWeek"
                  type="text"
                  v-model="inputForm.noOfGlassPerWeek"
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="rop">Replacement of Policy</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.rop"
                  id="rop"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="takeOverInd">Take Over Indicator</label>
                <Dropdown
                  class="p-inputtext-sm"
                  v-model="inputForm.takeOverInd"
                  id="takeOverInd"
                  :options="yesNoQuestion"
                  optionLabel="desc"
                  optionValue="code"
                  placeholder="Select one..."
                />
              </div>
              <div class="field col-12 md:col-6">
                <label for="proposalSubmissionValidity"
                  >Proposal Submission Validity</label
                >
                <InputText
                  class="p-inputtext-sm"
                  id="proposalSubmissionValidity"
                  type="text"
                  v-model="inputForm.proposalSubmissionValidity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import KeyTable from "@/components/common/planmaster/KeyTable";

export default {
  components: {
    KeyTable,
  },
  setup() {
    const router = useRouter();
    const data = computed(() => store.state.jetcase.jetCaseDetail);
    const store = useStore();

    const close = () => {
      router.push("/jetcase");
    };

    onMounted(() => {
      inputForm.value.caiApp = booleanFormat(inputForm.value.caiApp);
      inputForm.value.juvenileApplication = booleanFormat(
        inputForm.value.juvenileApplication
      );
      inputForm.value.insInterest = booleanFormat(inputForm.value.insInterest);
      inputForm.value.health = booleanFormat(inputForm.value.health);
      inputForm.value.calForTotalM = booleanFormat(
        inputForm.value.calForTotalM
      );
      inputForm.value.exstSub = booleanFormat(inputForm.value.exstSub);
      inputForm.value.liamShd = booleanFormat(inputForm.value.liamShd);
      inputForm.value.liamAcid = booleanFormat(inputForm.value.liamAcid);
      inputForm.value.extsClaim = booleanFormat(inputForm.value.extsClaim);
      inputForm.value.keyMan = booleanFormat(inputForm.value.keyMan);
      inputForm.value.bnmSanctionList = booleanFormat(
        inputForm.value.bnmSanctionList
      );
      inputForm.value.smoker = booleanFormat(inputForm.value.smoker);
      inputForm.value.alcoholConsumption = booleanFormat(
        inputForm.value.alcoholConsumption
      );
      inputForm.value.rop = booleanFormat(inputForm.value.rop);
      inputForm.value.takeOverInd = booleanFormat(inputForm.value.takeOverInd);
    });

    const saveExit = () => {
      inputForm.value.noOfGlassPerWeek = parseFloat(
        inputForm.value.noOfGlassPerWeek
      ).toFixed(2);
      inputForm.value.calcForTotalF = parseFloat(
        inputForm.value.calcForTotalF
      ).toFixed(2);
      store.dispatch("jetcase/save", inputForm.value);
      alert("Record saved successfully");
      router.push("/jetcase");
    };

    const delRecord = () => {
      const answer = confirm("Confirm delete this record ?");

      if (answer) {
        store.dispatch("jetcase/delete", inputForm.value.seqId);
        alert("Record deleted successfully");
        router.push("/jetcase");
      }
    };

    const inputForm = ref({
      seqId: data.value.seqId,
      effectiveDateFrom: new Date(data.value.effectiveDateFrom),
      effectiveDateTo: new Date(data.value.effectiveDateTo),
      bmiEmFrm: data.value.bmiEmFrm,
      bmiEmTo: data.value.bmiEmTo,
      occupationClass: data.value.occupationClass,
      caiApp: data.value.caiApp,
      juvenileApplication: data.value.juvenileApplication,
      insInterest: data.value.insInterest,
      nationality: data.value.nationality,
      income: data.value.income,
      paymentMethod: data.value.paymentMethod,
      health: data.value.health,
      max: data.value.max,
      calForTotalM: data.value.calForTotalM,
      calcForTotalF: parseFloat(data.value.calcForTotalF).toFixed(2),
      exstSub: data.value.exstSub,
      exception: data.value.exception,
      liamShd: data.value.liamShd,
      liamAcid: data.value.liamAcid,
      extsClaim: data.value.extsClaim,
      keyMan: data.value.keyMan,
      bnmSanctionList: data.value.bnmSanctionList,
      smoker: data.value.smoker,
      noOfCigarettes: data.value.noOfCigarettes,
      singlePremium: data.value.singlePremium,
      eligibleProductCode: data.value.eligibleProductCode,
      alcoholConsumption: data.value.alcoholConsumption,
      noOfGlassPerWeek: parseFloat(data.value.noOfGlassPerWeek).toFixed(2),
      healthTblNo: data.value.healthTblNo,
      insInterestChildAge: data.value.insInterestChildAge,
      juvenileApplicationAge: data.value.juvenileApplicationAge,
      rop: data.value.rop,
      takeOverInd: data.value.takeOverInd,
      proposalSubmissionValidity: data.value.proposalSubmissionValidity,
    });

    const booleanFormat = (value) => {
      return value == true ? "Y" : "N";
    };

    const yesNoQuestion = ref([
      { desc: "N - NO", code: "N" },
      { desc: "Y - YES", code: "Y" },
    ]);

    return {
      inputForm,
      saveExit,
      booleanFormat,
      delRecord,
      yesNoQuestion,
      close,
    };
  },
};
</script>

<style scoped>
.pagePanel {
  color: #4169e1;
}

.accordionHeaderText {
  color: #7e9aeb;
}
</style>
