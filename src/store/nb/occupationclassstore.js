import occupationClassDataService from "../../service/nb/occupationClassDataService";

export default {
  namespaced: true,
  state() {
    return {
      occClassObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getOccClassObj: (state) => state.occClassObj,
  },
  mutations: {
    setOccClassObj(state, payload) {
      state.occClassObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, occClassObj) {

      try {

        await occupationClassDataService.save(occClassObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, occClassObj) {
      
      try {

        const res = await occupationClassDataService.search(occClassObj);
        commit("setOccClassObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, occClassObj) {
      try {
        
        await occupationClassDataService.add(occClassObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await occupationClassDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
