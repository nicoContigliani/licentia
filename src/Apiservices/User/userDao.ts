
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

    const Alls = await All.findAll({
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
                    {
                        model: Support,  
                    }

                ]
            }
        ]
    })

    return Alls
}
export const getIdDao = async (data: any) => {
    const AllsId = await All.findAll({
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

    })
    return AllsId
}
export const postDao = async (data: any) => {
    return await All.create(data)
}
export const updateDao = async (data: any, id: any) => {
    try {
        return await All.update(data, { where: { id: id } })
    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }
}
export const deletesDao = async (id: any) => {
    try {
        const status_All = "desactive"
        return await All.update({ status_All }, { where: { id: id } })

    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:57 ~ deletesDao ~ error:", error)

    }
}      