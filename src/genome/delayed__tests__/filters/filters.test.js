/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import {
  BpxVariantArray,
  BpxVariantClass,
  BpxVariantMap,
  Chaparral,
  Variants
} from '../../../index.js'

test('VariantMap accessed from index.js', () => {
  const map = new Variants.VariantMap()
  expect(map instanceof Map).toEqual(true)
  expect(map instanceof Variants.VariantMap).toEqual(true)
  expect(map.has('Option')).toEqual(true)
  expect(map.has('Load')).toEqual(true)
})

test('BpxVariants classes locally defined', () => {
  class AirTemperature extends Variants.Quantity {
    constructor () {
      super(Variants.Uom.Temperature)
    }
  }
  const air = new AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])
  expect(Chaparral.fuelTypes()).toEqual(['chamise', 'mixedBrush'])

  class ChaparralTypeOption extends Variants.Option {
    constructor () {
      super(Chaparral.Types)
    }
  }
  const opt = new ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('BpxVariants accessed from BpxVariants.js', () => {
  const air = new BpxVariantClass.AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])

  const opt = new BpxVariantClass.ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('Standard VariantMap', () => {
  expect(Variants.VariantArray instanceof Array).toEqual(true)
  const map = new Variants.VariantMap()
  expect(map instanceof Map).toEqual(true)
  expect(map.has('Arc')).toEqual(true)
  expect(map.has('Option')).toEqual(true)
})

test('Bpx VariantMap', () => {
  expect(BpxVariantArray instanceof Array).toEqual(true)
  const map = new BpxVariantMap()
  expect(map instanceof Map).toEqual(true)
  expect(map.has('Arc')).toEqual(true)
  expect(map.has('Option')).toEqual(true)
})
