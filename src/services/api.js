import axios from 'axios';

let api

if (__DEV__) {
    api = axios.create({
        baseURL: 'https://navedex-api.herokuapp.com/v1',
    });
} else {
    api = axios.create({
        baseURL: 'https://navedex-api.herokuapp.com/v1',
    });
}


export default api;
