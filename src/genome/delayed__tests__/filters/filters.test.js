/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import {
  BpxFilterArray,
  BpxFilterClass,
  BpxFilterMap,
  Chaparral,
  Filters
} from '../../../index.js'

test('FilterMap accessed from index.js', () => {
  const map = new Filters.FilterMap()
  expect(map instanceof Map).toEqual(true)
  expect(map instanceof Filters.FilterMap).toEqual(true)
  expect(map.has('Option')).toEqual(true)
  expect(map.has('Load')).toEqual(true)
})

test('BpxFilters classes locally defined', () => {
  class AirTemperature extends Filters.Quantity {
    constructor () {
      super(Filters.Uom.Temperature)
    }
  }
  const air = new AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])
  expect(Chaparral.fuelTypes()).toEqual(['chamise', 'mixedBrush'])

  class ChaparralTypeOption extends Filters.Option {
    constructor () {
      super(Chaparral.Types)
    }
  }
  const opt = new ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('BpxFilters accessed from BpxFilters.js', () => {
  const air = new BpxFilterClass.AirTemperature()
  expect(air.uomName()).toEqual('Temperature')

  expect(Chaparral.Types).toEqual(['chamise', 'mixedBrush'])

  const opt = new BpxFilterClass.ChaparralTypeOption()
  expect(opt.options()).toEqual(['chamise', 'mixedBrush'])
})

test('Standard FilterMap', () => {
  expect(Filters.FilterArray instanceof Array).toEqual(true)
  const map = new Filters.FilterMap()
  expect(map instanceof Map).toEqual(true)
  expect(map.has('Arc')).toEqual(true)
  expect(map.has('Option')).toEqual(true)
})

test('Bpx FilterMap', () => {
  expect(BpxFilterArray instanceof Array).toEqual(true)
  const map = new BpxFilterMap()
  expect(map instanceof Map).toEqual(true)
  expect(map.has('Arc')).toEqual(true)
  expect(map.has('Option')).toEqual(true)
})
