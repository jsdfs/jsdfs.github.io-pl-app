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
                <ProposalStatusAddModal
                :tableType="tableType"
                :tableCode="tableCode"
                @reload-table-data="search"
                />
        </div>
        <ProposalStatusDataTable
          v-if="tableVisible"
          :tableDataWithDesc="tableDataWithDesc"
          :tableType="tableType"
          :tableCode="tableCode"
          @search="search"
          @updatePaging="updatePaging"
        />
        <Pagination :pagingObj="tableData.params" @change-page="updatePaging" />
      </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import ProposalStatusDataTable from "@/components/nb/maintenance/ProposalStatusDataTable";
import ProposalStatusAddModal from "@/components/nb/maintenance/ProposalStatusAddModal";
import masterService from "../../../service/admin/masterDataService";
import Pagination from "@/components/common/Pagination";
import SearchSelection from "@/components/common/SearchSelection";

export default {
  name: "ProposalStatusView",
  components: {
    ProposalStatusDataTable,
    Pagination,
    SearchSelection,
    ProposalStatusAddModal
  },
  setup() {
    const store = useStore();

    // Data
    const inputForm = reactive({
      sourceType: "",
      proposalStatusCode: "",
    });

    const tableData = ref([]);
    const tableDataWithDesc = ref([]);
    const tableType = ref();
    const tableCode = ref();
    const tableVisible = ref(false);

    const listitemLs = ref([
        { name: "sourceType", label: "Source Type", type: "dropdown", options: tableType, optionLabel:"desc", optionValue:"code" },
        { name: "proposalStatusCode", label: "Proposal Status Code", type: "dropdown", options: tableCode, optionLabel:"desc", optionValue:"code" }
    ]);

    // Funciton
    const clear = () => {
      inputForm.sourceType = "";
      inputForm.proposalStatusCode = "";

      search();
    };

    const path = 1;

    onMounted(() => {
      store.dispatch("breadcrumb/set", path);
    });

    const map = (paging) => {
      let searchObj = {};

      if (paging != null) {
        searchObj = {
          sourceType: inputForm.sourceType,
          proposalStatusCode: inputForm.proposalStatusCode,
          pager: {
            page: paging.page + 1,
            size: paging.rows,
          },
        };
      } else {
        searchObj = {
          sourceType: inputForm.sourceType,
          proposalStatusCode: inputForm.proposalStatusCode,
          pager: {
            page: 0,
            size: 10,
          },
        };
      }

      return searchObj;
    };

    const search = () => {
      store.dispatch("proposalstatus/search", map()).then(() => {
        tableData.value = store.getters["proposalstatus/getProposalStatusObj"];

        tableDataWithDesc.value = tableData.value.list.map(concateDesc);
      });
    };

    const concateDesc = (proposalstatusRow) => {
      var typeRecord = [{ code: "", desc: "" }];
      var codeRecord = [{ code: "", desc: "" }];

      typeRecord = tableType.value.filter((elem) => {
        return elem.code === proposalstatusRow.sourceType;
      });
      codeRecord = tableCode.value.filter((elem) => {
        return elem.code === proposalstatusRow.proposalStatusCode;
      });

      if (typeof typeRecord[0].code === "undefined") {
        typeRecord[0] = { code: "", desc: "" };
      }

      if (typeof codeRecord[0] === "undefined") {
        codeRecord[0] = { code: "", desc: "" };
      }

      return {
        seqId: proposalstatusRow.seqId,
        sourceType: typeRecord[0].code,
        sourceTypeDesc: typeRecord[0].desc,
        proposalStatusCode: codeRecord[0].code,
        proposalStatusCodeDesc: codeRecord[0].desc,
      };
    };

    const updatePaging = (paging) => {
      store.dispatch("proposalstatus/search", map(paging)).then(() => {
        tableData.value = store.getters["proposalstatus/getProposalStatusObj"];

        tableDataWithDesc.value = tableData.value.list.map(concateDesc);
      });
    };

    const add = (inputForm) => {
      console.log("inputForm.value.desc: " + inputForm);
      store.dispatch("exclusionCode/addExclusionCode", inputForm);
    };

    onMounted(() => {
      //store.dispatch('proposalstatus/search', map());

      masterService
        .getDetailCode("PROPSTATMAINT")
        .then((res) => {
          //console.log("All type detail: " + JSON.stringify(res.data, null, 4));
          tableType.value = res.data;
        })
        .catch((e) => {
          console.error(e.response.status);
        })
        .then(() =>
          masterService
            .getDetailCode("PROPSTAT")
            .then((res) => {
              //console.log("All code detail: " + JSON.stringify(res.data, null, 4));
              tableCode.value = res.data;
              tableVisible.value = true;
            })
            .catch((e) => {
              console.error(e.response.status);
            })
        )
        .then(() => search());
    });

    return {
      inputForm,
      tableData,
      tableType,
      tableCode,
      tableVisible,
      map,
      clear,
      search,
      add,
      updatePaging,
      tableDataWithDesc,
      listitemLs,
    };
  },
};
</script>

<style scoped>
.pagePanel {
  color: #4169e1;
}
</style>
