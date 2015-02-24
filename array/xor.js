import baseDifference from '../internal/baseDifference';
import baseUniq from '../internal/baseUniq';
import isArguments from '../lang/isArguments';
import isArray from '../lang/isArray';

/**
 * Creates an array that is the symmetric difference of the provided arrays.
 * See [Wikipedia](https://en.wikipedia.org/wiki/Symmetric_difference) for
 * more details.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of values.
 * @example
 *
 * _.xor([1, 2], [4, 2]);
 * // => [1, 4]
 */
function xor() {
  var index = -1,
      length = arguments.length;

  while (++index < length) {
    var array = arguments[index];
    if (isArray(array) || isArguments(array)) {
      var result = result
        ? baseDifference(result, array).concat(baseDifference(array, result))
        : array;
    }
  }
  return result ? baseUniq(result) : [];
}

export default xor;