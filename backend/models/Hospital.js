import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    nome_hospital: {
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    foto: String
})

const Hospital = mongoose.model('Hospital', esquema)

export default Hospital;