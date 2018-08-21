const jsondb = require('../jsondb');

function resolveUser(req, res, next) {
    const cookies = req.cookies;

    if (cookies && cookies.token) {
        const user = jsondb.get('users').find({ token: cookies.token });
        if (user.value()) {
            req.user = user.value();
        }
    }

    next();
}

module.exports = resolveUser;
