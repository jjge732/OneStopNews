import axios from 'axios';

const baseURL = 'http://localhost:5000';

export default class Config {
    constructor() {
        this.axiosInstance = axios.create({baseURL:`${baseURL}/api/v1`});
    }
}