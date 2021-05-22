import express from 'express';

import { getOcupacao, createOcupacao } from '../controllers/ocupacao.js'

const router = express.Router();

router.get('/', getOcupacao )
router.post('/', createOcupacao )

export default router;