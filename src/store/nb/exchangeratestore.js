import nbExchangeRateDataService from "../../service/nb/nbExchangeRateDataService";

export default {
  namespaced: true,
  state() {
    return {
      exchangeRateObj: {},
      exchangeRateDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getExchangeRateObj: (state) => state.exchangeRateObj,
    getExchangeRateDetail: (state) => state.exchangeRateDetail,
  },
  mutations: {
    setExchangeRateObj(state, payload) {
      state.exchangeRateObj = payload;
    },
    setExchangeRateDetail(state, payload) {
      state.exchangeRateDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, exchangeRateObj) {

      try {
        if(exchangeRateObj.effectiveDateFrom != ''){
          var dd = String(exchangeRateObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(exchangeRateObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = exchangeRateObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          exchangeRateObj.effectiveDateFrom = fromDate
        }

        if(exchangeRateObj.effectiveDateTo != ''){
          var ddt = String(exchangeRateObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(exchangeRateObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = exchangeRateObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          exchangeRateObj.effectiveDateTo = toDate
        }

        await nbExchangeRateDataService.save(exchangeRateObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, exchangeRateDetail) {

      try {

        commit("setExchangeRateDetail", exchangeRateDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, exchangeRateObj) {
      
      try {
        if(exchangeRateObj.effectiveDateFrom != ''){
          var dd = String(exchangeRateObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(exchangeRateObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = exchangeRateObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          exchangeRateObj.effectiveDateFrom = fromDate
        }

        if(exchangeRateObj.effectiveDateTo != ''){
          var ddt = String(exchangeRateObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(exchangeRateObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = exchangeRateObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          exchangeRateObj.effectiveDateTo = toDate
        }

        const res = await nbExchangeRateDataService.search(exchangeRateObj);
        commit("setExchangeRateObj", res.data);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, exchangeRateObj) {
      try {

        if(exchangeRateObj.effectiveDateFrom != ''){
          var dd = String(exchangeRateObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(exchangeRateObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = exchangeRateObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          exchangeRateObj.effectiveDateFrom = fromDate
        }

        if(exchangeRateObj.effectiveDateTo != ''){
          var ddt = String(exchangeRateObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(exchangeRateObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = exchangeRateObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          exchangeRateObj.effectiveDateTo = toDate
        }
        
        await nbExchangeRateDataService.add(exchangeRateObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await nbExchangeRateDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
