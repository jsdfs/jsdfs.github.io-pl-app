import proposalInputDataService from "../../service/nb/proposalInputDataService";

export default {
  namespaced: true,
  state() {
    return {
      proposalInputObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getProposalInputObj: (state) => state.proposalInputObj,
  },
  mutations: {
    setProposalInputObj(state, payload) {
      state.proposalInputObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, proposalInputObj) {
      try {
        await proposalInputDataService.save(proposalInputObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async saveInsureDetail({ commit }, proposalInputObj) {
      try {
        await proposalInputDataService.saveInsureDetail(proposalInputObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async savePolicyholder({ commit }, proposalInputObj) {
      try {
        await proposalInputDataService.savePolicyholder(proposalInputObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
