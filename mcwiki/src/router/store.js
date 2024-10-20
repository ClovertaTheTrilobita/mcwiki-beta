import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {
    login({ commit }, user) {
      // 实现登录逻辑
      commit('setUser', user);
    },
    logout({ commit }) {
      // 实现登出逻辑
      commit('clearUser');
    },
    register({ commit }, user) {
      // 实现注册逻辑
      commit('setUser', user);
    }
  }
});

export default store;
