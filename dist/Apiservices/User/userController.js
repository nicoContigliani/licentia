"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const jwt_services_1 = require("../../services/jwt.services");
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "si";
        const returnJWTGenerate = yield (0, jwt_services_1.jwtGenerateToken)(data);
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:13 ~ get ~ error:", error);
    }
});
exports.get = get;
// module.exports = { get }
