import mongoose from "mongoose";

mongoose.set("strictQuery", true);

// mongoose.connect("mongodb+srv://admin:sin123@ecomm.emvw6uk.mongodb.net/ecomm");
mongoose.connect("mongodb://admin:secret@mongodb:27017/ecomm-account?authSource=admin");

const db = mongoose.connection;

export default db;
