/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import { Root } from '../index.js'
import { MethodMap } from '../../equations/index.js'
import { ConfigMinimalInput } from '../../behaveplus/__tests__/BpxConfigPalette.js'
import { BpxGenome, BpxVariantMap } from '../../behaveplus/index.js'

import * as DagJest from '../../utils/matchers.js'
const sig = DagJest.sig
expect.extend({ sig })

const root = new Root(BpxGenome, BpxVariantMap, MethodMap)
const dag = root.addDag('casewise')

dag.runConfigs(ConfigMinimalInput)
const ros = dag.get('surface.primary.fuel.fire.spreadRate')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')
const deadMoisture = dag.get('site.moisture.dead.category')
const liveMoisture = dag.get('site.moisture.live.category')
const slopeRatio = dag.get('site.slope.steepness.ratio')
const midflameWind = dag.get('site.wind.speed.atMidflame')

test('1: Quantity displayValue()', () => {
  dag.runSelected([[ros, true]])

  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs.length).toEqual(5)
  expect(requiredInputs).toContain(catalogKey)
  expect(requiredInputs).toContain(deadMoisture)
  expect(requiredInputs).toContain(liveMoisture)
  expect(requiredInputs).toContain(slopeRatio)
  expect(requiredInputs).toContain(midflameWind)

  dag.runInputs([
    [catalogKey, ['10']],
    [deadMoisture, [0.05]],
    [liveMoisture, [1]],
    [slopeRatio, [0.25]],
    [midflameWind, [0]]
  ])
  const rosExpected = 1.936618219012
  const chainsPerHour = (rosExpected * 60) / 66 // 1.760562017
  expect(ros.value.current).sig(rosExpected, 9)

  // Default Number display is 2 'decimals'
  expect(ros.displayString()).toEqual('1.94 ft/min')
  expect(ros.displayAmount()).toEqual('1.94')

  // Set the FireSpreadRate Variant display to 4 fixed decimals
  const rosVariant = dag.variant.map.get('FireSpreadRate')
  rosVariant.setDisplayFixed(4)
  expect(ros.displayString()).toEqual('1.9366 ft/min')

  // Set the FireSpreadRate Variant display to 6 exponential decimals
  rosVariant.setDisplayExponential(6)
  expect(ros.displayString()).toEqual('1.936618e+0 ft/min')

  // Set the FireSpreadRate Variant display to 4 precision
  rosVariant.setDisplayPrecision(4)
  expect(ros.displayString()).toEqual('1.937 ft/min')

  // Change display units to ch/h
  rosVariant.setDisplayUnits('ch/h')
  rosVariant.setDisplayFixed(9)
  expect(ros.displayString()).toEqual('1.760562017 ch/h')
  expect(ros.displayRunString(0)).toEqual('1.760562017 ch/h')
  expect(ros.displayAmount()).toEqual('1.760562017')
  expect(ros.displayRunAmount(0)).toEqual('1.760562017')
})
