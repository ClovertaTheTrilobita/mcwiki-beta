import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    isLoggedIn: false,
    favorites: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    addFavorite(state, favorite) {
      state.favorites.push(favorite);
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:3000/login', user);
        commit('setUser', { username: user.username, id: response.data.id });
        return response;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('clearUser');
    },
    async register({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:3000/register', user);
        commit('setUser', { username: user.username, id: response.data.id });
        return response;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    async addFavorite({ commit }, { favorite, token }) {
      try {
        const response = await axios.post('http://localhost:3000/favorites', favorite, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        commit('addFavorite', favorite);
        return response;
      } catch (error) {
        console.error('Add favorite failed:', error);
        throw error;
      }
    }
  }
});

export default store;
