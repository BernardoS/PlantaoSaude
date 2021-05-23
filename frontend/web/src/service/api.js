import axios from 'axios';

const baseUrl = "http://localhost:8080";

export const createHospital = (hospital) => axios.post(`${baseUrl}/hospital`,hospital);

export const logarHospital = (login,senha) => axios.post(`${baseUrl}/login`,{
    login,
    senha
});