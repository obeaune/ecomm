import express from 'express';
import accountsController from '../controllers/accountsController.js';
import validateInfoAccount from '../validation/accountValidation.js';
import { localMiddlewareAuth, bearerMiddlewareAuth } from '../middlewares/authAccount.js';

const router = express.Router();

router
    .post('/accounts/login', localMiddlewareAuth, accountsController.loginAccount)
    .get('/admin/accounts', bearerMiddlewareAuth, accountsController.findAllAccounts)
    .get('/accounts/:id', bearerMiddlewareAuth, accountsController.findAccountById)
    .post('/admin/accounts', validateInfoAccount, accountsController.createAccount)
    .put('/admin/accounts/:id', bearerMiddlewareAuth, validateInfoAccount, accountsController.updateAccount)
    .delete('/admin/accounts/:id', bearerMiddlewareAuth, accountsController.deleteAccount);

export default router;
