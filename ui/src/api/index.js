import Config from '../config';

const config = new Config();

export default {
    getArticlesMetaData: async (pageName, quantity = 36) => config.axiosInstance.get(`/articles?section=${pageName}&quantity=${quantity}`)
}