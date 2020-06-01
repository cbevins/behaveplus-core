export const Products = [
  'graph',
  'list',
  'oneWay',
  'twoWay',
  'records',
  'diagram',
  'cases',
  'timeSeries'
]

export const Variables = {
  surfaceFire: {
    common: [
      'surface.weighted.fire.arithmeticMean.spreadRate',
      'surface.weighted.fire.heading.fromUpslope'
    ],
    intermediate: ['surface.weighted.fire.heatPerUnitArea'],
    advanced: ['surface.primary.fuel.bed.packingRatio']
  },
  fireEllipse: {
    common: [
      'surface.fire.ellipse.axis.lengthToWidthRatio',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.flameLength',
      'surface.fire.ellipse.head.scorchHeight',
      'surface.fire.ellipse.head.spreadDistance',
      'surface.fire.ellipse.head.treeMortality'
    ],
    intermediate: ['surface.fire.ellipse.axis.eccentricity'],
    advanced: []
  },
  scorchHeight: {
    common: [],
    intermediate: [],
    advanced: []
  },
  treeMortality: {
    common: [],
    intermediate: [],
    advanced: []
  },
  crownFire: {
    common: [],
    intermediate: [],
    advanced: []
  },
  spottingDistance: {
    common: [],
    intermediate: [],
    advanced: []
  },
  ignitionProbability: {
    common: [],
    intermediate: [],
    advanced: []
  }
}

export const Modules = Object.keys(Variables)
export const Palettes = Object.keys(Variables.surfaceFire)
