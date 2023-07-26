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
exports.deletesDao = exports.updateDao = exports.postDao = exports.getIdDao = exports.getDao = void 0;
const { Op } = require('sequelize');
const { All, AllType, BillingPlan, BillingPlanLicence, BillingPlanType, GeneralToken, Licence, LicenceAll, LicenceModule, LicencePay, LicenceSupport, LicenceType, Module, ModuleType, pay, PayType, PlanLicence, Support, SupportType } = require('../../../models');
const getDao = () => __awaiter(void 0, void 0, void 0, function* () {
    const Alls = yield All.findAll({});
    return Alls;
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const AllsId = yield All.findAll({
        where: {
            id: data, // Filtrar por el ID de usuario determinado
        },
    });
    return AllsId;
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const datas = yield All.create(data);
    return datas;
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        // const user = await All.update(data, { where: { id: id } })
        // console.log("🚀 ~ file: userDao.ts:51 ~ updateDao ~ user:", user)
        return data;
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.deletesDao = deletesDao;
