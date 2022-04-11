import docAndMedicalReqDataService from "../../service/ps/docAndMedicalReqDataService";

export default {
  namespaced: true,
  state() {
    return {
      docAndMedicalReqObj: {},
      docAndMedicalReqDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getDocAndMedicalReqObj: (state) => state.docAndMedicalReqObj,
    getDocAndMedicalReqDetail: (state) => state.docAndMedicalReqDetail,
  },
  mutations: {
    setDocAndMedicalReqObj(state, payload) {
      state.docAndMedicalReqObj = payload;
    },
    setDocAndMedicalReqDetail(state, payload) {
      state.docAndMedicalReqDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchDocAndMedicalReqObj) {
        if(searchDocAndMedicalReqObj.effectiveDateFrom != null & searchDocAndMedicalReqObj.effectiveDateFrom != '')
        {
          var dd = String(searchDocAndMedicalReqObj.effectiveDateFrom.getDate()).padStart(2, '0');
          var mm = String(searchDocAndMedicalReqObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = searchDocAndMedicalReqObj.effectiveDateFrom.getFullYear();
    
          searchDocAndMedicalReqObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;
        }
  
        if(searchDocAndMedicalReqObj.effectiveDateTo != null & searchDocAndMedicalReqObj.effectiveDateTo != '')
        {
           dd = String(searchDocAndMedicalReqObj.effectiveDateTo.getDate()).padStart(2, '0');
           mm = String(searchDocAndMedicalReqObj.effectiveDateTo.getMonth() + 1).padStart(2, '0'); //January is 0!
           yyyy = searchDocAndMedicalReqObj.effectiveDateTo.getFullYear();
    
           searchDocAndMedicalReqObj.effectiveDateTo  = yyyy + '-' + mm + '-' + dd;
        }
      try {
        const res = await docAndMedicalReqDataService.search(searchDocAndMedicalReqObj);
        commit("setDocAndMedicalReqObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addDocAndMedicalReq({ commit }, docAndMedicalReqObj) {
      try {
        var dd = String(docAndMedicalReqObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(docAndMedicalReqObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0');
        var yyyy = docAndMedicalReqObj.effectiveDateFrom.getFullYear();
  
        docAndMedicalReqObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;

        dd = String(docAndMedicalReqObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(docAndMedicalReqObj.effectiveDateTo.getMonth() + 1).padStart(2, '0');
        yyyy = docAndMedicalReqObj.effectiveDateTo.getFullYear();
  
        docAndMedicalReqObj.effectiveDateTo = yyyy + '-' + mm + '-' + dd;

        const docAndMedicalReqFormObj = {
          tableNo: docAndMedicalReqObj.tableNo,
          effectiveDateFrom: docAndMedicalReqObj.effectiveDateFrom,
          effectiveDateTo: docAndMedicalReqObj.effectiveDateTo,
          agentPrivilegeStatus: docAndMedicalReqObj.agentPrivilegeStatus,
          distributionChannel: docAndMedicalReqObj.distributionChannel,
          entryAgeFrom: docAndMedicalReqObj.entryAgeFrom,
          entryAgeTo: docAndMedicalReqObj.entryAgeTo,
          sarFrom: docAndMedicalReqObj.sarFrom,
          sarTo: docAndMedicalReqObj.sarTo,
          medical: docAndMedicalReqObj.medical,
          medicalDocTableNo: docAndMedicalReqObj.medicalDocTableNo
        };
        await docAndMedicalReqDataService.addDocAndMedicalReq(docAndMedicalReqFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateDocAndMedicalReq({ commit }, docAndMedicalReqObj) {
      try {
        var dd = String(docAndMedicalReqObj.effectiveDateFrom.getDate()).padStart(2, '0');
        var mm = String(docAndMedicalReqObj.effectiveDateFrom.getMonth() + 1).padStart(2, '0');
        var yyyy = docAndMedicalReqObj.effectiveDateFrom.getFullYear();
  
        docAndMedicalReqObj.effectiveDateFrom = yyyy + '-' + mm + '-' + dd;

        dd = String(docAndMedicalReqObj.effectiveDateTo.getDate()).padStart(2, '0');
        mm = String(docAndMedicalReqObj.effectiveDateTo.getMonth() + 1).padStart(2, '0');
        yyyy = docAndMedicalReqObj.effectiveDateTo.getFullYear();
  
        docAndMedicalReqObj.effectiveDateTo = yyyy + '-' + mm + '-' + dd;

        const docAndMedicalReqFormObj = {
            seqId: docAndMedicalReqObj.seqId,
            tableNo: docAndMedicalReqObj.tableNo,
            effectiveDateFrom: docAndMedicalReqObj.effectiveDateFrom,
            effectiveDateTo: docAndMedicalReqObj.effectiveDateTo,
            agentPrivilegeStatus: docAndMedicalReqObj.agentPrivilegeStatus,
            distributionChannel: docAndMedicalReqObj.distributionChannel,
            entryAgeFrom: docAndMedicalReqObj.entryAgeFrom,
            entryAgeTo: docAndMedicalReqObj.entryAgeTo,
            sarFrom: docAndMedicalReqObj.sarFrom,
            sarTo: docAndMedicalReqObj.sarTo,
            medical: docAndMedicalReqObj.medical,
            medicalDocTableNo: docAndMedicalReqObj.medicalDocTableNo
          };
        await docAndMedicalReqDataService.saveDocAndMedicalReq(docAndMedicalReqFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteDocAndMedicalReq({ commit }, docAndMedicalReqKey) {
      try {
        await docAndMedicalReqDataService.deleteDocAndMedicalReq(docAndMedicalReqKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, docAndMedicalReqDetail) {

      try {

        commit("setDocAndMedicalReqDetail", docAndMedicalReqDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
