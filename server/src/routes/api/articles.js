import express from 'express';

import Controller from '../../controller';

const router = express.Router();
const controller = new Controller();

/**
 * get a given number of articles by page and/or news source
 *
 */
router.get('/', controller.articles.getArticlesMetaData);

export default router;
