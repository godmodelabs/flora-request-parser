'use strict';

const parse = require('../select-parser').parse;

/**
 * Parse "select" options.
 *
 * @param {string} input
 * @param {Object} options
 * @param {boolean} options.enableDepends
 * @return {Object}
 */
module.exports = function selectParser(input, options) {
    return parse(input, options);
};
