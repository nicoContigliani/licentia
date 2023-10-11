import { NextFunction, Request, Response } from 'express';

import { deletesDao, getDao, getIdDao, postDao, updateDao } from './userDao';
import { today } from '../../services/today.services';
import { AlertServices } from '../../services/alert.services';
import { jwtGenerateToken } from '../../services/jwt.services';
import { deletePasswordArray } from './userDto'
import { existAll } from '../../services/exist.services';
import { IAll } from '../../Interfaces/IAll';
import { bcryptCreatePassword } from '../../services/bcrypt.services';
import { allowed } from '../../services/Allowed.services';
import { cleanPassword } from '../../services/clean.password.services';


// const data: string = "si"
// const returnJWTGenerate: string = await jwtGenerateToken(data);
// if (!returnJWTGenerate) console.log(returnJWTGenerate);


interface JwtToken {
    token: string;
    expiresAt: number;
}




export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataReturn: any[] | undefined = await getDao()
        if (!dataReturn) return res.status(200).json({ data: [], message: AlertServices("Success", "There aren't Clients"), status: 200 });
        const todo = await allowed(dataReturn)
        const dataFormaterReturn = await deletePasswordArray(todo)
        if (!dataFormaterReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        if (dataFormaterReturn.length == 0) return res.status(200).json({ data: [], message: AlertServices("Succes", "There isn't client"), status: 200 });
        return res.status(200).json({ data: dataFormaterReturn, message: AlertServices("Success", "User get"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:13 ~ get ~ error:", error)

    }
}


export const getId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const dataReturn: any[] | undefined = await getIdDao(id)
        const todo = await allowed(dataReturn)
        const dataFormaterReturn = await deletePasswordArray(todo)
        if (!dataFormaterReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        if (dataFormaterReturn.length == 0) return res.status(200).json({ data: [], message: AlertServices("Succes", "There isn't client"), status: 200 });
        return res.status(200).json({ data: dataFormaterReturn, message: AlertServices("Success", "User get"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }

}
export const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let reqBody: IAll = req?.body


        const dataReturn: any[] | undefined = await getDao()
        const exisT = await existAll(reqBody, dataReturn)
        if (exisT) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Client Exist"), status: 500 });
        if (!reqBody?.password) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });
        const bcryptReturn: any = await bcryptCreatePassword(reqBody?.password)
        reqBody.password = bcryptReturn;
        const createAts = new Date();

        reqBody.createdAt = new Date();
        reqBody.updatedAt = new Date()

        console.log("🚀 ~ file: userController.ts:63 ~ post ~ reqBody:", reqBody)

        const data: string = "si"

        //


        const dataReturnS = await postDao(reqBody)
        console.log("🚀 ~ file: userController.ts:75 ~ post ~ dataReturnS:", dataReturnS, "*********************************")
        if (!dataReturnS) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });

        const dataCleanPasswordUser = await cleanPassword(dataReturnS)

        const datatimeall: any = undefined
        let datatime: any = datatimeall || 3600
        const JTWToken = await jwtGenerateToken(dataCleanPasswordUser, datatime)


        if (!JTWToken) return res.status(500).json({ data: [], message: AlertServices("Error", "Error JTWToken "), status: 500 });
        if (JTWToken) return res.status(200).json({ data: [{ token: JTWToken, login: true, User: dataCleanPasswordUser }], message: AlertServices("Success", "Client True"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}
export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        let data = req.body
        if (!data.id) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });
        data.updatedAt = await today()
        const dataReturnS = await updateDao(data, id)
        const dataReturn: any[] | undefined = await getIdDao(id)
        const dataFormaterReturn = await deletePasswordArray(dataReturn)
        if (dataFormaterReturn.length === 0) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Client dosen't Exist"), status: 500 });
        return res.status(200).json({ data: dataFormaterReturn, message: AlertServices("Success", "Client update"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}
export const deletes = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params
        const dataReturnS = await deletesDao(id)

        // if (dataReturnS) return res.status(200).json({ data: [], message: AlertServices("Success", "Client delete"), status: 200 });
        if (!dataReturnS) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Client delete"), status: 200 });


        const dataReturn: any[] | undefined = await getDao()
        if (!dataReturn) return res.status(200).json({ data: [], message: AlertServices("Success", "There aren't Clients"), status: 200 });
        const dataFormaterReturn = await deletePasswordArray(dataReturn)
        if (!dataFormaterReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });
        return res.status(200).json({ data: dataFormaterReturn, message: AlertServices("Success", "User get"), status: 200 });


    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}






