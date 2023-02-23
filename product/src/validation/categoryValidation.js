import Joi from 'joi';

const validateInfoCategory = (req, res, next) => {
    const schema = Joi.object().keys(
        {
            _id: Joi.string().hex().length(24),
            name: Joi.string().min(4).pattern(/^[^0-9]/).required(),
            status: Joi.string().valid('Active', 'Inactive')
        }
    );

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).send({ message: error.message });
    }
    return next();
};

export default validateInfoCategory;
