export const allowed = async (data: any | any[]) => {
    return data.filter((item: any) => {
        const { dataValues } = item;
        return Object.keys(dataValues).some(key => key.endsWith('_Allowed') && dataValues[key] === true);
    });

}