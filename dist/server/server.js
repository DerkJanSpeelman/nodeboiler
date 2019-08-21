"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var path_1 = __importDefault(require("path"));
var PORT = 3000;
var app = express_1["default"]();
var server = http.createServer(app);
var ENV = (process.argv.find(function (arg) { return arg.includes('NODE_ENV=production'); }) ||
    process.argv.find(function (arg) { return arg.includes('npm run build:deploy'); })) ? 'production' : 'development';
var BASE_PATH = (ENV === 'production' ? __dirname + '/../dist' : __dirname + '/../');
app.get('/', function (_req, res) {
    res.sendFile(path_1["default"].resolve(BASE_PATH + '/client/index.html'));
});
server.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});
