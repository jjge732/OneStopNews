import Model from '../model';

const model = new Model();

/**
 * Shuffles the contents of an array.
 *
 * @param {Array} arr - The array whose contents will be shuffled
 * @returns {Array} - A shuffled array
 */
function shuffleArr(arr) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * i);
    newArr[i] = arr[j];
    newArr[j] = arr[i];
  }
  return newArr;
}

/**
 * Retrieves articles from all available sources
 *
 * @param {object} res - The Express response object
 * @param {Map} sourceMap - Maps a string to the models for the news article sources
 * @param {string} section - The name of the section from which articles will be retrieved
 * @param {number} quantity - The number of articles to retrieve
 */
async function getArticlesFromMultipleSources(res, sourceMap, section, quantity) {
  let responseArr = [];
  const error = null;
  for (const source of sourceMap.values()) {
    const resultsArr = await source.getArticlesMetaData(section, quantity);
    responseArr = [...responseArr, ...resultsArr];
  }
  responseArr = shuffleArr(responseArr);
  if (responseArr.length === 0) {
    res.status(400).json(error);
    return;
  } if (error != null) {
    console.error(error);
  }
  res.status(res.statusCode).json(responseArr.slice(
    0,
    Math.min(parseInt(quantity, 10), responseArr.length),
  ));
}

export default class Articles {
  /*
  * @param {object} req - The Express request object
  * @param {object} res - The Express response object
  * @param {object} next - Express function to pass control to next middleware function
  */
  static async getArticlesMetaData(req, res, next) {
    const sourceMap = new Map([
      ['guardian', model.guardian],
      ['nyt', model.nyt],
    ]);
    const { section, source } = req.query;
    let quantity = req.query.quantity || 1;
    if (/\D/.test(quantity) || quantity < 1) {
      res.status(400).json({ message: 'Quantity must be an integer greater than 0.' });
    } else if (sourceMap.has(source)) {
      quantity = parseInt(quantity, 10);
      await sourceMap.get(source).getArticlesMetaData(section, quantity)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(400).json(err));
    } else if (source != null) {
      res.status(400).json({
        message: 'Unsupported news source. Please send only one of the following sources',
        sources: [...sourceMap.keys()],
      });
    } else {
      await getArticlesFromMultipleSources(res, sourceMap, section, quantity);
    }
    next();
  }
}
