export default {
  namespaced: true,
  state() {
    return {
      session: {
        prevPath: String,
        forwardPath: String,
        routeHistory: Array,
      },
    };
  },
  mutations: {
    setHistoryPath(state, prevPath) {
      state.prevPath = prevPath;
    },
  },
  actions: {
    setHistoryPath({ commit }, prevPath) {
      commit("setHistoryPath", prevPath);
    },
  },
};
