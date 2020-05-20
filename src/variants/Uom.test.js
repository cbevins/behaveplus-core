import { baseAsUom2, baseFromUom2, baseAsUom3, baseFromUom3 } from './Uom.js'
import { Arc } from './UomArc.js'
import { Fraction, Ratio } from './UomDimensionless.js'
import { Area, Distance, Savr, Velocity, Volume } from './UomDistance.js'
import {
  Energy,
  HeatContent,
  HeatDensity,
  HeatFlux,
  HeatIntensity,
  HeatLoad,
  Power
} from './UomEnergy.js'
import { Density, Load, Mass } from './UomMass.js'
import { Temperature } from './UomTemperature.js'
import { Hertz, Time, Years } from './UomTime.js'
import { Quantity } from './Quantity.js'

test('0: Uom Errors', () => {
  const v = new Quantity(Arc)
  expect(() => v.baseAsUom(1, 'degrees')).toThrow()

  expect(() => baseAsUom2(1, 'ft', Distance, Time)).toThrow()
  expect(() => baseFromUom2(1, 'ft', Distance, Time)).toThrow()

  expect(() => baseAsUom3(1, 'btu', Distance, Time)).toThrow()
  expect(() => baseAsUom3(1, 'btu/ft', Distance, Time)).toThrow()
  expect(() => baseFromUom3(1, 'btu', Distance, Time)).toThrow()
  expect(() => baseFromUom3(1, 'btu/ft', Distance, Time)).toThrow()
})

test('1: Uom Arc', () => {
  const v = new Quantity(Arc)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Arc')
  expect(v.uomBase()).toEqual('ratio')
  expect(v.baseAsUom(1, 'ratio')).toEqual(1)
  expect(v.baseAsUom(1, 'percent')).toEqual(100)
  expect(v.baseAsUom(1, 'deg')).toEqual(45)
  expect(v.baseFromUom(2, 'ratio')).toEqual(2)
  expect(v.baseFromUom(100, 'percent')).toEqual(1)
  expect(v.baseFromUom(45, 'deg')).toBeCloseTo(1, 12)
  expect(v.convert(1, 'base', 'ratio')).toEqual(1)
  expect(v.convert(1, 'ratio', 'base')).toEqual(1)
  expect(v.baseFromUom(-360, 'deg')).toBeCloseTo(0, 12)
  expect(v.baseFromUom(405, 'deg')).toBeCloseTo(1, 12)
  expect(v.baseFromUom(-405, 'deg')).toBeCloseTo(1, 12)
})

