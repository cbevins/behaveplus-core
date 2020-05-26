/* eslint-disable no-new */
/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import { MethodMap } from '../../equations/index.js'
import { BpxVariantMap } from '../../behaveplus/index.js'
import { Dag } from '../Dag.js'

test('1: Error - duplicate genome key', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Variant.SlopeSteepness'],
        [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ],
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Variant.SlopeSteepness'],
        [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' was previously defined"
  )
})

test('2: Error - bad Variant key', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Variant.Junk'],
        [['finally', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' has unknown variant 'Junk'"
  )
})

test('3: Error - no updater options', () => {
  const bad = [
    ['surface.primary.fuel.fire.slope.ratio', [['Variant.SlopeSteepness'], []]]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' has no updater method options"
  )
})

test('4: Error - bad configKey', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Variant.WindSpeedAdjustmentFraction'],
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
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' updater 0 has unknown config Node 'BAD.configure.fuel.windSpeedAdjustmentFactor'"
  )
})

test('5: Error - bad methodKey', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Variant.WindSpeedAdjustmentFraction'],
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
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' updater 0 has unknown method 'BAD.windSpeedAdjustmentFactor"
  )
})

test('6: Error - bad config value', () => {
  const bad = [
    [
      'configure.fuel.windSpeedAdjustmentFactor',
      [['Variant.ConfigWindSpeedAdjustmentFactor'], [['finally', 'Dag.config']]]
    ],
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Variant.WindSpeedAdjustmentFraction'],
        [
          [
            'when',
            'configure.fuel.windSpeedAdjustmentFactor',
            'equals',
            'BAD_CONFIG_VALUE',
            'Dag.bind',
            'site.windSpeedAdjustmentFactor'
          ],
          ['finally', 'Dag.input']
        ]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' updater 0 config Node 'configure.fuel.windSpeedAdjustmentFactor' references invalid value 'BAD_CONFIG_VALUE'"
  )
})

test('7: Error - bad updater condition', () => {
  const bad = [
    [
      'surface.primary.fuel.fire.slope.ratio',
      [
        ['Variant.SlopeSteepness'],
        [['BAD_CONDITION', 'Dag.bind', 'site.slope.steepness.ratio']]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.slope.ratio' updater 0 has invalid condition 'BAD_CONDITION'"
  )
})

test('8: Error - cyclical dependency', () => {
  const bad = [
    ['a', [['Variant.Text'], [['finally', 'Dag.bind', 'b']]]],
    ['b', [['Variant.Text'], [['finally', 'Dag.bind', 'c']]]],
    ['c', [['Variant.Text'], [['finally', 'Dag.bind', 'a']]]]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow('Cyclical dependency detected:')
})

test('9: Error - no finally', () => {
  const bad = [
    [
      'configure.fuel.windSpeedAdjustmentFactor',
      [['Variant.ConfigWindSpeedAdjustmentFactor'], [['finally', 'Dag.config']]]
    ],
    [
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      [
        ['Variant.WindSpeedAdjustmentFraction'],
        [
          [
            'when',
            'configure.fuel.windSpeedAdjustmentFactor',
            'equals',
            'BAD_CONFIG_VALUE',
            'Dag.bind',
            'site.windSpeedAdjustmentFactor'
          ]
        ]
      ]
    ]
  ]
  expect(() => {
    new Dag(null, 'badDag', bad, new BpxVariantMap(), MethodMap)
  }).toThrow(
    "GenomeArray Node 'surface.primary.fuel.fire.windSpeedAdjustmentFactor' has no 'finally' condition"
  )
})
