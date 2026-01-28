<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { orderApiService } from '@/api/order.api.ts'
import type { CreateOrderRequest } from '@/types/order.type.ts';

const router = useRouter()

const isSubmitting = ref(false)

const form = ref<CreateOrderRequest>({
    addressId: '',
    lineItems: [
        { productId: '', quantity: 1, unitPrice: 0 }
    ]
})

const addItem = () => {
    form.value.lineItems.push({ productId: '', quantity: 1, unitPrice: 0 })
}

const removeItem = (index: number) => {
    if (form.value.lineItems.length > 1) {
        form.value.lineItems.splice(index, 1)
    }
}

const createOrder = async () => {
    isSubmitting.value = true
    await orderApiService.createOrder(form.value)
    await router.push('/orders')
    isSubmitting.value = false
}
</script>

<template>
    <div>
        <h3>Create New Order</h3>

        <div class="order-form">
            <form @submit.prevent="createOrder">
                <div>
                    <label>Address ID: </label>
                    <input v-model.trim="form.addressId" type="text"/>
                </div>

                <div>
                    <label>Order Items:</label>
                    <table>
                        <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in form.lineItems" :key="index">
                            <td>
                                <input v-model.trim="item.productId" type="text"/>
                            </td>
                            <td>
                                <input v-model.number="item.quantity" type="number"/>
                            </td>
                            <td>
                                <input v-model.number="item.unitPrice" type="number"/>
                            </td>
                            <td>
                                <button type="button" @click="removeItem(index)"
                                        :disabled="form.lineItems.length === 1">
                                    Remove
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="button" @click="addItem">Add Item</button>
                </div>

                <div>
                    <button type="submit" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Loading...' : 'Create Order' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.order-form {
    border: 1px solid #ddd;
    border-radius: 8px;
}

div {
    padding: 10px;
}
</style>
