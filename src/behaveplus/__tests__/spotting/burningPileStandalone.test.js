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
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
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

test('1: Burning pile spotting distance configuration', () => {
  // Selecting downwind canopy applied ht requires its 2 inputs
  dag.runSelected([['site.canopy.downwind.appliedHeight', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Selecting firebrand ht requires burning pile flame ht
  dag.runSelected([['spotting.burningPile.firebrand.height', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Selecting critical cover ht uses firebrand ht, but no new inputs
  dag.runSelected([
    ['spotting.burningPile.firebrand.criticalCoverHeight', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // firbrand drift is fixed, so no new inputs required when it is selected
  dag.runSelected([['spotting.burningPile.firebrand.drift', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Selecting spotting distance on flat terrain requires wind at 20-ft
  dag.runSelected([
    ['spotting.burningPile.spotDistance.flatTerrain', true],
    ['spotting.burningPile.spotDistance.flatTerrainWithDrift', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.runSelected([['spotting.burningPile.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
