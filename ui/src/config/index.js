export default class Config {
    constructor() {
        let baseUrl = process.NODE_ENV === 'prod' ? '' : 'http://localhost:5000';
        this.apiUrl = `${baseUrl}/api/v1`;
    }
}