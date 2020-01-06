import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //url of the server-api (application program interface)
    apiUrl: 'http://localhost:3000',
    username: null,
    userId: null
  },
  mutations: {
  },
  actions: {
  }
});
