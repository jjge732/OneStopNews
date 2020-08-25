import express from 'express';

import Controller from '../../controller';

const router = express.Router();
const controller = new Controller();

/* GET articles listing. */
router.get('/', async (req, res, next) => {
  const { page } = req.query;
  let { quantity } = req.query;
  if (isNaN(quantity)) {
    res.status(400).send('Quantity must be an integer.');
  } else {
    quantity = parseInt(quantity, 10);
  }
  await controller.NYT.getArticleMetaData(page, quantity)
    .then((response) => res.status(200).json(response));
  next();
});

router.get('/:source', async (req, res, next) => {
  const { page } = req.query;
  const { source } = req.params;
  let { quantity } = req.query;
  const sourceMap = new Map([
    ['nyt', controller.NYT],
  ]);
  if (isNaN(quantity)) {
    res.status(400).send('Quantity must be an integer.');
  } else if (sourceMap.has(source)) {
    quantity = parseInt(quantity, 10);
    await sourceMap.get(source).getArticleMetaData(page, quantity)
      .then((response) => res.status(200).json(response));
  } else {
    res.status(400).json({
      message: 'Unsupported source. Please send only one of the following sources',
      sources: [...sourceMap.keys()],
    });
  }
  next();
});

export default router;
