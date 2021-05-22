import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    hospital: {
        type: mongoose.ObjectId,
        ref: "Hospital",
        required: true
    },
    especialidade: {
        type: mongoose.ObjectId,
        ref: "Especialidade",
        required: true
    }
});

const EspecialidadesHospital = mongoose.model('EspecialidadesHospital', esquema)

export default EspecialidadesHospital;