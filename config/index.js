const allowedDomains = (process.env.ALLOWED_DOMAINS || '').split(',');
const port = process.env.PORT || 8080;

module.exports = { allowedDomains, port };
