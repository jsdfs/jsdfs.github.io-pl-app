import healthQuestionDataService from "../../service/nb/healthQuestionDataService";

export default {
  namespaced: true,
  state() {
    return {
      healthQuestionObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getHealthQuestionObj: (state) => state.healthQuestionObj,
  },
  mutations: {
    setHealthQuestionObj(state, payload) {
      state.healthQuestionObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, healthQuestionObj) {

      try {

        await healthQuestionDataService.save(healthQuestionObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, healthQuestionObj) {
      
      try {

        const res = await healthQuestionDataService.search(healthQuestionObj);
        commit("setHealthQuestionObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, healthQuestionObj) {
      try {
        
        await healthQuestionDataService.add(healthQuestionObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await healthQuestionDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
