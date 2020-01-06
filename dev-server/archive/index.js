/* Quick test: https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 */

/*
Info on express: http://expressjs.com/en/starter/hello-world.html
 */
import express from 'express';
const app = express();

import {registerRoutes} from "./routes";
registerRoutes(app);

const port = 3000;
//app.get('/', (req, res) => res.send('Hallo geschätzte Mediamatiker/-innen!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));