/**
 * Gets the properties of each axis
 *
 * @export
 * @param {String} x the lookup property of the X-axis
 * @param {String} y the lookup property of the Y-axis
 * @returns {Array} the X and Y values
 */
export function getAxisValues(x, y) {
  return ([
    (data) => data[x],
    (data) => data[y]
  ])
}

