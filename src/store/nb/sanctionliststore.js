import sanctionListService from "../../service/nb/sanctionListDataService";

export default {
  namespaced: true,
  state() {
    return {
      sanctionlistObj: {},
      sanctionlistDetail: {},
      errorResponse: {},
    };
  },
  getters: {
    getSanctionlistObj: (state) => state.sanctionlistObj,
    getSanctionlistDetail: (state) => state.sanctionlistDetail
  },
  mutations: {
    setSanctionlistObj(state, payload) {
      state.sanctionlistObj = payload;
    },
    setSanctionlistDetail(state, payload) {
      state.sanctionlistDetail = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async search({ commit }, searchObj) {
      //console.log("here search " + JSON.stringify(searchOccupationObj));

      try {
        if(searchObj.dob != ''){
          var dd = String(searchObj.dob.getDate()).padStart(2, '0');
          var mm = String(searchObj.dob.getMonth() + 1).padStart(2, '0'); 
          var yyyy = searchObj.dob.getFullYear();
    
          var dob = yyyy + '-' + mm + '-' + dd;
          searchObj.dob = dob
        }

        const res = await sanctionListService.search(searchObj);
        //console.log("All occupation detail: " + JSON.stringify(res.data, null, 4));
        commit("setSanctionlistObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, addObj) {
      try {
        if(addObj.dob != ''){
          var dd = String(addObj.dob.getDate()).padStart(2, '0');
          var mm = String(addObj.dob.getMonth() + 1).padStart(2, '0'); 
          var yyyy = addObj.dob.getFullYear();
    
          var dob = yyyy + '-' + mm + '-' + dd;
          addObj.dob = dob
        }
        console.log("form obj " + JSON.stringify(addObj, null, 4));

        await sanctionListService.add(addObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async set({ commit }, sanctionlistDetail) {

      try {

        commit("setSanctionlistDetail", sanctionlistDetail);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async save({ commit }, updateObj) {
      try {
        if(updateObj.dob != ''){
          var dd = String(updateObj.dob.getDate()).padStart(2, '0');
          var mm = String(updateObj.dob.getMonth() + 1).padStart(2, '0'); 
          var yyyy = updateObj.dob.getFullYear();
    
          var dob = yyyy + '-' + mm + '-' + dd;
          updateObj.dob = dob
        }

        await sanctionListService.save(updateObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await sanctionListService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
