import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
    error: "",
    loading: true
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
      return user;
    },
    ERROR(state, data) {
      return (state.error = data);
    },
    LOADING(state) {
      return (state.loading = false);
    }
  },
  actions: {
    async loadUsers({ commit }) {
      let response = await axios.get("http://localhost:3000/db");
      let users = response.data.users;
      commit(
        "SET_USERS",
        users.map(u => u.attributes)
      );

      let userId = JSON.parse(localStorage.currentUser);
      commit("SET_CURRENT_USER", userId);
    },
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    },
    async loginUser({ commit }, loginInfo) {
      await axios
        .post("http://178.154.229.95/login_check", loginInfo)
        .then(response => {
          let user = response.data;
          commit("LOADING");
          commit("SET_CURRENT_USER", user);
        })
        .catch(error => {
          console.log(error.response.data.message || error.message);
          commit("ERROR", error);
        });
    }
  },
  modules: {}
});
