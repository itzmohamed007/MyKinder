import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'

createApp(App)
  .use(router)
  .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"