import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:3000/login', user);
        commit('setUser', response.data);
        return response;
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
        return response;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    }
  }
});

export default store;
