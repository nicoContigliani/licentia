import { NextFunction, Request, Response } from 'express';
import { getDao } from './authDao';
import { ILogin } from '../../Interfaces/ILogin';
import { AlertServices } from '../../services/alert.services';


export const signIn = async (req: Request, res: Response, next: NextFunction) => {

}
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let reqBody: ILogin = req?.body
        if (!reqBody?.password) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });
        if (!reqBody?.password) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });

        const dataReturn: any[] | undefined = await getDao()
        console.log("🚀 ~ file: authController.ts:17 ~ login ~ dataReturn:", dataReturn)

    } catch (error) {
        console.log("🚀 ~ file: authController.ts:11 ~ login ~ error:", error)

    }


}