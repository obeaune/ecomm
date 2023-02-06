import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/ecomm-account");

const db = mongoose.connection;

export default db;
