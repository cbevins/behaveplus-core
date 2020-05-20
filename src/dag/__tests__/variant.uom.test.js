/* eslint-disable no-undef, no-prototype-builtins */
import * as Variant from '../../variants/index.js'

test('Arc object', () => {
  expect(Variant.Arc.name).toEqual('Arc')
  expect(Variant.Arc.base).toEqual('ratio')

  expect(Variant.Arc.baseFromUom(1, 'ratio')).toEqual(1)
  expect(Variant.Arc.baseAsUom(1, 'ratio')).toEqual(1)

  expect(Variant.Arc.baseFromUom(45, 'deg')).toBeCloseTo(1, 12)
  expect(Variant.Arc.baseAsUom(1, 'deg')).toEqual(45)
})

test('Area object', () => {
  expect(Variant.Area.name).toEqual('Distance^2')
  expect(Variant.Area.base).toEqual('ft2')

  expect(Variant.Area.baseFromUom(1, 'ft2')).toEqual(1)
  expect(Variant.Area.baseAsUom(1, 'ft2')).toEqual(1)

  expect(Variant.Area.baseFromUom(144, 'in2')).toEqual(1)
  expect(Variant.Area.baseAsUom(1, 'in2')).toEqual(144)

  expect(Variant.Area.baseFromUom(1, 'ac')).toEqual(43560)
  expect(Variant.Area.baseAsUom(43560, 'ac')).toEqual(1)
})

test('Area instance', () => {
  const area = new Variant.Quantity(Variant.Area)
  expect(area.uomName()).toEqual('Distance^2')
  expect(area.uomBase()).toEqual('ft2')

  expect(area.baseFromUom(1, 'ft2')).toEqual(1)
  expect(area.baseAsUom(1, 'ft2')).toEqual(1)

  expect(area.baseFromUom(144, 'in2')).toEqual(1)
  expect(area.baseAsUom(1, 'in2')).toEqual(144)

  expect(area.baseFromUom(1, 'ac')).toEqual(43560)
  expect(area.baseAsUom(43560, 'ac')).toEqual(1)
})

test('Distance object', () => {
  expect(Variant.Distance.name).toEqual('Distance')
  expect(Variant.Distance.base).toEqual('ft')

  expect(Variant.Distance.baseFromUom(1, 'ft')).toEqual(1)
  expect(Variant.Distance.baseAsUom(1, 'ft')).toEqual(1)

  expect(Variant.Distance.baseFromUom(1, 'ch')).toEqual(66)
  expect(Variant.Distance.baseAsUom(66, 'ch')).toEqual(1)

  expect(Variant.Distance.baseFromUom(12, 'in')).toEqual(1)
  expect(Variant.Distance.baseAsUom(1, 'in')).toEqual(12)

  expect(Variant.Distance.baseFromUom(1, 'mi')).toEqual(5280)
  expect(Variant.Distance.baseAsUom(5280, 'mi')).toEqual(1)

  expect(Variant.Distance.baseFromUom(1, 'yd')).toEqual(3)
  expect(Variant.Distance.baseAsUom(3, 'yd')).toEqual(1)

  expect(Variant.Distance.baseFromUom(1, 'm')).toBeCloseTo(3.2808, 4)
  expect(Variant.Distance.baseAsUom(1, 'm')).toEqual(0.3048)

  expect(Variant.Distance.baseFromUom(1, 'cm')).toBeCloseTo(0.032808, 4)
  expect(Variant.Distance.baseAsUom(1, 'cm')).toEqual(30.48)

  expect(Variant.Distance.baseFromUom(1, 'km')).toBeCloseTo(3280.84, 2)
  expect(Variant.Distance.baseAsUom(1, 'km')).toEqual(0.0003048, 7)
})

test('Load object', () => {
  expect(Variant.Load.name).toEqual('Mass/Area')
  expect(Variant.Load.base).toEqual('lb/ft2')

  expect(Variant.Load.baseFromUom(1, 'lb/ft2')).toEqual(1)
  expect(Variant.Load.baseAsUom(1, 'lb/ft2')).toEqual(1)

  expect(Variant.Load.baseFromUom(1, 'ton/ac')).toEqual(2000 / 43560)
  expect(Variant.Load.baseAsUom(2000 / 43560, 'ton/ac')).toBeCloseTo(1, 9)
})

test('Load instance', () => {
  const load = new Variant.Quantity(Variant.Load)
  expect(load.uomName()).toEqual('Mass/Area')
  expect(load.uomBase()).toEqual('lb/ft2')
  expect(load.uomKeys()).toEqual(['lb/ft2', 'ton/ac', 'kg/m2', 'T/ha'])
  expect(typeof load.baseAsUom).toEqual('function')
  expect(typeof load.baseFromUom).toEqual('function')

  expect(load.baseAsUom(1, 'lb/ft2')).toEqual(1)
  expect(load.baseFromUom(1, 'lb/ft2')).toEqual(1)

  expect(load.baseAsUom(2000 / 43560, 'ton/ac')).toEqual(1)
  expect(load.baseFromUom(1, 'ton/ac')).toEqual(2000 / 43560)

  expect(() => {
    load.baseFromUom(1, 'no/such/units')
  }).toThrow("Quantity 'Mass/Area' has no units-of-measure 'no/such/units'")
})

