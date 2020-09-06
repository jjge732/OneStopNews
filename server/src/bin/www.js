#!/usr/bin/env node

/**
 * Module dependencies.
 */

import http from 'http';
import app from '../config';
import normalizePort from '../config/portConfig';
import ServerConfig from '../config/serverConfig';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', ServerConfig.onError.bind(port));
server.on('listening', ServerConfig.onListening.bind(null, server));
