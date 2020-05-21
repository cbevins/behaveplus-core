import { BpxVariantArray, BpxVariantMap } from '../../BpxVariantMap.js'
import * as BpxVariant from '../../BpxVariants.js'
import * as Chaparral from '../../../equations/ChaparralFuel.js'
import * as Variant from '../../../variants/index.js'

test('VariantMap accessed from index.js', () => {
  const map = new BpxVariantMap()
  expect(map instanceof Map).toEqual(true)
  expect(map instanceof BpxVariantMap).toEqual(true)
  expect(map.has('Option')).toEqual(true)
  expect(map.has('Load')).toEqual(true)
})

test('BpxVariants classes locally defined', () => {
  class AirTemperature extends Variant.Quantity {
    constructor () {
      super(Variant.Temperature)
    }
  }
  const air = new AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])
  expect(Chaparral.fuelTypes()).toEqual(['chamise', 'mixedBrush'])

  class ChaparralTypeOption extends Variant.Option {
    constructor () {
      super(Chaparral.Types)
    }
  }
  const opt = new ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('BpxVariants accessed from BpxVariant.js', () => {
  const air = new BpxVariant.AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])

  const opt = new BpxVariant.ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('Standard VariantMap', () => {
  expect(Variant.VariantArray instanceof Array).toEqual(true)
  const map = new Variant.VariantMap()
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
