import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

// toals
import { useToast } from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css"

import App from './App.vue'
import router from './router'

const $toast = useToast({
  duration: 5000,
  position: 'top-right'
})
/* import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL; */

const app = createApp(App)


app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})
app.provide('toast', $toast)
app.use(createPinia())
app.use(router)

app.mount('#app')
