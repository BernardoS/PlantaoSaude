import Especialidade from '../models/Especialidade.js'

import mongoose from 'mongoose'

export const getEspecialidade = async (req, res) => {
    try {
        const especialidade = await Especialidade.find()

        res.status(200).json(especialidade);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createEspecialidade = async (req, res) => {
    const especialidade = req.body;

    const novaEspecialidade = new Especialidade(especialidade);

    try {
        await novaEspecialidade.save();
        
        res.status(201).json(novaEspecialidade);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    

}

export const deleteEspecialidade = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Sem especialidade com este id: ${id}`);

    await Especialidade.findByIdAndRemove(id);

    res.json({ message: 'Especialidade deletada com sucesso' })

}

export const incrementarEspecialidade = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const especialidade = await Especialidade.findById(id);

    const updatedEspecialidade = await Especialidade.findByIdAndUpdate(id, { contar_especialidade: especialidade.contar_especialidade + 1 }, { new: true });
    
    res.json(updatedEspecialidade);
}