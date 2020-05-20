export const genome = [
  ['site.terrain.spotSourceLocation', [['Variant.SpottingSourceLocationOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.terrain.ridgeValleyDistance', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.terrain.ridgeValleyElevation', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.terrain'
  ['spotting.burningPile.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.burningPile.firebrand.height',
      'site.canopy.downwind.appliedHeight'
    ]
  ]]],
  ['spotting.burningPile.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.burningPileFirebrandHeight',
      'spotting.burningPile.flameHeight'
    ]
  ]]],
  ['spotting.burningPile.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  // end 'spotting.burningPile.firebrand'
  ['spotting.burningPile.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain',
      'spotting.burningPile.firebrand.height',
      'spotting.burningPile.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft'
    ]
  ]]],
  ['spotting.burningPile.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift',
      'spotting.burningPile.spotDistance.flatTerrain',
      'spotting.burningPile.firebrand.drift'
    ]
  ]]],
  ['spotting.burningPile.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain',
      'spotting.burningPile.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation'
    ]
  ]]],
  // end 'spotting.burningPile.spotDistance'
  ['spotting.burningPile.flameHeight', [['Variant.FireFlameLength'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'spotting.burningPile'
  ['spotting.crownFire.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  ['spotting.crownFire.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'CrownSpotting.zdrop',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrift',
      'spotting.crownFire.firebrandObject']
  ]]],
  // end 'spotting.crownFire.firebrand'
  ['spotting.crownFire.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrop',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xspot',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain',
      'spotting.crownFire.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation']
  ]]],
  // end 'spotting.crownFire.spotDistance'
  ['spotting.crownFire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.module', 'includes', ['crownFire', 'surfaceFire'],
      'Dag.bind', 'crown.fire.active.firelineIntensity'],
    ['finally', 'CrownSpotting.firelineIntensityThomas',
      'site.fire.crown.flameLength']
  ]]],
  ['spotting.crownFire.firebrandObject', [['Variant.SpottingFirebrandObject'], [
    ['finally', 'CrownSpotting.flatDistance',
      'site.canopy.crown.totalHeight',
      'site.wind.speed.at20ft',
      'spotting.crownFire.firelineIntensity']
  ]]],
  // end 'spotting.crownFire'
  ['spotting.surfaceFire.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.surfaceFire.firebrand.height',
      'site.canopy.downwind.appliedHeight']
  ]]],
  ['spotting.surfaceFire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']
  ]]],
  ['spotting.surfaceFire.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.surfaceFireFirebrandHeight',
      'spotting.surfaceFire.firelineIntensity',
      'site.wind.speed.at20ft']
  ]]],
  ['spotting.surfaceFire.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.surfaceFireFirebrandDrift',
      'spotting.surfaceFire.firebrand.height',
      'site.wind.speed.at20ft']
  ]]],
  // end 'spotting.surfaceFire.firebrand'
  ['spotting.surfaceFire.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain',
      'spotting.surfaceFire.firebrand.height',
      'spotting.surfaceFire.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft']
  ]]],
  ['spotting.surfaceFire.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift',
      'spotting.surfaceFire.spotDistance.flatTerrain',
      'spotting.surfaceFire.firebrand.drift']
  ]]],
  ['spotting.surfaceFire.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain',
      'spotting.surfaceFire.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation']
  ]]],
  // end 'spotting.surfaceFire.spotDistance'
  // end 'spotting.surfaceFire'
  ['spotting.torchingTrees.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.torchingTrees.firebrand.height',
      'site.canopy.downwind.appliedHeight']
  ]]],
  ['spotting.torchingTrees.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.torchingTreesFirebrandHeight',
      'spotting.torchingTrees.height',
      'spotting.torchingTrees.flameHeight',
      'spotting.torchingTrees.flameDuration']
  ]]],
  ['spotting.torchingTrees.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  // end 'spotting.torchingTrees.firebrand'
  ['spotting.torchingTrees.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain',
      'spotting.torchingTrees.firebrand.height',
      'spotting.torchingTrees.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft'
    ]
  ]]],
  ['spotting.torchingTrees.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift',
      'spotting.torchingTrees.spotDistance.flatTerrain',
      'spotting.torchingTrees.firebrand.drift'
    ]
  ]]],
  ['spotting.torchingTrees.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain',
      'spotting.torchingTrees.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation'
    ]
  ]]],
  // end 'spotting.torchingTrees.spotDistance'
  ['spotting.torchingTrees.species', [['Variant.TorchingTreeSpeciesOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.height', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.dbh', [['Variant.TreeDbh'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.count', [['Variant.TreeCount'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.flameHeight', [['Variant.FireFlameLength'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameHeight',
      'spotting.torchingTrees.species',
      'spotting.torchingTrees.dbh',
      'spotting.torchingTrees.count'
    ]
  ]]],
  ['spotting.torchingTrees.flameDuration', [['Variant.FireFlameDuration'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameDuration',
      'spotting.torchingTrees.species',
      'spotting.torchingTrees.dbh',
      'spotting.torchingTrees.count'
    ]
  ]]]
  // end 'spotting.torchingTrees'
  // end 'spotting'
]
