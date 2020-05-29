import { BpxDag } from '../BpxDag.js'
import { ConfigMinimalInput } from '../BpxConfigPalette.js'
import * as DagJest from '../../utils/matchers.js'

const sig = DagJest.sig
expect.extend({ sig })

const dag = BpxDag('megaTest')
const windSpeed = dag.get('site.wind.speed.atMidflame')
const deadMois = dag.get('site.moisture.dead.category')
const tl1h = dag.get('site.moisture.dead.tl1h')
const liveMois = dag.get('site.moisture.live.category')
const slope = dag.get('site.slope.steepness.ratio')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')
const ros = dag.get('surface.primary.fuel.fire.spreadRate')

const Inputs = [
  [catalogKey, ['10']],
  [deadMois, [0.05]],
  [liveMois, [1.5]],
  [slope, [0.25]],
  [windSpeed, [880]]
]

test('Dag danglers', () => {
  dag.setConfigs(ConfigMinimalInput)
  dag.setConfigs([['configure.module', 'surfaceFire']])
  dag.runSelected([[ros, true]])
  let danglerNodes = dag.danglerNodes()
  expect(danglerNodes.length).toEqual(0)

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(catalogKey)
  expect(inputNodes).toContain(deadMois)
  expect(inputNodes).toContain(liveMois)
  expect(inputNodes).toContain(slope)
  expect(inputNodes).toContain(windSpeed)

  dag.runInputs(Inputs)

  // DISABLE site.moisture
  expect(tl1h.status.isEnabled).toEqual(true)
  dag.runEnabled('site.moisture', false)
  const disabledNodes = dag.enabledNodes(false)
  expect(disabledNodes.length).toEqual(7)
  expect(tl1h.status.isEnabled).toEqual(false)

  danglerNodes = dag.danglerNodes()
  // console.log(DagJest.arrayList(danglerNodes, 'Danglers'))
  // 9 primary moisture content particle bindings,
  // 9 secondary moisture content particle bindings,
  // 6 crown canopy moisture content particle bindings,
  // 2 primary and secondary cured herb fraction method calls,
  // 2 ignition probability method calls,
  expect(danglerNodes.length).toEqual(28)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(13)
  //  5 inputs before disabled
  // -2 the site.moisture.* disabled inputs
  // +9 surface.primary.fuel.bed....moistureContent inputs
  // +1 cured herb fraction input
  // console.log(DagJest.arrayList(inputNodes, 'Dangler inputs'))

  // Setting the moisture inputs should just be ignored
  // Coverage test...
  dag.runInputs(Inputs)
})
