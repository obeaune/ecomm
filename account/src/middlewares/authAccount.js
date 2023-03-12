import passport from 'passport';

const localMiddlewareAuth = (req, res, next) => {
    passport.authenticate(
        'local',
        { session: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({ message: 'Use valid data for email and password.' });
            }
            if (!user) return res.status(400).json({ message: 'Please, fill the fields with email and password.' });
            req.user = user;
            return next();
        }
    )(req, res, next);
};

const bearerMiddlewareAuth = (req, res, next) => {
    passport.authenticate(
        'bearer',
        { session: false },
        (err, user, info) => {
            if (err) return res.status(400).json({ message: 'Invalid token.' });
            if (!user) return res.status(401).json({ message: 'User not found' });
            req.token = info.token;
            req.user = user;
            return next();
        }
    )(req, res, next);
};

export { localMiddlewareAuth, bearerMiddlewareAuth };
