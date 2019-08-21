"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var PORT = 3000;
var HOST = '0.0.0.0';
var app = express_1["default"]();
var ENV = process.argv.find(function (arg) { return arg.includes('dist'); }) ? 'production' : 'development';
var BASE_PATH = (ENV === 'production' ? __dirname + '/../' : __dirname + '/../dist');
app.get('/', function (_req, res) {
    res.sendFile(path_1["default"].resolve(BASE_PATH + '/client/index.html'));
});
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
