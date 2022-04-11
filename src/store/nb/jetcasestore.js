import jetCaseDataService from "../../service/nb/jetCaseDataService";

export default {
  namespaced: true,
  state() {
    return {
      jetCaseObj: {},
      jetCaseDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getJetCaseObj: (state) => state.jetCaseObj,
    getJetCaseDetail: (state) => state.jetCaseDetail
  },
  mutations: {
    setJetCaseObj(state, payload) {
      state.jetCaseObj = payload;
    },
    setJetCaseDetail(state, payload) {
      state.jetCaseDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, jetCaseObj) {

      try {
        if(jetCaseObj.effectiveDateFrom != ''){
          var dd = String(jetCaseObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(jetCaseObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = jetCaseObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          jetCaseObj.effectiveDateFrom = fromDate
        }

        if(jetCaseObj.effectiveDateTo != ''){
          var ddt = String(jetCaseObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(jetCaseObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = jetCaseObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          jetCaseObj.effectiveDateTo = toDate

        }
        jetCaseObj.caiApp = (jetCaseObj.caiApp == 'Y') ? true : false;
        jetCaseObj.juvenileApplication = (jetCaseObj.juvenileApplication == 'Y') ? true : false;
        jetCaseObj.insInterest = (jetCaseObj.insInterest == 'Y') ? true : false;
        jetCaseObj.health = (jetCaseObj.health == 'Y') ? true : false;
        jetCaseObj.calForTotalM = (jetCaseObj.calForTotalM == 'Y') ? true : false;
        jetCaseObj.exstSub = (jetCaseObj.exstSub == 'Y') ? true : false;
        jetCaseObj.liamShd = (jetCaseObj.liamShd == 'Y') ? true : false;
        jetCaseObj.liamAcid = (jetCaseObj.liamAcid == 'Y') ? true : false;
        jetCaseObj.extsClaim = (jetCaseObj.extsClaim == 'Y') ? true : false;
        jetCaseObj.keyMan = (jetCaseObj.keyMan == 'Y') ? true : false;
        jetCaseObj.bnmSanctionList = (jetCaseObj.bnmSanctionList == 'Y') ? true : false;
        jetCaseObj.smoker = (jetCaseObj.smoker == 'Y') ? true : false;
        jetCaseObj.alcoholConsumption = (jetCaseObj.alcoholConsumption == 'Y') ? true : false;
        jetCaseObj.rop = (jetCaseObj.rop == 'Y') ? true : false;
        jetCaseObj.takeOverInd = (jetCaseObj.takeOverInd == 'Y') ? true : false;
        
        await jetCaseDataService.save(jetCaseObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, jetCaseDetail) {

      try {

        commit("setJetCaseDetail", jetCaseDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, jetCaseObj) {

      try {

        if(jetCaseObj.effectiveDateFrom != ''){
          var dd = String(jetCaseObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(jetCaseObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = jetCaseObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          jetCaseObj.effectiveDateFrom = fromDate
        }

        if(jetCaseObj.effectiveDateTo != ''){
          var ddt = String(jetCaseObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(jetCaseObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = jetCaseObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          jetCaseObj.effectiveDateTo = toDate

        }

        const res = await jetCaseDataService.search(jetCaseObj);
        commit("setJetCaseObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, jetCaseObj) {
      try {
        if(jetCaseObj.effectiveDateFrom != ''){
          var dd = String(jetCaseObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(jetCaseObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); 
          var yyyy = jetCaseObj.effectiveDateFrom.getFullYear();
    
          var fromDate = yyyy + '-' + mm + '-' + dd;
          jetCaseObj.effectiveDateFrom = fromDate
        }

        if(jetCaseObj.effectiveDateTo != ''){
          var ddt = String(jetCaseObj.effectiveDateTo.getDate()).padStart(2, '0');
          var mmt = String(jetCaseObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); 
          var yyyyt = jetCaseObj.effectiveDateTo.getFullYear();
    
          var toDate = yyyyt + '-' + mmt + '-' + ddt;
          jetCaseObj.effectiveDateTo = toDate

        }
        jetCaseObj.caiApp = (jetCaseObj.caiApp == 'Y') ? true : false;
        jetCaseObj.juvenileApplication = (jetCaseObj.juvenileApplication == 'Y') ? true : false;
        jetCaseObj.insInterest = (jetCaseObj.insInterest == 'Y') ? true : false;
        jetCaseObj.health = (jetCaseObj.health == 'Y') ? true : false;
        jetCaseObj.calForTotalM = (jetCaseObj.calForTotalM == 'Y') ? true : false;
        jetCaseObj.exstSub = (jetCaseObj.exstSub == 'Y') ? true : false;
        jetCaseObj.liamShd = (jetCaseObj.liamShd == 'Y') ? true : false;
        jetCaseObj.liamAcid = (jetCaseObj.liamAcid == 'Y') ? true : false;
        jetCaseObj.extsClaim = (jetCaseObj.extsClaim == 'Y') ? true : false;
        jetCaseObj.keyMan = (jetCaseObj.keyMan == 'Y') ? true : false;
        jetCaseObj.bnmSanctionList = (jetCaseObj.bnmSanctionList == 'Y') ? true : false;
        jetCaseObj.smoker = (jetCaseObj.smoker == 'Y') ? true : false;
        jetCaseObj.alcoholConsumption = (jetCaseObj.alcoholConsumption == 'Y') ? true : false;
        jetCaseObj.rop = (jetCaseObj.rop == 'Y') ? true : false;
        jetCaseObj.takeOverInd = (jetCaseObj.takeOverInd == 'Y') ? true : false;

        console.log(jetCaseObj)
        await jetCaseDataService.add(jetCaseObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await jetCaseDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
