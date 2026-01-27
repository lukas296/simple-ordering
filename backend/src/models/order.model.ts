export interface Order {
    id: string;
    customerId: string;
    addressId: string;
    lineItems: LineItem[];
    totalAmount: number;
    totalPrice: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'cancelled'
}

export interface LineItem {
    productId: string;
    quantity: number;
    unitPrice: number;
}

export type CreateOrderBody = Pick<Order, 'addressId' | 'lineItems'>
export type UpdateOrderStatusBody = Pick<Order, 'id'|'status'>
