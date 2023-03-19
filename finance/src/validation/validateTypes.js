const Joi = require('joi');

const validateInfoPayment = (req, res, next) => {
    const schema = Joi.object().keys(
        {
            _id: Joi.string().hex().length(24),
            value: Joi.number().precision(2).required(),
            name: Joi.string().min(4).max(35).pattern(/^[a-z ,.'-]+$/i).required(),
            number_card: Joi.string().pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/).required(),
            expiration_date: Joi.string().pattern(/([12]\d{3}-(0[1-9]|1[0-2]))/).required(),
            cvv: Joi.string().pattern(/^[0-9]{3}$/).required(),
            status: Joi.string().valid('CREATED','CONFIRMED', 'CANCELED').required()
        }
    );

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).send({ message: error.message });
    }
    return next();
};

module.exports = { validateInfoPayment };
