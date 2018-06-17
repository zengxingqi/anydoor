const http = require('http');
// const chalk = require('chalk');
const path = require('path');
const routs = require('./utils/routs');
const conf = require('./config');
const openBrowers = require('./utils/openBrowers');

class Server {
    constructor(config) {
        this.conf = Object.assign({}, conf, config);
    }
    start() {
        const server = http.createServer((req, res) => {
            const filePath = path.join(this.conf.root, req.url);
            routs(req, res, filePath, this.conf);
        });

        server.listen(this.conf.port, this.conf.hostname, () => {
            const addr = `http://${this.conf.hostname}:${this.conf.port}`;
            // chalk.green()
            console.info(`Server started at ${addr}`);
            openBrowers(addr);
        });
    }
}
module.exports = Server;
