import codeStringsGLEntriesDataService from "../../service/accounting/codeStringsGLEntriesDataService";

export default {
  namespaced: true,
  state() {
    return {
      codeStringObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getCodeStringObj: (state) => state.codeStringObj,
  },
  mutations: {
    setCodeStringObj(state, payload) {
      state.codeStringObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, codeStringObj) {

      try {
        if(codeStringObj.effectiveDateFrom != ''){
          var dd = String(codeStringObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(codeStringObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = codeStringObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          codeStringObj.effectiveDateFrom = fromDate
        }

        if(codeStringObj.effectiveDateTo != ''){
          var ddt = String(codeStringObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(codeStringObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = codeStringObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          codeStringObj.effectiveDateTo = toDate
        }

        await codeStringsGLEntriesDataService.save(codeStringObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, codeStringObj) {
      
      try {

        const res = await codeStringsGLEntriesDataService.search(codeStringObj);
        commit("setCodeStringObj", res.data);
        
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, codeStringObj) {
      try {
        if(codeStringObj.effectiveDateFrom != ''){
          var dd = String(codeStringObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(codeStringObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = codeStringObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          codeStringObj.effectiveDateFrom = fromDate
        }

        if(codeStringObj.effectiveDateTo != ''){
          var ddt = String(codeStringObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(codeStringObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = codeStringObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          codeStringObj.effectiveDateTo = toDate
        }
        
      await codeStringsGLEntriesDataService.add(codeStringObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await codeStringsGLEntriesDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
