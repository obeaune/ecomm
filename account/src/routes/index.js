import express from "express";
import accounts from "../routes/accountsRoute.js";

const routes = (app) => {
    app.use(
        express.json(),
        accounts,
    )
}

export default routes;
