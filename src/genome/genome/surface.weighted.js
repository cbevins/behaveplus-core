export const genome = [
  ['surface.weighted.fire.primaryCover', [['Variant.FuelCoverFraction'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.fixed', 1],
    ['finally', 'Dag.input']
  ]]],
  // These are all bound to the primary surface fuel
  ['surface.weighted.fire.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.effectiveWindSpeed']
  ]]],
  ['surface.weighted.fire.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromUpslope']
  ]]],
  ['surface.weighted.fire.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromNorth']
  ]]],
  ['surface.weighted.fire.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.lengthToWidthRatio']
  ]]],
  ['surface.weighted.fire.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.wind.speed.atMidflame']
  ]]],
  ['surface.weighted.fire.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor']
  ]]],
  // These use the maximum of the primary or secondary fuel
  ['surface.weighted.fire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.firelineIntensity'],
    ['finally', 'Math.max',
      'surface.primary.fuel.fire.firelineIntensity',
      'surface.secondary.fuel.fire.firelineIntensity']
  ]]],
  ['surface.weighted.fire.flameLength', [['Variant.FireFlameLength'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.flameLength'],
    ['finally', 'Math.max',
      'surface.primary.fuel.fire.flameLength',
      'surface.secondary.fuel.fire.flameLength']
  ]]],
  ['surface.weighted.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.heatPerUnitArea'],
    ['finally', 'Math.max',
      'surface.primary.fuel.fire.heatPerUnitArea',
      'surface.secondary.fuel.fire.heatPerUnitArea']
  ]]],
  ['surface.weighted.fire.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.reactionIntensity'],
    ['finally', 'Math.max',
      'surface.primary.fuel.fire.reactionIntensity',
      'surface.secondary.fuel.fire.reactionIntensity']
  ]]],
  ['surface.weighted.fire.scorchHeight', [['Variant.FireScorchHeight'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.scorchHeight'],
    ['finally', 'Math.max',
      'surface.primary.fuel.fire.scorchHeight',
      'surface.secondary.fuel.fire.scorchHeight']
  ]]],
  // If either limit is execeeded
  ['surface.weighted.fire.limit.effectiveWindSpeed.exceeded', [['Variant.Boolean'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded'],
    ['finally', 'Calc.or',
      'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded',
      'surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded']
  ]]],
  // This uses the minimum of the primary or secondary fuel
  ['surface.weighted.fire.limit.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed'],
    ['finally', 'Math.min',
      'surface.primary.fuel.fire.limit.effectiveWindSpeed',
      'surface.secondary.fuel.fire.limit.effectiveWindSpeed']
  ]]],
  // Weighted spread rates
  ['surface.weighted.fire.spreadRate', [['Variant.FireSpreadRate'], [
    ['when', 'configure.fire.weightingMethod', 'equals', 'expected',
      'Dag.bind', 'surface.weighted.fire.expectedValue.spreadRate'],
    ['when', 'configure.fire.weightingMethod', 'equals', 'harmonic',
      'Dag.bind', 'surface.weighted.fire.harmonicMean.spreadRate'],
    ['finally', 'Dag.bind', 'surface.weighted.fire.arithmeticMean.spreadRate']
  ]]],
  ['surface.weighted.fire.arithmeticMean.spreadRate', [['Variant.FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.arithmeticMeanSpreadRate',
      'surface.weighted.fire.primaryCover',
      'surface.primary.fuel.fire.spreadRate',
      'surface.secondary.fuel.fire.spreadRate']
  ]]],
  ['surface.weighted.fire.expectedValue.spreadRate', [['Variant.FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.expectedValueSpreadRate',
      'surface.weighted.fire.primaryCover',
      'surface.primary.fuel.fire.spreadRate',
      'surface.secondary.fuel.fire.spreadRate']
  ]]],
  ['surface.weighted.fire.harmonicMean.spreadRate', [['Variant.FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none',
      'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.harmonicMeanSpreadRate',
      'surface.weighted.fire.primaryCover',
      'surface.primary.fuel.fire.spreadRate',
      'surface.secondary.fuel.fire.spreadRate']
  ]]]
]
