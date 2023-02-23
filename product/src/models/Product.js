import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        slug: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        categoryId: { type: mongoose.Schema.Types.ObjectId }
    },
    {
        versionKey: false
    }
);

const products = mongoose.model('products', productSchema);

export default products;
