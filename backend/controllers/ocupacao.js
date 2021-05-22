import Ocupacao from '../models/Ocupacao.js'

export const getOcupacao = async (req, res) => {
    try {
        const ocupacao = await Ocupacao.find().populate('hospital')

        res.status(200).json(ocupacao);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createOcupacao = async (req, res) => {
    const ocupacao = req.body;

    const novaOcupacao = new Ocupacao(ocupacao);

    try {
        await novaOcupacao.save();
        
        res.status(201).json(novaOcupacao);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    

}