import singlePremiumPolicyDataService from "../../service/nb/singlePremiumPolicyDataService";

export default {
  namespaced: true,
  state() {
    return {
      singlePremPolicyObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getSinglePremPolicyObj: (state) => state.singlePremPolicyObj,
  },
  mutations: {
    setSinglePremPolicyObj(state, payload) {
      state.singlePremPolicyObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, singlePremPolicyObj) {

      try {

        await singlePremiumPolicyDataService.save(singlePremPolicyObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, singlePremPolicyObj) {
      
      try {

        const res = await singlePremiumPolicyDataService.search(singlePremPolicyObj);
        commit("setSinglePremPolicyObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, singlePremPolicyObj) {
      try {
        
        await singlePremiumPolicyDataService.add(singlePremPolicyObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await singlePremiumPolicyDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
