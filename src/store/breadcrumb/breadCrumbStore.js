export default {
  namespaced: true,
  state() {
    return {
      breadCrumbObj: {},
    };
  },
  getters: {
    getBreadCrumbObj: (state) => state.breadCrumbObj,
  },
  mutations: {
    setBreadCrumbObj(state, payload) {
      state.breadCrumbObj = payload;
    },
  },
  actions: {
    async set({ commit }, breadCrumbObj) {
      try {
        const path = [
          {},
          {
            items: [{ label: "New Business" }, { label: "Proposal Status Control" }]
          },
          {
            items: [{ label: "New Business" }, { label: "Underwriter Approval Limit" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Standard TAT" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Exclusion Code" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Loading Range" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Occupation" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Sanction List" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Exchange Rate" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Jet Case" }],
          },
          {
            items: [{ label: "New Business" }, { label: "Underwriter Approval Limit" }, {label: "Detail"}]
          },
          {
            items: [{ label: "New Business" }, { label: "Exclusion Code" }, {label: "Detail"}]
          },
          {
            items: [{ label: "New Business" }, { label: "Loading Range" }, {label: "Detail"}]
          },
          {
            items: [{ label: "New Business" }, { label: "Sanction List" }, {label: "Detail"}]
          },
          {
            items: [{ label: "New Business" }, { label: "Exchange Rate" }, {label: "Detail"}]
          },
          {
            items: [{ label: "Configuration" }, { label: "Plan Config" }]
          },
          {
            items: [{ label: "Configuration" }, { label: "Master Code" }]
          },
        ];

        const getObj = path[breadCrumbObj].items;

        commit("setBreadCrumbObj", getObj);
      } catch (e) {
        console.log(e);
        commit("setErrorResponse", e.response);
      }
    },
  },
  modules: {},
};
