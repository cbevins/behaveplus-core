import { Quantity, Area, Distance, Energy, Time } from './index.js'
import * as Parse from './UomHelper.js'

const distanceKeys = ['ft', 'ch', 'in', 'mi', 'yd', 'm', 'cm', 'km']

test('0: Exception tests', () => {
  expect(() => Parse.baseAsUom2(1, 'onePart', Distance, Time)).toThrow(
    "Expected a 2-dimensional Uom name, but got 'onePart'"
  )
  expect(() => Parse.baseFromUom2(1, 'onePart', Distance, Time)).toThrow()
  expect(() => Parse.baseAsUom3(1, 'onePart', Energy, Area, Time)).toThrow()
  expect(() =>
    Parse.baseAsUom3(1, 'onePart/twoPart', Energy, Area, Time)
  ).toThrow()
  expect(() => Parse.baseFromUom3(1, 'onePart', Energy, Area, Time)).toThrow()
  expect(() =>
    Parse.baseFromUom3(1, 'onePart/twoPart', Energy, Area, Time)
  ).toThrow()
})

test('1: new Quantity() default constructor', () => {
  const v = new Quantity(Distance)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Distance')
  expect(v.uomBase()).toEqual('ft')
  expect(v.uomKeys()).toEqual(distanceKeys)
  expect(v.displayString(123)).toEqual('123.00 ft')
  expect(v._specs._defaultValue).toEqual(0)
  expect(v._specs._minimumValue).toEqual(0)
  expect(v._specs._maximumValue).toEqual(Number.MAX_VALUE)
})

test('2: new Quantity() custom constructor', () => {
  const v = new Quantity(Distance, 6, 100)
  expect(v.defaultValue()).toEqual(6)
  expect(v._specs._defaultValue).toEqual(6)
  expect(v._specs._minimumValue).toEqual(0)
  expect(v._specs._maximumValue).toEqual(100)
})

test('3: new Quantity() Errors', () => {
  expect(() => new Quantity()).toThrow()
  expect(() => new Quantity({})).toThrow()
  expect(() => new Quantity(1)).toThrow()
  expect(() => new Quantity('aString')).toThrow()
  expect(() => new Quantity(null)).toThrow()
  expect(() => new Quantity(Distance, 'aString')).toThrow()
  expect(() => new Quantity(Distance, 1, 'aString')).toThrow()
  expect(() => new Quantity(Distance, -1, 999)).toThrow()
  expect(() => new Quantity(Distance, 100, 1, 10)).toThrow()

  const v = new Quantity(Distance)
  expect(() => v.baseAsUom(1, 'junk')).toThrow()
  expect(() => v.baseFromUom(1, 'junk')).toThrow()
  expect(() => v.convert(1, 'junk', 'm')).toThrow()
  expect(() => v.convert(1, 'm', 'junk')).toThrow()
  expect(() => v.convert(1, 'ft', 'junk')).toThrow()
  expect(() => v.setDisplayUnits('junk')).toThrow()
})

test('4: Quantity validators', () => {
  const v = new Quantity(Distance, 1, 10)
  expect(v._validator.isNumeric(1)).toEqual(true)
  expect(v._validator.isNumeric('aString')).toEqual(false)
  expect(v._validator.minimumValue(0)).toEqual(true)
  expect(v._validator.minimumValue(1)).toEqual(true)
  expect(v._validator.minimumValue(11)).toEqual(true)
  expect(v._validator.maximumValue(0)).toEqual(true)
  expect(v._validator.maximumValue(1)).toEqual(true)
  expect(v._validator.maximumValue(11)).toEqual(false)

  expect(v.isValid(5)).toEqual({ pass: true, value: 5, fails: 'none' })
  expect(v.isValid('x')).toEqual({
    pass: false,
    value: 'x',
    fails: 'isNumeric'
  })
  expect(v.isValid(-1)).toEqual({
    pass: false,
    value: -1,
    fails: 'minimumValue'
  })
  expect(v.isValid(20)).toEqual({
    pass: false,
    value: 20,
    fails: 'maximumValue'
  })
})

test('5: Quantity converters', () => {
  const v = new Quantity(Distance)
  expect(v.baseAsUom(1, 'm')).toEqual(0.3048)
  expect(v.baseAsUom(1, 'ft')).toEqual(1)
  expect(v.baseFromUom(1, 'ch')).toEqual(66)
  expect(v.baseFromUom(1, 'ft')).toEqual(1)
  expect(v.convert(1, 'mi', 'in')).toEqual(5280 * 12)
  expect(v.convert(1, 'ft', 'in')).toEqual(12)
  expect(v.convert(1, 'base', 'in')).toEqual(12)
  expect(v.convert(1, 'in', 'ft')).toEqual(1 / 12)
  expect(v.convert(1, 'in', 'base')).toEqual(1 / 12)
})

test('5: Quantity displayAmount(), displayUnits(), displayString()', () => {
  const v = new Quantity(Distance)
  expect(v.displayAmount(123.45678)).toEqual('123.46')
  v.setDisplayFixed(3)
  expect(v.displayAmount(123.45678)).toEqual('123.457')

  v.setDisplayUnits('m')
  expect(v.displayAmount(1)).toEqual('0.305')
  v.setDisplayFixed(4)
  expect(v.displayAmount(1)).toEqual('0.3048')
  expect(v.displayString(1)).toEqual('0.3048 m')
})
