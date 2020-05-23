import { BpxDag } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'
import * as FireEllipse from '../../../equations/FireEllipse.js'
import * as SurfaceFire from '../../../equations/SurfaceFire.js'
import { ConfigDefault } from '../../BpxConfigPalette.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = BpxDag('fireEllipseStandAlone')
dag.runConfigs(ConfigDefault)

// Inputs
const spreadRate = 10
const elapsedTime = 60
const fireVectorFromHead = 45
const firelineIntensity = 5000
const lengthToWidthRatio = 3
const mapScale = 24000
const midflameWind = 880
const airTemp = 95

const Inputs = [
  ['site.fire.observed.spreadRate', [10]],
  ['site.fire.time.sinceIgnition', [60]],
  ['site.slope.direction.aspect', [225]], // upslopeNo=45, fireHeadNo=90, vectorNo=135
  ['site.fire.observed.heading.fromUpslope', [45]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.observed.heading.fromNorth', [90]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.vector.fromHead', [45]], // vectorHd=45, vectorUp=90, vectorNo=135
  ['site.fire.vector.fromUpslope', [90]], // beta and psi vector from fire head
  ['site.fire.vector.fromNorth', [135]], // beta and psi vector from fire head
  ['site.fire.observed.firelineIntensity', [5000]],
  ['site.fire.observed.lengthToWidthRatio', [3]],
  ['site.map.scale', [24000]],
  ['site.wind.speed.atMidflame', [880]],
  ['site.temperature.air', [95]]
]

// Expected values
const headRos = spreadRate
const headDist = headRos * elapsedTime
const headMap = headDist / mapScale
const headFli = firelineIntensity
const headFlame = SurfaceFire.flameLength(headFli)
const headScorch = SurfaceFire.scorchHeight(headFli, midflameWind, airTemp)

const ecc = FireEllipse.eccentricity(lengthToWidthRatio)

const backRos = FireEllipse.backingSpreadRate(headRos, ecc)
const backDist = backRos * elapsedTime
const backMap = backDist / mapScale
const backFli = FireEllipse.fliAtAzimuth(headFli, headRos, backRos)
const backFlame = SurfaceFire.flameLength(backFli)
const backScorch = SurfaceFire.scorchHeight(backFli, midflameWind, airTemp)

const major = FireEllipse.majorSpreadRate(headRos, backRos)
const minor = FireEllipse.minorSpreadRate(major, lengthToWidthRatio)
const f = FireEllipse.fSpreadRate(major)
const g = FireEllipse.gSpreadRate(major, backRos)
const h = FireEllipse.hSpreadRate(minor)

const flankRos = FireEllipse.flankingSpreadRate(minor)
const flankDist = flankRos * elapsedTime
const flankMap = flankDist / mapScale
const flankFli = FireEllipse.fliAtAzimuth(headFli, headRos, flankRos)
const flankFlame = SurfaceFire.flameLength(flankFli)
const flankScorch = SurfaceFire.scorchHeight(flankFli, midflameWind, airTemp)

const length = FireEllipse.spreadDistance(major, elapsedTime)
const lengthMap = length / mapScale
const width = FireEllipse.spreadDistance(minor, elapsedTime)
const widthMap = width / mapScale
const perimeter = FireEllipse.perimeter(length, width)
const perimeterMap = perimeter / mapScale
const area = FireEllipse.area(length, lengthToWidthRatio)
const areaMap = area / mapScale / mapScale

const beta5Ros = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const beta5Dist = beta5Ros * elapsedTime
const beta5Map = beta5Dist / mapScale
const beta5Fli = FireEllipse.fliAtAzimuth(headFli, headRos, beta5Ros)
const beta5Flame = SurfaceFire.flameLength(beta5Fli)
const beta5Scorch = SurfaceFire.scorchHeight(beta5Fli, midflameWind, airTemp)

const betaRos = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const betaDist = betaRos * elapsedTime
const betaMap = betaDist / mapScale
const betaTheta = FireEllipse.thetaFromBeta(fireVectorFromHead, f, g, h)
const betaPsi = FireEllipse.psiFromTheta(betaTheta, f, h)
const betaRosPsi = FireEllipse.psiSpreadRate(betaPsi, f, g, h)
const betaFli = FireEllipse.fliAtAzimuth(headFli, headRos, betaRosPsi)
const betaFlame = SurfaceFire.flameLength(betaFli)
const betaScorch = SurfaceFire.scorchHeight(betaFli, midflameWind, airTemp)

