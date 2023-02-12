import Joi from "joi";

const validateInfoAccount = (req, res, next) => {
    const addressSchema = Joi.object().keys({
        _id: false,
        street: Joi.string().required(),
        number: Joi.string().alphanum().required(), // number or "S/N"
        complement: Joi.string(),
        district: Joi.string(),
        CEP: Joi.string().min(8).max(8).pattern(new RegExp(/^[0-9]*$/)),
        city: Joi.string().required(),
        state: Joi.string().pattern(new RegExp(new RegExp(/(A[CLMP]|BA|CE|DF|ES|GO|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|TO)/))).required(),
    });

    const accountSchema = Joi.object().keys({
        _id: Joi.string().hex().length(24),
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "br"] } }).required(),
        password: Joi.string().min(9).pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,20}$/)).required(),
        cpf: Joi.string().min(11).max(11).pattern(new RegExp(/^[0-9]*$/)),
        cellphone: Joi.string().min(10).max(13).pattern(new RegExp(/^[0-9]*$/)),
        address: addressSchema,
    });

    const { error } = accountSchema.validate(req.body);
    if(error) {
        return res.status(422).send({ message: error.message }); // 422: The request was well-formed but was unable to be followed due to semantic errors.
    } else {
        next();
    }
};

export default validateInfoAccount;
