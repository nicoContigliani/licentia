#!/bin/bash
#########################################################################################################################
#######################Creado por Nicolás Contigliani####################################################################
######################################################################################################################### 


cd /home/nico/Atalaya/Laboratorio/LabNode/licentia/src/Apiservices

# Declarar el array sin espacios alrededor del signo igual (=)
nombres=("UserType" "BillingPlan" "BillingPlanLicence" "BillingPlanType" "GeneralToken" "Licence" "LicenceUser" "LicenceModule" "LicencePay" "LicenceSupport" "LicenceType" "Module" "ModuleType" "Pay" "PayType" "PlanLicence" "Support" "SupportType")

# nombres=("UserType")



for nombre in "${nombres[@]}"; do
  # Crear el directorio con el nombre del controlador
  mkdir "$nombre"
  cd "$nombre"
  
  # Crear el archivo del controlador con el contenido especificado
  archivoRouter="${nombre}Router.ts"
  archivoController="${nombre}Controller.ts"
  archivoDto="${nombre}Dto.ts"
  archivoDao="${nombre}Dao.ts"


   contenidoRouter=$(cat <<EOM

import express, { Request, Response } from 'express';
import {
    get,
    getId,
    post,
    update,
    deletes
} from './${nombre}Controller'
const router = express.Router();

// Ruta de ejemplo
router.get('/', get);
router.get('/:id', getId);
router.post('/', post);
router.post('/:id', update);
router.delete('/:id', deletes);

export default router;

EOM
)

  contenidoController=$(cat <<EOM

import { NextFunction, Request, Response } from 'express';

import { today } from '../../services/today.services';
import { deletesDao, getDao, getIdDao, postDao, updateDao } from './${nombre}Dao';

export const get = async (req: Request, res: Response, next: NextFunction) => { }
export const getId = async (req: Request, res: Response, next: NextFunction) => { }
export const post = async (req: Request, res: Response, next: NextFunction) => { }
export const update = async (req: Request, res: Response, next: NextFunction) => { }
export const deletes = async (req: Request, res: Response, next: NextFunction) => { }           


EOM
)
  contenidoDto=$(cat <<EOM

EOM
)
  contenidoDao=$(cat <<EOM

const { Op } = require('sequelize');



const {
    All,
    AllType,
    BillingPlan,
    BillingPlanLicence,
    BillingPlanType,
    GeneralToken,
    Licence,
    LicenceAll,
    LicenceModule,
    LicencePay,
    LicenceSupport,
    LicenceType,
    Module,
    ModuleType,
    Pay,
    PayType,
    PlanLicence,
    Support,
    SupportType

} = require('../../../models')


export const deletesDao = async (data: any) => { return data }
export const getDao = async (data: any) => { return data }
export const getIdDao = async (data: any) => { return data }
export const postDao = async (data: any) => { return data }
export const updateDao = async (data: any) => { return data }     


EOM
)

  echo "$contenidoRouter" > "$archivoRouter"
  echo "$contenidoController" > "$archivoController"
  echo "$contenidoDao" > "$archivoDao"
  echo "$contenidoDto" > "$archivoDto"




  
  # Volver al directorio anterior
  cd ..
done