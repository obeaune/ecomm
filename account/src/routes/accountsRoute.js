import express from "express";
import accountsController from "../controllers/accountsController.js";

const router = express.Router();

router
    .get("/admin/accounts", accountsController.findAllAccounts)
    .get("/admin/accounts/:id", accountsController.findAccountById)
    .post("/admin/accounts", accountsController.createAccount)
    .put("/admin/accounts/:id", accountsController.updateAccount)
    .delete("/admin/accounts/:id", accountsController.deleteAccount);

export default router;
