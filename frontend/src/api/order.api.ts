import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CreateOrderRequest, Order } from '@/types/order.type.ts';

class OrderApiService {
    private api: AxiosInstance
    private baseUrl: string

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'
        this.api = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    async createOrder(orderData: CreateOrderRequest): Promise<Order | undefined> {
        console.log('Creating order...')
        try {
            const response = await this.api.post<Order>('/order', orderData)
            return response.data
        } catch (error) {
            console.error('Error creating order:', error)
        }
    }

    async getOrderById(orderId: string): Promise<Order | undefined> {
        console.log('Loading order...')
        try {
            const response = await this.api.get<Order>(`/order/${orderId}`)
            return response.data
        } catch (error) {
            console.error('Error loading order:', error)
        }
    }

    async getAllOrders(customerId?: string): Promise<Order[] | undefined> {
        let url = '/order'
        if (customerId) {
            url += `?customerId=${customerId}`
        }

        console.log('Loading orders...')
        try {
            const response = await this.api.get<Order[]>(url)
            return response.data
        } catch (error) {
            console.error('Error loading orders:', error)
        }
    }
}

export const orderApiService = new OrderApiService()
