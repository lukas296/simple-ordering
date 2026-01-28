<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { orderApiService } from '@/api/order.api.ts'
import type { Order } from '@/types/order.type.ts'
import { useDateFormat } from '@/composables/date-format.composable.ts'

const route = useRoute()
const { formatDate } = useDateFormat()

const order = ref<Order>()
const isLoading = ref(true)

const loadOrderDetails = async () => {
        isLoading.value = true
        const orderId = route.params.id as string
        order.value = await orderApiService.getOrderById(orderId)
        isLoading.value = false
}

onMounted(() => {
    loadOrderDetails()
})
</script>

<template>
    <div>
        <h3>Order Details</h3>

        <div v-if="isLoading">Loading order details...</div>
        <div v-else-if="!order">Order not found.</div>
        <div v-else class="order-item">
            <div class="order-header">
                <h4>Order {{ order.id }}</h4>
                <span>{{ order.status }}</span>
            </div>

            <div>
                <p>Customer ID: {{ order.customerId }}</p>
                <p>Address ID: {{ order.addressId }}</p>
                <p>Date: {{  formatDate(order.createdAt) }}</p>
                <p>Total Amount: {{ order.totalAmount }}</p>
                <p>Total Price: {{ order.totalPrice }} €</p>
            </div>

            <div>
                <h4>Order Items</h4>
                <table class="items-table">
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in order.lineItems" :key="item.productId">
                        <td>{{ item.productId }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.unitPrice }} €</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.order-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.items-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}
</style>
