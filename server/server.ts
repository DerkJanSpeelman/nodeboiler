import express from 'express';
import path from 'path';

const app = express();

// host config
const PORT = 3000;
const HOST = '0.0.0.0';

// environment
const ENV = process.argv.find((arg) => arg.includes('dist')) ? 'production' : 'development';
const BASE_PATH = (ENV === 'production' ? __dirname + '/../' : __dirname + '/../dist');

// routing
app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(BASE_PATH + '/client/index.html'));
});

// static file access
app.use(express.static(path.resolve(BASE_PATH + '/client')));

// start the server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);