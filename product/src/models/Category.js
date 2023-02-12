import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: String, required: true}
},
{
    versionKey: false
});

const categories = mongoose.model("categories", categorySchema);

export default categories;
