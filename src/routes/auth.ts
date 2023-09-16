import express, { Request, Response } from 'express';
import auth from '../Apiservices/Auth/authRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/auth',auth)

export default router;