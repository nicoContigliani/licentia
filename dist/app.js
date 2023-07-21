"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });
app.use('/user', user_1.default);
exports.default = app;