import paymentMethodDataService from "../../service/nb/paymentMethodDataService";

export default {
  namespaced: true,
  state() {
    return {
      paymentObj: {},
      errorResponse: {},
    };
  },
  getters: {
    getPaymentObj: (state) => state.paymentObj,
  },
  mutations: {
    setPaymentObj(state, payload) {
      state.paymentObj = payload;
    },
    setErrorResponse(state, payload) {
      state.errorResponse = payload;
    },
  },
  actions: {
    async save({ commit }, paymentObj) {

      try {

        await paymentMethodDataService.save(paymentObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async search({ commit }, paymentObj) {
      
      try {

        const res = await paymentMethodDataService.search(paymentObj);
        commit("setPaymentObj", res.data);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async add({ commit }, paymentObj) {
      try {
        
        await paymentMethodDataService.add(paymentObj);

      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
    async delete({ commit }, seqId) {
      try {
        await paymentMethodDataService.delete(seqId);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    }
  },
  modules: {},
};
