import Account from '../models/Account.js';
import { encrypt } from '../utils/hash.js';
import tokenGenerate from '../utils/tokenGenerate.js';

class accountsController {
    static findAllAccounts = (_req, res) => {
        Account.find((err, accounts) => {
            if (err) {
                return res.status(404).send({ message: err.message });
            }
            return res.status(200).json(accounts);
        });
    };

    static findAccountById = (req, res) => {
        const { id } = req.params;
        Account.findById(id, (err, account) => {
            if (err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(account);
            }
        });
    };

    static createAccount = (req, res) => {
        const { password } = req.body;
        req.body.password = encrypt(password);

        const ObjAccount = new Account(req.body);
        ObjAccount.save((err, account) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json(account);
            }
        });
    };

    static updateAccount = (req, res) => {
        const { id } = req.params;
        Account.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, account) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Account -${account.id}- successfully updated!` });
            }
        });
    };

    static deleteAccount = (req, res) => {
        const { id } = req.params;
        Account.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Account successfully deleted.' });
            }
        });
    };

    static loginAccount = (req, res) => {
        const token = tokenGenerate(req.user);
        res.status(204).set('Authorization', token).send();
    };
}

export default accountsController;
