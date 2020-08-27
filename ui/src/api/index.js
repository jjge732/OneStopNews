import axios from 'axios';
import Config from '../config';

const config = new Config();

export default {
    getArticlesMetaData: async (pageName, quantity=12) => axios.get(`${config.apiUrl}/articles?section=${pageName}&quantity=${quantity}`)
}