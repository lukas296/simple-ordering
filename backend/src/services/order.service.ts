import { CreateOrderBody, Order, OrderStatus, UpdateOrderStatusBody } from '../models/order.model';
import { randomUUID } from 'node:crypto';
import { AppError } from '../middlewares/error-handler.middleware';

export class OrderService {
    // in-memory storage
    private orders: Map<string, Order> = new Map();

    createOrder(orderData: CreateOrderBody): Order {
        const id = randomUUID()
        const totalAmount = orderData.lineItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = orderData.lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice,0);

        const order: Order = {
            id,
            customerId: "6cc1d921-8f24-4952-b3d0-9f8272b7305b", // TODO get customerId from authentication
            ...orderData,
            totalAmount,
            totalPrice,
            status: OrderStatus.PENDING,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.orders.set(id, order);

        return order;
    }

    getAllOrders(customerId?: string): Order[] {
        if (customerId) {
            return Array.from(this.orders.values()).filter(
                order => order.customerId === customerId
            );
        }

        return Array.from(this.orders.values());
    }

    getOrderById(id: string): Order {
        const order = this.orders.get(id);

        if (!order) {
            throw new AppError('Order not found', 404);
        }

        return order
    }

    updateOrderStatus(payloadData: UpdateOrderStatusBody): void {
        const order = this.getOrderById(payloadData.id);

        // update order status
        order.status = payloadData.status;
        order.updatedAt = new Date();

        this.orders.set(payloadData.id, order);
    }
}
