export interface Order {
    id: string;
    customerId: string;
    addressId: string;
    lineItems: OrderItem[];
    totalAmount: number;
    totalPrice: number;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
}

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'cancelled'
}

export interface OrderItem {
    productId: string;
    quantity: number;
    unitPrice: number;
}

export type CreateOrderRequest = Pick<Order, 'addressId' | 'lineItems'>
