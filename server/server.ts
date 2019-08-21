import express from 'express';
import path from 'path';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
const BASE_PATH = __dirname + '/../dist';

app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(BASE_PATH + '/client/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);