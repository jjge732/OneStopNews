import debugLib from 'debug';

const debug = debugLib('OneStopNews:server');

export default class ServerConfig {
  /**
   * Event listener for HTTP server "error" event.
   */

  /**
   * @param {object} error - The error from the HTTP request
   * @param {number} port - the port on which the app is available
   */
  static onError(error, port) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  /**
   * @param {object} server - The server object that holds running application information
   */
  static onListening(server) {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
  }
}
