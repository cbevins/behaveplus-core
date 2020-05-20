export const genome = [
  ['mortality.scorchHeight', [['Variant.FireScorchHeight'], [
    // If stand-alone scorch height, calculate scorchHeight
    ['when', 'configure.module', 'equals', 'scorchHeight',
      'FireEllipse.scorchHeight',
      'site.fire.observed.firelineIntensity',
      'site.wind.speed.atMidflame',
      'site.temperature.air'],
    // If stand-alone treeMortality, input the observed scorch height
    ['when', 'configure.module', 'equals', 'treeMortality',
      'Dag.bind', 'site.fire.observed.scorchHeight'],
    // otherwise link to fireEllipse (or surfaceFire)
    ['finally', 'Dag.bind', 'surface.fire.ellipse.head.scorchHeight']
  ]]],
  ['mortality.rate', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]],
  ['mortality.crownLengthScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownLengthScorched',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]],
  ['mortality.crownVolumeScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownVolumeScorched',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]]
]
