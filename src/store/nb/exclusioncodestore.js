import exclusionCodeService from "../../service/nb/exclusionCodeDataService";

export default {
  namespaced: true,
  state() {
    return {
      exclusionCodeObj: {},
      exclusionCodeDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getExclusionCodeObj: (state) => state.exclusionCodeObj,
    getExclusionCodeDetail: (state) => state.exclusionCodeDetail,
    getTest: (state) => state.test,
  },
  mutations: {
    setExclusionCodeObj(state, payload) {
      state.exclusionCodeObj = payload;
    },
    setExclusionCodeDetail(state, payload) {
      state.exclusionCodeDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchExclusionCodeObj) {
      if(searchExclusionCodeObj.effectiveDateFrom != null & searchExclusionCodeObj.effectiveDateFrom != '')
      {
        var dd = String(searchExclusionCodeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(searchExclusionCodeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = searchExclusionCodeObj.effectiveDateFrom.getFullYear();
  
        searchExclusionCodeObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;
      }

      if(searchExclusionCodeObj.effectiveDateTo != null & searchExclusionCodeObj.effectiveDateTo != '')
      {
         dd = String(searchExclusionCodeObj.effectiveDateTo.getDate()).padStart(2, '0');
         mm = String(searchExclusionCodeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
         yyyy = searchExclusionCodeObj.effectiveDateTo.getFullYear();
  
         searchExclusionCodeObj.effectiveDateTo  = yyyy + '-' + mm + '-' + dd;
      }
      try {
        const res = await exclusionCodeService.search(searchExclusionCodeObj);
        commit("setExclusionCodeObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addExclusionCode({ commit }, exclusionCodeObj) {
      try {
        var dd = String(exclusionCodeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(exclusionCodeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = exclusionCodeObj.effectiveDateFrom.getFullYear();
  
        var fromDate = yyyy + '-' + mm + '-' + dd;

        dd = String(exclusionCodeObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(exclusionCodeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = exclusionCodeObj.effectiveDateTo.getFullYear();
  
        var toDate = yyyy + '-' + mm + '-' + dd;

        const exclusionCodeFormObj = {
          division: exclusionCodeObj.division,
          exclusionCode: exclusionCodeObj.exclusionCode,
          effectiveDateFrom: fromDate,
          effectiveDateTo:toDate,
          descriptionEnglish: exclusionCodeObj.descriptionEnglish,
          descriptionBm: exclusionCodeObj.descriptionBm,
        };
        await exclusionCodeService.addExclusionCode(exclusionCodeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateExclusionCode({ commit }, exclusionCodeObj) {
      try {
        var dd = String(exclusionCodeObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(exclusionCodeObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = exclusionCodeObj.effectiveDateFrom.getFullYear();
  
        var fromDate = yyyy + '-' + mm + '-' + dd;

        dd = String(exclusionCodeObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(exclusionCodeObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = exclusionCodeObj.effectiveDateTo.getFullYear();
  
        var toDate = yyyy + '-' + mm + '-' + dd;

        const exclusionCodeFormObj = {
          seqId: exclusionCodeObj.seqId,
          division: exclusionCodeObj.division,
          exclusionCode: exclusionCodeObj.exclusionCode,
          effectiveDateFrom: fromDate,
          effectiveDateTo:toDate,
          descriptionEnglish: exclusionCodeObj.descriptionEnglish,
          descriptionBm: exclusionCodeObj.descriptionBm,
        };
        await exclusionCodeService.saveExclusionCode(exclusionCodeFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteExclusionCode({ commit }, exclusionCodeKey) {
      try {
        await exclusionCodeService.deleteExclusionCode(exclusionCodeKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, exclusionCodeDetail) {

      try {

        commit("setExclusionCodeDetail", exclusionCodeDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
