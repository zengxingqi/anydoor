const http = require('http');
const chalk = require('chalk');
const path = require('path');
const routs = require('./utils/routs');
const conf = require('./config');

const server = http.createServer((req, res) => {
    const filePath = path.join(conf.root, req.url);
    routs(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});
