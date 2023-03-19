import localStrategy from 'passport-local';
import bearerStrategy from 'passport-http-bearer';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { decrypt } from '../utils/hash.js';
import Account from '../models/Account.js';

const LocalStrategy = localStrategy.Strategy;
const BearerStrategy = bearerStrategy.Strategy;

// helpers
const userVerify = (user) => {
    if (!user) throw new Error('No user was found for the given email address.');
};

const passwordVerify = (password, hashPassword) => {
    if (!decrypt(password, hashPassword)) {
        throw new Error('E-mail or password invalid.');
    }
    return true;
};

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        try {
            const user = await Account.findOne({ email });
            userVerify(user);
            passwordVerify(password, user.password);

            done(null, user);
        } catch (error) {
            done(error);
        }
    })
);

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.CHAVE_JWT);
                const user = await Account.findById(payload.id);
                done(null, user, { token });
            } catch (error) {
                done(error);
            }
        }
    )
);
