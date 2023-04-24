import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'

import './assets/style.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  .use(VueSweetalert2)
  .use(router)
  .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"