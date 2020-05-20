import { VariantMap } from './index.js'
import { AbstractVariant } from './AbstractVariant'

test('new AbstractVariant() default constructor', () => {
  const v = new AbstractVariant()
  expect(v.defaultValue()).toEqual(null)
})

test('new VariantMap() default constructor', () => {
  const v = new VariantMap()
  expect(v instanceof Map).toEqual(true)
  expect(v.has('Blob')).toEqual(true)
  expect(v.has('Bool')).toEqual(true)
  expect(v.has('Count')).toEqual(true)
  expect(v.has('Float')).toEqual(true)
  expect(v.has('Index')).toEqual(true)
  expect(v.has('Integer')).toEqual(true)
  expect(v.has('Numeric')).toEqual(true)
  expect(v.has('Option')).toEqual(true)
  expect(v.has('Text')).toEqual(true)

  expect(v.has('Arc')).toEqual(true)
  expect(v.has('Distance')).toEqual(true)
  expect(v.has('Energy')).toEqual(true)
  expect(v.has('Mass')).toEqual(true)
  expect(v.has('Temperature')).toEqual(true)
  expect(v.has('Time')).toEqual(true)

  expect(v.has('Area')).toEqual(true)
  expect(v.has('Hertz')).toEqual(true)
  expect(v.has('Fraction')).toEqual(true)
  expect(v.has('Ratio')).toEqual(true)
  expect(v.has('Volume')).toEqual(true)
  expect(v.has('Years')).toEqual(true)

  expect(v.has('Density')).toEqual(true)
  expect(v.has('HeatContent')).toEqual(true)
  expect(v.has('HeatDensity')).toEqual(true)
  expect(v.has('HeatLoad')).toEqual(true)
  expect(v.has('Load')).toEqual(true)
  expect(v.has('Power')).toEqual(true)
  expect(v.has('Savr')).toEqual(true)
  expect(v.has('Velocity')).toEqual(true)
})
