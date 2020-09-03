import Guardian from './newspaperApis/guardian';
import NYT from './newspaperApis/nyt';

/* eslint-disable */
if (process.env.NODE_ENV === 'dev') {
  // imports can only be done at the top level so require is used here
  require('dotenv').config();
}
/* eslint-enable */

export default class Model {
  constructor() {
    this.guardian = new Guardian();
    this.nyt = new NYT();
  }
}
