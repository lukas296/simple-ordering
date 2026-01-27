import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';

const router = Router();
const orderController = new OrderController();

router.post('/', orderController.createOrder);
router.post('/webhook', orderController.updateOrderStatus);
router.get('/',  orderController.getOrders);
router.get('/:id',  orderController.getOrderById);


export default router;
