import maxSumRiderDataService from "../../service/nb/maxSumRiderDataService";

export default {
  namespaced: true,
  state() {
    return {
      maxSumRiderObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getMaxSumRiderObj: (state) => state.maxSumRiderObj,
  },
  mutations: {
    setMaxSumRiderObj(state, payload) {
      state.maxSumRiderObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, maxSumRiderObj) {

      try {

        await maxSumRiderDataService.save(maxSumRiderObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, maxSumRiderObj) {
      
      try {

        const res = await maxSumRiderDataService.search(maxSumRiderObj);
        commit("setMaxSumRiderObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, maxSumRiderObj) {
      try {
        
        await maxSumRiderDataService.add(maxSumRiderObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await maxSumRiderDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
