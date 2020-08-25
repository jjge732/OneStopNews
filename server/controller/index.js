import NYT from './nyt';

/* eslint-disable */
if (process.env.NODE_ENV === 'dev') {
  // imports can only be done at the top level so require is used here
  require('dotenv').config();
}
/* eslint-enable */

export default class Controller {
  constructor() {
    this.NYT = new NYT();
  }
}
