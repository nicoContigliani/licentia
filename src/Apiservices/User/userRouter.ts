import express, { Request, Response } from 'express';
import { get } from '../User/userController';
const router = express.Router();

// Ruta de ejemplo
router.get('/', get);




export default router;