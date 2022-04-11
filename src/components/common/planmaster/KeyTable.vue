<template>
  <div class="field col-12 md:col-6">
    <div class="d-flex">
      <span style="width: 100%">
        <MasterOptions
          :label="label"
          :masterCode="masterCode"
          v-model="dropDownValue"
        />
      </span>
      <template v-if="combKeyInd">
        <i
          class="pi pi-bars pt-5 ml-3 mt-2"
          style="font-size: 1.25rem; color: #8b008b; cursor: pointer"
          @click="toggleCombKeyView"
        ></i>
      </template>
      <i
        class="pi pi-pencil pt-5 ml-3 mt-2"
        style="font-size: 1.25rem; color: #8b008b; cursor: pointer"
        @click="detailTab"
      ></i>
    </div>
  </div>

  <OverlayPanel
    ref="combKeyView"
    appendTo="body"
    style="width: 300px"
    :breakpoints="{ '960px': '75vw' }"
  >
    <div class="mb-3">
      <b>{{ combkeyLabel }}</b>
    </div>
    <template v-for="combkey in combinationKey" :key="combkey.key">
      <div class="field-checkbox col-12 -mb-2">
        <Checkbox
          :id="combkey.key"
          name="combkey"
          :value="combkey"
          v-model="combKeyObj.combKey"
          :disabled="combkey.key"
        />
        <label>{{ combkey.name }}</label>
      </div>
    </template>
  </OverlayPanel>

  <!-- <div class="field col-12 md:col-1">
        <i class="pi pi-pencil pt-5 ml-3" style="font-size: 1.25rem; color:#8B008B; cursor: pointer;" @click="detailTab"></i>
    </div> -->
  <!-- <img :src="require('/public/images/common/btn_maintenance.gif')"/> -->
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MasterOptions from "@/components/common/planmaster/MasterOptions";

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    label: String,
    combkeyLabel: String,
    masterCode: String,
    routePath: String,
    combKeyInd: Boolean,
  },
  components: {
    MasterOptions,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    const tablNo = computed(() => store.state.planmaster.planCombKey);
    const combKeyObj = computed(() => store.state.planmaster.combKeyObj);
    const combinationKey = computed(() => store.state.planmaster.combKeySelect);
    const combKeyView = ref();
    const dropDownValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    const toggleCombKeyView = (event) => {
      combKeyView.value.toggle(event);
    };

    const detailTab = () => {
      router.push(props.routePath);
    };

    return {
      tablNo,
      combKeyObj,
      combinationKey,
      combKeyView,
      dropDownValue,
      toggleCombKeyView,
      detailTab,
    };
  },
};
</script>

<style>
.p-overlaypanel {
  background-color: beige;
}
</style>
