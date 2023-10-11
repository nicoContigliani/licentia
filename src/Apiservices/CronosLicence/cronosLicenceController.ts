import { NextFunction, Request, Response } from 'express';

import { today } from '../../services/today.services';
import { deletesDao, getDao, getIdDao, postDao, updateDao } from './cronosLicenceDao';
import { AlertServices } from '../../services/alert.services';
import { getDto } from './cronosLicenceDto';
import { jwtCompareToken } from '../../services/jwt.services';

export const get = async (req: Request, res: Response, next: NextFunction) => {
    const dataHeader: any = "todo"
    const getData: any = await getDao(dataHeader)
    const getDtoReturn: any = await getDto(getData)
    // console.log("🚀 ~ file: cronosLicenceController.ts:12 ~ get ~ getDtoReturn:", getDtoReturn)
    const getT = jwtCompareToken(getDtoReturn)
    console.log("🚀 ~ file: cronosLicenceController.ts:15 ~ get ~ getT:", getT)
    return (getData) ? res.status(200).json({ data: getDtoReturn, message: AlertServices("Succes", "Success get data"), status: 200 }) :
        res.status(500).json({ data: [], message: AlertServices("Error", "Error resourses"), status: 500 });

}
export const getId = async (req: Request, res: Response, next: NextFunction) => { }
export const post = async (req: Request, res: Response, next: NextFunction) => { }
export const update = async (req: Request, res: Response, next: NextFunction) => { }
export const deletes = async (req: Request, res: Response, next: NextFunction) => { }           
