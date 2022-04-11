import loadingRangeDataService from "../../service/nb/loadingRangeDataService";

export default {
  namespaced: true,
  state() {
    return {
      loadingRangeObj: {},
      loadingRangeDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getLoadingRangeObj: (state) => state.loadingRangeObj,
    getLoadingRangeDetail: (state) => state.loadingRangeDetail,
    getTest: (state) => state.test,
  },
  mutations: {
    setLoadingRangeObj(state, payload) {
      state.loadingRangeObj = payload;
    },
    setloadingRangeDetail(state, payload) {
      state.loadingRangeDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchLoadingRangeObj) {

      if(searchLoadingRangeObj.effectiveDateFrom != null & searchLoadingRangeObj.effectiveDateFrom != '')
      {
        var dd = String(searchLoadingRangeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(searchLoadingRangeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0');
        var yyyy = searchLoadingRangeObj.effectiveDateFrom.getFullYear();
  
        searchLoadingRangeObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;
      }

      if(searchLoadingRangeObj.effectiveDateTo != null & searchLoadingRangeObj.effectiveDateTo != '')
      {
         dd = String(searchLoadingRangeObj.effectiveDateTo.getDate()).padStart(2, '0');
         mm = String(searchLoadingRangeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0');
         yyyy = searchLoadingRangeObj.effectiveDateTo.getFullYear();
  
         searchLoadingRangeObj.effectiveDateTo  = yyyy + '-' + mm + '-' + dd;
      }

      try {
        const res = await loadingRangeDataService.search(searchLoadingRangeObj);
        commit("setLoadingRangeObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addLoadingRange({ commit }, loadingRangeObj) {
      try {
        var dd = String(loadingRangeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(loadingRangeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0');
        var yyyy = loadingRangeObj.effectiveDateFrom.getFullYear();
  
        var fromDate = yyyy + '-' + mm + '-' + dd;

        dd = String(loadingRangeObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(loadingRangeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0');
        yyyy = loadingRangeObj.effectiveDateTo.getFullYear();
  
        var toDate = yyyy + '-' + mm + '-' + dd;

        const loadingRangeFormObj = {
          loadCode: loadingRangeObj.loadCode,
          effectiveDateFrom: fromDate,
          effectiveDateTo:toDate,
          minLoadRate: loadingRangeObj.minLoadRate,
          maxLoadRate: loadingRangeObj.maxLoadRate,
        };
        await loadingRangeDataService.addLoadingRange(loadingRangeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateLoadingRange({ commit }, loadingRangeObj) {
      try {
        var dd = String(loadingRangeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(loadingRangeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = loadingRangeObj.effectiveDateFrom.getFullYear();
  
        var fromDate = yyyy + '-' + mm + '-' + dd;

        dd = String(loadingRangeObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(loadingRangeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = loadingRangeObj.effectiveDateTo.getFullYear();
  
        var toDate = yyyy + '-' + mm + '-' + dd;

        const loadingRangeFormObj = {
          seqId: loadingRangeObj.seqId,
          loadCode: loadingRangeObj.loadCode,
          effectiveDateFrom: fromDate,
          effectiveDateTo:toDate,
          minLoadRate: loadingRangeObj.minLoadRate,
          maxLoadRate: loadingRangeObj.maxLoadRate,
        };
        await loadingRangeDataService.saveLoadingRange(loadingRangeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteLoadingRange({ commit }, loadingRangeKey) {
      try {
        await loadingRangeDataService.deleteLoadingRange(loadingRangeKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, loadingRangeObj) {

      try {
  
        commit("setloadingRangeDetail", loadingRangeObj);
  
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
