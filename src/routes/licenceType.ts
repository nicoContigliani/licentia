import express, { Request, Response } from 'express';
import licenceT from '../Apiservices/LicenceType/LicenceTypeRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/licenceType',licenceT)

export default router;