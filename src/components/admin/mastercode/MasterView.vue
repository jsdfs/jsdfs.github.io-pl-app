<template>
  <div class="card">
        <SearchSelection
            :listitemLs="listitemLs"
            :inputForm="inputForm"
            @changeItem="listitemLs = $event"
        />  
        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                <MasterAddModal :btnName="addBtnName" @reload-table-data="search" />
        </div>
    <MasterDataTable :tableData="tableData" />
    <Pagination :pagingObj="tableData.params" @change-page="updatePaging" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
// import masterService from '../../service/admin/masterDataService'
import MasterDataTable from "@/components/admin/mastercode/MasterDataTable";
import MasterAddModal from "@/components/admin/mastercode/MasterAddModal";
import Pagination from "@/components/common/Pagination";
import SearchSelection from '@/components/common/SearchSelection';

export default {
  name: "MasterView",
  components: {
    MasterDataTable,
    MasterAddModal,
    Pagination,
    SearchSelection,
  },
  setup() {
    const path = 17;

    onMounted(() => {
      store.dispatch("breadcrumb/set", path);
      search();
      // masterService.getMaster().then(data => tableData.value = data)
      // masterService.getDetailCode('DCBANKDIS').then(res => data.value = res.data);
      // masterService.getDetailCode('BILOPT1RIDER').then(res => data2.value = res.data);
    });

    const store = useStore();

    // Data
    const addBtnName = ref("Add");
    const updateBtnName = ref("Update");
    const inputForm = ref({
      code: "",
      desc: "",
      predefined: "",
      paging: {
        page: 1,
        rows: 10,
      },
    });
    const predefinedLs = ref([
      { name: "Yes", value: "Y" },
      { name: "No", value: "N" },
    ]);

    const tableData = computed(() => store.getters["master/getMastersObj"]);

    // Funciton
    const clear = () => {
      inputForm.value.code = "";
      inputForm.value.desc = "";
      inputForm.value.predefined = "";

      search();
    };

    const mapPredefined = (paging) => {
      let predefinedVal = null;
      let serachObj = {};

      if (inputForm.value.predefined.length > 0) {
        if (inputForm.value.predefined == "Y") {
          predefinedVal = true;
        } else {
          predefinedVal = false;
        }
      }

      if (paging != null) {
        serachObj = {
          code: inputForm.value.code,
          desc: inputForm.value.desc,
          predefined: predefinedVal,
          pager: {
            page: paging.page + 1,
            size: paging.rows,
          },
        };
      } else {
        serachObj = {
          code: inputForm.value.code,
          desc: inputForm.value.desc,
          predefined: predefinedVal,
          pager: {
            page: 1,
            size: 10,
          },
        };
      }

      return serachObj;
    };

    const listitemLs = ref([
        { name: "code", label: "Master Code", type: "input" },
        { name: "desc", label: "Master Description", type: "input" },
        { name: "predefined", label: "System Predefined", type: "dropdown", options: predefinedLs, optionLabel:"name", optionValue:"value" }
    ]);

    const search = () => {
      store.dispatch("master/search", mapPredefined());
    };

    const updatePaging = (paging) => {
      store.dispatch("master/search", mapPredefined(paging));
    };

    return {
      addBtnName,
      updateBtnName,
      inputForm,
      predefinedLs,
      tableData,
      clear,
      search,
      updatePaging,
      listitemLs
    };
  },
};
</script>

<style>
.pagePanel {
  color: #4169e1;
}
</style>
