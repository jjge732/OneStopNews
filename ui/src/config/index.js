import axios from 'axios';

export default class Config {
    constructor() {
        const baseURL = process.env.NODE_ENV === 'prod' ? process.env.BASE_URL : 'http://localhost:5000';
        this.axiosInstance = axios.create({baseURL:`${baseURL}/api/v1`});
    }
}