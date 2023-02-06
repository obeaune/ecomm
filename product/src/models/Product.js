import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},
    description: {type: String, required: true},
    slug: {type: String, match: /^[a-zA-Z\d-]+$/},
    price: {type: Number, min: 0.01},
    quantity: {type: Number, min: 1, max: 10000},
    categoryId: {type: mongoose.Schema.Types.ObjectId, match: /^[\da-z]{24}$/}
},
{
    versionKey: false
})

const products = mongoose.model("products", productSchema);

export default products;
