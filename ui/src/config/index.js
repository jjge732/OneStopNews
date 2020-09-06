import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'dev' ? 'http://localhost:5000' : 'https://0a9j7pq8d1.execute-api.us-east-2.amazonaws.com/prod';

export default class Config {
    constructor() {
        this.axiosInstance = axios.create({baseURL:`${baseURL}/api/v1`});
    }
}