import express from 'express';
import * as http from 'http';
import path from 'path';

const PORT = 3000;

const app = express();
const server = http.createServer(app);

app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(__dirname + '/../dist/client/index.html'));
});

server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});