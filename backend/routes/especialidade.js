import express from 'express';

import { getEspecialidade, createEspecialidade } from '../controllers/especialidade.js'

const router = express.Router();

router.get('/', getEspecialidade )
router.post('/', createEspecialidade )

export default router;