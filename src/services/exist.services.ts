import { IAll } from "../Interfaces/IAll"

export const existAll = async (bodyData: IAll, sqlData: any) => {
    let control = false
    let {
        Enterprise_Name,
        Branch_Name,
        User_Name
    } = bodyData


    for (let iterator of sqlData) {
        if (control) break
        const {
            dataValues: {
                Enterprise_Name: EName,
                Branch_Name: BName,
                User_Name: UName }
        } = iterator

        if (Enterprise_Name === EName || Branch_Name === BName || User_Name === UName) control = true

    }


    return control





}