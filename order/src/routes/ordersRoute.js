import express from 'express';
import ordersController from '../controllers/ordersController.js';
import validateOrderInfo from '../validation/orderValidation.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
    .get('/admin/orders', ordersController.findAllOrders)
    .get('/orders/:id', ordersController.findOrderById)
    .post('/admin/orders', validateOrderInfo, ordersController.createOrder)
    .patch('/admin/orders/:id', ordersController.confirmOrder);

export default router;
