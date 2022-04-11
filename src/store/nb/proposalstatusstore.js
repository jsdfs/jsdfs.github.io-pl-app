import proposalStatusService from "../../service/nb/proposalStatusDataService";

export default {
  namespaced: true,
  state() {
    return {
      proposalStatusObj: {},
      proposalStatusLs: [],
      errorResponse: {},
    };
  },
  getters: {
    getProposalStatusObj: (state) => state.proposalStatusObj,
    getProposalStatusData: (state) => state.proposalStatusLs,
    getTest: (state) => state.test,
  },
  mutations: {
    setProposalStatusObj(state, payload) {
      state.proposalStatusObj = payload;
    },
    setProposalStatusData(state, payload) {
      state.proposalStatusLs = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchProposalStatusObj) {

      try {
        const res = await proposalStatusService.search(searchProposalStatusObj);
        commit("setProposalStatusObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addProposalStatusHeader({ commit }, proposalStatusObj) {
      try {
        const proposalStatusFormObj = {
          proposalStatusCode: proposalStatusObj.proposalStatusCode,
          sourceType: proposalStatusObj.sourceType,
        };
        await proposalStatusService.addProposalStatusHeader(proposalStatusFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateProposalStatusHeader({ commit }, proposalStatusObj) {
      try {
        const proposalStatusFormObj = {
          seqId: proposalStatusObj.seqId,
          proposalStatusCode: proposalStatusObj.proposalStatusCode,
          sourceType: proposalStatusObj.sourceType,
        };
        await proposalStatusService.saveProposalStatusHeader(proposalStatusFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteProposalStatusHeader({ commit }, proposalStatusKey) {
      try {
        await proposalStatusService.deleteProposalStatusHeader(proposalStatusKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async addUpdateProposalStatusDetail({ commit }, proposalStatusDetailObj) {
      try {
        let seqIdTemp = NaN
        if(proposalStatusDetailObj.seqId != null){
          seqIdTemp = proposalStatusDetailObj.seqId
        }
        const proposalStatusDetailFormObj = {
          seqId: seqIdTemp,
          allowableProposalStatusCode: proposalStatusDetailObj.allowableProposalStatusCode,
          headerId: proposalStatusDetailObj.headerId,
        };
        await proposalStatusService.addUpdateProposalStatusDetail(proposalStatusDetailFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async getByIdWithDetails({ commit }, id){

      try {
        const res = await proposalStatusService.getByIdWithDetails(id);
        commit("setProposalStatusObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteProposalStatusDetail({ commit }, proposalStatusDetailObj) {
      try {
        await proposalStatusService.deleteProposalStatusDetail(proposalStatusDetailObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
