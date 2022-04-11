import alterationControlService from "../../service/ps/alterationControlByGlobalDataService";

export default {
  namespaced: true,
  state() {
    return {
      alterationControlObj: {},
      alterationControlDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getAlterationControlObj: (state) => state.alterationControlObj,
    getAlterationControlDetail: (state) => state.alterationControlDetail,
    getTest: (state) => state.test,
  },
  mutations: {
    setAlterationControlObj(state, payload) {
      state.alterationControlObj = payload;
    },
    setAlterationControlDetail(state, payload) {
      state.alterationControlDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchAlterationControlObj) {
      try {
        const res = await alterationControlService.search(searchAlterationControlObj);
        commit("setAlterationControlObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addAlterationControl({ commit }, alterationControlObj) {
      try {
        const alterationControlFormObj = {
          taskType: alterationControlObj.taskType,
          outstandingRequirementTable: alterationControlObj.outstandingRequirementTable,
          alterationStatusTable: alterationControlObj.alterationStatusTable,
          chargeCurrency: null,
          chargeAmount: 0.00,
          autoCancelDuration: parseInt(alterationControlObj.autoCancelDuration),
          expireDuration: parseInt(alterationControlObj.expireDuration),
          stampCurrency: null,
          stampAmount: 0.00,
        };
        await alterationControlService.addAlterationControl(alterationControlFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateAlterationControl({ commit }, alterationControlObj) {
      try {
        const alterationControlFormObj = {
            seqId: alterationControlObj.seqId,
            taskType: alterationControlObj.taskType,
            outstandingRequirementTable: alterationControlObj.outstandingRequirementTable,
            alterationStatusTable: alterationControlObj.alterationStatusTable,
            chargeCurrency: alterationControlObj.chargeCurrency,
            chargeAmount: alterationControlObj.chargeAmount,
            autoCancelDuration: alterationControlObj.autoCancelDuration,
            expireDuration: alterationControlObj.expireDuration,
            stampCurrency: alterationControlObj.stampCurrency,
            stampAmount: alterationControlObj.stampAmount,
        };
        await alterationControlService.saveAlterationControl(alterationControlFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteAlterationControl({ commit }, alterationControlKey) {
      try {
        await alterationControlService.deleteAlterationControl(alterationControlKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, alterationControlDetail) {

      try {

        commit("setAlterationControlDetail", alterationControlDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
