"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
var port = 5000;
app.get("/", function (req, res) { return res.send("h1"); });
app.listen(port, function () { return console.log("server running"); });
//# sourceMappingURL=index.js.map