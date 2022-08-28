import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {vfmPlugin} from "vue-final-modal";

createApp(App).use(vfmPlugin).use(store).use(router).mount('#app')
