export const Palette = [
  ['palette/label@en_US', 'Please select a Variable palette'],
  ['palette.value.common/label@en_US', 'most commonly used variables'],
  [
    'palette.value.intermediate/label@en_US',
    'more technical, intermediate variables'
  ],
  ['palette.value.advanced/label@en_US', 'most advanced, wonky variables']
]

export const Selector = [
  ['selector.graph.x.variable/label@en_US', 'Select the graph X variable'],
  ['selector.graph.y.variable/label@en_US', 'Select the graph Y variable']
]

export const Module = [
  ['module/label@en_US', 'Please select a BehavePlus module'],
  ['module.value.surfaceFire/label@en_US', 'Surface Fire'],
  ['module.value.fireEllipse/label@en_US', 'Fire Ellipse'],
  ['module.value.scorchHeight/label@en_US', 'Scorch Height'],
  ['module.value.treeMortality/label@en_US', 'Tree Mortality'],
  ['module.value.crownFire/label@en_US', 'Crown Fire'],
  ['module.value.spottingDistance/label@en_US', 'Spotting Distance'],
  ['module.value.ignitionProbability/label@en_US', 'Ignition Probability']
]

export const Product = [
  ['product/label@en_US', 'Please select a product'],
  ['product.value.graph/label@en_US', 'Graph'],
  [
    'product.value.list/label@en_US',
    'Table with single values for all inputs and outputs'
  ],
  [
    'product.value.oneWay/label@en_US',
    'Table with output values for columns and 1 ranged input for rows'
  ],
  [
    'product.value.twoWay/label@en_US',
    'Table of output values for cells and 2 ranged inputs for rows and columns'
  ],
  ['product.value.records/label@en_US', 'A set of data records'],
  ['product.value.diagram/label@en_US', 'A diagram'],
  ['product.value.cases/label@en_US', 'A set of case-wise comparisons'],
  ['product.value.timeSeries/label@en_US', 'A time series']
]

export const Surface = [
  [
    'surface.fire.ellipse.axis.lengthToWidthRatio/label@en_US',
    'Fire Ellipse Length-toWidth Ratio'
  ],
  [
    'surface.fire.ellipse.head.spreadRate/label@en_US',
    'Spread Rate at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.head.firelineIntensity/label@en_US',
    'Fireline Intensity at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.head.flameLength/label@en_US',
    'Flame Length at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.head.scorchHeight/label@en_US',
    'Scorch Height at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.head.spreadDistance/label@en_US',
    'Spread Distance at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.head.treeMortality/label@en_US',
    'Tree Mortality at Ellipse Head'
  ],
  [
    'surface.fire.ellipse.axis.eccentricity/label@en_US',
    'Fire Ellipse Eccentricity'
  ],
  [
    'surface.primary.fuel.bed.packingRatio/label@en_US',
    'Primary Fuel Bed Packing Ratio'
  ],
  [
    'surface.weighted.fire.arithmeticMean.spreadRate/label@en_US',
    'Maximum Spread Rate'
  ],
  [
    'surface.weighted.fire.heading.fromUpslope/label@en_US',
    'Direction of Maximum Spread from Upslope'
  ],
  ['surface.weighted.fire.heatPerUnitArea/label@en_US', 'Heat per Unit Area']
]

export const Site = [
  ['site.moisture.dead.tl1h/label@en_US', 'Dead 1-h Fuel Moisture'],
  ['site.moisture.dead.tl10h/label@en_US', 'Dead 10-h Fuel Moisture'],
  ['site.moisture.dead.tl100h/label@en_US', 'Dead 100-h Fuel Moisture'],
  ['site.moisture.live.herb/label@en_US', 'Live Herbaceous Fuel Moisture'],
  ['site.moisture.live.stem/label@en_US', 'Live Stem Fuel Moisture']
]

export const Configure = [
  [
    'configure.fuel.primary/label@en_US',
    'Primary fuels are specified by entering'
  ],
  ['configure.fuel.primary.value.catalog/label@en_US', 'a fuel catalog key'],
  ['configure.fuel.primary.value.behave/label@en_US', 'Behave fuel parameters'],
  [
    'configure.fuel.primary.value.chaparral/label@en_US',
    'chaparral dynamic stand parameters'
  ],
  [
    'configure.fuel.primary.value.palmettoGallberry/label@en_US',
    'palmetto-gallberry dynamic stand parameters'
  ],
  [
    'configure.fuel.primary.value.westernAspen/label@en_US',
    'western aspen dynamic stand parameters'
  ],
  [
    'configure.fuel.secondary/label@en_US',
    'Secondary fuels are specified by entering'
  ],
  [
    'configure.fuel.secondary.value.none/label@en_US',
    'there is no secondary fuel'
  ],
  ['configure.fuel.secondary.value.catalog/label@en_US', 'a fuel catalog key'],
  [
    'configure.fuel.secondary.value.behave/label@en_US',
    'Behave fuel parameters'
  ],
  [
    'configure.fuel.secondary.value.chaparral/label@en_US',
    'chaparral dynamic stand parameters'
  ],
  [
    'configure.fuel.secondary.value.palmettoGallberry/label@en_US',
    'palmetto-gallberry dynamic stand parameters'
  ],
  [
    'configure.fuel.secondary.value.westernAspen/label@en_US',
    'western aspen dynamic stand parameters'
  ]
]

export const TranslationMap = new Map([
  ...Module,
  ...Palette,
  ...Product,
  ...Selector,
  ...Configure,
  ...Site,
  ...Surface
])
