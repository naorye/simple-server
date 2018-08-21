const config = require('./config');
const app = require('./app');

async function start() {
    app.listen(config.port, () => {
        console.log(`Running on port ${config.port}`);
    });
}

start();
