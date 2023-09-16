import express, { Request, Response } from 'express';
import { login, signIn } from './authController';

const router = express.Router();

router.post('/',signIn)
router.put('/',login)



export default router;