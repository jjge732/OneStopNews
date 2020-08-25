import axios from 'axios';

import Article from './article.js';

export default class NYT {
    async getArticleMetaData(section = 'home', quantity = 1) {
        let possibleSections = new Set(["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"])
        if (possibleSections.has(section)) {
            const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NYT_API_KEY}`)
                if (quantity > 0) {
                    let articles = [quantity];
                    let { results } = response.data;
                    for (let i = 0; i < quantity; i ++) {
                        let { title, short_url, multimedia } = results[i];
                        articles[i] = new Article(title, short_url, multimedia[2].url);
                    }
                    return articles;
                }
        } else {
            return "Invalid Section";
        }
    }
}