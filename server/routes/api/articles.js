import express from 'express';

import Controller from '../../controller';

const router = express.Router();
const controller = new Controller();

/* GET articles listing. */
router.get('/', async (req, res, next) => {
  const { page } = req.query;
  let { quantity } = req.query;
  if (typeof (quantity) !== 'number') {
    quantity = 1;
  }
  await controller.NYT.getArticleMetaData(page, quantity)
    .then((response) => res.json(response));
  next();
});

router.get('/:source', async (req, res, next) => {
  const { page } = req.query;
  let { quantity } = req.query;
  const sourceMap = {
    nyt: controller.NYT,
  };
  if (typeof (quantity) !== 'number') {
    quantity = 1;
  }
  await sourceMap[req.params.source].getArticleMetaData(page, quantity)
    .then((response) => res.json(response));
  next();
});

export default router;
