export const genome = [
  ['site.canopy.cover', [['Variant.FuelCoverFraction'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.crown.baseHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.crown.fill', [['Variant.CrownFillFraction'], [
    ['finally', 'Canopy.crownFill',
      'site.canopy.cover',
      'site.canopy.crown.ratio']
  ]]],
  ['site.canopy.crown.length', [['Variant.TreeHeight'], [
    ['finally', 'Canopy.crownLength',
      'site.canopy.crown.baseHeight',
      'site.canopy.crown.totalHeight']
  ]]],
  ['site.canopy.crown.ratio', [['Variant.CrownRatioFraction'], [
    ['finally', 'Canopy.crownRatio',
      'site.canopy.crown.length',
      'site.canopy.crown.totalHeight']
  ]]],
  ['site.canopy.crown.totalHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']
  ]]],
  // end site.canopy.crown
  ['site.canopy.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'Canopy.heatPerUnitArea',
      'site.canopy.fuel.ovendryLoad',
      'site.canopy.fuel.heatOfCombustion']
  ]]],
  ['site.canopy.fuel.bulkDensity', [['Variant.FuelBedBulkDensity'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.fuel.foliar.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.fuel.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  ['site.canopy.fuel.isSheltered', [['Variant.Boolean'], [
    ['finally', 'Canopy.sheltersFuel',
      'site.canopy.cover',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.fill']
  ]]],
  ['site.canopy.fuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Canopy.fuelLoad',
      'site.canopy.fuel.bulkDensity',
      'site.canopy.crown.length']
  ]]],
  ['site.canopy.fuel.shading', [['Variant.Fraction'], [ // used by IgnitionProbability
    ['finally', 'Dag.input']
  ]]],
  // end site.canopy.fuel
  ['site.canopy.sheltered.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'Canopy.windSpeedAdjustmentFactor',
      'site.canopy.cover',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.fill']
  ]]],
  // end 'site.canopy.sheltered'
  ['site.canopy.downwind.height', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.downwind.isOpen', [['Variant.Boolean'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.downwind.appliedHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.appliedDownWindCoverHeight',
      'site.canopy.downwind.height',
      'site.canopy.downwind.isOpen']
  ]]],
  // end 'site.canopy.downwind'
  ['site.canopy.tree.barkThickness', [['Variant.TreeBarkThickness'], [
    ['finally', 'TreeMortality.barkThickness',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh']
  ]]],
  ['site.canopy.tree.dbh', [['Variant.TreeDbh'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.canopy.tree.species.fofem6.code', [['Variant.TreeSpeciesFofem6Option'], [
    ['finally', 'Dag.input']
  ]]]
  // end 'site.canopy.tree'
]
