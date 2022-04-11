import chartOfAccountDataService from "../../service/accounting/chartOfAccountDataService";

export default {
  namespaced: true,
  state() {
    return {
      chartOfAccountObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getChartOfAccountObj: (state) => state.chartOfAccountObj,
  },
  mutations: {
    setChartOfAccountObj(state, payload) {
      state.chartOfAccountObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, chartOfAccountObj) {

      try {
        if(chartOfAccountObj.effectiveDateFrom != ''){
          var dd = String(chartOfAccountObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(chartOfAccountObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = chartOfAccountObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          chartOfAccountObj.effectiveDateFrom = fromDate
        }

        if(chartOfAccountObj.effectiveDateTo != ''){
          var ddt = String(chartOfAccountObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(chartOfAccountObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = chartOfAccountObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          chartOfAccountObj.effectiveDateTo = toDate
        }

        await chartOfAccountDataService.save(chartOfAccountObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, chartOfAccountObj) {
      
      try {

        const res = await chartOfAccountDataService.search(chartOfAccountObj);
        commit("setChartOfAccountObj", res.data);
        
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, chartOfAccountObj) {
      try {
        if(chartOfAccountObj.effectiveDateFrom != ''){
          var dd = String(chartOfAccountObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(chartOfAccountObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = chartOfAccountObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          chartOfAccountObj.effectiveDateFrom = fromDate
        }

        if(chartOfAccountObj.effectiveDateTo != ''){
          var ddt = String(chartOfAccountObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(chartOfAccountObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = chartOfAccountObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          chartOfAccountObj.effectiveDateTo = toDate
        }
        
        chartOfAccountObj.fundByTransLvl = (chartOfAccountObj.fundByTransLvl == 'Y') ? true : false;
        chartOfAccountObj.t0 = (chartOfAccountObj.t0 == 'Y') ? true : false;
        chartOfAccountObj.t1 = (chartOfAccountObj.t1 == 'Y') ? true : false;
        chartOfAccountObj.t2 = (chartOfAccountObj.t2 == 'Y') ? true : false;
        chartOfAccountObj.t3 = (chartOfAccountObj.t3 == 'Y') ? true : false;
        chartOfAccountObj.t4 = (chartOfAccountObj.t4 == 'Y') ? true : false;
        chartOfAccountObj.t5 = (chartOfAccountObj.t5 == 'Y') ? true : false;
        chartOfAccountObj.t6 = (chartOfAccountObj.t6 == 'Y') ? true : false;
        chartOfAccountObj.t7 = (chartOfAccountObj.t7 == 'Y') ? true : false;
        chartOfAccountObj.t8 = (chartOfAccountObj.t8 == 'Y') ? true : false;
        chartOfAccountObj.t9 = (chartOfAccountObj.t9 == 'Y') ? true : false;
        chartOfAccountObj.collectionBank = (chartOfAccountObj.collectionBank == 'Y') ? true : false;
        chartOfAccountObj.disbursementBank = (chartOfAccountObj.disbursementBank == 'Y') ? true : false;

        await chartOfAccountDataService.add(chartOfAccountObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await chartOfAccountDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
