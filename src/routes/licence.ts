import express, { Request, Response } from 'express';
import licence from '../Apiservices/Licence/LicenceRouter'
const router = express.Router();


// Ruta de ejemplo
router.use('/licence',licence)

export default router;