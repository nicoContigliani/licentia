
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
    pay,
    PayType,
    PlanLicence,
    Support,
    SupportType

} = require('../../../models')

export const getDao = async () => {

    const Alls = await All.findAll({})

    return Alls
}
export const getIdDao = async (data: any) => {
    const AllsId = await All.findAll({
        where: {
            id: data, // Filtrar por el ID de usuario determinado
        },
    })
    return AllsId
}
export const postDao = async (data: any) => {
    const datas = await All.create(data)
    return datas

}
export const updateDao = async () => { }
export const deletesDao = async () => { }      