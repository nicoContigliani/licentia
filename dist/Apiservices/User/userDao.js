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
const { All, AllType, BillingPlan, BillingPlanLicence, BillingPlanType, GeneralToken, Licence, LicenceAll, LicenceModule, LicencePay, LicenceSupport, LicenceType, Module, ModuleType, Pay, PayType, PlanLicence, Support, SupportType } = require('../../../models');
const getDao = () => __awaiter(void 0, void 0, void 0, function* () {
    const Alls = yield All.findAll({
        include: [
            {
                model: Licence,
                include: [
                    {
                        model: Module
                    },
                    {
                        model: Pay
                    },
                    {
                        model: BillingPlan,
                    },
                ]
            }
        ]
    });
    return Alls;
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const AllsId = yield All.findAll({
        where: {
            id: data, // Filtrar por el ID de usuario determinado
        },
        include: [
            {
                model: Licence,
                includes: [
                // {
                //     model: BillingPlan,
                // },
                // {
                //     model: pay
                // },
                ],
                includess: [
                    {
                        model: Module
                    }
                ]
            }
        ]
    });
    return AllsId;
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield All.create(data);
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield All.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status_All = "desactive";
        return yield All.update({ status_All }, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:57 ~ deletesDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
