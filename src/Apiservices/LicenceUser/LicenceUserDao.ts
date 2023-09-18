
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
    return await Licence.findAll({
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
            {
                model: Support,  
            },
            {
                model: All, 
            }
     
        ]
    })

}

export const getIdDao = async (data: any) => {
    return await LicenceAll.findAll({
        where: {
            id: data,
        }
    })
}
export const postDao = async (data: any) => {
    return await LicenceAll.create(data)
}
export const updateDao = async (data: any, id: number | string) => {
    try {
        return await LicenceAll.update(data, { where: { id: id } })
    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }

    return data
}

export const deletesDao = async (data: any, id: number | string) => {
    try {
        return await LicenceAll.update(data, { where: { id: id } })




    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }


}




