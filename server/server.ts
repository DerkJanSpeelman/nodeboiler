import express from 'express';
import * as http from 'http';
import path from 'path';

const PORT = 3000;

const app = express();
const server = http.createServer(app);

const ENV = (
    process.argv.find((arg) => arg.includes('NODE_ENV=production')) ||
    process.argv.find((arg) => arg.includes('npm run build:deploy'))
) ? 'production' : 'development';

const BASE_PATH = (ENV === 'production' ? __dirname + '/../dist' : __dirname + '/../');

app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(BASE_PATH + '/client/index.html'));
});

server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});