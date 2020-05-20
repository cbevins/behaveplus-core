import { BpxGenome } from '../BpxGenome.js'
import * as Config from '../BpxConfigOptions.js'
import { BpxVariantMap } from '../BpxVariantMap.js'

test('BpxConfigOptions', () => {
  expect(Config.Module.length).toEqual(10)
  expect(Config.ChaparralTotalLoad.length).toEqual(2)
  expect(Config.CuredHerbFraction.length).toEqual(2)
  expect(Config.PrimaryFuel.length).toEqual(5)
  expect(Config.SecondaryFuel.length).toEqual(6)
  expect(Config.MoistureContent.length).toEqual(4)
  expect(Config.WindSpeedAdjustmentFactor.length).toEqual(2)
  expect(Config.SlopeSteepness.length).toEqual(3)
  expect(Config.WindDirection.length).toEqual(3)
  expect(Config.WindSpeed.length).toEqual(3)
  expect(Config.FirelineIntensity.length).toEqual(2)
  expect(Config.FireLengthToWidthRatio.length).toEqual(2)
  expect(Config.EffectiveWindSpeedLimit.length).toEqual(2)
  expect(Config.FireWeightingMethod.length).toEqual(3)
  expect(Config.FireVector.length).toEqual(3)
})

test('BpxGenome', () => {
  expect(BpxGenome instanceof Array).toEqual(true)
  expect(BpxGenome.length > 1200).toEqual(true)
})

test('BpxVariantMap', () => {
  const v = new BpxVariantMap()
  expect(v instanceof Map).toEqual(true)
})
