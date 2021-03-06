export const genome = [
  ['surface.fire.ellipse.axis.eccentricity', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'FireEllipse.eccentricity',
      'surface.fire.ellipse.axis.lengthToWidthRatio']
  ]]],
  ['surface.fire.ellipse.axis.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'site.fire.observed.effectiveWindSpeed']
  ]]],
  ['surface.fire.ellipse.axis.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.lengthToWidthRatio'],
    ['finally', 'Dag.bind', 'site.fire.observed.lengthToWidthRatio']
  ]]],
  ['surface.fire.ellipse.axis.major.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.majorSpreadRate',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.back.spreadRate']
  ]]],
  ['surface.fire.ellipse.axis.minor.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.minorSpreadRate',
      'surface.fire.ellipse.axis.major.spreadRate',
      'surface.fire.ellipse.axis.lengthToWidthRatio']
  ]]],
  ['surface.fire.ellipse.axis.f.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.fSpreadRate',
      'surface.fire.ellipse.axis.major.spreadRate']
  ]]],
  ['surface.fire.ellipse.axis.g.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.gSpreadRate',
      'surface.fire.ellipse.axis.major.spreadRate',
      'surface.fire.ellipse.back.spreadRate']
  ]]],
  ['surface.fire.ellipse.axis.h.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.hSpreadRate',
      'surface.fire.ellipse.axis.minor.spreadRate']
  ]]],
  // end 'surface.fire.ellipse.axis'
  ['surface.fire.ellipse.vector.fromHead', [['Variant.CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Dag.bind', 'site.fire.vector.fromHead'],
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Compass.diff',
      'surface.fire.ellipse.vector.fromUpslope',
      'surface.fire.ellipse.heading.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff',
      'surface.fire.ellipse.vector.fromNorth',
      'surface.fire.ellipse.heading.fromNorth'],
    ['finally', 'Compass.diff',
      'surface.fire.ellipse.vector.fromNorth',
      'surface.fire.ellipse.heading.fromNorth']
  ]]],
  ['surface.fire.ellipse.vector.fromNorth', [['Variant.CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Dag.bind', 'site.fire.vector.fromNorth'],
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Compass.sum',
      'surface.fire.ellipse.vector.fromHead',
      'surface.fire.ellipse.heading.fromNorth'],
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Compass.sum',
      'surface.fire.ellipse.vector.fromUpslope',
      'site.slope.direction.upslope'],
    ['finally', 'Compass.sum',
      'surface.fire.ellipse.vector.fromUpslope',
      'site.slope.direction.upslope']
  ]]],
  ['surface.fire.ellipse.vector.fromUpslope', [['Variant.CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Dag.bind', 'site.fire.vector.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Compass.sum',
      'surface.fire.ellipse.vector.fromHead',
      'surface.fire.ellipse.heading.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff',
      'surface.fire.ellipse.vector.fromNorth',
      'site.slope.direction.upslope'],
    ['finally', 'Compass.diff',
      'surface.fire.ellipse.vector.fromNorth',
      'site.slope.direction.upslope']
  ]]],
  // end 'surface.fire.ellipse.vector'
  ['surface.fire.ellipse.size.area', [['Variant.FireArea'], [
    ['finally', 'FireEllipse.area',
      'surface.fire.ellipse.size.length',
      'surface.fire.ellipse.axis.lengthToWidthRatio']
  ]]],
  ['surface.fire.ellipse.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.axis.major.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.perimeter',
      'surface.fire.ellipse.size.length',
      'surface.fire.ellipse.size.width'
    ]
  ]]],
  ['surface.fire.ellipse.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.axis.minor.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  // end 'surface.fire.ellipse.size'
  ['surface.fire.ellipse.map.area', [['Variant.MapArea'], [
    ['finally', 'FireEllipse.mapArea',
      'surface.fire.ellipse.size.area',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.size.length',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.size.perimeter',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.size.width',
      'site.map.scale'
    ]
  ]]],
  // end 'surface.fire.ellipse.map'
  ['surface.fire.ellipse.back.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.back.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.back.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.back.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.back.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength',
      'surface.fire.ellipse.back.firelineIntensity'
    ]
  ]]],
  ['surface.fire.ellipse.back.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.back.spreadDistance',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.back.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.backingSpreadRate',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.axis.eccentricity'
    ]
  ]]],
  ['surface.fire.ellipse.back.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.back.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air'
    ]
  ]]],
  ['surface.fire.ellipse.back.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.back.scorchHeight']
  ]]],
  // end 'surface.fire.ellipse.back'
  ['surface.fire.ellipse.flank.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.flank.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.flank.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.flank.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.flank.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength',
      'surface.fire.ellipse.flank.firelineIntensity'
    ]
  ]]],
  ['surface.fire.ellipse.flank.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.flank.spreadDistance',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.flank.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.flankingSpreadRate',
      'surface.fire.ellipse.axis.minor.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.flank.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.flank.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air'
    ]
  ]]],
  ['surface.fire.ellipse.flank.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.flank.scorchHeight']
  ]]],
  // end 'surface.fire.ellipse.flank'
  ['surface.fire.ellipse.head.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.head.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.head.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    // If surfaceFire Module is active, bind to surface fire weighted fireline intensity
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    // Otherwise, bind to the input site.fire.observed.firelineIntensity
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']
  ]]],
  ['surface.fire.ellipse.head.flameLength', [['Variant.FireFlameLength'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength']
  ]]],
  ['surface.fire.ellipse.head.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.head.spreadDistance',
      'site.map.scale']
  ]]],
  ['surface.fire.ellipse.head.spreadRate', [['Variant.FireSpreadRate'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.spreadRate'],
    ['finally', 'Dag.bind', 'site.fire.observed.spreadRate']
  ]]],
  ['surface.fire.ellipse.head.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air']
  ]]],
  ['surface.fire.ellipse.head.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.head.scorchHeight']
  ]]],
  // end 'surface.fire.ellipse.head'
  ['surface.fire.ellipse.psi.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.psi.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.psi.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.psi.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.psi.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength',
      'surface.fire.ellipse.psi.firelineIntensity'
    ]
  ]]],
  ['surface.fire.ellipse.psi.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.psi.spreadDistance',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.psi.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate',
      'surface.fire.ellipse.vector.fromHead',
      'surface.fire.ellipse.axis.f.spreadRate',
      'surface.fire.ellipse.axis.g.spreadRate',
      'surface.fire.ellipse.axis.h.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.psi.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.psi.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air'
    ]
  ]]],
  ['surface.fire.ellipse.psi.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.psi.scorchHeight']
  ]]],
  // end 'surface.fire.ellipse.psi'
  ['surface.fire.ellipse.beta5.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.beta5.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.beta5.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.beta.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.beta5.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength',
      'surface.fire.ellipse.beta5.firelineIntensity'
    ]
  ]]],
  ['surface.fire.ellipse.beta5.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.beta5.spreadDistance',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.beta5.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.fire.ellipse.beta.spreadRate']
  ]]],
  ['surface.fire.ellipse.beta5.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.beta5.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air'
    ]
  ]]],
  ['surface.fire.ellipse.beta5.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.beta5.scorchHeight']
  ]]],
  // end 'surface.fire.ellipse.beta5'
  ['surface.fire.ellipse.beta.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance',
      'surface.fire.ellipse.beta.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['surface.fire.ellipse.beta.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.beta.psiSpreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.beta.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength',
      'surface.fire.ellipse.beta.firelineIntensity'
    ]
  ]]],
  ['surface.fire.ellipse.beta.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'surface.fire.ellipse.beta.spreadDistance',
      'site.map.scale'
    ]
  ]]],
  ['surface.fire.ellipse.beta.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.betaSpreadRate',
      'surface.fire.ellipse.vector.fromHead',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.axis.eccentricity'
    ]
  ]]],
  ['surface.fire.ellipse.beta.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight',
      'surface.fire.ellipse.beta.firelineIntensity',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'site.temperature.air'
    ]
  ]]],
  ['surface.fire.ellipse.beta.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'surface.fire.ellipse.beta.scorchHeight']
  ]]],
  ['surface.fire.ellipse.beta.theta', [['Variant.CompassAzimuth'], [
    ['finally', 'FireEllipse.thetaFromBeta',
      'surface.fire.ellipse.vector.fromHead',
      'surface.fire.ellipse.axis.f.spreadRate',
      'surface.fire.ellipse.axis.g.spreadRate',
      'surface.fire.ellipse.axis.h.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.beta.psi', [['Variant.CompassAzimuth'], [
    ['finally', 'FireEllipse.psiFromTheta',
      'surface.fire.ellipse.beta.theta',
      'surface.fire.ellipse.axis.f.spreadRate',
      'surface.fire.ellipse.axis.h.spreadRate'
    ]
  ]]],
  ['surface.fire.ellipse.beta.psiSpreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate',
      'surface.fire.ellipse.beta.psi',
      'surface.fire.ellipse.axis.f.spreadRate',
      'surface.fire.ellipse.axis.g.spreadRate',
      'surface.fire.ellipse.axis.h.spreadRate'
    ]
  ]]],
  // end 'surface.fire.ellipse.beta'
  ['surface.fire.ellipse.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.heading.fromUpslope'],
    ['finally', 'Dag.bind', 'site.fire.observed.heading.fromUpslope']
  ]]],
  ['surface.fire.ellipse.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.sum',
      'site.slope.direction.upslope',
      'surface.fire.ellipse.heading.fromUpslope'
    ]
  ]]],
  ['surface.fire.ellipse.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.wind.speed.atMidflame'],
    ['finally', 'Dag.bind', 'site.wind.speed.atMidflame']
  ]]]
  // end 'surface.fire.ellipse'
]
