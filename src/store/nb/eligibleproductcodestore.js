import eligibleProductCodeDataService from "../../service/nb/eligibleProductCodeDataService";

export default {
  namespaced: true,
  state() {
    return {
      prodCodeObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getProdCodeObj: (state) => state.prodCodeObj,
  },
  mutations: {
    setProdCodeObj(state, payload) {
      state.prodCodeObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, prodCodeObj) {

      try {

        await eligibleProductCodeDataService.save(prodCodeObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, prodCodeObj) {
      
      try {

        const res = await eligibleProductCodeDataService.search(prodCodeObj);
        commit("setProdCodeObj", res.data);
        console.log()
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, prodCodeObj) {
      try {
        
        await eligibleProductCodeDataService.add(prodCodeObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await eligibleProductCodeDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
