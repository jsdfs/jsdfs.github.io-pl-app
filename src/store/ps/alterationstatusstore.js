import alterationStatusDataService from "../../service/ps/alterationStatusDataService";

export default {
  namespaced: true,
  state() {
    return {
      alterationStatusObj: {},
      alterationStatusLs: [],
      errorResponse: {},
    };
  },
  getters: {
    getAlterationStatusObj: (state) => state.alterationStatusObj,
    getAlterationStatusData: (state) => state.alterationStatusLs,
    getTest: (state) => state.test,
  },
  mutations: {
    setAlterationStatusObj(state, payload) {
      state.alterationStatusObj = payload;
    },
    setAlterationStatusData(state, payload) {
      state.alterationStatusLs = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchAlterationStatusObj) {
      try {
        const res = await alterationStatusDataService.search(searchAlterationStatusObj);
        commit("setAlterationStatusObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async getAllRecords({ commit }) {
      try {
        const res = await alterationStatusDataService.getAllRecords();
        commit("setAlterationStatusObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addAlterationStatus({ commit }, alterationStatusObj) {
      try {
        const alterationStatusFormObj = {
          uwGroup: alterationStatusObj.uwGroup,
        };
        await alterationStatusDataService.addAlterationStatus(alterationStatusFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateAlterationStatus({ commit }, alterationStatusObj) {
      try {
        const alterationStatusFormObj = {
          seqId: alterationStatusObj.seqId,
          uwGroup: alterationStatusObj.uwGroup,
        };
        await alterationStatusDataService.saveAlterationStatus(alterationStatusFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteAlterationStatus({ commit }, alterationStatusKey) {
      try {
        await alterationStatusDataService.deleteAlterationStatus(alterationStatusKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async addUpdateUwGroupDetail({ commit }, alterationStatusDetailObj) {
      try {
        let seqIdTemp = NaN
        if(alterationStatusDetailObj.seqId != null){
          seqIdTemp = alterationStatusDetailObj.seqId
        }
        const alterationStatusDetailFormObj = {
          seqId: seqIdTemp,
          userId: alterationStatusDetailObj.userId,
          headerId: alterationStatusDetailObj.headerId,
        };
        await alterationStatusDataService.addUpdateProposalStatusDetail(alterationStatusDetailFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async getByIdWithDetails({ commit }, id){
  
      try {
        const res = await alterationStatusDataService.getByIdWithDetails(id);
        commit("setAlterationStatusObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteAlterationStatusDetail({ commit }, alterationStatusDetailObj) {
      try {
        await alterationStatusDataService.deleteAlterationStatusDetail(alterationStatusDetailObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async getAlterationStatussById({ commit }, id){
  
      try {
        const res = await alterationStatusDataService.getAlterationStatussById(id);
        commit("setAlterationStatusObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
