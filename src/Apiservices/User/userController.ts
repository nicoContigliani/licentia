import { NextFunction, Request, Response } from 'express';

import { jwtGenerateToken } from '../../services/jwt.services';
import { getDao } from './userDao';


// const data: string = "si"
// const returnJWTGenerate: string = await jwtGenerateToken(data);
// if (!returnJWTGenerate) console.log(returnJWTGenerate);


interface JwtToken {
    token: string;
    expiresAt: number;
}




export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataReturn = await getDao()
        if (!dataReturn) console.log("error")

        

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:13 ~ get ~ error:", error)

    }



}


export const getId = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }

}
export const post = async (req: Request, res: Response, next: NextFunction) => {

    try {

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}
export const update = async (req: Request, res: Response, next: NextFunction) => {

    try {

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}
export const deletes = async (req: Request, res: Response, next: NextFunction) => {

    try {

    } catch (error) {
        console.log("🚀 ~ file: userController.ts:33 ~ getId ~ error:", error)

    }
}






