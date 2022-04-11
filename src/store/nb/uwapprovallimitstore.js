import uwApprovalLimitDataService from "../../service/nb/uwApprovalLimitDataService";

export default {
  namespaced: true,
  state() {
    return {
      uwApprovalLimitObj: {},
      uwApprovalLimitDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getUwApprovalLimitObj: (state) => state.uwApprovalLimitObj,
    getUwApprovalLimitDetail: (state) => state.uwApprovalLimitDetail,
    getTest: (state) => state.test,
  },
  mutations: {
    setUwApprovalLimitObj(state, payload) {
      state.uwApprovalLimitObj = payload;
    },
    setUwApprovalLimitDetail(state, payload) {
      state.uwApprovalLimitDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchUwApprovalLimitObj) {
      if(searchUwApprovalLimitObj.effectiveDateFrom != null & searchUwApprovalLimitObj.effectiveDateFrom != '')
      {
        var dd = String(searchUwApprovalLimitObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(searchUwApprovalLimitObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = searchUwApprovalLimitObj.effectiveDateFrom.getFullYear();
  
        searchUwApprovalLimitObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;
      }

      if(searchUwApprovalLimitObj.effectiveDateTo != null & searchUwApprovalLimitObj.effectiveDateTo != '')
      {
         dd = String(searchUwApprovalLimitObj.effectiveDateTo.getDate()).padStart(2, '0');
         mm = String(searchUwApprovalLimitObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
         yyyy = searchUwApprovalLimitObj.effectiveDateTo.getFullYear();
  
         searchUwApprovalLimitObj.effectiveDateTo  = yyyy + '-' + mm + '-' + dd;
      }
      try {
        const res = await uwApprovalLimitDataService.search(searchUwApprovalLimitObj);
        commit("setUwApprovalLimitObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addUwApprovalLimit({ commit }, uwApprovalLimitObj) {
      try {
        var dd = String(uwApprovalLimitObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(uwApprovalLimitObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0');
        var yyyy = uwApprovalLimitObj.effectiveDateFrom.getFullYear();
  
        uwApprovalLimitObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;

        dd = String(uwApprovalLimitObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(uwApprovalLimitObj.effectiveDateTo.getMonth() + 1).padStart(2, '0');
        yyyy = uwApprovalLimitObj.effectiveDateTo.getFullYear();
  
        uwApprovalLimitObj.effectiveDateTo= yyyy + '-' + mm + '-' + dd;

        const uwApprovalLimitFormObj = {
          currency: uwApprovalLimitObj.currency,
          division: uwApprovalLimitObj.division,
          effectiveDateFrom: uwApprovalLimitObj.effectiveDateFrom,
          effectiveDateTo: uwApprovalLimitObj.effectiveDateTo,
          annualPremiumFrom: uwApprovalLimitObj.annualPremiumFrom,
          annualPremiumTo: uwApprovalLimitObj.annualPremiumTo,
          sarFrom: uwApprovalLimitObj.sarFrom,
          sarTo: uwApprovalLimitObj.sarTo,
          uwLevel: uwApprovalLimitObj.uwLevel,
          underWriterGroupTable: uwApprovalLimitObj.underWriterGroupTable,
        };
        await uwApprovalLimitDataService.addUwApprovalLimit(uwApprovalLimitFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateUwApprovalLimit({ commit }, uwApprovalLimitObj) {
      try {
        var dd = String(uwApprovalLimitObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(uwApprovalLimitObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = uwApprovalLimitObj.effectiveDateFrom.getFullYear();
  
        uwApprovalLimitObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;

        dd = String(uwApprovalLimitObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(uwApprovalLimitObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = uwApprovalLimitObj.effectiveDateTo.getFullYear();
  
        uwApprovalLimitObj.effectiveDateTo= yyyy + '-' + mm + '-' + dd;

        const uwApprovalLimitFormObj = {
          seqId: uwApprovalLimitObj.seqId,
          currency: uwApprovalLimitObj.currency,
          division: uwApprovalLimitObj.division,
          effectiveDateFrom: uwApprovalLimitObj.effectiveDateFrom,
          effectiveDateTo: uwApprovalLimitObj.effectiveDateTo,
          annualPremiumFrom: uwApprovalLimitObj.annualPremiumFrom,
          annualPremiumTo: uwApprovalLimitObj.annualPremiumTo,
          sarFrom: uwApprovalLimitObj.sarFrom,
          sarTo: uwApprovalLimitObj.sarTo,
          uwLevel: uwApprovalLimitObj.uwLevel,
          underWriterGroupTable: uwApprovalLimitObj.underWriterGroupTable,
        };
        await uwApprovalLimitDataService.saveUwApprovalLimit(uwApprovalLimitFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteUwApprovalLimit({ commit }, uwApprovalLimitKey) {
      try {
        await uwApprovalLimitDataService.deleteUwApprovalLimit(uwApprovalLimitKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, uwApprovalLimitObj) {

      try {
  
        commit("setUwApprovalLimitDetail", uwApprovalLimitObj);
  
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
