import Hospital from '../models/Hospital.js'

import mongoose from 'mongoose'

export const getHospitals = async (req, res) => {
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

export const deleteHospital = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Sem Hospital com este id: ${id}`);

    await Hospital.findByIdAndRemove(id);

    res.json({ message: 'Hospital deletado com sucesso' })

}

export const updatedHospital = async (req, res) => {
    const { id } = req.params;
    const { nome_hospital, login, email, senha, cep, endereco, telefone } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Sem hospital com este id: ${id}`);

    const updatedHospital = { nome_hospital, login, email, senha, cep, endereco, telefone, _id: id };

    await Hospital.findByIdAndUpdate(id, updatedHospital, { new: true });

    res.json(updatedHospital);
}

export const getHospitalName = async (req, res) => {
    const { nome_hospital } = req.params;
    const chavesDeBusca = nome_hospital
    // cria a query
    const query = Hospital.find({ 'nome_hospital': {'$in' : chavesDeBusca } })

    // resolver os resultados utilizando then
    query.then((error, documents)=> {
        if (error) {
            return console.log(erro)
        }
        // resultados iteraveis em documents
    })

    // resolver os resultados usando await exec()
    // o await tem que estar contido em uma async function
    const documents = await query.exec();
    // espera pelos resultados e executa a proxima linha
    res.json(documents);

}