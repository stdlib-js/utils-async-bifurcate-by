/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var indexOf = require( '@stdlib/utils-index-of' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var returns = [ 'values', 'indices', '*' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection
* @param {string} [options.returns] - output format
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'thisArg': {},
*     'series': false,
*     'limit': 10,
*     'returns': '*'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'thisArg' ) ) {
		opts.thisArg = options.thisArg;
	}
	if ( hasOwnProp( options, 'series' ) ) {
		opts.series = options.series;
		if ( !isBoolean( opts.series ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'series', opts.series ) );
		}
	}
	if ( hasOwnProp( options, 'limit' ) ) {
		opts.limit = options.limit;
		if ( !isPositiveInteger( opts.limit ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a positive integer. Option: `%s`.', 'limit', opts.limit ) );
		}
	}
	if ( hasOwnProp( options, 'returns' ) ) {
		opts.returns = options.returns;
		if ( indexOf( returns, opts.returns ) === -1 ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'returns', returns.join( '", "' ), opts.returns ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
