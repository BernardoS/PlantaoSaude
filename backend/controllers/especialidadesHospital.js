import EspecialidadesHospital from '../models/EspecialidadesHospital.js'

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