import axios from 'axios';

const api = axios.create({
    baseURL: "https://nodemailer-by5g.herokuapp.com",
    timeout: 20000,

});

export default api;