import { createApp } from 'vue'
import App from './App.vue'
import routerConfig from './rourter'
import '../src/assets/main.css'

const router = routerConfig

createApp(App)
  .use(router)
  .mount('#app')
