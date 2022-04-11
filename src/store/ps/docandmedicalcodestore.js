import docAndMedicalCodeDataService from "../../service/ps/docAndMedicalCodeDataService";

export default {
  namespaced: true,
  state() {
    return {
      docAndMedicalCodeObj: {},
      docAndMedicalCodeDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getDocAndMedicalCodeObj: (state) => state.docAndMedicalCodeObj,
    getDocAndMedicalCodeDetail: (state) => state.docAndMedicalCodeDetail,
  },
  mutations: {
    setDocAndMedicalCodeObj(state, payload) {
      state.docAndMedicalCodeObj = payload;
    },
    setDocAndMedicalCodeDetail(state, payload) {
      state.docAndMedicalCodeDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchDocAndMedicalCodeObj) {
      try {
        const res = await docAndMedicalCodeDataService.search(searchDocAndMedicalCodeObj);
        commit("setDocAndMedicalCodeObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addDocAndMedicalCode({ commit }, docAndMedicalCodeObj) {
      try {
        const docAndMedicalCodeFormObj = {
          tableNo: docAndMedicalCodeObj.tableNo,
          requirementCode: docAndMedicalCodeObj.requirementCode,
          firstReminder: docAndMedicalCodeObj.firstReminder,
          secondReminder: docAndMedicalCodeObj.secondReminder,
          expiryPeriod: docAndMedicalCodeObj.expiryPeriod,
        };
        await docAndMedicalCodeDataService.addDocAndMedicalCode(docAndMedicalCodeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateDocAndMedicalCode({ commit }, docAndMedicalCodeObj) {
      try {

        const docAndMedicalCodeFormObj = {
            seqId: docAndMedicalCodeObj.seqId,
            tableNo: docAndMedicalCodeObj.tableNo,
            requirementCode: docAndMedicalCodeObj.requirementCode,
            firstReminder: docAndMedicalCodeObj.firstReminder,
            secondReminder: docAndMedicalCodeObj.secondReminder,
            expiryPeriod: docAndMedicalCodeObj.expiryPeriod,
          };
        await docAndMedicalCodeDataService.saveDocAndMedicalCode(docAndMedicalCodeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteDocAndMedicalCode({ commit }, docAndMedicalCodeKey) {
      try {
        await docAndMedicalCodeDataService.deleteDocAndMedicalCode(docAndMedicalCodeKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, docAndMedicalCodeDetail) {

      try {

        commit("setDocAndMedicalCodeDetail", docAndMedicalCodeDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
