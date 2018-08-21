function notFoundError(error, req, res, next) {
    if (!error) {
        const err = new Error(`Not Found: ${req.url}`);
        err.status = 404;
        next(err);
    } else {
        next(error);
    }
}

function serverError(error, req, res, next) {
    const status = error.status || 500;

    res.status(status);
    res.json({ error: error.message });
}

module.exports = { notFoundError, serverError };
