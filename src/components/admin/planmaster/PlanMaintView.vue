<template>
  <div class="card">
    <SearchSelection
      :listitemLs="listitemLs"
      :inputForm="inputForm"
      @changeItem="listitemLs = $event"
    />
    <div style="margin-bottom: 1%">
      <Button
        icon="pi pi-search"
        style="background-color: #000080"
        class="mr-2 float-start"
        @click="search"
        v-tooltip.top="'Search'"
      />
      <Button
        icon="pi pi-filter-slash"
        class="p-button-danger mr-2 float-start"
        @click="clear"
        v-tooltip.top="'Clear'"
      />
      <Button
        icon="pi pi-plus"
        style="background-color: #000080"
        class="float-end"
        @click="add"
        v-tooltip.top="'Add'"
      />
    </div>
    <PlanMaintDataTable :dataList="tableData.data" />
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import planMaintDataService from "@/service/admin/planMaintDataService";
import PlanMaintDataTable from "@/components/admin/planmaster/PlanMaintDataTable";
import SearchSelection from "@/components/common/SearchSelection";
import { useStore } from "vuex";

export default {
  name: "PlanMaintView",
  components: {
    PlanMaintDataTable,
    SearchSelection,
  },
  setup() {
    const path = 16;
    const store = useStore();

    // Data
    const inputForm = reactive({
      prodCat: "",
      planType: "",
      planCode: "",
      paging: {
        page: 0,
        rows: 10,
      },
    });

    onMounted(() => {
      store.dispatch("breadcrumb/set", path);
      planMaintDataService
        .getPlanObj()
        .then((data) => (tableData.value = data));
    });

    const tableData = ref({});

    const listitemLs = ref([
      { name: "prodCat", label: "Product Category", type: "input" },
      { name: "planType", label: "Plan Type", type: "input" },
      { name: "planCode", label: "Plan Code", type: "input" },
    ]);

    return {
      tableData,
      listitemLs,
      inputForm,
    };
  },
};
</script>

<style scoped>
.pagePanel {
  color: #4169e1;
}
</style>
