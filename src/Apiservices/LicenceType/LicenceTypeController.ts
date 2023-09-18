
import { NextFunction, Request, Response } from 'express';

import { today } from '../../services/today.services';
import { deletesDao, getDao, getIdDao, postDao, updateDao } from './LicenceTypeDao';
import { AlertServices } from '../../services/alert.services';
import { ILicenceType } from '../../Interfaces/ILicenceType';

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = ""
        const dataReturn: any[] | undefined = await getDao(data)
        if (!dataReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        if (dataReturn.length == 0) return res.status(200).json({ data: [], message: AlertServices("Succes", "There isn't licenceType"), status: 200 });
        return res.status(200).json({ data: dataReturn, message: AlertServices("Success", "Licence Type get"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: LicenceTypeController.ts:17 ~ get ~ error:", error)

    }

}
export const getId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const dataReturn: any[] | undefined = await getIdDao(id)
        if (!dataReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        if (dataReturn.length == 0) return res.status(200).json({ data: [], message: AlertServices("Succes", "There isn't client"), status: 200 });
        return res.status(200).json({ data: dataReturn, message: AlertServices("Success", "User get"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: LicenceTypeController.ts:31 ~ getId ~ error:", error)

    }

}
export const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = ""

        let reqBody: ILicenceType = req?.body
        const dataReturnS = await postDao(reqBody)
        if (!dataReturnS) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });

        return res.status(200).json({ data: dataReturnS, message: AlertServices("Success", "Licence Type Created"), status: 200 });


    } catch (error) {
        console.log("🚀 ~ file: LicenceTypeController.ts:40 ~ post ~ error:", error)

    }
}
export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        let data: any = req.body
        if (!data.id) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });
        data.updatedAt = await today()
        const dataReturnS = await updateDao(data, id)

        const dataReturn: any[] | undefined = await getIdDao(id)
        if (!dataReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        if (dataReturn.length == 0) return res.status(200).json({ data: [], message: AlertServices("Succes", "There isn't client"), status: 200 });
        return res.status(200).json({ data: dataReturn, message: AlertServices("Success", "User get"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: LicenceTypeController.ts:67 ~ update ~ error:", error)

    }

}
export const deletes = async (req: Request, res: Response, next: NextFunction) => { }           
