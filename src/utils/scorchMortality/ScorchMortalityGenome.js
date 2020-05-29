// Scorch-Mortality Module Genome (19 nodes)
export const GenomeArray = [
  ['configure.fire.firelineIntensity', [['Variant.ConfigFirelineIntensity'], [
    ['finally', 'Dag.config']]]],
  ['configure.module', [['Variant.ConfigModule'], [
    ['finally', 'Dag.config']]]],
  ['configure.wind.speed', [['Variant.ConfigWindSpeed'], [
    ['finally', 'Dag.config']]]],
  ['mortality.crownLengthScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownLengthScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['mortality.crownVolumeScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownVolumeScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['mortality.rate', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['mortality.scorchHeight', [['Variant.FireScorchHeight'], [
    ['when', 'configure.module', 'equals', 'scorchHeight', 'FireEllipse.scorchHeight', 'site.fire.observed.firelineIntensity', 'site.wind.speed.atMidflame', 'site.temperature.air'],
    ['when', 'configure.module', 'equals', 'treeMortality', 'Dag.bind', 'site.fire.observed.scorchHeight'],
    ['finally', 'Dag.bind', 'surface.fire.ellipse.head.scorchHeight']]]],
  ['site.canopy.crown.baseHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.crown.totalHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.tree.barkThickness', [['Variant.TreeBarkThickness'], [
    ['finally', 'TreeMortality.barkThickness', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh']]]],
  ['site.canopy.tree.dbh', [['Variant.TreeDbh'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.tree.species.fofem6.code', [['Variant.TreeSpeciesFofem6Option'], [
    ['finally', 'Dag.input']]]],
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
