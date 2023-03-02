import express from 'express';
import categoriesController from '../controllers/categoriesController.js';
import validateInfoCategory from '../validation/categoryValidation.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
    .get('/categories', categoriesController.findAllCategories)
    .get('/categories/:id', categoriesController.findCategoryById)
    .post('/admin/categories', validateInfoCategory, categoriesController.createCategory)
    .put('/admin/categories/:id', categoriesController.updateCategory)
    .patch('/admin/categories/:id', categoriesController.updateStatusCategory)
    .delete('/admin/categories/:id', categoriesController.deleteCategory);

export default router;
