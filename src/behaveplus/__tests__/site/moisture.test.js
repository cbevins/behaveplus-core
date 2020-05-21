import { BpxDag } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const dag = new BpxDag('windDirection')

dag.runConfigs([
  ['configure.module', 'surfaceFire'],
  [
    'configure.fuel.moisture',
    ['individual', 'liveCategory', 'category', 'catalog'][0]
  ],
  // NOT AS IMPORTANT
  [
    'configure.wind.direction',
    ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]
  ],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  [
    'configure.fire.lengthToWidthRatio',
    ['lengthToWidthRatio', 'effectiveWindSpeed'][0]
  ],
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
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

// Moisture Nodes
const moisCfg = dag.get('configure.fuel.moisture')
const d1Mois = dag.get(
  'surface.primary.fuel.bed.dead.particle.class1.moistureContent'
)
const l1Mois = dag.get(
  'surface.primary.fuel.bed.live.particle.class1.moistureContent'
)

const moisTl1h = dag.get('site.moisture.dead.tl1h')
const moisTl10h = dag.get('site.moisture.dead.tl10h')
const moisTl100h = dag.get('site.moisture.dead.tl100h')
const moisDead = dag.get('site.moisture.dead.category')

const moisHerb = dag.get('site.moisture.live.herb')
const moisStem = dag.get('site.moisture.live.stem')
const moisLive = dag.get('site.moisture.live.category')

const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

test('1: Fuel moisture configuration', () => {
  dag.runConfigs([
    ['configure.module', 'surfaceFire'],
    [
      'configure.fuel.moisture',
      ['individual', 'liveCategory', 'category', 'catalog'][0]
    ]
  ])
  expect(moisCfg.value.current).toEqual('individual')

  dag.runSelected([
    [moisTl1h, true],
    [moisTl10h, true],
    [moisTl100h, true],
    [moisHerb, true],
    [moisStem, true],
    [d1Mois, true],
    [l1Mois, true]
  ])

  dag.runInputs([
    [moisTl1h, 0.05],
    [moisTl10h, 0.07],
    [moisTl100h, 0.09],
    [moisHerb, 0.5],
    [moisStem, 1.5],
    [d1Mois, 0.05],
    [l1Mois, 0.5]
  ])

  expect(moisCfg.value.current).toEqual('individual') // '\nMoisture config is \'individual\'')
  let inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(catalogKey)
  expect(inputNodes).toContain(moisTl1h)
  expect(inputNodes).toContain(moisTl10h)
  expect(inputNodes).toContain(moisTl100h)
  expect(inputNodes).toContain(moisHerb)
  expect(inputNodes).toContain(moisStem)
  expect(inputNodes).not.toContain(moisDead)
  expect(inputNodes).not.toContain(moisLive)
  expect(moisTl1h.value.current).toEqual(0.05)
  expect(moisTl10h.value.current).toEqual(0.07)
  expect(moisTl100h.value.current).toEqual(0.09)
  expect(moisDead.value.current).toEqual(0) // not yet selected or required, so no value
  expect(moisHerb.value.current).toEqual(0.5)
  expect(moisStem.value.current).toEqual(1.5)
  expect(moisLive.value.current).toEqual(0) // not yet selected or required, so no value
  expect(d1Mois.value.current).toEqual(0.05)
  expect(l1Mois.value.current).toEqual(0.5)

  dag.runConfigs([[moisCfg, 'category']])
  expect(moisCfg.value.current).toEqual('category')
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(catalogKey)
  expect(inputNodes).not.toContain(moisTl1h)
  expect(inputNodes).not.toContain(moisTl10h)
  expect(inputNodes).not.toContain(moisTl100h)
  expect(inputNodes).not.toContain(moisHerb)
  expect(inputNodes).not.toContain(moisStem)
  expect(inputNodes).toContain(moisDead)
  expect(inputNodes).toContain(moisLive)
  dag.runInputs([
    [moisDead, 0.06],
    [moisLive, 2]
  ])
  expect(moisTl1h.value.current).toEqual(0.06)
  expect(moisTl10h.value.current).toEqual(0.06)
  expect(moisTl100h.value.current).toEqual(0.06)
  expect(moisDead.value.current).toEqual(0.06)
  expect(moisHerb.value.current).toEqual(2)
  expect(moisStem.value.current).toEqual(2)
  expect(moisLive.value.current).toEqual(2)
  expect(d1Mois.value.current).toEqual(0.06)
  expect(l1Mois.value.current).toEqual(2)

  dag.runConfigs([[moisCfg, 'liveCategory']])
  expect(moisCfg.value.current).toEqual('liveCategory')
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(catalogKey)
  expect(inputNodes).toContain(moisTl1h)
  expect(inputNodes).toContain(moisTl10h)
  expect(inputNodes).toContain(moisTl100h)
  expect(inputNodes).not.toContain(moisHerb)
  expect(inputNodes).not.toContain(moisStem)
  expect(inputNodes).not.toContain(moisDead)
  expect(inputNodes).toContain(moisLive)
  expect(moisTl1h.value.current).toEqual(0.05)
  expect(moisTl10h.value.current).toEqual(0.07)
  expect(moisTl100h.value.current).toEqual(0.09)
  expect(moisDead.value.current).toEqual(0.06)
  expect(moisHerb.value.current).toEqual(2)
  expect(moisStem.value.current).toEqual(2)
  expect(moisLive.value.current).toEqual(2)
  expect(d1Mois.value.current).toEqual(0.05)
  expect(l1Mois.value.current).toEqual(2)
})
