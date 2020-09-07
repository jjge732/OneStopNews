/**
 * Normalize a port into a number, string, or false.
 */

/**
 * @param {number} val - the port at which the app will be available
 * @returns {number} a number representing the port on which the app is available
 *  or false if val is less than 0 or NaN
 */
export default function normalizePort(val) {
  const port = parseInt(val, 10);

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
