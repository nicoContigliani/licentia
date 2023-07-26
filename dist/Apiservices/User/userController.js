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
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const userDao_1 = require("./userDao");
const userDto_1 = require("./userDto");
const alert_services_1 = require("../../services/alert.services");
const exist_services_1 = require("../../services/exist.services");
const bcrypt_services_1 = require("../../services/bcrypt.services");
const today_services_1 = require("../../services/today.services");
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataReturn = yield (0, userDao_1.getDao)();
        if (!dataReturn)
            throw new Error("");
        const dataFormaterReturn = yield (0, userDto_1.deletePasswordArray)(dataReturn);
        if (!dataFormaterReturn)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error resourses"), status: 500 });
        return res.status(200).json({ data: dataFormaterReturn, message: (0, alert_services_1.AlertServices)("Success", "User get"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:13 ~ get ~ error:", error);
    }
});
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataReturn = yield (0, userDao_1.getIdDao)(id);
        const dataFormaterReturn = yield (0, userDto_1.deletePasswordArray)(dataReturn);
        if (!dataFormaterReturn)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error resourses"), status: 500 });
        return res.status(200).json({ data: dataFormaterReturn, message: (0, alert_services_1.AlertServices)("Success", "User get"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error);
    }
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let reqBody = req === null || req === void 0 ? void 0 : req.body;
        const dataReturn = yield (0, userDao_1.getDao)();
        const exisT = yield (0, exist_services_1.existAll)(reqBody, dataReturn);
        if (exisT)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Client Exist"), status: 500 });
        if (!(reqBody === null || reqBody === void 0 ? void 0 : reqBody.password))
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Password dosen't Exist"), status: 500 });
        const bcryptReturn = yield (0, bcrypt_services_1.bcryptCreatePassword)(reqBody === null || reqBody === void 0 ? void 0 : reqBody.password);
        reqBody.password = bcryptReturn;
        // const data: string = "si"
        // const returnJWTGenerate: string = await jwtGenerateToken(data);
        // if (!returnJWTGenerate) console.log(returnJWTGenerate);
        const dataReturnS = yield (0, userDao_1.postDao)(reqBody);
        if (!dataReturnS)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        return res.status(200).json({ data: dataReturnS, message: (0, alert_services_1.AlertServices)("Success", "Client Created"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error);
    }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params;
        let data = req.body;
        if (!data.id)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        data.updatedAt = yield (0, today_services_1.today)();
        const dataReturnS = yield (0, userDao_1.updateDao)(data, id);
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error);
    }
});
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error);
    }
});
exports.deletes = deletes;
