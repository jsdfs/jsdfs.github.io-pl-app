import occupationService from "../../service/nb/occupationDataService";
// import pager from '../common/pagestore'

export default {
  namespaced: true,
  state() {
    return {
      occupationObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getOccupationObj: (state) => state.occupationObj,
    //: (state) => state.test,
  },
  mutations: {
    setOccupationObj(state, payload) {
      state.occupationObj = payload;
    },
    setOccupationData(state, payload) {
      state.occupationLs = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchOccupationObj) {

      try {
        const res = await occupationService.search(searchOccupationObj);

        commit("setOccupationObj", res.data);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async addOccupation({ commit }, occupationObj) {
      try {
        const occupationFormObj = {
          occupationCode: (occupationObj.occupationCode).toUpperCase(),
          occupationDesc: (occupationObj.occupationDesc).toUpperCase(),
          occupationClass: occupationObj.occupationClass,
        };
        console.log("proposalStatusFormObj " + JSON.stringify(occupationFormObj, null, 4));

        await occupationService.addOccupation(occupationFormObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateOccupation({ commit }, occupationObj) {
      try {
        await occupationService.saveOccupation(occupationObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteOccupation({ commit }, occupationKey) {
      try {
        await occupationService.deleteOccupation(occupationKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
