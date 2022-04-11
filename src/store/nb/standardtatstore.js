import standardTatDataService from "../../service/nb/standardTatDataService";

export default {
  namespaced: true,
  state() {
    return {
      standardTatObj: {},
      standardTatLs: [],
      errorResponse: {},
    };
  },
  getters: {
    getStandardTatObj: (state) => state.standardTatObj,
    getStandardTatData: (state) => state.standardTatLs,
    getTest: (state) => state.test,
  },
  mutations: {
    setStandardTatObj(state, payload) {
      state.standardTatObj = payload;
    },
    setStandardTatData(state, payload) {
      state.standardTatLs = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchStandardTatObj) {

      try {
        const res = await standardTatDataService.search(searchStandardTatObj);
        console.log("All standard tat detail: " + JSON.stringify(res.data, null, 4));
        commit("setStandardTatObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }

    },
    async addStandardTat({ commit }, standardTatObj) {
      try {
        const standardTatFormObj = {
          distributionChannel: standardTatObj.distributionChannel,
          tatStatus: standardTatObj.tatStage,
          standardTatDays: standardTatObj.standardTatDays,
        };
        await standardTatDataService.addStandardTat(standardTatFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateStandardTat({ commit }, standardTatObj) {
      try {
        const standardTatFormObj = {
            seqId: standardTatObj.seqId,
            distributionChannel: standardTatObj.distributionChannel,
            tatStatus: standardTatObj.tatStatus,
            standardTatDays: standardTatObj.standardTatDays,
        };
        await standardTatDataService.saveStandardTat(standardTatFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteStandardTat({ commit }, standardTatKey) {
      try {
        await standardTatDataService.deleteStandardTat(standardTatKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
