export const genome = [
  ['site.moisture.dead.tl1h', [['Variant.FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl10h', [['Variant.FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl100h', [['Variant.FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.category', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.moisture.dead'
  ['site.moisture.live.herb', [['Variant.FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.live.stem', [['Variant.FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.live.category', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']
  ]]]
  // end 'site.moisture.live'
  // end 'site.moisture'
]
