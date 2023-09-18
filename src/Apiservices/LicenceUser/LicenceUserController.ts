
import { NextFunction, Request, Response } from 'express';

import { today } from '../../services/today.services';
import { deletesDao, getDao, getIdDao, postDao, updateDao } from './LicenceUserDao';
import { AlertServices } from '../../services/alert.services';
import { ILicenceUser } from '../../Interfaces/ILicenceUser';
import { structureDataArray } from '../../services/StructureData.services';
import { allowed } from '../../services/Allowed.services';

export const get = async (req: Request, res: Response, next: NextFunction) => {
    const data: any = ""
    const getData = await getDao(data)
    const todo = await allowed(getData)
    // if (getData.length != 0) return res.status(200).json({ data: todo, message: AlertServices("Succes", "Success get data"), status: 200 });
    // if (!getData) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    return (getData) ? res.status(200).json({ data: todo, message: AlertServices("Succes", "Success get data"), status: 200 }) :
                       res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
}
export const getId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const getData = await getIdDao(id)
    const todo = await allowed(getData)
    // if (!getData) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    // if (getData) return res.status(200).json({ data: todo, message: AlertServices("Succes", "Success get data"), status: 200 });
    return (getData) ? res.status(200).json({ data: todo, message: AlertServices("Succes", "Success get data"), status: 200 }) :
                       res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });


}
export const post = async (req: Request, res: Response, next: NextFunction) => {
    let reqBody: ILicenceUser = req?.body
    if (!reqBody) if (!reqBody) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    const getData = await postDao(reqBody)
    if (!getData) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    if (getData.length != 0) return res.status(200).json({ data: getData, message: AlertServices("Succes", "Success create data"), status: 200 });

}
export const update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    let reqBody: ILicenceUser = req?.body
    if (!reqBody) if (!reqBody) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    const updateData = await updateDao(reqBody, id)

    const getData = await getIdDao(id)
    const todo = await allowed(getData)

    if (!getData) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
    if (getData) return res.status(200).json({ data: todo, message: AlertServices("Succes", "Success get data"), status: 200 });
}
export const deletes = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    let getData: any[] = await getIdDao(id)
    let dataStrucutreReturn: any = await structureDataArray(getData)
    dataStrucutreReturn.LicenceAll_Allowed = false
    const deleteData = await deletesDao(dataStrucutreReturn, id)



    if (!deleteData) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });



    const data: any = ""
    const getDataR = await getDao(data)


    if (getData) return res.status(200).json({ data: getDataR, message: AlertServices("Succes", `delete  data id${id}`), status: 200 });
}           
