import Model from '../model';

const model = new Model();

function shuffleArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

async function getArticlesFromMultipleSources(res, sourceMap, section, quantity) {
  let promiseArr = new Array();
  let resultCount = 0;
  let error = null;
  let responseArr;
  for (let source of sourceMap.values()) {
    const resultsArr = await source.getArticlesMetaData(section, quantity);
    promiseArr.push(resultsArr);
    resultCount += resultsArr.length;
  }
  promiseArr = shuffleArr(promiseArr.flat());
  responseArr = new Array(Math.min(parseInt(quantity, 10), resultCount));
  for (let i = 0; i < responseArr.length; i++) {
    responseArr[i] = promiseArr[i];
  }
  if (responseArr.length === 0) {
    res.status(400).json(error);
    next();
  } else if (error != null) {
    console.log(error);
  }
  res.status(200).json(responseArr);
}

export default class Articles {
  async getArticlesMetaData(req, res, next) {
    const sourceMap = new Map([
      ['guardian', model.Guardian],
      ['nyt', model.NYT]
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
      await getArticlesFromMultipleSources(res, sourceMap, section, quantity)
    }
    next();
  }
}
