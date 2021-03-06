/**
 * @file Float class
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 * #coverage-20200506
 */
import { Numeric } from './Numeric.js'
/**
 * Float is a Numeric Variant whose value may be a floating point or integer number,
 * and whose display value may be
 * - a fixed number of decimals,
 * - a fixed precision, or
 * - an exponential number with a fixed number of decimal digits.
 */
export class Float extends Numeric {
  constructor (
    defaultValue = 0,
    minValue = 1 - Number.MAX_VALUE,
    maxValue = Number.MAX_VALUE
  ) {
    super(defaultValue, minValue, maxValue)
    this._display._mode = 'fixed'
    this._display._decimals = 2
  }

  setDisplayExponential (decimals) {
    this._display._mode = 'exponential'
    this._display._decimals = decimals
  }

  setDisplayFixed (decimals) {
    this._display._mode = 'fixed'
    this._display._decimals = decimals
  }

  setDisplayPrecision (decimals) {
    this._display._mode = 'precision'
    this._display._decimals = decimals
  }

  displayString (value) {
    return this.displayValue(value)
  }

  displayValue (value) {
    if (this._display._mode === 'precision') {
      return value.toPrecision(this._display._decimals)
    }
    if (this._display._mode === 'exponential') {
      return value.toExponential(this._display._decimals)
    }
    return value.toFixed(this._display._decimals)
  }
}