test('Mass object', () => {
  expect(Variant.Mass.name).toEqual('Mass')
  expect(Variant.Mass.base).toEqual('lb')

  expect(Variant.Mass.baseFromUom(1, 'lb')).toEqual(1)
  expect(Variant.Mass.baseAsUom(1, 'lb')).toEqual(1)

  expect(Variant.Mass.baseFromUom(16, 'oz')).toEqual(1)
  expect(Variant.Mass.baseAsUom(1, 'oz')).toEqual(16)

  expect(Variant.Mass.baseFromUom(1, 'ton')).toEqual(2000)
  expect(Variant.Mass.baseAsUom(2000, 'ton')).toEqual(1)
})

test('Mass Quantity instance', () => {
  const mass = new Variant.Quantity(Variant.Mass)
  expect(mass.uomName()).toEqual('Mass')
  expect(mass.uom().name).toEqual('Mass')
  expect(mass.uomBase()).toEqual('lb')
  expect(mass.uom().base).toEqual('lb')
  expect(typeof mass.baseAsUom).toEqual('function')
  expect(typeof mass.baseFromUom).toEqual('function')
  expect(mass.baseAsUom(2000, 'lb')).toEqual(2000)
  expect(mass.baseFromUom(2000, 'lb')).toEqual(2000)
  expect(mass.baseAsUom(2000, 'ton')).toEqual(1)
  expect(mass.baseFromUom(1, 'ton')).toEqual(2000)
})

test('Mass Quantity conversion', () => {
  const mass = new Variant.Quantity(Variant.Mass)
  expect(mass.convert(2000, 'lb', 'lb')).toEqual(2000)
  expect(mass.convert(2000, 'lb', 'base')).toEqual(2000)
  expect(mass.convert(2000, 'lb', 'ton')).toEqual(1)

  expect(mass.convert(2000, 'base', 'lb')).toEqual(2000)
  expect(mass.convert(2000, 'base', 'base')).toEqual(2000)
  expect(mass.convert(2000, 'base', 'ton')).toEqual(1)

  expect(mass.convert(1, 'ton', 'base')).toEqual(2000)
  expect(mass.convert(1, 'ton', 'lb')).toEqual(2000)
  expect(mass.convert(1, 'ton', 'ton')).toEqual(1)

  expect(() => {
    mass.convert(1, 'ton', 'no/such/units')
  }).toThrow("Quantity 'Mass' has no units-of-measure 'no/such/units'")

  expect(() => {
    mass.convert(1, 'no/such/units', 'ton')
  }).toThrow("Quantity 'Mass' has no units-of-measure 'no/such/units'")

  expect(() => {
    mass.convert(1, 'ton')
  }).toThrow("Quantity 'Mass' has no units-of-measure 'undefined'")

  expect(() => {
    mass.convert(1)
  }).toThrow("Quantity 'Mass' has no units-of-measure 'undefined'")
})

test('Temperature object', () => {
  expect(Variant.Temperature.name).toEqual('Temperature')
  expect(Variant.Temperature.base).toEqual('F')

  expect(Variant.Temperature.baseFromUom(50, 'F')).toEqual(50)
  expect(Variant.Temperature.baseAsUom(50, 'F')).toEqual(50)

  expect(Variant.Temperature.baseFromUom(10, 'C')).toEqual(50)
  expect(Variant.Temperature.baseAsUom(50, 'C')).toEqual(10)
})

test('Time object', () => {
  expect(Variant.Time.name).toEqual('Time')
  expect(Variant.Time.base).toEqual('min')

  expect(Variant.Time.baseFromUom(1, 'min')).toEqual(1)
  expect(Variant.Time.baseAsUom(1, 'min')).toEqual(1)

  expect(Variant.Time.baseFromUom(60, 's')).toEqual(1)
  expect(Variant.Time.baseAsUom(1, 's')).toEqual(60)

  expect(Variant.Time.baseFromUom(1, 'h')).toEqual(60)
  expect(Variant.Time.baseAsUom(60, 'h')).toEqual(1)

  expect(Variant.Time.baseFromUom(1, 'd')).toEqual(60 * 24)
  expect(Variant.Time.baseAsUom(1440, 'd')).toEqual(1)

  expect(Variant.Time.baseFromUom(1, 'y')).toEqual(1440 * 365)
  expect(Variant.Time.baseAsUom(1440 * 365, 'y')).toEqual(1)
})

test('Velocity object', () => {
  expect(Variant.Velocity.name).toEqual('Distance/Time')
  expect(Variant.Velocity.base).toEqual('ft/min')

  expect(Variant.Velocity.baseFromUom(1, 'ft/min')).toEqual(1)
  expect(Variant.Velocity.baseAsUom(1, 'ft/min')).toEqual(1)

  expect(Variant.Velocity.baseFromUom(1, 'mi/h')).toEqual(88)
  expect(Variant.Velocity.baseAsUom(88, 'mi/h')).toEqual(1)

  expect(Variant.Velocity.baseFromUom(1, 'ch/h')).toBeCloseTo(66 / 60, 12)
  expect(Variant.Velocity.baseAsUom(66 / 60, 'ch/h')).toBeCloseTo(1, 12)

  expect(Variant.Velocity.baseFromUom(1, 'm/min')).toBeCloseTo(3.2808, 4)
  expect(Variant.Velocity.baseAsUom(1, 'm/min')).toEqual(0.3048)

  expect(Variant.Velocity.baseFromUom(1, 'km/h')).toBeCloseTo(54.6807, 4)
  expect(Variant.Velocity.baseAsUom(88, 'km/h')).toBeCloseTo(1.60934, 5)
})
