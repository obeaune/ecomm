const { Router } = require('express');

const PaymentController = require('../controllers/PaymentController.js');

const verify = require('../validation/validatePaymentStatus.js');
const validateTypes = require('../validation/validateTypes.js');

// eslint-disable-next-line new-cap
const router = Router();

router
    .get('/payments', PaymentController.getPayments)
    .get('/payments/:id', PaymentController.getPaymentById)
    .post('/payments', validateTypes.validateInfoPayment, PaymentController.createPayment)
    .patch('/payments/status/:id', verify.statusAndID, PaymentController.updatePaymentStatus);

module.exports = router;
