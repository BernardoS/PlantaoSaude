import EspecialidadesHospital from '../models/EspecialidadesHospital.js'

import mongoose from 'mongoose'


export const getEspecialidadesHospital = async (req, res) => {
    try {
        const especialidadesHospital = await EspecialidadesHospital.find().populate(['hospital','especialidade'])

        res.status(200).json(especialidadesHospital);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createEspecialidadesHospital = async (req, res) => {
    const especialidadesHospital = req.body;

    const novaEspecialidadesHospital = new EspecialidadesHospital(especialidadesHospital);

    try {
        await novaEspecialidadesHospital.save();
        
        res.status(201).json(novaEspecialidadesHospital);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    

}

export const deleteEspecialidadesHospital = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Sem Especialidade do Hospital com este id: ${id}`);

    await EspecialidadesHospital.findByIdAndRemove(id);

    res.json({ message: 'Especialidade do Hospital deletada com sucesso' })

}