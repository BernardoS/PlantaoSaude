import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    quantidade_leitos: {
        type: Number,
        min: 0,
        default: 0
    },
    quantidade_leitos_ocupados: {
        type: Number,
        min: 0,
        default: 0
    },
    data: {
        type: Date,
        default: new Date()
    },
    hospital: {
        type: mongoose.ObjectId,
        ref: "Hospital",
        required: true
    }
});

const Ocupacao = mongoose.model('Ocupacao', esquema)

export default Ocupacao;