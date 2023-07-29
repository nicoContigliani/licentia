
import { NextFunction, Request, Response } from 'express';

import { today } from '../../services/today.services';
import { deletesDao, getDao, getIdDao, postDao, updateDao } from './LicenceTypeDao';

export const get = async (req: Request, res: Response, next: NextFunction) => { }
export const getId = async (req: Request, res: Response, next: NextFunction) => { }
export const post = async (req: Request, res: Response, next: NextFunction) => { }
export const update = async (req: Request, res: Response, next: NextFunction) => { }
export const deletes = async (req: Request, res: Response, next: NextFunction) => { }           
