
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//rotas
import hospitalRoutes from './routes/hospital.js'
import ocupacaoRoutes from './routes/ocupacao.js'
import especialidadesHospitalRoutes from './routes/especialidadesHospital.js'
import especialidadeRoutes from './routes/especialidade.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//url das rotas
app.use('/hospital', hospitalRoutes);
app.use('/ocupacao', ocupacaoRoutes);
app.use('/especialidadesHospital', especialidadesHospitalRoutes);
app.use('/especialidade', especialidadeRoutes);

const CONNECTION_URL = 'mongodb+srv://random:159753@clusterteste.qsmmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);