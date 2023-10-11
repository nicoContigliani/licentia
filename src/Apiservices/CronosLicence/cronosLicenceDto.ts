import { jwtGenerateToken } from "../../services/jwt.services"

export const getDto: any = async (data: any) => {

    const todos = await data.map( (item: any) => {
        let { dataValues } = item
        let {
            id,
            Licence_Name,
            Start_Date,
            End_Date,
            createdAt,
            updatedAt,
            Licence_Allowed,
            Modules,
            Pays,
            BillingPlans,
            Supports,
            Alls
        } = dataValues



        
        let todo = {
            id,
            Licence_Name,
            Start_Date,
            End_Date,
            createdAt,
            updatedAt,
            Licence_Allowed,
            Modules,
            Pays,
            BillingPlans,
            Supports,
            Alls
        }
        
        




        return jwtGenerateToken(todo, 0)
    })
    return todos

}