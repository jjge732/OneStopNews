import axios from 'axios';

import Article from '../article';

export default class Guardian {
  constructor() {
    this.possibleSections = new Set(['', 'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']);
  }

  async getArticlesMetaData(section = '', quantity = 1) {
    if (this.possibleSections.has(section)) {
      if (section != '') {
          section = `&q=${section}`
      }
      const response = await axios.get(`http://content.guardianapis.com/search?api-key=${process.env.GUARDIAN_API_KEY}&order-by=newest${section}`);
      if (quantity > 0) {
        const { results } = response.data.response;
        const articles = new Array(Math.min(quantity, results.length));
        for (let i = 0; i < articles.length; i++) {
          const { webTitle: title, webUrl } = results[i];
          articles[i] = new Article(title, webUrl);
        }
        return articles;
      }
      return 'Quantity must be greater than 0';
    }
    return 'Invalid Section';
  }
}
