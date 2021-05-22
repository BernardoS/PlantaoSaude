import express from 'express';

import { getEspecialidadesHospital, createEspecialidadesHospital } from '../controllers/especialidadesHospital.js'

const router = express.Router();

router.get('/', getEspecialidadesHospital )
router.post('/', createEspecialidadesHospital )

export default router;