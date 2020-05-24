/**
 * @file Tests the Bpx spotting module DAG configurations
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 */
import { BpxDag } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = BpxDag('bpxSpotting')
dag.runConfigs([
  ['configure.module', 'surfaceFire'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
  // NOT AS IMPORTANT
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
    ['individual', 'liveCategory', 'category', 'catalog'][0]
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

test('3. Crown fire spotting', () => {
  dag.clearSelected()
  dag.runConfigs([['configure.module', 'crownSpotting']])
  // Critical cover height is fixed at 0
  dag.runSelected([['spotting.crownFire.firebrand.criticalCoverHeight', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(0)

  // Currently in stand-alone mode
  dag.runSelected([['spotting.crownFire.firelineIntensity', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))

  // Linking to crownFire requires a lot more inputs
  dag.runConfigs([['configure.module', 'crownFire']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(10)

  // Linking to surfaceFire requires a lot more inputs
  dag.runConfigs([['configure.module', 'surfaceFire']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(10)

  // Back to stand-alone
  dag.runConfigs([['configure.module', 'crownSpotting']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))

  dag.runSelected([['spotting.crownFire.firebrandObject', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Firebrand height, drift, and distance over flat terrain need the firebrandObject, but no new inputs
  dag.runSelected([
    ['spotting.crownFire.firebrand.height', true],
    ['spotting.crownFire.firebrand.drift', true],
    ['spotting.crownFire.spotDistance.flatTerrain', true],
    ['spotting.crownFire.spotDistance.flatTerrainWithDrift', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.runSelected([['spotting.crownFire.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
