/**
 * Defines a Variant Map containing the basic Variant types and quantity units-of-measure.
 *
 * This Map is likely merged with specialized Variant maps
 */
import * as Uom from './Uom.js'
import { Blob } from './Blob.js'
import { Bool } from './Bool.js'
import { Config } from './Config.js'
import { Count, Index } from './Count.js'
import { Float } from './Float.js'
import { Integer } from './Integer.js'
import { Numeric } from './Numeric.js'
import { Option } from './Option.js'
import { Quantity } from './Quantity.js'
import { Text } from './Text.js'

export const VariantArray = [
  ['Blob', new Blob()],
  ['Bool', new Bool()],
  ['Config', new Config(['configA', 'configB'])],
  ['Count', new Count()],
  ['Float', new Float()],
  ['Index', new Index()],
  ['Integer', new Integer()],
  ['Numeric', new Numeric()],
  ['Option', new Option(['optionA', 'optionB'])],
  ['Text', new Text()],

  // @todo Put all 'Quantity' Uoms here
  ['Arc', new Quantity(Uom.Arc)],
  ['Distance', new Quantity(Uom.Distance)],
  ['Energy', new Quantity(Uom.Energy)],
  ['Mass', new Quantity(Uom.Mass)],
  ['Temperature', new Quantity(Uom.Temperature)],
  ['Time', new Quantity(Uom.Time)],

  ['Area', new Quantity(Uom.Area)], // ft2
  ['Hertz', new Quantity(Uom.Hertz)], // 1/min
  ['Fraction', new Quantity(Uom.Fraction)],
  ['Ratio', new Quantity(Uom.Ratio)],
  ['Volume', new Quantity(Uom.Volume)], // ft3
  ['Years', new Quantity(Uom.Years)],

  ['Density', new Quantity(Uom.Density)], // lb/ft3
  ['HeatContent', new Quantity(Uom.HeatContent)], // btu/lb
  ['HeatDensity', new Quantity(Uom.HeatDensity)], // btu/ft3
  ['HeatLoad', new Quantity(Uom.HeatLoad)], // btu/ft2
  ['Load', new Quantity(Uom.Load)], // lb/ft2
  ['Power', new Quantity(Uom.Power)], // btu/min
  ['Savr', new Quantity(Uom.Savr)], // ft2/ft3
  ['Velocity', new Quantity(Uom.Velocity)] // ft/min
]

export class VariantMap extends Map {
  constructor () {
    super(VariantArray)
  }
}
