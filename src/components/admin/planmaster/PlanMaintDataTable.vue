<template>
  <DataTable
    :value="dataList"
    dataKey="seqId"
    responsiveLayout="scroll"
    class="p-datatable-sm"
    selectionMode="single"
    @row-click="detailPage"
  >
    <Column field="planCode" header="Plan Code"></Column>
    <Column field="planStatus" header="Plan Status"></Column>
    <Column field="launchDateFr" header="Launch Date From"></Column>
    <Column field="launchDateTo" header="Launch Date To"></Column>
    <Column field="prodCat" header="Product Category"></Column>
    <Column field="benType" header="Benefit Type"></Column>
    <Column field="partiCode" header="Participation code"></Column>
    <Column field="planType" header="Plan Type"></Column>
    <Column field="planCurr" header="Plan Currency"></Column>
  </DataTable>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "PlanMaintDataTable",
  props: {
    dataList: Object,
  },
  setup() {
    const router = useRouter();

    const detailPage = (e) => {
      console.log("event: " + JSON.stringify(e));
      router.push("/planmasterdet");
    };

    return {
      detailPage,
    };
  },
};
</script>
