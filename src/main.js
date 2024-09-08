import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'


import App from './App.vue'
import router from './router'

/* import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL; */

const app = createApp(App)


app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.use(createPinia())
app.use(router)

app.mount('#app')
