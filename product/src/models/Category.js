import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},
    status: {type: String, required: true, enum: ["Active", "Inactive"]}
},
{
    versionKey: false
});

const categories = mongoose.model("categories", categorySchema);

export default categories;
