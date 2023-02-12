import Joi from "joi";

const validateInfoProduct = (req, res, next) => {
    const schema = Joi.object().keys({
        _id: Joi.string().hex().length(24),
        name: Joi.string().min(4).pattern(new RegExp(/^[^0-9]/)).required(),
        description: Joi.string(),
        slug: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9-]+$/)),
        price: Joi.number().greater(0),
        quantity: Joi.number().greater(0).max(10000),
        categoryId: Joi.string().hex().length(24),
    });

    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).send({ message: error.message });
    } else {
        next();
    }
}

export default validateInfoProduct;
