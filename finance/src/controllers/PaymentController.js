const db = require('../models/index.js');

class PaymentController {
    static async getPayments(_req, res) {
        try {
            const allPayments = await db.Payments.findAll();
            if (allPayments.length === 0) {
                return res.status(404).json();
            }
            return res.status(200).json(allPayments);
        } catch (err) {
            return res.status(400).json(err.message);
        }
    }

    // REQUIREMENTS ->
    static async createPayment(req, res) {
        const infoPayment = req.body;
        try {
            const { id, status } = await db.Payments.create(infoPayment);
            const links = [
                {
                    method: 'GET',
                    rel: 'self information',
                    href: `http://localhost:3003/payments/${id}`
                },
                {
                    method: 'PATCH',
                    rel: 'change status to confirm',
                    href: `http://localhost:3003/payments/status/${id}`
                },
                {
                    method: 'PATCH',
                    rel: 'change status to cancel',
                    href: `http://localhost:3003/payments/status/${id}`
                }

            ];
            return res.status(201).location(`/payments/${id}`).json({ id, status, links });
        } catch (err) {
            return res.status(422).json(err.message);
        }
    }

    static async getPaymentById(req, res) {
        const { id } = req.params;
        try {
            const infoPayment = await db.Payments.findOne({ where: { id: +id }, attributes: { exclude: ['cvv'] } });
            return res.status(200).json(infoPayment);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    static async updatePaymentStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            if (!status) return res.status(400).json({ message: 'You need to pass the new status in the request body.' });
            await db.Payments.update({ status }, { where: { id: +id } });
            return res.status(200).json({ message: `Status of payment -${id}- was successfully updated for -${status}-.` });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PaymentController;
