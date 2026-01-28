<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { orderApiService } from '@/api/order.api.ts'
import type { Order } from '@/types/order.type.ts'
import { useDateFormat } from '@/composables/date-format.composable.ts'

const router = useRouter()
const { formatDate } = useDateFormat()

const orders = ref<Order[] | undefined>([])
const isLoading = ref(true)

const viewOrderDetails = (id: string) => {
    router.push(`/orders/${id}`)
}

const loadOrders = async (customerId?: string) => {
    isLoading.value = true
    orders.value = await orderApiService.getAllOrders(customerId)
    isLoading.value = false
}

onMounted(() => {
    loadOrders("6cc1d921-8f24-4952-b3d0-9f8272b7305b") // TODO get customerId from authentication
})
</script>

<template>
    <div>
        <h3>Order List</h3>

        <div v-if="isLoading">Loading orders...</div>
        <div v-else-if="orders?.length === 0">No orders found.</div>
        <div v-else>
            <div v-for="order in orders" :key="order.id" class="order-item" @click="viewOrderDetails(order.id)">
                <div class="order-header">
                    <h4>Order {{ order.id }}</h4>
                    <span>{{ order.status }}</span>
                </div>

                <div class="order-summary">
                    <p>Total: {{ order.totalPrice }} €</p>
                    <p>Date: {{ formatDate(order.createdAt) }}</p>
                </div>
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
    cursor: pointer;
}

.order-item:hover {
    background-color: #f5f5f5;
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
