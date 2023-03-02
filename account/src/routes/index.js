import express from 'express';
import accounts from './accountsRoute.js';

const routes = (app) => {
    app.use(
        express.json(),
        accounts
    );
};

export default routes;
