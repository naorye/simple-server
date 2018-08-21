const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const error = require('./middlewares/error');
const resolveUser = require('./middlewares/resolve-user');
const controllers = require('./controllers');

const app = express();

app.use(helmet());

app.use(morgan('tiny'));

app.use(cors({
    methods: [ 'OPTIONS', 'GET', 'PUT', 'POST', 'DELETE', 'PATCH' ],
    origin: config.allowedDomains,
    credentials: true,
    allowHeaders: [ 'Authorization', 'Content-type' ],
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(resolveUser);

app.use(controllers);

app.use(error.notFoundError);
app.use(error.serverError);

module.exports = app;
