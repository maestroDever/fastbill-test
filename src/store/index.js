import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    offerItems: [
      { id: 1, name: "Offer #1" },
      { id: 2, name: "Offer #2" },
      { id: 3, name: "Offer #3" }
    ],
    offerItemsAll: [...Array(10).keys()].map(i => ({
      id: i + 1,
      name: "Offer #" + (i + 1)
    })),
    incomeItems: [
      { id: 1, name: "Income #1" },
      { id: 2, name: "Income #2" },
      { id: 3, name: "Income #3" }
    ],
    incomeItemsAll: [...Array(10).keys()].map(i => ({
      id: i + 1,
      name: "Income #" + (i + 1)
    })),
    outcomeItems: [
      { id: 1, name: "Outcome #1" },
      { id: 2, name: "Outcome #2" },
      { id: 3, name: "Outcome #3" }
    ],
    outcomeItemsAll: [...Array(10).keys()].map(i => ({
      id: i + 1,
      name: "Outcome #" + (i + 1)
    })),
    tab: "all"
  },
  getters: {
    offerItems: state => state.offerItems,
    incomeItems: state => state.incomeItems,
    outcomeItems: state => state.outcomeItems,
    offerItemsAll: state => state.offerItemsAll,
    incomeItemsAll: state => state.incomeItemsAll,
    outcomeItemsAll: state => state.outcomeItemsAll,
    selectedTab: state => state.tab
  },
  mutations: {
    updateTab: (state, val) => (state.tab = val)
  },
  actions: {},
  modules: {}
});
