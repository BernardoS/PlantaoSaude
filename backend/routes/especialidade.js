import express from 'express';

import { getEspecialidade, createEspecialidade, deleteEspecialidade, incrementarEspecialidade } from '../controllers/especialidade.js'

const router = express.Router();

router.get('/', getEspecialidade )
router.post('/', createEspecialidade )
router.delete('/:id', deleteEspecialidade)
router.patch('/:id/incrementarEspecialidade', incrementarEspecialidade);
export default router;