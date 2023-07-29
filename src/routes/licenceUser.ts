import express, { Request, Response } from 'express';
import user from '../Apiservices/LicenceUser/LicenceUserRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/licenceUser',user)

export default router;