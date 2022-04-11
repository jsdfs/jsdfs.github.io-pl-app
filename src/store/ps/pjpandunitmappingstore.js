import PJPandUnitMappingDataService from "../../service/ps/PJPandUnitMappingDataService";

export default {
  namespaced: true,
  state() {
    return {
      pjpUnitObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getPjpUnitObj: (state) => state.pjpUnitObj,
  },
  mutations: {
    setPjpUnitObj(state, payload) {
      state.pjpUnitObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, pjpUnitObj) {

      try {

        await PJPandUnitMappingDataService.save(pjpUnitObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, pjpUnitObj) {
      
      try {

        const res = await PJPandUnitMappingDataService.search(pjpUnitObj);
        commit("setPjpUnitObj", res.data);
        
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, pjpUnitObj) {
      try {
        
        await PJPandUnitMappingDataService.add(pjpUnitObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await PJPandUnitMappingDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
