import axios from 'axios';

const baseUrl = "http://localhost:8080";

export const createHospital = (hospital) => axios.post(`${baseUrl}/hospital`,hospital);

export const logarHospital = (login,senha) => axios.post(`${baseUrl}/login`,{
    login,
    senha
});

export const registrarOcupacao = (id,leitos,leitosocupados) => axios.post(`${baseUrl}/ocupacao`,{
	quantidade_leitos: leitos,
    quantidade_leitos_ocupados: leitosocupados,
    hospital:id
})