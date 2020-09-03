/** Express router for root route
 *
 * @module router
 * @requires express
 */

/**
 * express module
 *
 * @constant
 */
import express from 'express';

import api from './api';

/**
 * Express router to mount all functions
 *
 * @type {object}
 * @constant
 */
const router = express.Router();

router.use('/api/v1', api);

export default router;
