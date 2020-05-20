export const genome = [
  ['ignition.firebrand.probability', [['Variant.Fraction'], [
    ['finally', 'IgnitionProbability.firebrand',
      'site.temperature.fuel',
      'site.moisture.dead.tl1h']
  ]]],
  ['ignition.lightningStrike.charge', [['Variant.IgnitionLightningChargeOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.fuel.depth', [['Variant.IgnitionFuelDepth'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.fuel.type', [['Variant.IgnitionFuelTypeOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['ignition.lightningStrike.probability', [['Variant.Fraction'], [
    ['finally', 'IgnitionProbability.lightningStrike',
      'ignition.lightningStrike.fuel.type',
      'ignition.lightningStrike.fuel.depth',
      'site.moisture.dead.tl100h',
      'ignition.lightningStrike.charge']
  ]]]
]
