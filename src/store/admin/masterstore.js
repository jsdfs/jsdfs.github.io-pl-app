import masterService from "../../service/admin/masterDataService";

export default {
  namespaced: true,
  state() {
    return {
      mastersObj: {},
      masterHeaderObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getMastersObj: (state) => state.mastersObj,
    getMasterHeaderObj: (state) => state.masterHeaderObj,
  },
  mutations: {
    setMastersObj(state, payload) {
      state.mastersObj = payload;
    },
    setMasterHeaderObj(state, payload) {
      state.masterHeaderObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    search({ commit }, searchMastersObj) {
      console.log("here search " + JSON.stringify(searchMastersObj));

      // try {
      //   const res = await masterService.search(searchMastersObj);
      //   console.log("All masters detail: " + JSON.stringify(res.data, null, 4));
      //   commit("setMastersObj", res.data);
      // } catch (e) {
      //   console.error(e.response.status);
      //   commit("setErrorResponse", e.response);
      // }

      masterService.search(searchMastersObj)
      .then((res) => {
          console.log("All masters detail: " + JSON.stringify(res.data, null, 4));
          commit("setMastersObj", res.data);
      })
      .catch(e => {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      });

    },
    async getMasterDetByHeaderId({ commit }, masterDetailObj) {
      try {
        const res = await masterService.getDetailByHeaderId(masterDetailObj.headerId, masterDetailObj.isDetail);
        commit("setMasterHeaderObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async getDetailCode({ commit }, code){
      //console.log("here search " + JSON.stringify(code));

      try {
        const res = await masterService.getDetailCode(code);
        //console.log("Detail code: " + JSON.stringify(res.data, null, 4));
        commit("setMastersObj", res.data);
      }catch(e) {
        console.error(e.response.status);
        commit("setErrorResponse", e.response);
      }
    },
    async addMaster({ commit }, mastersObj) {
      try {
        const masterFormObj = {
          code: mastersObj.code,
          desc: mastersObj.desc,
          predefined: false,          
          operatorId: "SuperAdmin"
        };
        console.log("masterFormObj " + JSON.stringify(masterFormObj, null, 4));
        await masterService.addMasterHeader(masterFormObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateMasterHeader({ commit }, mastersObj) {
      try {
        await masterService.saveMasterHeader(mastersObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async updateMasterDetail({ commit }, mastersObj) {
      try {
        await masterService.saveMasterDetail(mastersObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async deleteMasterDetail({ commit }, mastersObj) {
      try {
        await masterService.deleteMasterDetail(mastersObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async addMasterDetail({ commit }, mastersObj) {
      try {
        const res = await masterService.saveMasterDetail(mastersObj);
        commit("setMasterHeaderObj", res.data);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
