import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    _id: false,
    street: {type: String, required: true},
    number: {type: String, required: true},
    complement: {type: String},
    district: {type: String},
    CEP: {type: String, match: /^\d{8}$/},
    city: {type: String, required: true},
    state: {type: String, required: true,
        enum: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
    },
});

const accountSchema = new mongoose.Schema({
    name: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},
    email: {type: String, required: true},
    password: {type: String, match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/},
    cpf: {type: String, match: /^\d{11}$/},
    cellphone:{type: String, match: /^\d{10,13}$/},
    address: { type: addressSchema, required: true},
    createdDate: {type: Date},
},
{
    versionKey: false
});

const accounts = mongoose.model("accounts", accountSchema);

export default accounts;
