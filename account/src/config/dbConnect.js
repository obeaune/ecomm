import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://admin:sin123@ecomm.emvw6uk.mongodb.net/ecomm");

const db = mongoose.connection;

export default db;
