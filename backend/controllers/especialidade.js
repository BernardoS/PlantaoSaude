import Especialidade from '../models/Especialidade.js'

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