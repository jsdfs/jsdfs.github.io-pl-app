<template>
  <div class="card">
    <div class="flex flex-row justify-content-between mb-3">
      <Button
        icon="pi pi-chevron-left"
        type="button"
        class="p-button-outlined"
        @click="back"
        v-tooltip.top="'Back'"
      />
      <Button
        icon="pi pi-chevron-right"
        type="button"
        style="background-color: #000080"
        @click="next"
        v-tooltip.top="'Next'"
      />
    </div>

    <div class="p-fluid formgrid grid mb-5">
      <div class="field col-12 md:col-5">
        <label for="tableNo">New Table Number</label>
        <Dropdown
          id="tableNo"
          class="p-inputtext-sm"
          v-model="combKeyObj.tablNo"
          :options="ddlRateTable"
          optionLabel="desc"
          optionValue="code"
          placeholder="Select one..."
          required
        />
      </div>
    </div>

    <PickList v-model="combKey" listStyle="height:342px" dataKey="key">
      <template #sourceheader> Combination Key Select </template>
      <template #targetheader> Selected </template>
      <template #item="slotProps">
        <div>
          {{ slotProps.item.name }}
        </div>
      </template>
    </PickList>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import planMaintDataService from "@/service/admin/planMaintDataService";

export default {
  props: {
    backPath: String,
    nextPath: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const combKeyObj = computed(() => store.state.planmaster.combKeyObj);
    const prevPath = computed(() => store.state.session.prevPath);
    const combKey = ref(null);
    // const combKeySelect = computed(() => [
    //   store.state.planMaster.combKeySelect,
    //   [],
    // ]);

    const back = () => {
      console.log("back: " + prevPath.value);
      router.push(prevPath.value);
    };

    const next = () => {
      router.push(props.nextPath);
    };

    onMounted(() => {
      planMaintDataService
        .getCombKey()
        .then((data) => (combKey.value = [data, []]));
    });

    return { combKeyObj, prevPath, combKey, back, next };
  },
};
</script>

<style>
.p-picklist-source-controls .p-button {
  visibility: hidden;
}

.p-picklist-target-controls .p-button {
  visibility: hidden;
}

.sourceFrame .p-button {
  visibility: visible;
}
</style>
