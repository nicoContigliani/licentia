"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./userController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', userController_1.get);
router.get('/:id', userController_1.getId);
router.post('/', userController_1.post);
router.post('/:id', userController_1.update);
router.delete('/', userController_1.deletes);
exports.default = router;
