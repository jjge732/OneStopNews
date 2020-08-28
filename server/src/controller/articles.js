import Model from '../model';

const model = new Model();

export default class Articles {
  async getArticlesMetaData(req, res, next) {
    const sourceMap = new Map([
      ['nyt', model.NYT],
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
      await model.NYT.getArticlesMetaData(section, quantity)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(400).json(err));
    }
    next();
  }
}
