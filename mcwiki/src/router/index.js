import { createRouter, createWebHashHistory } from 'vue-router';
import NavBar from '../components/public_components/NavBar.vue';
import Login from '../components/account_components/Login.vue';
import Register from '../components/account_components/Register.vue';

const routes = [
  { path: '/', component: NavBar},
  { path: '/home', component: NavBar},
  { path: '/login', component: Login },
  { path: '/register', component: Register},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
