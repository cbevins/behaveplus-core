/* eslint-disable no-prototype-builtins */
/**
 * @file Quantity class
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 * #coverage-20200506
 */
import { Float } from './Float.js'
import * as Uom from './Uom.js'

/**
 * Quantity if a Float Variant class with a minimum value of 0 and a units-of-measure.
 *
 * In addition to a 'base' units-of-measure, a Quantity has a current display
 * units-of-measure; calling displayString() transforms the base amount to the display amount.
 *
 * Quantity is able to convert between a base units-of-measure and other defined
 * units-of-measure.
 */
export class Quantity extends Float {
  constructor (uom, defaultValue = 0, maxValue = Number.MAX_VALUE) {
    if (typeof uom !== 'object' || !uom.hasOwnProperty('fromBaseInto')) {
      throw new Error(
        `new Variant.Quantity(${uom}) uom argument is not a Uom object`
      )
    }
    super(defaultValue, 0, maxValue)
    this._specs._uom = uom
    this._display._units = uom.base
    // We want Ratio and Fraction to have Quantity-like uom semantics (ratio v percent)
    if (uom === Uom.Fraction) {
      this._specs._maximumValue = 1
    }
  }

  baseAsDisplay (amount) {
    const units = this.ensure(this._display._units)
    return this.uom().baseAsUom(amount, units)
  }

  baseAsUom (amount, intoUom) {
    const units = this.ensure(intoUom)
    return this.uom().baseAsUom(amount, units)
  }

  baseFromUom (amount, fromUom) {
    const units = this.ensure(fromUom)
    return this.uom().baseFromUom(amount, units)
  }

  convert (amount, fromUom, intoUom) {
    return this.baseAsUom(this.baseFromUom(amount, fromUom), intoUom)
  }

  /**
   * Returns a numeric amount that is converted from base value to display value
   * and then transformed with the current fixed/exponential/precision settings.
   * @param {*} baseAmount
   */
  displayAmount (baseAmount) {
    return this.displayValue(this.baseAsDisplay(baseAmount))
  }

  displayString (baseAmount) {
    return `${this.displayAmount(baseAmount)} ${this._display._units}`
  }

  ensure (units) {
    const u = units === 'base' || units === '' ? this.uomBase() : units
    // if (!this.uom().hasOwnProperty('fromBaseInto')) {
    //   throw new Error(`Quantity '${this.uomName()}' has no 'fromBaseInto'`)
    // }
    if (!this.uom().fromBaseInto.hasOwnProperty(u)) {
      throw new Error(
        `Quantity '${this.uomName()}' has no units-of-measure '${units}'`
      )
    }
    return u
  }

  setDisplayUnits (units) {
    this.ensure(units)
    this._display._units = units
  }

  uom () {
    return this._specs._uom
  }

  uomBase () {
    return this._specs._uom.base
  }

  uomKeys () {
    return Object.keys(this._specs._uom.fromBaseInto)
  }

  uomName () {
    return this._specs._uom.name
  }
}
