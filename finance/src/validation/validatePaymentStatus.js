const db = require("../models");

const availableStatus = ["CONFIRMED", "CANCELED"];

const verifyStatusAndID = async (req, res, next) => {
    const { id } = req.params;
    try {
        const paymentExists = await db.Payments.findOne({ where: { id: +id } });
        if (!paymentExists) {
            return res.status(404).json({ message: "User not found. Try again with a valid ID." });
        } else if (availableStatus.includes(paymentExists.status.toUpperCase())) {
            return res.status(405).json({ message: `Status -${paymentExists.status}- can't be changed.` });
        } else {
            next();
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
};

module.exports = { verifyStatusAndID };
