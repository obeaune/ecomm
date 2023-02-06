import express from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/categories", categoriesController.findAllCategories)
    .get("/categories/:id", categoriesController.findCategoryById)
    .post("/admin/categories", categoriesController.createCategory)
    .put("/admin/categories/:id", categoriesController.updateCategory)
    .delete("/admin/categories/:id", categoriesController.deleteCategory);

export default router;
