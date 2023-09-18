import { NextFunction, Request, Response } from 'express';
import { getDao, getDaoFilter } from './authDao';
import { ILogin } from '../../Interfaces/ILogin';
import { AlertServices } from '../../services/alert.services';
import { bcryptComparePassword } from '../../services/bcrypt.services';
import { UserPasswordReturnToCompare } from '../../services/UserPasswordReturnToCompare.services';
import { cleanPassword } from '../../services/clean.password.services';
import { jwtGenerateToken } from '../../services/jwt.services';
import { getIdDao } from '../User/userDao';


export const signIn = async (req: Request, res: Response, next: NextFunction) => { 
    console.log("toma por miron")
}
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let reqBody: ILogin = req?.body
        let {
            email,
            password
        } = reqBody

        if (!reqBody?.password) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });
        if (!reqBody?.email) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });

        let dataReturn: any | undefined = await getDaoFilter(email)
        
        if (!dataReturn) return res.status(200).json({ data: [], message: AlertServices("Success", "There aren't Clients"), status: 200 });
        
        const passwordU = await UserPasswordReturnToCompare(dataReturn)
        const passworValidator = await bcryptComparePassword(password, passwordU)
        
        if (!passworValidator) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password "), status: 500 });


        const dataCleanPasswordUser = await cleanPassword(dataReturn)
        const JTWToken = await jwtGenerateToken(dataCleanPasswordUser)

        if (!JTWToken) return res.status(500).json({ data: [], message: AlertServices("Error", "Error JTWToken "), status: 500 });
        if (JTWToken) return res.status(200).json({ data: [{ token: JTWToken, login: true, User: dataCleanPasswordUser }], message: AlertServices("Success", "Client True"), status: 200 });


    } catch (error) {
        console.log("🚀 ~ file: authController.ts:11 ~ login ~ error:", error)

    }


}