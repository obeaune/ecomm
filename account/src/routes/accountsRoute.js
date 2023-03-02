import express from 'express';
import accountsController from '../controllers/accountsController.js';
import validateInfoAccount from '../validation/accountValidation.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router
    .get('/admin/accounts', accountsController.findAllAccounts)
    .get('/admin/accounts/:id', accountsController.findAccountById)
    .post('/admin/accounts', validateInfoAccount, accountsController.createAccount)
    .put('/admin/accounts/:id', validateInfoAccount, accountsController.updateAccount)
    .delete('/admin/accounts/:id', accountsController.deleteAccount);

export default router;
