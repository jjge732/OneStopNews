import express from 'express';

import Controller from '../../controller';

const router = express.Router();
const controller = new Controller();

/* GET articles listing. */
router.get('/', async function(req, res, next) {
  let { page, quantity } = req.query;
  if (typeof(quantity) != "number") {
    quantity = 1;
  }
  await controller.NYT.getArticleMetaData(page, quantity).then(response => res.json(response));
});

router.get('/:source', async function(req, res, next) {
  let { page, quantity } = req.query;
  let sourceMap = {
    "nyt": controller.NYT
  }
  if (typeof(quantity) != "number") {
    quantity = 1;
  }
  await sourceMap[req.params.source].getArticleMetaData(page, quantity).then(response => res.json(response));
});

export default router;
