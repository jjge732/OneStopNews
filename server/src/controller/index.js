import Articles from './articles';

export default class Controller {
  constructor() {
    const articles = new Articles();
    this.articles = {
      getArticlesMetaData: Articles.getArticlesMetaData.bind(articles),
    };
  }
}
