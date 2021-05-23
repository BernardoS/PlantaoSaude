import express from 'express';

import { fazerLogin } from '../controllers/login.js'

const router = express.Router();

router.post('/',fazerLogin);

export default router;