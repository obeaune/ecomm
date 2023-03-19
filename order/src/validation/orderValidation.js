import Joi from 'joi';

const validateOrderInfo = (req, res, next) => {
    const addressSchema = Joi.object().keys({
        _id: false,
        street: Joi.string().required(),
        number: Joi.string().alphanum().required(),
        complement: Joi.string(),
        district: Joi.string(),
        CEP: Joi.string().min(8).max(8).pattern(/^[0-9]*$/),
        city: Joi.string().required(),
        state: Joi.string().pattern(/(A[CLMP]|BA|CE|DF|ES|GO|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|TO)/).required()
    });

    const orderSchema = Joi.object().keys({
        createdDate: Joi.date().required,
        clientId: Joi.string().hex().length(24).required,
        deliveryAddress: addressSchema.required,
        status: Joi.string().required,
        items: Joi.array().has(
            Joi.object(        {
                _id: Joi.string().hex().length(24),
                name: Joi.string().min(4).pattern(/^[^0-9]/).required(),
                description: Joi.string(),
                slug: Joi.string().pattern(/^[a-zA-Z0-9-]+$/),
                price: Joi.number().greater(0),
                quantity: Joi.number().greater(0).max(10000),
                categoryId: Joi.string().hex().length(24)
            }),
        )
    });

    const { error } = orderSchema.validate(req.body);
    if (error) {
        return res.status(422).send({ message: error.message });
    }
    return next();
};

export default validateOrderInfo;
