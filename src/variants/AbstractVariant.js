/**
 * @file class AbstractVariant
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 * #coverage-20200506
 */

/**
 * AbstractVariant is the abstract base class of all other, more specialized, Variants.
 *
 * A Variant is a *specification* for a Node value.
 * Variant does not actually hold a value itself, rather specifications for:
 * - the *type* of value held by a Node,
 * - all input filters, validators, and validation specs to be applied to a Node's value, and
 * - all display transformers, converters, and decorators for a Node's value.
 */
export class AbstractVariant {
  constructor (defaultValue = null) {
    this._display = {}
    this._specs = {
      _defaultValue: defaultValue
    }
    this._validator = []
  }

  defaultValue () {
    return this._specs._defaultValue
  }

  displayString (value) {
    return value
  }

  isValid (value) {
    for (const [key, func] of Object.entries(this._validator)) {
      if (!func(value)) {
        return { pass: false, value: value, fails: key }
      }
    }
    return { pass: true, value: value, fails: 'none' }
  }
}
