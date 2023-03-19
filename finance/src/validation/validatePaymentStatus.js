const db = require('../models');

const availableStatus = ['CONFIRMED', 'CANCELED'];

const statusAndID = async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        if (!status) return res.status(400).json({ message: 'You need to pass the new status in the request body.' });
        if (status != 'CONFIRMED' || status != 'CANCELED') {
            return res.status(400).json({ message: `Status can't be changed to this value (${status})` });
        }
        const paymentExists = await db.Payments.findOne({ where: { id: +id } });
        if (!paymentExists) {
            return res.status(404).json({ message: 'User not found. Try again with a valid ID.' });
        }
        if (availableStatus.includes(paymentExists.status)) {
            return res.status(405).json({ message: `Status -${paymentExists.status}- can't be changed.` });
        } 
        return next();
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = { statusAndID };
