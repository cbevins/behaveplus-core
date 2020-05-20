/* eslint-disable no-new */
/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import { BpxFilterMap, BpxMethodMap } from '../../index.js'
import { Dag } from '../Dag.js'

test('Error - duplicate genome key', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Filter.SlopeSteepness'],
        [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ],
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Filter.SlopeSteepness'],
        [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxFilterMap(), BpxMethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' was previously defined"
  )
})

test('Error - bad Filter key', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.slope.ratio',
      [['Filter.Junk'], [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxFilterMap(), BpxMethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' has unknown filter 'Junk'"
  )
})

test('Error - no updater options', () => {
  const bad = [
    ['surface.primary.fuel.fire.slope.ratio', [['Filter.SlopeSteepness'], []]]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxFilterMap(), BpxMethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' has no updater method options"
  )
})

test('Error - bad configKey', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Filter.WindSpeedAdjustmentFraction'],
        [
          [
            'when',
            'BAD.configure.fuel.windSpeedAdjustmentFactor',
            'equals',
            'input',
            'Dag.bind',
            'site.windSpeedAdjustmentFactor'
          ],
          [
            'finally',
            'SurfaceFire.windSpeedAdjustmentFactor',
            'site.canopy.fuel.isSheltered',
            'site.canopy.sheltered.windSpeedAdjustmentFactor',
            'surface.primary.fuel.bed.open.windSpeedAdjustmentFactor'
          ]
        ]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxFilterMap(), BpxMethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' updater 0 has unknown config Node 'BAD.configure.fuel.windSpeedAdjustmentFactor'"
  )
})

test('Error - bad methodKey', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Filter.WindSpeedAdjustmentFraction'],
        [
          [
            'finally',
            'BAD.windSpeedAdjustmentFactor',
            'site.canopy.fuel.isSheltered',
            'site.canopy.sheltered.windSpeedAdjustmentFactor',
            'surface.primary.fuel.bed.open.windSpeedAdjustmentFactor'
          ]
        ]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxFilterMap(), BpxMethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' updater 0 has unknown method 'BAD.windSpeedAdjustmentFactor"
  )
})
