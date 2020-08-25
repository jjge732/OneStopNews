import express from 'express';

import api from './api';

const router = express.Router();

/*
* GET home page.
* @param
*
*/
router.get('/', (req, res) => {
  res.status(200).render('index', { title: 'Express' });
});

router.use('/api/v1', api);

export default router;
