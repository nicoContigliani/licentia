import express, { Request, Response } from 'express';
import cronosLicence from '../Apiservices/CronosLicence/cronosLicenceRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/cronosLicence',cronosLicence)

export default router;