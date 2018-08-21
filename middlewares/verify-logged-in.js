function verifyLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        next(new Error('UNAUTHORIZED'));
    }
}

module.exports = verifyLoggedIn;
