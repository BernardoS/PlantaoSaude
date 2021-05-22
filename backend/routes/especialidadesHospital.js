import express from 'express';

import { getEspecialidadesHospital, createEspecialidadesHospital, deleteEspecialidadesHospital } from '../controllers/especialidadesHospital.js'

const router = express.Router();

router.get('/', getEspecialidadesHospital )
router.post('/', createEspecialidadesHospital )
router.delete('/:id', deleteEspecialidadesHospital)


export default router;