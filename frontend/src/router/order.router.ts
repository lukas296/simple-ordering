import { createRouter, createWebHistory } from 'vue-router'
import OrderListView from '../views/OrderList.vue'
import OrderCreateView from '../views/OrderCreate.vue'
import OrderDetailsView from '../views/OrderDetails.vue'

const orderRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/orders'
        },
        {
            path: '/orders',
            component: OrderListView
        },
        {
            path: '/create',
            component: OrderCreateView
        },
        {
            path: '/orders/:id',
            component: OrderDetailsView
        }
    ]
})

export default orderRouter
