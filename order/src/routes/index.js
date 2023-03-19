import express from 'express';
import orders from '../routes/ordersRoute.js';

const routes = (app) => {
    app.use(
        express.json(),
        orders
    );
};

export default routes;
