const db = require("../models");

class PaymentController {
    static async getPayments(_req, res){
        try {
            const allPayments = await db.Payments.findAll();
            return res.status(200).json(allPayments);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
    
    // REQUIREMENTS ->
    static async createPayment(req, res) {
        const infoPayment = req.body;
        try {
            const { id, status } = await db.Payments.create(infoPayment);
            return res.status(201).location(`/payments/${id}`).json({ message: `Payment: ${id}. Status: ${status}`});
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async getPaymentById(req, res) {
        const { id } = req.params;
        try {
            const infoPayment = await db.Payments.findOne({ where: { id: +id }, attributes: { exclude: ["cvv"] } });
            return res.status(200).json(infoPayment);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async updatePaymentStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            await db.Payments.update({ status }, { where: { id: +id } });
            return res.status(200).json({ message: `Status of payment -${id}- was successfully updated to -${status}-.` });
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PaymentController;
