<template>
  <div class="field col-12 md:col-6">
    <div class="d-flex">
      <span style="width: 100%">
        <CommonOptions
          :modelValue="modelValue"
          :label="label"
          :isTruncate="isTruncate"
          :codeName="codeName"
          :descName="descName"
          :dataDispatch="dataDispatch"
          :storeGetters="storeGetters"
          :searchObj="searchObj"
          v-model="dropDownValue"
        />
      </span>
      <i
        class="pi pi-pencil pt-5 ml-4 mt-2"
        style="font-size: 1.25rem; color: #8b008b; cursor: pointer; width: 5%"
        @click="detailTab"
      ></i>
    </div>
  </div>
  <!-- <div class="field col-12 md:col-1">
        <i class="pi pi-pencil pt-5 ml-4" style="font-size: 1.25rem; color:#8B008B; cursor: pointer; margin-top:15%;" @click="detailTab"></i>
    </div> -->
  <!-- <img :src="require('/public/images/common/btn_maintenance.gif')"/> -->
</template>

<script>
import { computed, toRef } from "vue";
import { useStore } from "vuex";
import CommonOptions from "@/components/common/CommonOptions";
import { useRouter } from "vue-router";

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    label: String,
    routePath: String,
    isTruncate: Boolean,
    codeName: String,
    descName: String,
    dataDispatch: String,
    storeGetters: String,
    searchObj: Object,
  },
  components: {
    CommonOptions,
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const tablNo = computed(() => store.state.planMaster.planCombKey);

    const routePathAddr = toRef(props, "routePath");

    const dropDownValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    const detailTab = () => {
      if (typeof props.routePath != "undefined") {
        router.push(props.routePath);
      } else {
        emit("displayDialog");
      }
    };

    return {
      tablNo,
      dropDownValue,
      detailTab,
      routePathAddr,
    };
  },
};
</script>
