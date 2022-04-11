import existingSubstandardProposalDataService from "../../service/nb/existingSubstandardProposalDataService";

export default {
  namespaced: true,
  state() {
    return {
      existSubsProposal: {},
      errorResponse: {},
    };
  },
  getters: {
    getExistSubsProposal: (state) => state.existSubsProposal,
  },
  mutations: {
    setExistSubsProposal(state, payload) {
      state.existSubsProposal = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, existSubsProposal) {

      try {

        await existingSubstandardProposalDataService.save(existSubsProposal);
        
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, existSubsProposal) {
      
      try {

        const res = await existingSubstandardProposalDataService.search(existSubsProposal);
        commit("setExistSubsProposal", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, existSubsProposal) {
      try {
        
        await existingSubstandardProposalDataService.add(existSubsProposal);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await existingSubstandardProposalDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
