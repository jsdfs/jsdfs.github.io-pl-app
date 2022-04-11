<template>
  <!-- <div class="card w-full flex flex-column justify-content-between"> -->
  <div>
    <h5 class="pagePanel"><b>Plan Configuration Details</b></h5>
    <br />
    <div class="p-fluid formgrid grid">
      <div class="field col-12 md:col-6">
        <label for="code">Plan Code</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.planCode"
          type="text"
          v-model="planHeader.planCode"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Plan Name</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.planName"
          type="text"
          v-model="planHeader.planName"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Plan Status</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="planHeader.planStatus"
          :options="planStat"
          optionLabel="desc"
          optionValue="code"
          placeholder="Select an option..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Approved Date</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.approvedDt"
          type="text"
          v-model="planHeader.approvedDt"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Launch Date From</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.launchDtFr"
          type="text"
          v-model="planHeader.launchDtFr"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="desc">Launch Date To</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.launchDtTo"
          type="text"
          v-model="planHeader.launchDtTo"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Product Category</label>
        <Dropdown
          class="p-inputtext-sm"
          v-model="planHeader.prodCategory"
          :options="prodCategory"
          optionLabel="desc"
          optionValue="code"
          placeholder="Select an option..."
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Benefit Type</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.benefitType"
          type="text"
          v-model="planHeader.benefitType"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Participation code</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.participationCode"
          type="text"
          v-model="planHeader.participationCode"
        />
      </div>
      <div class="field col-12 md:col-6"></div>
      <div class="field col-12 md:col-6">
        <label for="code">Plan Type</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.planType"
          type="text"
          v-model="planHeader.planType"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Plan Currency</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.planCurrency"
          type="text"
          v-model="planHeader.planCurrency"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Division</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.planType"
          type="text"
          v-model="planHeader.planType"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">PPR (only for Universal Life) *</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.pprInd"
          type="text"
          v-model="planHeader.pprInd"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">BIK Rider</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.bikRider"
          type="text"
          v-model="planHeader.bikRider"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="code">Notional Plan</label>
        <InputText
          class="p-inputtext-sm"
          id="planHeader.notionalPlan"
          type="text"
          v-model="planHeader.notionalPlan"
        />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import masterDataService from "@/service/admin/masterDataService";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      // Fetch From Database
      // masterDataService.getDetailByHeaderCode("PLANSTAT").then(res => masterDropDownArr.value.planStatArr = res.data);
      // masterDataService.getDetailByHeaderCode("PRODCAT").then(res => masterDropDownArr.value.prodCategoryArr = res.data);

      // Fetch JSON local files
      masterDataService
        .getPlanStatus()
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          masterDropDownArr.value.planStatArr = data;
        });

      masterDataService
        .getProdCategory()
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          masterDropDownArr.value.prodCategoryArr = data;
        });
    });

    const planHeader = computed(
      () => store.state.planmaster.planMasterObj.planHeader
    );

    const masterDropDownArr = ref({
      planStatArr: [],
      prodCategoryArr: [],
    });
    const planStat = computed(() => {
      return masterDropDownArr.value.planStatArr.map(concateCodeDesc);
    });
    const prodCategory = computed(() => {
      return masterDropDownArr.value.prodCategoryArr.map(concateCodeDesc);
    });
    const save = () => {};
    const back = () => {
      router.push("/planmaster");
    };

    return {
      masterDropDownArr,
      planHeader,
      planStat,
      prodCategory,
      save,
      back,
    };
  },
};

const concateCodeDesc = (mastercode) => {
  return {
    code: mastercode.code,
    desc: mastercode.code + " - " + mastercode.desc,
  };
};
</script>

<style scoped>
.pagePanel {
  color: #000080;
}
</style>
