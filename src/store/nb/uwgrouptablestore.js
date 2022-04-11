import uwGroupTableDataService from "../../service/nb/uwGroupTableDataService";

export default {
  namespaced: true,
  state() {
    return {
      uwGroupTableObj: {},
      uwGroupTableLs: [],
      errorResponse: {},
    };
  },
  getters: {
    getUwGroupTableObj: (state) => state.uwGroupTableObj,
    getUwGroupTableData: (state) => state.uwGroupTableLs,
    getTest: (state) => state.test,
  },
  mutations: {
    setUwGroupTableObj(state, payload) {
      state.uwGroupTableObj = payload;
    },
    setUwGroupTableData(state, payload) {
      state.uwGroupTableLs = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchUwGroupTableObj) {
      try {
        const res = await uwGroupTableDataService.search(searchUwGroupTableObj);
        commit("setUwGroupTableObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async getAllRecords({ commit }) {
      try {
        const res = await uwGroupTableDataService.getAllRecords();
        commit("setUwGroupTableObj", res.data);
      } catch (e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addUwGroupTable({ commit }, uwGroupTableObj) {
      try {
        const uwGroupTableFormObj = {
          uwGroup: uwGroupTableObj.uwGroup,
        };
        await uwGroupTableDataService.addUwGroupTable(uwGroupTableFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateUwGroupTable({ commit }, uwGroupTableObj) {
      try {
        const uwGroupTableFormObj = {
          seqId: uwGroupTableObj.seqId,
          uwGroup: uwGroupTableObj.uwGroup,
        };
        await uwGroupTableDataService.saveUwGroupTable(uwGroupTableFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteUwGroupTable({ commit }, uwGroupTableKey) {
      try {
        await uwGroupTableDataService.deleteUwGroupTable(uwGroupTableKey);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async addUpdateUwGroupDetail({ commit }, uwGroupTableDetailObj) {
      try {
        let seqIdTemp = NaN
        if(uwGroupTableDetailObj.seqId != null){
          seqIdTemp = uwGroupTableDetailObj.seqId
        }
        const uwGroupTableDetailFormObj = {
          seqId: seqIdTemp,
          userId: uwGroupTableDetailObj.userId,
          headerId: uwGroupTableDetailObj.headerId,
        };
        await uwGroupTableDataService.addUpdateProposalStatusDetail(uwGroupTableDetailFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async getByIdWithDetails({ commit }, id){
  
      try {
        const res = await uwGroupTableDataService.getByIdWithDetails(id);
        commit("setUwGroupTableObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteUwGroupTableDetail({ commit }, uwGroupTableDetailObj) {
      try {
        await uwGroupTableDataService.deleteUwGroupTableDetail(uwGroupTableDetailObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async getUwGroupTablesById({ commit }, id){
  
      try {
        const res = await uwGroupTableDataService.getUwGroupTablesById(id);
        commit("setUwGroupTableObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
