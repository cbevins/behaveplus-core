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

test('5: Validate stand-alone with firelineIntensity input results against BP6', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'spottingDistance'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.runSelected([['spotting.surfaceFire.spotDistance.mountainTerrain', true]])

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  // console.log(DagJest.arrayList(inputNodes, 'Test 5 Input Nodes'))
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  // Always (except crown fire spotting) downwind canopy parms
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  // Surface fire spotting requires firelineIntensity or flameLength
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // Burning pile adds burning pile flame height input
  dag.runSelected([['spotting.burningPile.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Torching trees adds 4 inputs
  dag.runSelected([
    ['spotting.torchingTrees.spotDistance.mountainTerrain', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(12)
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))

  // Crown fire
  dag.runSelected([['spotting.crownFire.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(14)
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  // Always (except crown fire spotting) require downwind canopy parms
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  // Surface fire spotting requires firelineIntensity or flameLength
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  // Burning pile adds:
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))
  // Torching trees add:
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))
  // Crown fire adds:
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
})

test('6: Validate stand-alone with flameLength input results against BP6', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'spottingDistance'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.runSelected([['spotting.surfaceFire.spotDistance.mountainTerrain', true]])

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  // console.log(DagJest.arrayList(inputNodes, 'Test 6 Input Nodes'))
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  // Always (except crown fire spotting) downwind canopy parms
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  // Surface fire spotting requires firelineIntensity or flameLength
  expect(inputNodes).toContain(dag.get('site.fire.observed.flameLength'))

  // Burning pile adds burning pile flame height input
  dag.runSelected([['spotting.burningPile.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Torching trees adds 4 inputs
  dag.runSelected([
    ['spotting.torchingTrees.spotDistance.mountainTerrain', true]
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(12)
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.count'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.dbh'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.height'))
  expect(inputNodes).toContain(dag.get('spotting.torchingTrees.species'))

  // Crown fire
  dag.runSelected([['spotting.crownFire.spotDistance.mountainTerrain', true]])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(14)
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.flameLength'))

  // Validate results
  const location = dag.get('site.terrain.spotSourceLocation')
  const isOpen = dag.get('site.canopy.downwind.isOpen')
  dag.runInputs([
    // Inputs arranged in BP6 order...
    // Fuel/Vegetation, Overstory
    ['site.canopy.crown.totalHeight', [80]],
    ['site.canopy.downwind.height', [60]],
    ['site.canopy.downwind.isOpen', [false, true]], // depth = 11
    ['spotting.torchingTrees.height', [80]],
    ['spotting.torchingTrees.species', ['PSME']],
    ['spotting.torchingTrees.dbh', [36]],
    // Weather
    ['site.wind.speed.at20ft', [88 * 10]],
    // Terrain
    ['site.terrain.ridgeValleyElevation', [1000]],
    ['site.terrain.ridgeValleyDistance', [5280]],
    [
      location,
      ['ridgeTop', 'midslopeWindward', 'valleyBottom', 'midslopeLeeward']
    ],
    // Fite
    ['site.fire.observed.flameLength', [10]],
    ['spotting.burningPile.flameHeight', [20]],
    ['spotting.torchingTrees.count', [5]],
    ['site.fire.crown.flameLength', [40]]
  ])

  expect(
    dag.runIndices([
      [location, 'ridgeTop'],
      [isOpen, false]
    ])
  ).toEqual([0])
  expect(
    dag.runIndices([
      [location, 'ridgeTop'],
      [isOpen, true]
    ])
  ).toEqual([4])
  expect(
    dag.runIndices([
      [location, 'midslopeWindward'],
      [isOpen, false]
    ])
  ).toEqual([1])
  expect(
    dag.runIndices([
      [location, 'midslopeWindward'],
      [isOpen, true]
    ])
  ).toEqual([5])
  expect(
    dag.runIndices([
      [location, 'valleyBottom'],
      [isOpen, false]
    ])
  ).toEqual([2])
  expect(
    dag.runIndices([
      [location, 'valleyBottom'],
      [isOpen, true]
    ])
  ).toEqual([6])
  expect(
    dag.runIndices([
      [location, 'midslopeLeeward'],
      [isOpen, false]
    ])
  ).toEqual([3])
  expect(
    dag.runIndices([
      [location, 'midslopeLeeward'],
      [isOpen, true]
    ])
  ).toEqual([7])

  expect(dag.runIndices([[location, 'ridgeTop']])).toEqual([0, 4])
  expect(dag.runIndices([[location, 'midslopeLeeward']])).toEqual([3, 7])

  expect(dag.runIndices([[location, 'junk']])).toEqual([])

  const results = {
    torchingTrees: {
      ridgeTop: { closed: 1740.434066, open: 2111.270405 },
      midslopeWindward: { closed: 1672.439664, open: 2062.939851 },
      valleyBottom: { closed: 1467.096496, open: 1803.761828 },
      midslopeLeeward: { closed: 1530.841898, open: 1858.727335 }
    },
    burningPile: {
      ridgeTop: { closed: 578.365634, open: 770.106324 },
      midslopeWindward: { closed: 529.950082, open: 710.560639 },
      valleyBottom: { closed: 474.811843, open: 633.867748 },
      midslopeLeeward: { closed: 513.869098, open: 682.109524 }
    },
    crownFire: {
      ridgeTop: { closed: 881.615994, open: 881.615994 },
      midslopeWindward: { closed: 816.907774, open: 816.907774 },
      valleyBottom: { closed: 726.989367, open: 726.989367 },
      midslopeLeeward: { closed: 779.67935, open: 779.67935 }
    },
    surfaceFire: {
      ridgeTop: { closed: 1155.470325, open: 1346.573583 },
      midslopeWindward: { closed: 1082.484627, open: 1271.729868 },
      valleyBottom: { closed: 958.108061, open: 1121.831362 },
      midslopeLeeward: { closed: 1018.864376, open: 1185.746013 }
    }
  }

  Object.keys(results).forEach(nodeKey => {
    const node = dag.get(`spotting.${nodeKey}.spotDistance.mountainTerrain`)
    Object.keys(results[nodeKey]).forEach(locationKey => {
      Object.keys(results[nodeKey][locationKey]).forEach(openKey => {
        const idxArray = dag.runIndices([
          [location, locationKey],
          [isOpen, openKey === 'open']
        ])
        expect(idxArray.length).toEqual(1)
        const idx = idxArray[0]
        expect(node.value.run[idx]).sig(
          results[nodeKey][locationKey][openKey],
          3,
          `'${nodeKey}'-'${locationKey}'-'${openKey}'`
        )
      })
    })
  })
})

test('7: Validate stand-alone surface fire spotting with flameLength input results against BP6', () => {
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'spottingDistance'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.runSelected([['spotting.surfaceFire.spotDistance.mountainTerrain', true]])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)
  // console.log(DagJest.arrayList(inputNodes, 'Test 6 Input Nodes'))
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  // Always (except crown fire spotting) downwind canopy parms
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  // Surface fire spotting requires firelineIntensity or flameLength
  expect(inputNodes).toContain(dag.get('site.fire.observed.flameLength'))

  // Validate results
  const location = dag.get('site.terrain.spotSourceLocation')
  const isOpen = dag.get('site.canopy.downwind.isOpen')
  dag.runInputs([
    // Inputs arranged in BP6 order...
    // Fuel/Vegetation, Overstory
    ['site.canopy.downwind.height', [60]],
    ['site.canopy.downwind.isOpen', [false, true]], // depth = 11
    // Weather
    ['site.wind.speed.at20ft', [88 * 10]],
    // Terrain
    ['site.terrain.ridgeValleyElevation', [1000]],
    ['site.terrain.ridgeValleyDistance', [5280]],
    [
      location,
      ['ridgeTop', 'midslopeWindward', 'valleyBottom', 'midslopeLeeward']
    ],
    // Fire
    ['site.fire.observed.flameLength', [10]]
  ])

  const results = {
    surfaceFire: {
      ridgeTop: { closed: 1155.470325, open: 1346.573583 },
      midslopeWindward: { closed: 1082.484627, open: 1271.729868 },
      valleyBottom: { closed: 958.108061, open: 1121.831362 },
      midslopeLeeward: { closed: 1018.864376, open: 1185.746013 }
    }
  }

  Object.keys(results).forEach(nodeKey => {
    const node = dag.get(`spotting.${nodeKey}.spotDistance.mountainTerrain`)
    Object.keys(results[nodeKey]).forEach(locationKey => {
      Object.keys(results[nodeKey][locationKey]).forEach(openKey => {
        const idxArray = dag.runIndices([
          [location, locationKey],
          [isOpen, openKey === 'open']
        ])
        expect(idxArray.length).toEqual(1)
        const idx = idxArray[0]
        expect(node.value.run[idx]).sig(
          results[nodeKey][locationKey][openKey],
          7,
          `'${nodeKey}'-'${locationKey}'-'${openKey}'`
        )
      })
    })
  })
})
