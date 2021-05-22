import express from 'express';

import { getHospital, createHospital } from '../controllers/hospital.js'

const router = express.Router();

router.get('/', getHospital )
router.post('/', createHospital )

export default router;