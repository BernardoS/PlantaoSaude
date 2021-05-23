import express from 'express';

import { getHospitals, createHospital, deleteHospital, updatedHospital, getHospitalName } from '../controllers/hospital.js'

const router = express.Router();

router.get('/', getHospitals );
router.post('/', createHospital );
router.delete('/:id', deleteHospital );
router.patch('/:id', updatedHospital);

//busca de hospitais
router.get('/:nome_hospital', getHospitalName);



export default router;