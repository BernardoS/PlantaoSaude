import Hospital from '../models/Hospital.js'

export const getHospital = async (req, res) => {
    try {
        const hospital = await Hospital.find();

        res.status(200).json(hospital);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createHospital = async (req, res) => {
    const hospital = req.body;

    const novoHospital = new Hospital(hospital);

    try {
        await novoHospital.save();
        
        res.status(201).json(novoHospital);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    

}