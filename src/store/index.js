import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
  },
  mutations: {
    save_users(state, users) {
      state.users = users;
    },
    submittedUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    save_users(context, payload) {
      // eslint-disable-next-line no-console
      console.log(context, 'Payload');
      context.commit('save_users', payload);
    },
    submittedUser({ commit }, payload) {
      commit('submittedUser', payload);
    },
  },
  modules: {
  },
  getters: {
    allUsers: (state) => state.users,
    formUser: (state) => state.currentUser,
  },
});
