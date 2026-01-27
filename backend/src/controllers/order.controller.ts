import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';
import { CreateOrderBody, Order, OrderStatus, UpdateOrderStatusBody } from '../models/order.model';

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    createOrder = (req: Request<{}, Order, CreateOrderBody>, res: Response<Order>) => {
        const orderData = req.body;

        const order = this.orderService.createOrder(orderData);

        return res.status(201).json(order);
    };

    getOrders = (req: Request<{},Order[],{},{ customerId?: string }>, res: Response<Order[]>) => {
        const { customerId } = req.query;   // TODO get customerId from authentication instead of query param

        const orders = this.orderService.getAllOrders(customerId);

        return res.status(200).json(orders);
    };

    getOrderById = (req: Request<{ id: string }, Order>, res: Response<Order>) => {
        const { id } = req.params;

        const order = this.orderService.getOrderById(id);

        return res.status(200).json(order);
    };

    updateOrderStatus = (req: Request, res: Response<void>) => {
        const payloadData: UpdateOrderStatusBody = req.body;    // TODO procedure and payload depending on the specific external system

        this.orderService.updateOrderStatus(payloadData);

        return res.status(200).send();
    };
}
