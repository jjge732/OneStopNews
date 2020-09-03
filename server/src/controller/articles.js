import Model from '../model';

const model = new Model();

/**
 * @param arr
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
 * @param res
 * @param sourceMap
 * @param sources
 * @param section
 * @param quantity
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
    console.log(error);
  }
  res.status(res.statusCode).json(responseArr.slice(
    0,
    Math.min(parseInt(quantity, 10), responseArr.length),
  ));
}

export default class Articles {
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
