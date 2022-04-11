<template>
  <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="openModal"  />

  <Dialog
    header=" "
    v-model:visible="displayModal"
    :style="{ width: '50vw' }"
    :modal="true"
    @update:visible="closeModal"

  >
  
    <div class="grid">
      <div class="col-12">
        <div class="card p-fluid">
          <div class="field">
            <label for="sourceType">Source Type *</label>
            <Dropdown
              id="sourceType"
              v-model="inputForm.sourceType"
              :options="tableType"
              optionLabel="desc"
              optionValue="code"
              placeholder="Select one..."
            />
          </div>

          <br />
          <div class="field">
            <label for="proposalStatusCode">Proposal Status Code *</label>
            <Dropdown
              id="proposalStatusCode"
              v-model="inputForm.proposalStatusCode"
              :options="tableCode"
              optionLabel="desc"
              optionValue="code"
              placeholder="Select one..."
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
        <Button icon="pi pi-plus" style="background-color:#000080;" type="button" class="p-button-sm" @click="add" />
    </template>
  </Dialog>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProposalStatusAddModal",
  emits: ["reloadTableData"],
  props: {
    tableType: Object,
    tableCode: Object,
  },
  setup(props, { emit }) {
    const store = useStore();
    const displayModal = ref(false);
    const addProposalStatusObj = ref({});
    const inputForm = ref({
      sourceType: "",
      proposalStatusCode: "",
    });

    const openModal = () => {
      displayModal.value = true;
    };

    const closeModal = () => {
      displayModal.value = false;
      inputForm.value = {
        sourceType: "",
        proposalStatusCode: "",
      };
    };

    const add = () => {
      if (inputForm.value.sourceType == "") {
        alert("Please select Source Type");
      } else if (inputForm.value.proposalStatusCode == "") {
        alert("Please select Proposal Status Code");
      } else {
        store
          .dispatch("proposalstatus/addProposalStatusHeader", inputForm.value)
          .then(() => {
            displayModal.value = false;
            inputForm.value = {
              sourceType: "",
              proposalStatusCode: "",
            };
            emit("reloadTableData");
            alert("Record added successfully");
          });
      }
    };

    return {
      add,
      displayModal,
      openModal,
      closeModal,
      addProposalStatusObj,
      inputForm,
    };
  },
};
</script>

