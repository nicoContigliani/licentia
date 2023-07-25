import express, { Request, Response } from 'express';
import {
    get,
    getId,
    post,
    update,
    deletes
} from './userController'
const router = express.Router();

// Ruta de ejemplo
router.get('/', get);




export default router;