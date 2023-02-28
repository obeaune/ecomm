const { Router } = require('express');

const PaymentController = require('../controllers/PaymentController.js');

const preValidation = require('../validation/validatePaymentStatus.js');

// eslint-disable-next-line new-cap
const router = Router();

router
    .get('/payments', PaymentController.getPayments)
    .get('/payments/:id', PaymentController.getPaymentById)
    .post('/payments', PaymentController.createPayment)
    .patch('/payments/status/:id', preValidation.verifyStatusAndID, PaymentController.updatePaymentStatus);

module.exports = router;
