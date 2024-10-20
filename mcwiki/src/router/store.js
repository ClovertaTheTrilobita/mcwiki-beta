import { createStore } from 'vuex';
import axios from 'axios';

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
    async login({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:3000/login', user);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      // 实现登出逻辑
      commit('clearUser');
    },
    async register({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:3000/register', user);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
});

export default store;
