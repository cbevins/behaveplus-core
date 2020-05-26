import { BpxDag } from '../BpxDag.js'
import { ConfigMinimalInput } from '../BpxConfigPalette.js'
import * as DagJest from '../../utils/matchers.js'

const sig = DagJest.sig
expect.extend({ sig })

// console.log('1: Creating Dag ===============================')
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
  // console.log('2: dag.setConfigs(ConfigMinimalInput) ===========')
  dag.setConfigs(ConfigMinimalInput)
  // console.log('3: dag.setConfigs([[configure.model, surfaceFire]]) ===========')
  dag.setConfigs([['configure.module', 'surfaceFire']])
  // console.log('4: dag.runSelected([[ros, ture]]) ===========')
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

  // console.log('5: dag.runInputs(Inputs) ========================')
  dag.runInputs(Inputs)

  expect(tl1h.status.isEnabled).toEqual(true)
  // console.log(
  //   '6: dag.runEnabled(site.moisture, false) ========================'
  // )
  dag.runEnabled('site.moisture', false)
  const disabledNodes = dag.enabledNodes(false)
  expect(disabledNodes.length).toEqual(7)
  expect(tl1h.status.isEnabled).toEqual(false)

  danglerNodes = dag.danglerNodes()
  expect(danglerNodes.length).toEqual(0)
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3) // 3
  expect(tl1h.status.isEnabled).toEqual(false)

  // console.log('7: dag.runInputs(Inputs) ========================')
  dag.runInputs(Inputs)
  expect(tl1h.status.isEnabled).toEqual(false)
})
