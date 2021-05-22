import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    nome_especialidade: {
        type: String,
        required: true
    },
    contar_especialidade: {
        type: Number,
        min: 0,
        default: 0
    },
});

const Especialidade = mongoose.model('Especialidade', esquema)

export default Especialidade;