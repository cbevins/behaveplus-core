export const genome = [
  ['site.map.scale', [['Variant.Factor'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.map.contours', [['Variant.MapContoursCount'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.map.distance', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.map.factor', [['Variant.Factor'], [
    ['finally', 'Calc.divide', 1, 'site.map.scale']
  ]]],
  ['site.map.interval', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.map.reach', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.scale', 'site.map.distance']
  ]]],
  ['site.map.rise', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.interval', 'site.map.contours']
  ]]],
  ['site.map.slope.ratio', [['Variant.SlopeSteepness'], [
    ['finally', 'Compass.slopeRatioMap',
      'site.map.scale',
      'site.map.interval',
      'site.map.contours',
      'site.map.distance']
  ]]],
  ['site.map.slope.degrees', [['Variant.SlopeSteepness'], [
    ['finally', 'Compass.slopeDegreesMap',
      'site.map.scale',
      'site.map.interval',
      'site.map.contours',
      'site.map.distance']
  ]]]
]
