/**
 * @file Boolean class
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 * #coverage-20200506
 */
import { AbstractVariant } from './AbstractVariant.js'

/**
 * Boolean is a Variant whose value is a Javascript boolean primitive,
 * and whose display may be decorated with strings representing its
 * 'true' and 'false' state.
 */
export class Bool extends AbstractVariant {
  constructor (
    defaultValue = false,
    trueString = 'true',
    falseString = 'false'
  ) {
    if (typeof defaultValue !== 'boolean') {
      throw new Error(
        `new Variant.Boolean(${defaultValue}) requires the 'defaultValue' argument to be a 'boolean'`
      )
    } else if (typeof trueString !== 'string') {
      throw new Error(
        `new Variant.Boolean(${defaultValue}, trueString) requires the 'trueString' argument to be a 'string'`
      )
    } else if (typeof falseString !== 'string') {
      throw new Error(
        `new Variant.Boolean(${defaultValue}, trueString, falseString) requires the 'falseString' argument to be a 'string'`
      )
    }
    super(defaultValue)
    this._specs._trueString = trueString
    this._specs._falseString = falseString
    this._validator.isBoolean = value => typeof value === 'boolean'
  }

  displayString (value) {
    return value ? this._specs._trueString : this._specs._falseString
  }
}