test('2: Uom Distance', () => {
  const v = new Quantity(Distance)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Distance')
  expect(v.uomBase()).toEqual('ft')
  expect(v.uomKeys()).toEqual(['ft', 'ch', 'in', 'mi', 'yd', 'm', 'cm', 'km'])
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

test('3: Uom Density', () => {
  const v = new Quantity(Density)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Mass/Volume')
  expect(v.uomBase()).toEqual('lb/ft3')
  expect(v.baseAsUom(1, 'lb/ft3')).toEqual(1)
  expect(v.baseFromUom(2, 'lb/ft3')).toEqual(2)
  expect(v.convert(1, 'base', 'lb/ft3')).toEqual(1)
  expect(v.convert(1, 'lb/ft3', 'base')).toEqual(1)
})

test('4: Uom HeatFlux', () => {
  const v = new Quantity(HeatFlux)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Energy/Area/Time')
  expect(v.uomBase()).toEqual('btu/ft2/min')
  expect(v.baseAsUom(1, 'btu/ft2/min')).toEqual(1)
  expect(v.baseFromUom(2, 'btu/ft2/min')).toEqual(2)
  expect(v.convert(1, 'base', 'btu/ft2/min')).toEqual(1)
  expect(v.convert(1, 'btu/ft2/min', 'base')).toEqual(1)
})

test('5: Uom Energy tests', () => {
  const v = new Quantity(Energy)
  expect(v.baseAsUom(1, 'btu')).toEqual(1)
  expect(v.baseAsUom(1, 'J')).toEqual(1055.05585262) // based on Btu_it
  expect(v.baseAsUom(1, 'kJ')).toEqual(1.05505585262) // based on Btu_it
  expect(v.baseAsUom(1, 'ft-lb')).toEqual(778.1692622659649)

  expect(v.baseFromUom(1, 'btu')).toEqual(1)
  expect(v.baseFromUom(1, 'J')).toEqual(1 / 1055.05585262) // based on Btu_it
  expect(v.baseFromUom(1, 'kJ')).toEqual(1 / 1.05505585262) // based on Btu_it
  expect(v.baseFromUom(1, 'ft-lb')).toEqual(1 / 778.1692622659649)
})

test('6: Uom Power tests', () => {
  const v = new Quantity(Power)
  expect(v.baseAsUom(1, 'btu/min')).toEqual(1)
  expect(v.baseAsUom(1, 'W')).toEqual(17.5725)
  expect(v.baseAsUom(1, 'J/s')).toEqual(17.584264210333334)

  expect(v.baseFromUom(1, 'btu/min')).toEqual(1)
  expect(v.baseFromUom(17.5725, 'W')).toEqual(1)
  expect(v.baseFromUom(17.584264210333334, 'J/s')).toEqual(1)
})

test('7: Uom Temperature tests', () => {
  const v = new Quantity(Temperature)
  expect(v.baseAsUom(50, 'F')).toEqual(50)
  expect(v.baseAsUom(50, 'C')).toEqual(10)
  expect(v.baseAsUom(50, 'K')).toEqual(10 + 459.67)

  expect(v.baseFromUom(10, 'F')).toEqual(10)
  expect(v.baseFromUom(10, 'C')).toEqual(50)
  expect(v.baseFromUom(469.67, 'K')).toEqual(50)
})

test('7: Uom Time tests', () => {
  const v = new Quantity(Time)
  expect(v.baseFromUom(1, 's')).toEqual(1 / 60)
  expect(v.baseFromUom(60, 's')).toEqual(1)
  expect(v.baseFromUom(3600, 's')).toEqual(60)
  expect(v.baseFromUom(1, 'min')).toEqual(1)
  expect(v.baseFromUom(1, 'h')).toEqual(60)
  expect(v.baseFromUom(1, 'd')).toEqual(1440)

  expect(v.baseAsUom(1, 's')).toEqual(60)
  expect(v.baseAsUom(1, 'min')).toEqual(1)
  expect(v.baseAsUom(1, 'h')).toEqual(1 / 60)
  expect(v.baseAsUom(1, 'd')).toEqual(1 / 1440)
  expect(v.baseAsUom(1, 'y')).toEqual(1 / (1440 * 365))

  const y = new Quantity(Years)
  expect(y.baseFromUom(1, 'y')).toEqual(1)
  expect(y.baseAsUom(1, 'y')).toEqual(1)

  const h = new Quantity(Hertz)
  expect(h.baseFromUom(1, '1/min')).toEqual(1)
  expect(h.baseFromUom(1, '1/s')).toEqual(1 / 60)
  expect(h.baseAsUom(1, '1/min')).toEqual(1)
  expect(h.baseAsUom(1, '1/s')).toEqual(60)
})

test('8: Uom Dimensionless tests', () => {
  const f = new Quantity(Fraction)
  expect(f.baseAsUom(1, 'ratio')).toEqual(1)
  expect(f.baseAsUom(1, 'percent')).toEqual(100)
  expect(f.baseFromUom(1, 'ratio')).toEqual(1)
  expect(f.baseFromUom(100, 'percent')).toEqual(1)

  const r = new Quantity(Ratio)
  expect(r.baseAsUom(1, 'ratio')).toEqual(1)
  expect(r.baseAsUom(1, 'percent')).toEqual(100)
  expect(r.baseFromUom(1, 'ratio')).toEqual(1)
  expect(r.baseFromUom(100, 'percent')).toEqual(1)
})

test('9: Uom Mass tests', () => {
  const f = new Quantity(Mass)
  expect(f.baseAsUom(1, 'lb')).toEqual(1)
  expect(f.baseAsUom(1, 'oz')).toEqual(16)
  expect(f.baseAsUom(2000, 'ton')).toEqual(1)
  expect(f.baseAsUom(1, 'kg')).toEqual(0.45359237)
  expect(f.baseAsUom(1, 'T')).toEqual(1 / 2204.622621848776)

  expect(f.baseFromUom(1, 'lb')).toEqual(1)
  expect(f.baseFromUom(16, 'oz')).toEqual(1)
  expect(f.baseFromUom(1, 'ton')).toEqual(2000)
  expect(f.baseFromUom(1, 'kg')).toBeCloseTo(2.204622621848776, 12)
  expect(f.baseFromUom(1, 'T')).toBeCloseTo(2204.622621848776, 12)

  const l = new Quantity(Load)
  expect(l.baseAsUom(1, 'lb/ft2')).toEqual(1)
  expect(l.baseAsUom(1, 'ton/ac')).toEqual(21.78)
  expect(l.baseFromUom(1, 'lb/ft2')).toEqual(1)

  expect(l.baseFromUom(1, 'ton/ac')).toBeCloseTo(0.045913498876290065, 6)
  expect(l.baseAsUom(1, 'ton/ac')).toBeCloseTo(21.78)
})

test('10: Uom Area', () => {
  const v = new Quantity(Area)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Distance^2')
  expect(v.uomBase()).toEqual('ft2')
  expect(v.baseAsUom(1, 'm2')).toEqual(0.3048 ** 2)
  expect(v.baseAsUom(1, 'ft2')).toEqual(1)
  expect(v.baseFromUom(1, 'ac')).toEqual(43560)
  expect(v.baseFromUom(1, 'ha')).toEqual(107639)
  expect(v.baseFromUom(1, 'ft2')).toEqual(1)
})

test('11: Uom Volume', () => {
  const v = new Quantity(Volume)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Distance^3')
  expect(v.uomBase()).toEqual('ft3')
  expect(v.baseAsUom(1, 'm3')).toEqual(0.3048 ** 3)
  expect(v.baseAsUom(1, 'ft3')).toEqual(1)
  expect(v.baseFromUom(1, 'ft3')).toEqual(1)
  expect(v.baseFromUom(0.3048 ** 3, 'm3')).toEqual(1)
})

test('12: Uom Savr', () => {
  const v = new Quantity(Savr)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Area/Volume')
  expect(v.uomBase()).toEqual('ft2/ft3')
  expect(v.baseAsUom(1, 'ft2/ft3')).toEqual(1)
  expect(v.baseAsUom(1, 'm2/m3')).toEqual(1 / 0.3048)
  expect(v.baseFromUom(1, 'ft2/ft3')).toEqual(1)
  expect(v.baseFromUom(3.28084, 'm2/m3')).toBeCloseTo(1, 6)
})

test('13: Uom Velocity', () => {
  const v = new Quantity(Velocity)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Distance/Time')
  expect(v.uomBase()).toEqual('ft/min')
  expect(v.baseAsUom(1, 'ft/min')).toEqual(1)
  expect(v.baseAsUom(1, 'ft/s')).toEqual(1 / 60)
  expect(v.baseAsUom(1, 'm/min')).toEqual(0.3048)
  expect(v.baseFromUom(1, 'ft/min')).toEqual(1)
  expect(v.baseFromUom(0.3048, 'm/min')).toBeCloseTo(1, 6)
})

test('14: Uom HeatLoad', () => {
  const v = new Quantity(HeatLoad)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Energy/Area')
  expect(v.uomBase()).toEqual('btu/ft2')
  expect(v.baseAsUom(1, 'btu/ft2')).toEqual(1)
  expect(v.baseFromUom(2, 'btu/ft2')).toEqual(2)
  expect(v.convert(1, 'base', 'btu/ft2')).toEqual(1)
  expect(v.convert(1, 'btu/ft2', 'base')).toEqual(1)
})

test('15: Uom HeatIntensity', () => {
  const v = new Quantity(HeatIntensity)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Energy/Distance/Time')
  expect(v.uomBase()).toEqual('btu/ft/s')
  expect(v.baseAsUom(1, 'btu/ft/s')).toEqual(1)
  expect(v.baseFromUom(2, 'btu/ft/s')).toEqual(2)
  expect(v.convert(1, 'base', 'btu/ft/s')).toEqual(1)
  expect(v.convert(1, 'btu/ft/s', 'base')).toEqual(1)
})

test('16: Uom HeatContent', () => {
  const v = new Quantity(HeatContent)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Energy/Mass')
  expect(v.uomBase()).toEqual('btu/lb')
  expect(v.baseAsUom(1, 'btu/lb')).toEqual(1)
  expect(v.baseFromUom(2, 'btu/lb')).toEqual(2)
  expect(v.convert(1, 'base', 'btu/lb')).toEqual(1)
  expect(v.convert(1, 'btu/lb', 'base')).toEqual(1)
})

test('17: Uom HeatDensity', () => {
  const v = new Quantity(HeatDensity)
  expect(v.defaultValue()).toEqual(0)
  expect(v.uomName()).toEqual('Energy/Volume')
  expect(v.uomBase()).toEqual('btu/ft3')
  expect(v.baseAsUom(1, 'btu/ft3')).toEqual(1)
  expect(v.baseFromUom(2, 'btu/ft3')).toEqual(2)
  expect(v.convert(1, 'base', 'btu/ft3')).toEqual(1)
  expect(v.convert(1, 'btu/ft3', 'base')).toEqual(1)
})
