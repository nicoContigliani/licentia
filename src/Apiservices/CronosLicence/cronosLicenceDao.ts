
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


export const deletesDao = async (data: any) => {

    return data
}
export const getDao = async (data: any) => {
    return await Licence.findAll({
        attributes: ['id', 'Licence_Name', 'Start_Date', 'End_Date','createdAt','updatedAt','Licence_Allowed'],
        include: [
            {
                model: Module,
                attributes: ['id', 'Module_Name', 'Module_Description'],
                as:{
                    id:'idModules'
                },
                exclude: ['_previousDataValues']
            },
            {
                model: Pay,
                attributes: ['id', 'Payment_Date','createdAt','updatedAt'],
                as:{
                    id:'idPay'
                },exclude: true


            },
            {
                model: BillingPlan,
                attributes: ['id', 'Plan_Name','createdAt','updatedAt'],
                as:{
                    id:'idPlan'
                },
                exclude: true
            },
            {
                model: Support,
                attributes: ['id', 'Type_Name','Description','createdAt','updatedAt'],
                as:{
                    id:'idPlan'
                },
                exclude: true
            },
            {
                model: All,
                exclude: ['All.password'],
                
            }

        ]
    })
}
export const getIdDao = async (data: any) => { return data }
export const postDao = async (data: any) => { return data }
export const updateDao = async (data: any) => { return data }     
