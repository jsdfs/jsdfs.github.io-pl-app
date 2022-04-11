import servicingUnitDataService from "../../service/ps/servicingUnitDataService";

export default {
  namespaced: true,
  state() {
    return {
      servicingUnitObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getServicingUnitObj: (state) => state.servicingUnitObj,
  },
  mutations: {
    setServicingUnitObj(state, payload) {
      state.servicingUnitObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, servicingUnitObj) {

      try {

        await servicingUnitDataService.save(servicingUnitObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, servicingUnitObj) {
      
      try {

        const res = await servicingUnitDataService.search(servicingUnitObj);
        commit("setServicingUnitObj", res.data);
        console.log(res.data)
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, servicingUnitObj) {
      try {
        
        await servicingUnitDataService.add(servicingUnitObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await servicingUnitDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
