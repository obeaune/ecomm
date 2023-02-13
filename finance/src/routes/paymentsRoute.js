const { Router } = require("express");

const PaymentController = require("../controllers/PaymentController");

const router = Router();

router
    .get("/payments", PaymentController.getPayments)
    .get("/payments/:id", PaymentController.getPaymentById)
    .post("/payments", PaymentController.createPayment)
    .patch("/payments/status/:id", PaymentController.updatePaymentStatus);

module.exports = router;