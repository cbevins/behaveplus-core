/**
 * @file Tests the Bpx scorch height module DAG configurations
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 */
/* eslint-disable no-unused-vars */
import { BpxDag } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'
import * as SurfaceFire from '../../../equations/SurfaceFire.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = BpxDag('bpxScorchHeight')
dag.runConfigs([
  ['configure.module', 'surfaceFire'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  // NOT AS IMPORTANT
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  [
    'configure.wind.direction',
    ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]
  ],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  [
    'configure.fire.lengthToWidthRatio',
    ['lengthToWidthRatio', 'effectiveWindSpeed'][0]
  ],
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  [
    'configure.fuel.moisture',
    ['individual', 'liveCategory', 'category', 'catalog'][2]
  ],
  [
    'configure.fuel.primary',
    ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]
  ],
  [
    'configure.fuel.secondary',
    [
      'none',
      'catalog',
      'behave',
      'chaparral',
      'palmettoGallberry',
      'westernAspen'
    ][0]
  ],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]]
])

// Selected Nodes
const primaryFli = dag.get('surface.primary.fuel.fire.firelineIntensity')
const headScorchHt = dag.get('surface.fire.ellipse.head.scorchHeight')
const scorchHt = dag.get('mortality.scorchHeight')

// Required Nodes when linked to surfaceFire
const deadMois = dag.get('site.moisture.dead.category')
const liveMois = dag.get('site.moisture.live.category')
const slope = dag.get('site.slope.steepness.ratio')
const airTemp = dag.get('site.temperature.air')
const windSpeed = dag.get('site.wind.speed.atMidflame')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

// Required when linked to fireEllipse or stand-alone
const observedFlame = dag.get('site.fire.observed.flameLength')
const observedFli = dag.get('site.fire.observed.firelineIntensity')

const Inputs = [
  [deadMois, [0.15]],
  [liveMois, [1.5]],
  [slope, [0.25]],
  [airTemp, [95]],
  [windSpeed, [88 * 9]],
  [catalogKey, ['10']]
]

const expectedFlame = 5.4555388385284225
const expectedFli = 226.83330575913166
const expectedSht = 25.36660620754195

test('1: Scorch height linked to surface fire', () => {
  dag.clearSelected()
  dag.runConfigs([['configure.module', 'surfaceFire']])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(deadMois)
  expect(inputNodes).toContain(liveMois)
  expect(inputNodes).toContain(slope)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(catalogKey)

  dag.runInputs(Inputs)
  // The link to surfaceFire is via the surface.weighted.fire.firelineIntensity
  expect(primaryFli.value.current).toBeCloseTo(expectedFli, 9)
  expect(
    dag.get('surface.primary.fuel.fire.firelineIntensity').value.current
  ).toEqual(expectedFli)
  expect(
    dag.get('surface.weighted.fire.firelineIntensity').value.current
  ).toEqual(expectedFli)
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').value.current
  ).toEqual(expectedFli)
  expect(
    dag.get('surface.fire.ellipse.head.scorchHeight').value.current
  ).toEqual(expectedSht)

  // And NOT through the surface.weighted.fire.scorchHeight
  expect(
    dag.get('surface.weighted.fire.scorchHeight').status.isRequired
  ).toEqual(false)
  expect(dag.get('surface.weighted.fire.scorchHeight').value.current).toEqual(0)

  // But if we select the surface.weighted.fire.scorchHeight,
  // it will then get computed and have the same value
  dag.runSelected([['surface.weighted.fire.scorchHeight', true]])
  expect(
    dag.get('surface.weighted.fire.scorchHeight').status.isRequired
  ).toEqual(true)
  expect(dag.get('surface.weighted.fire.scorchHeight').value.current).toEqual(
    expectedSht
  )

  dag.runSelected([['surface.weighted.fire.flameLength', true]])
  expect(
    dag.get('surface.primary.fuel.fire.flameLength').value.current
  ).toEqual(expectedFlame)
})

test('2: Scorch height linked to fire ellipse and its firelineIntensity', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'fireEllipse'],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][0]
    ]
  ])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFli)

  dag.runInputs([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFli, [expectedFli]]
  ])
  expect(observedFli.value.current).toEqual(expectedFli)
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').value.current
  ).toEqual(expectedFli)
  expect(
    dag.get('surface.fire.ellipse.head.scorchHeight').value.current
  ).toEqual(expectedSht)
})

test('3: Scorch height linked to fire ellipse and its flameLength', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'fireEllipse'],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][1]
    ]
  ])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  dag.runInputs([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFlame, [expectedFlame]]
  ])
  expect(observedFlame.value.current).toEqual(expectedFlame)
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').value.current
  ).sig(expectedFli, 11)
  expect(dag.get('surface.fire.ellipse.head.scorchHeight').value.current).sig(
    expectedSht,
    11
  )
})

test('4: Scorch height linked to fire ellipse and batched flameLengths', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'fireEllipse'],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][1]
    ]
  ])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  const flameLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const windSpeeds = [0, 5 * 88, 10 * 88, 15 * 88, 20 * 88]
  const airTemps = [70, 80, 90, 100]
  dag.runInputs([
    [airTemp, airTemps],
    [windSpeed, windSpeeds],
    [observedFlame, flameLengths]
  ])
  // Fetch all 200 results
  for (let idx = 0; idx < 200; idx += 1) {
    const flame = observedFlame.value.run[idx]
    const air = airTemp.value.run[idx]
    const wind = windSpeed.value.run[idx]
    const expected = SurfaceFire.scorchHtFromFlame(flame, wind, air)
    expect(scorchHt.value.run[idx]).sig(
      expected,
      `air=${air}, wind=${wind}, flame=${flame}`
    )
  }
})

test('5: Scorch height stand-alone with flameLength input', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'scorchHeight'],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][1]
    ]
  ])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  dag.runInputs([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFlame, [expectedFlame]]
  ])
  expect(observedFlame.value.current).toEqual(expectedFlame)
  expect(observedFli.value.current).sig(expectedFli, 11)
  expect(scorchHt.value.current).sig(expectedSht, 11)
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').status.isRequired
  ).toEqual(false)
  expect(
    dag.get('surface.fire.ellipse.head.flameLength').status.isRequired
  ).toEqual(false)
})

test('6: Scorch height stand-alone with firelineIntensity input', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'scorchHeight'],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][0]
    ]
  ])
  dag.runSelected([[scorchHt, true]])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFli)

  dag.runInputs([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFli, [expectedFli]]
  ])
  expect(observedFli.value.current).sig(expectedFli, 11)
  expect(scorchHt.value.current).sig(expectedSht, 11)
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').status.isRequired
  ).toEqual(false)
  expect(
    dag.get('surface.fire.ellipse.head.flameLength').status.isRequired
  ).toEqual(false)
  expect(observedFlame.status.isRequired).toEqual(false)
})
