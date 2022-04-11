import financialClosingPeriodDataService from "../../service/accounting/financialClosingPeriodDataService";

export default {
  namespaced: true,
  state() {
    return {
      finincialObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getFinincialObj: (state) => state.finincialObj,
  },
  mutations: {
    setFinincialObj(state, payload) {
      state.finincialObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, finincialObj) {

      try {
        if(finincialObj.startDate != ''){
          var dd = String(finincialObj.startDate.getDate()).padStart(2, '0');
          var mm = String(finincialObj.startDate.getMonth() + 1).padStart(2, '0'); 
          var yyyy = finincialObj.startDate.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          finincialObj.startDate = fromDate
        }

        if(finincialObj.endDate != ''){
          var ddt = String(finincialObj.endDate.getDate()).padStart(2, '0');
          var mmt = String(finincialObj.endDate.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = finincialObj.endDate.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          finincialObj.endDate = toDate
        }

        await financialClosingPeriodDataService.save(finincialObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, finincialObj) {
      
      try {

        const res = await financialClosingPeriodDataService.search(finincialObj);
        commit("setFinincialObj", res.data);
        
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, finincialObj) {
      try {
        if(finincialObj.startDate != ''){
          var dd = String(finincialObj.startDate.getDate()).padStart(2, '0');
          var mm = String(finincialObj.startDate.getMonth() + 1).padStart(2, '0'); 
          var yyyy = finincialObj.startDate.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          finincialObj.startDate = fromDate
        }

        if(finincialObj.endDate != ''){
          var ddt = String(finincialObj.endDate.getDate()).padStart(2, '0');
          var mmt = String(finincialObj.endDate.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = finincialObj.endDate.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          finincialObj.endDate = toDate
        }
        
      await financialClosingPeriodDataService.add(finincialObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await financialClosingPeriodDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
