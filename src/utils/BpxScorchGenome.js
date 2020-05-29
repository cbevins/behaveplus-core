// Scorch Module Genome (11 nodes)
export const BpxGenome = [
  ['configure.fire.firelineIntensity', [['Variant.ConfigFirelineIntensity'], [
    ['finally', 'Dag.config']]]],
  ['configure.module', [['Variant.ConfigModule'], [
    ['finally', 'Dag.config']]]],
  ['configure.wind.speed', [['Variant.ConfigWindSpeed'], [
    ['finally', 'Dag.config']]]],
  ['mortality.scorchHeight', [['Variant.FireScorchHeight'], [
    ['when', 'configure.module', 'equals', 'scorchHeight', 'FireEllipse.scorchHeight', 'site.fire.observed.firelineIntensity', 'site.wind.speed.atMidflame', 'site.temperature.air'],
    ['when', 'configure.module', 'equals', 'treeMortality', 'Dag.bind', 'site.fire.observed.scorchHeight'],
    ['finally', 'Dag.bind', 'surface.fire.ellipse.head.scorchHeight']]]],
  ['site.fire.observed.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'flameLength', 'SurfaceFire.firelineIntensityFromFlameLength', 'site.fire.observed.flameLength'],
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.flameLength', [['Variant.FireFlameLength'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'firelineIntensity', 'SurfaceFire.flameLength', 'site.fire.observed.firelineIntensity'],
    ['finally', 'Dag.input']]]],
  ['site.temperature.air', [['Variant.AirTemperature'], [
    ['finally', 'Dag.input']]]],
  ['site.wind.speed.at10m', [['Variant.WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at10m', 'Dag.input'],
    ['finally', 'Wind.speedAt10m', 'site.wind.speed.at20ft']]]],
  ['site.wind.speed.at20ft', [['Variant.WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at20ft', 'Dag.input'],
    ['when', 'configure.wind.speed', 'equals', 'at10m', 'Wind.speedAt20ft', 'site.wind.speed.at10m'],
    ['finally', 'Wind.speedAt20ftFromMidflame', 'site.wind.speed.atMidflame', 'site.windSpeedAdjustmentFactor']]]],
  ['site.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.input'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'site.windSpeedAdjustmentFactor']]]],
  ['site.windSpeedAdjustmentFactor', [['Variant.Float'], [
    ['finally', 'Dag.input']]]]
]
