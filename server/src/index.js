#!/usr/bin/env node
'use strict'

/**
 * Module dependencies.
 */

import awsServerlessExpress from 'aws-serverless-express';
import app from './config';

/**
 * Create HTTP server.
 */
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
