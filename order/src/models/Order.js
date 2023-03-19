import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        _id: false,
        street: { type: String, required: true },
        number: { type: String, required: true },
        complement: { type: String },
        district: { type: String },
        CEP: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

const orderSchema = new mongoose.Schema(
    {
        clientId: { type: mongoose.Types.ObjectId, required: true },
        createdDate: { type: Date },
        deliveryAddress: { type: addressSchema, required: true },
        status: { type: String, required: true },
        items: { type: Array, required: true }
    },
    {
        versionKey: false
    }
);

const Orders = mongoose.model('orders', orderSchema);

export default Orders;
