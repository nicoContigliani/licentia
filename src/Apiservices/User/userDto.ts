

export const deletePasswordArray = async (data: any[]) => {
    let datas = data

    for (let iterator of datas) {
        let {
            dataValues
        } = iterator
        delete dataValues?.password
    }


    return datas
}