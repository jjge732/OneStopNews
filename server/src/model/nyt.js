import axios from 'axios';

import Article from './article';

export default class NYT {
  constructor() {
    this.possibleSections = new Set(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']);
  }

  async getArticlesMetaData(section = 'home', quantity = 1) {
    if (this.possibleSections.has(section)) {
      const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NYT_API_KEY}`);
      if (quantity > 0) {
        const articles = [quantity];
        const { results } = response.data;
        for (let i = 0; i < quantity; i++) {
          const { title, short_url: shortUrl, multimedia } = results[i];
          articles[i] = new Article(title, shortUrl, multimedia[2].url);
        }
        return articles;
      }
      return 'Quantity must be greater than 0';
    }
    return 'Invalid Section';
  }
}
