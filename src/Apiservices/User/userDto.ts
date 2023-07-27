export const deletePasswordArray = async (data: any[]) => {
    return data.filter(itemObject => {
        let {
            dataValues
        } = itemObject
        return (dataValues?.status_All !== "desactive") ? delete dataValues?.password : ""
    })
}