import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'


import { createApp } from 'vue'
import App from './App.vue'
import store from './server/store'

const app = createApp(App);
app.use(store);
app.mount('#app');

// createApp(App).mount('#app')
