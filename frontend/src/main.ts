import { createApp } from 'vue'
import App from './App.vue'
import orderRouter from './router/order.router.ts'

createApp(App).use(orderRouter).mount('#app')
