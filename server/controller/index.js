import NYT from './nyt';

if (process.env.NODE_ENV == 'dev') {
    // imports can only be done at the top level so require is used here
    require('dotenv').config();
}

export default class Controller {
    constructor() {
        this.NYT = new NYT();
    }
}