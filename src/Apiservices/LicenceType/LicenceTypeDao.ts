
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


export const getDao = async (data: any) => {
    const Alls = await AllType.findAll({
    })
    console.log("🚀 ~ file: LicenceTypeDao.ts:32 ~ getDao ~ Alls:", Alls)
    return Alls
}
export const getIdDao = async (data: any) => {
    const AllsId = await AllType.findAll({
        where: {
            id: data, // Filtrar por el ID de usuario determinado
        }
    })

    return AllsId
}
export const postDao = async (data: any) => { return await AllType.create(data) }
export const updateDao = async (data: any, id: any) => {
    try {
        return await AllType.update(data, { where: { id: id } })
    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }
}
export const deletesDao = async (id: any) => {
    try {
        const status_All = "desactive"
        return await AllType.update({ status_All }, { where: { id: id } })

    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:57 ~ deletesDao ~ error:", error)

    }
}     