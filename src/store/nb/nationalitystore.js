import nationalityDataService from "../../service/nb/nationalityDataService";

export default {
  namespaced: true,
  state() {
    return {
      nationalObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getNationalObj: (state) => state.nationalObj,
  },
  mutations: {
    setNationalObj(state, payload) {
      state.nationalObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, nationalObj) {

      try {

        await nationalityDataService.save(nationalObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, nationalObj) {
      
      try {

        const res = await nationalityDataService.search(nationalObj);
        commit("setNationalObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, nationalObj) {
      try {
        
        await nationalityDataService.add(nationalObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await nationalityDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
