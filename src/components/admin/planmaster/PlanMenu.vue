<template>
  <div class="flex flex-row justify-content-between mb-4">
    <div class="flex flex-row justify-content-start">
      <Button
        v-if="index == 0"
        icon="pi pi-chevron-left"
        type="button"
        class="p-button-outlined"
        @click="cancel"
        v-tooltip.top="'Back'"
      />
    </div>
    <div class="flex flex-row justify-content-end">
      <Button
        icon="pi pi-chevron-right"
        type="button"
        style="background-color: #000080"
        @click="next"
        v-tooltip.top="'Next'"
      />
    </div>
  </div>
</template>

<script>
import { toRef, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    tabIndex: NaN,
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const index = toRef(props, "tabIndex");
    const prevPath = computed(() => store.state.session.prevPath);

    const next = () => {
      emit("next");
    };

    const cancel = () => {
      router.push(prevPath.value);
    };

    return {
      next,
      cancel,
      index,
    };
  },
};
</script>

<style>
.custom-tooltip-panel .p-tooltip-text {
  background-color: #483d8b;
  color: rgb(255, 255, 255);
}

.custom-tooltip-panel.p-tooltip-left .p-tooltip-arrow {
  border-right-color: #483d8b;
}
</style>
