import axios from 'axios';
import Config from '../config';

const config = new Config();

export default {
    getArticlesMetaData: async (pageName, quantity) => axios.get(`${config.apiUrl}/articles?section=${pageName}&quantity=${quantity}`)
}