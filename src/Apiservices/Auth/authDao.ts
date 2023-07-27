
const { Op } = require('sequelize');



const {
    All,
    AllType,
    BillingPlan,
    BillingPlanLicence,
    BillingPlanType,
    GeneralToken,
    Licence,
    LicenceAll,
    LicenceModule,
    LicencePay,
    LicenceSupport,
    LicenceType,
    Module,
    ModuleType,
    Pay,
    PayType,
    PlanLicence,
    Support,
    SupportType

} = require('../../../models')


export const getDao = async () => {

    const Alls = await All.findAll({ })

    return Alls
}