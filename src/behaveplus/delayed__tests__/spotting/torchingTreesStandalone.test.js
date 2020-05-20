/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
/**
 * @file Tests the Bpx spotting module DAG configurations
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 */
import { Bpx, DagJest } from '../../../index.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = Bpx.Dag('bpxSpotting')
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

test('2: Torching trees spotting distance configuration', () => {
  dag.clearSelected()
  // Selecting downwind canopy applied ht requires its 2 inputs
  dag.runSelected([['site.canopy.downwind.appliedHeight', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Selecting flameHeight or flameDuration requires tree species, dbh, count
  dag.runSelected([
    ['spotting.torchingTrees.flameHeight', true],
    ['spotting.torchingTrees.flameDuration', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))

  // Selecting firebrand ht requires tree height
  dag.runSelected([
    ['spotting.torchingTrees.firebrand.height', true],
    ['spotting.torchingTrees.firebrand.criticalCoverHeight', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))

  // firebrand drift is calculated, but no new inputs are required when it is selected
  dag.runSelected([['spotting.torchingTrees.firebrand.drift', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))

  // Selecting spotting distance on flat terrain requires wind speed at 20-ft
  dag.runSelected([
    ['spotting.torchingTrees.spotDistance.flatTerrain', true],
    ['spotting.torchingTrees.spotDistance.flatTerrainWithDrift', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.runSelected([
    ['spotting.torchingTrees.spotDistance.mountainTerrain', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(10)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
