import accounts from "../models/Account.js";

class accountsController {

    static findAllAccounts = (req, res) => {
        accounts.find((_err, accounts) => res.status(200).json(accounts))
    }

    static findAccountById = (req, res) => {
        const { id } = req.params;
        accounts.findById(id, (err, account) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(account);
            }
        })
    }

    static createAccount = (req, res) => {
        const ObjAccount = new accounts(req.body);
        ObjAccount.save((err, account) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json(ObjAccount);
            }
        })
    }

    static updateAccount = (req, res) => {
        const { id } = req.params;
        accounts.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (err, account) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Account -${account.id}- successfully updated!`});
            }
        })
    }

    static deleteAccount = (req, res) => {
        const { id } = req.params;
        accounts.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: "Account successfully deleted." });
            }
        })
    }
}

export default accountsController;