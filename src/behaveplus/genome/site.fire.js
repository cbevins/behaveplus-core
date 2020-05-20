export const genome = [
  // used by 'site.fire.observed.flameLength', 'site.fire.observed.scorchHeight',
  // 'spotting.surfaceFire.firebrand.height', 'crown.fire.surface.firelineIntensity', and
  // 'surface.fire.ellipse.head.firelineIntensity' when configs.fire.ellipse === 'standAlone'
  ['site.fire.observed.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['when', 'configure.fire.lengthToWidthRatio', 'equals', 'lengthToWidthRatio',
      'SurfaceFire.effectiveWindSpeedFromLwr',
      'site.fire.observed.lengthToWidthRatio'],
    ['finally', 'Dag.input']
  ]]],
  ['site.fire.observed.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'flameLength',
      'SurfaceFire.firelineIntensityFromFlameLength',
      'site.fire.observed.flameLength'],
    ['finally', 'Dag.input']
  ]]],
  // used only by 'crown.fire.surface.flameLength'
  ['site.fire.observed.flameLength', [['Variant.FireFlameLength'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'firelineIntensity',
      'SurfaceFire.flameLength',
      'site.fire.observed.firelineIntensity'],
    ['finally', 'Dag.input']
  ]]],
  // used only by 'surface.fire.ellipse.heading.fromUpslope' when configs.fire.ellipse === 'standAlone'
  ['site.fire.observed.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Dag.input'],
    ['finally', 'Compass.diff',
      'site.fire.observed.heading.fromNorth',
      'site.slope.direction.upslope']
  ]]],
  // used only by 'site.fire.observed.heading.fromUpslope' when 'configure.wind.direction' === 'sourceFromNorth'
  ['site.fire.observed.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth', 'Dag.input'],
    ['finally', 'Compass.sum',
      'site.slope.direction.upslope',
      'site.fire.observed.heading.fromUpslope']
  ]]],
  // used by 'crown.fire.surface.heatPerUnitArea'
  ['site.fire.observed.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'Dag.input']
  ]]],
  // used by 'surface.fire.ellipse.axis.lengthToWidthRatio' when configs.fire.ellipse === 'standAlone'
  ['site.fire.observed.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['when', 'configure.fire.lengthToWidthRatio', 'equals', 'effectiveWindSpeed',
      'SurfaceFire.lengthToWidthRatio',
      'site.fire.observed.effectiveWindSpeed'],
    ['finally', 'Dag.input']
  ]]],
  // used by 'surface.fire.ellipse.head.spreadRate' when configs.fire.ellipse === 'standAlone'
  ['site.fire.observed.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.input']
  ]]],
  // used by stand-alone mortality model
  ['site.fire.observed.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.fire.crown.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.fire.crown'
  ['site.fire.time.sinceIgnition', [['Variant.FireElapsedTime'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.fire.time'
  ['site.fire.vector.fromHead', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.fire.vector.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.fire.vector.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']
  ]]]
]
