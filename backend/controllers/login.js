import mongoose from 'mongoose';

import Hospital from '../models/Hospital.js';

export const fazerLogin = async (req, res) => {
    const dadosLogin = req.body;

    const login = dadosLogin.login;
    const senha = dadosLogin.senha;

    try {
        const response = await Hospital.find({
            login: login,
            senha:senha
        });
        
        response.length==0?res.status(409).json({ message: 'Não autorizado' }):res.status(200).json({
            response:response[0],
        });
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    

}
