import '@/modules'
import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/router'
import './registerServiceWorker'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
