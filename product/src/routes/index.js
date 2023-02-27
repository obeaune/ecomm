import express from 'express';
import categories from '../routes/categoriesRoute.js';
import products from '../routes/productsRoute.js';

const routes = (app) => {
    app.use(
        express.json(),
        products,
        categories
    );
};

export default routes;
