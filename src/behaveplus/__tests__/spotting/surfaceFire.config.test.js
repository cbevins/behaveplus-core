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

test('4. Surface fire spotting', () => {
  dag.clearSelected()
  dag.runConfigs([['configure.module', 'surfaceSpotting']])

  // When linked to surfaceFire, bound to 'surface.weighted.fire.firelineIntensity'
  // Currently in stand-alone mode, so linked to 'site.fire.observed.firelineIntensity'
  dag.runSelected([['spotting.surfaceFire.firelineIntensity', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // Linking to surfaceFire requires a lot more inputs
  dag.runConfigs([['configure.module', 'surfaceFire']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(9)
  expect(inputNodes).toContain(dag.get('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.get('site.moisture.dead.tl1h'))

  // Back to stand-alone
  dag.runConfigs([['configure.module', 'surfaceSpotting']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // firebrand.height requires 'spotting.surfaceFire.firelineIntensity', 'site.wind.speed.at20ft'
  dag.runSelected([['spotting.surfaceFire.firebrand.height', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // firebrand.drift requires 'spotting.surfaceFire.firebrand.height', 'site.wind.speed.at20ft',
  // but no new inputs
  dag.runSelected([['spotting.surfaceFire.firebrand.drift', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Requires 'spotting.surfaceFire.firebrand.height',  'site.canopy.downwind.appliedHeight',
  // the letter which requires site.canopy.downwind.{height|isOpen}
  dag.runSelected([
    ['spotting.surfaceFire.firebrand.criticalCoverHeight', true]
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // spotDistance.flatTerrain requires 'spotting.surfaceFire.firebrand.height',
  // 'spotting.surfaceFire.firebrand.criticalCoverHeight', and 'site.wind.speed.at20ft',
  // but no new inputs
  dag.runSelected([['spotting.surfaceFire.spotDistance.flatTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Requires 'spotting.surfaceFire.spotDistance.flatTerrain', 'spotting.surfaceFire.firebrand.drift',
  // but no new inputs
  dag.runSelected([
    ['spotting.surfaceFire.spotDistance.flatTerrainWithDrift', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.runSelected([['spotting.surfaceFire.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
