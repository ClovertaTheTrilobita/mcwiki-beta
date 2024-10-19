import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './router/store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

createApp(App).mount('#app')
