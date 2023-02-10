import express from "express";
import productsController from "../controllers/productsController.js";
import validateInfoProduct from "../validation/productValidation.js";

const router = express.Router();

router
    .get("/products", productsController.findAllProducts)
    .get("/products/:id", productsController.findProductById)
    .post("/admin/products", validateInfoProduct, productsController.createProduct)
    .put("/admin/products/:id", productsController.updateProduct)
    .delete("/admin/products/:id", productsController.deleteProduct);

export default router;