const psiRos = FireEllipse.psiSpreadRate(fireVectorFromHead, f, g, h)
const psiDist = psiRos * elapsedTime
const psiMap = psiDist / mapScale
const psiFli = FireEllipse.fliAtAzimuth(headFli, headRos, psiRos)
const psiFlame = SurfaceFire.flameLength(psiFli)
const psiScorch = SurfaceFire.scorchHeight(psiFli, midflameWind, airTemp)

test('1: Stand-alone fire ellipse', () => {
  dag.runConfigs([
    // IMPORTANT
    ['configure.module', 'fireEllipse'],
    [
      'configure.wind.direction',
      ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]
    ],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
    [
      'configure.fire.firelineIntensity',
      ['firelineIntensity', 'flameLength'][0]
    ],
    [
      'configure.fire.lengthToWidthRatio',
      ['lengthToWidthRatio', 'effectiveWindSpeed'][0]
    ],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
    // NOT AS IMPORTANT
    ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
    [
      'configure.fire.weightingMethod',
      ['arithmetic', 'expected', 'harmonic'][2]
    ],
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
    ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
    [
      'configure.fuel.moisture',
      ['individual', 'liveCategory', 'category', 'catalog'][0]
    ],
    [
      'configure.fuel.primary',
      ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]
    ],
    [
      'configure.fuel.secondary',
      [
        'none',
        'catalog',
        'behave',
        'chaparral',
        'palmettoGallberry',
        'westernAspen'
      ][0]
    ],
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]]
  ])
  dag.runInputs(Inputs)

  // Start with just the head fire ros as output
  dag.runSelected([['surface.fire.ellipse.head.spreadRate', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  dag.runInputs([['site.fire.observed.spreadRate', [spreadRate]]])
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value.current).toEqual(
    spreadRate
  )
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value.current).toEqual(
    headRos
  )
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value.current).toEqual(
    dag.get('site.fire.observed.spreadRate').value.current
  )

  // Add head.spreadDistance
  dag.runSelected([['surface.fire.ellipse.head.spreadDistance', true]])
  inputNodes = dag.requiredInputNodes()
  // Now requires 'site.fire.observed.spreadRate' and 'site.fire.time.sinceIgnition'
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  dag.runInputs([['site.fire.time.sinceIgnition', [60]]])
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value.current).toEqual(
    headRos
  )
  expect(
    dag.get('surface.fire.ellipse.head.spreadDistance').value.current
  ).toEqual(headDist)

  // Selecting axis, size, back, flank requires LWR input
  dag.runSelected([
    ['surface.fire.ellipse.axis.eccentricity', true],
    ['surface.fire.ellipse.axis.major.spreadRate', true],
    ['surface.fire.ellipse.axis.minor.spreadRate', true],
    ['surface.fire.ellipse.axis.f.spreadRate', true],
    ['surface.fire.ellipse.axis.g.spreadRate', true],
    ['surface.fire.ellipse.axis.h.spreadRate', true],
    ['surface.fire.ellipse.back.spreadRate', true],
    ['surface.fire.ellipse.back.spreadDistance', true],
    ['surface.fire.ellipse.flank.spreadRate', true],
    ['surface.fire.ellipse.flank.spreadDistance', true],
    ['surface.fire.ellipse.size.length', true],
    ['surface.fire.ellipse.size.width', true],
    ['surface.fire.ellipse.size.perimeter', true],
    ['surface.fire.ellipse.size.area', true]
  ])
  inputNodes = dag.requiredInputNodes()
  // Now requires ros, elapsed time, and length-to-width ratio as inputs
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  dag.runInputs([['site.fire.observed.lengthToWidthRatio', lengthToWidthRatio]])

  expect(
    dag.get('surface.fire.ellipse.axis.eccentricity').value.current
  ).toEqual(ecc)
  expect(
    dag.get('surface.fire.ellipse.axis.major.spreadRate').value.current
  ).toEqual(major)
  expect(
    dag.get('surface.fire.ellipse.axis.minor.spreadRate').value.current
  ).toEqual(minor)
  expect(
    dag.get('surface.fire.ellipse.axis.f.spreadRate').value.current
  ).toEqual(f)
  expect(
    dag.get('surface.fire.ellipse.axis.g.spreadRate').value.current
  ).toEqual(g)
  expect(
    dag.get('surface.fire.ellipse.axis.h.spreadRate').value.current
  ).toEqual(h)
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value.current).toEqual(
    headRos
  )
  expect(
    dag.get('surface.fire.ellipse.head.spreadDistance').value.current
  ).toEqual(headDist)
  expect(dag.get('surface.fire.ellipse.back.spreadRate').value.current).toEqual(
    backRos
  )
  expect(
    dag.get('surface.fire.ellipse.back.spreadDistance').value.current
  ).toEqual(backDist)
  expect(
    dag.get('surface.fire.ellipse.flank.spreadRate').value.current
  ).toEqual(flankRos)
  expect(
    dag.get('surface.fire.ellipse.flank.spreadDistance').value.current
  ).toEqual(flankDist)
  expect(dag.get('surface.fire.ellipse.size.length').value.current).toEqual(
    length
  )
  expect(dag.get('surface.fire.ellipse.size.width').value.current).toEqual(
    width
  )
  expect(dag.get('surface.fire.ellipse.size.perimeter').value.current).toEqual(
    perimeter
  )
  expect(dag.get('surface.fire.ellipse.size.area').value.current).toEqual(area)

  // Selecting beta or psi requires vector from fire head
  dag.runSelected([
    ['surface.fire.ellipse.beta.spreadRate', true],
    ['surface.fire.ellipse.beta.spreadDistance', true],
    ['surface.fire.ellipse.beta5.spreadRate', true],
    ['surface.fire.ellipse.beta5.spreadDistance', true],
    ['surface.fire.ellipse.psi.spreadRate', true],
    ['surface.fire.ellipse.psi.spreadDistance', true]
  ])

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))

  dag.runInputs([['site.fire.vector.fromHead', [fireVectorFromHead]]])
  expect(dag.get('site.fire.vector.fromHead').value.current).toEqual(
    fireVectorFromHead
  )
  expect(dag.get('surface.fire.ellipse.beta.spreadRate').value.current).toEqual(
    betaRos
  )
  expect(
    dag.get('surface.fire.ellipse.beta.spreadDistance').value.current
  ).toEqual(betaDist)
  expect(
    dag.get('surface.fire.ellipse.beta5.spreadRate').value.current
  ).toEqual(beta5Ros)
  expect(
    dag.get('surface.fire.ellipse.beta5.spreadDistance').value.current
  ).toEqual(beta5Dist)
  expect(dag.get('surface.fire.ellipse.psi.spreadRate').value.current).toEqual(
    psiRos
  )
  expect(
    dag.get('surface.fire.ellipse.psi.spreadDistance').value.current
  ).toEqual(psiDist)

  // Selecting map distances requires map scale
  dag.runSelected([
    ['surface.fire.ellipse.head.mapDistance', true],
    ['surface.fire.ellipse.back.mapDistance', true],
    ['surface.fire.ellipse.flank.mapDistance', true],
    ['surface.fire.ellipse.beta.mapDistance', true],
    ['surface.fire.ellipse.beta5.mapDistance', true],
    ['surface.fire.ellipse.psi.mapDistance', true],
    ['surface.fire.ellipse.map.area', true],
    ['surface.fire.ellipse.map.perimeter', true],
    ['surface.fire.ellipse.map.length', true],
    ['surface.fire.ellipse.map.width', true]
  ])

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))

  dag.runInputs([['site.map.scale', [mapScale]]])
  expect(
    dag.get('surface.fire.ellipse.head.mapDistance').value.current
  ).toEqual(headMap)
  expect(
    dag.get('surface.fire.ellipse.back.mapDistance').value.current
  ).toEqual(backMap)
  expect(
    dag.get('surface.fire.ellipse.flank.mapDistance').value.current
  ).toBeCloseTo(flankMap, 12)
  expect(
    dag.get('surface.fire.ellipse.beta.mapDistance').value.current
  ).toEqual(betaMap)
  expect(
    dag.get('surface.fire.ellipse.beta5.mapDistance').value.current
  ).toEqual(beta5Map)
  expect(dag.get('surface.fire.ellipse.psi.mapDistance').value.current).toEqual(
    psiMap
  )
  expect(dag.get('surface.fire.ellipse.map.area').value.current).toEqual(
    areaMap
  )
  expect(dag.get('surface.fire.ellipse.map.perimeter').value.current).toEqual(
    perimeterMap
  )
  expect(dag.get('surface.fire.ellipse.map.length').value.current).toEqual(
    lengthMap
  )
  expect(dag.get('surface.fire.ellipse.map.width').value.current).toBeCloseTo(
    widthMap,
    12
  )

  // Selecting fireline intensity and flame length requires fireline intensity input
  dag.runSelected([
    ['surface.fire.ellipse.head.firelineIntensity', true],
    ['surface.fire.ellipse.head.flameLength', true],
    ['surface.fire.ellipse.back.firelineIntensity', true],
    ['surface.fire.ellipse.back.flameLength', true],
    ['surface.fire.ellipse.flank.firelineIntensity', true],
    ['surface.fire.ellipse.flank.flameLength', true],
    ['surface.fire.ellipse.beta.firelineIntensity', true],
    ['surface.fire.ellipse.beta.flameLength', true],
    ['surface.fire.ellipse.beta5.firelineIntensity', true],
    ['surface.fire.ellipse.beta5.flameLength', true],
    ['surface.fire.ellipse.psi.firelineIntensity', true],
    ['surface.fire.ellipse.psi.flameLength', true]
  ])

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  dag.runInputs([['site.fire.observed.firelineIntensity', [firelineIntensity]]])
  expect(
    dag.get('surface.fire.ellipse.head.firelineIntensity').value.current
  ).toEqual(headFli)
  expect(
    dag.get('surface.fire.ellipse.head.flameLength').value.current
  ).toEqual(headFlame)
  expect(
    dag.get('surface.fire.ellipse.back.firelineIntensity').value.current
  ).toEqual(backFli)
  expect(
    dag.get('surface.fire.ellipse.back.flameLength').value.current
  ).toEqual(backFlame)
  expect(
    dag.get('surface.fire.ellipse.flank.firelineIntensity').value.current
  ).toEqual(flankFli)
  expect(
    dag.get('surface.fire.ellipse.flank.flameLength').value.current
  ).toEqual(flankFlame)
  expect(
    dag.get('surface.fire.ellipse.beta.firelineIntensity').value.current
  ).toEqual(betaFli)
  expect(
    dag.get('surface.fire.ellipse.beta.flameLength').value.current
  ).toEqual(betaFlame)
  expect(
    dag.get('surface.fire.ellipse.beta5.firelineIntensity').value.current
  ).toEqual(beta5Fli)
  expect(
    dag.get('surface.fire.ellipse.beta5.flameLength').value.current
  ).toEqual(beta5Flame)
  expect(
    dag.get('surface.fire.ellipse.psi.firelineIntensity').value.current
  ).toEqual(psiFli)
  expect(dag.get('surface.fire.ellipse.psi.flameLength').value.current).toEqual(
    psiFlame
  )

  // Selecting scorch height requires midflame wind and air temp
  dag.runSelected([
    ['surface.fire.ellipse.head.scorchHeight', true],
    ['surface.fire.ellipse.back.scorchHeight', true],
    ['surface.fire.ellipse.flank.scorchHeight', true],
    ['surface.fire.ellipse.beta.scorchHeight', true],
    ['surface.fire.ellipse.beta5.scorchHeight', true],
    ['surface.fire.ellipse.psi.scorchHeight', true]
  ])

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))

  dag.runInputs([
    ['site.temperature.air', [airTemp]],
    ['site.wind.speed.atMidflame', midflameWind]
  ])
  expect(
    dag.get('surface.fire.ellipse.head.scorchHeight').value.current
  ).toEqual(headScorch)
  expect(
    dag.get('surface.fire.ellipse.back.scorchHeight').value.current
  ).toEqual(backScorch)
  expect(
    dag.get('surface.fire.ellipse.flank.scorchHeight').value.current
  ).toEqual(flankScorch)
  expect(
    dag.get('surface.fire.ellipse.beta.scorchHeight').value.current
  ).toEqual(betaScorch)
  expect(
    dag.get('surface.fire.ellipse.beta5.scorchHeight').value.current
  ).toEqual(beta5Scorch)
  expect(
    dag.get('surface.fire.ellipse.psi.scorchHeight').value.current
  ).toEqual(psiScorch)
})
