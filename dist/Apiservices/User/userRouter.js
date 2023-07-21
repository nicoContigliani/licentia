"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../User/userController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', userController_1.get);
exports.default = router;
