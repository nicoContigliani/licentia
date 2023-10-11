"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const licenceUser_1 = __importDefault(require("./routes/licenceUser"));
const licenceType_1 = __importDefault(require("./routes/licenceType"));
const licence_1 = __importDefault(require("./routes/licence"));
const cronosLicence_1 = __importDefault(require("./routes/cronosLicence"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)()); // Habilita CORS para todas las rutas
// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });
app.use('/user', user_1.default);
app.use('/auth', auth_1.default);
app.use('/licence', licence_1.default);
app.use('/licenceUser', licenceUser_1.default);
app.use('/licenceType/', licenceType_1.default);
app.use('/cronosLicence', cronosLicence_1.default);
exports.default = app;
