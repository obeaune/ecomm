import express from 'express';
import categories from '../categoriesRoute.js';
import products from '../productsRoute.js';

const routes = (app) => {
    app.use(
        express.json(),
        products,
        categories
    );
};

export default routes;
