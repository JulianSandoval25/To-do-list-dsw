/* import './assets/main.css' */

import { createApp } from 'vue'
/* import App from './App.vue' */
import router from './router/index.js'
import App from './components/Listas.vue'

/* const app = createApp(App).mount('#app') */
const app = createApp(App)
app.use(router)
app.mount('#app')