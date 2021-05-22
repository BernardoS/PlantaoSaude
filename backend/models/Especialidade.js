import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    nome_especialidade: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        min: 0,
        default: 0
    },
});

const Especialidade = mongoose.model('Especialidade', esquema)

export default Especialidade;