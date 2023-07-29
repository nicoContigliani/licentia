import express, { Request, Response } from 'express';
import user from '../Apiservices/User/userRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/user',user)

export default router;