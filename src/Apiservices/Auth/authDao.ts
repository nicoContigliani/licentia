
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

    const Alls = await All.findAll({})

    return Alls
}

export const getDaoFilter = async (data: any) => {

    const Alls = await All.findOne({
        where: {
          [Op.or]: [
            { email: data },
            { Enterprise_Name: data },
            { Branch_Name: data },
            { User_Name: data }
          ]
        },
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
                model: BillingPlan
              },
              {
                model: Support // Incluimos el modelo Support aquí
              }
            ]
          }
        ]
      });

    return Alls
}