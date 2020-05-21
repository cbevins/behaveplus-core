/* eslint-disable no-unused-vars */
import { BpxDag, NodeMapSize, MethodMapSize } from '../../behavePlus/BpxDag.js'
import { ConfigMinimalInput } from '../../behaveplus/BpxConfigPalette.js'

test('Bpx.Dag constructor', () => {
  const dag = BpxDag('simple')
  expect(dag.id.root.shared.genomeArray instanceof Array).toEqual(true)
  expect(
    typeof dag.id.root.shared.variantMapConstructor === 'function'
  ).toEqual(true)
  expect(dag.id.root.shared.methodMap instanceof Map).toEqual(true)
  expect(dag.node.map.size).toEqual(NodeMapSize)
  expect(dag.method.map.size).toEqual(MethodMapSize)
  expect(
    dag.node.map.has(
      'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad'
    )
  ).toEqual(true)
})

test('Simple configuration, selection, inputs, batch', () => {
  const dag = BpxDag('simple')

  const configWaf = dag.node.map.get('configure.fuel.windSpeedAdjustmentFactor')
  expect(configWaf.value.current).toEqual('input')

  const waf = dag.node.map.get(
    'surface.primary.fuel.fire.windSpeedAdjustmentFactor'
  )
  expect(waf.method.key).toEqual('Dag.bind')
  expect(waf.method.parms[0]).toEqual(
    dag.node.map.get('site.windSpeedAdjustmentFactor')
  )

  // Step 1 - configuration
  dag.runConfigs([['configure.fuel.windSpeedAdjustmentFactor', 'estimated']])
  expect(configWaf.value.current).toEqual('estimated')
  expect(waf.method.key).toEqual('SurfaceFire.windSpeedAdjustmentFactor')
  expect(waf.method.parms[0]).toEqual(
    dag.node.map.get('site.canopy.fuel.isSheltered')
  )
  expect(waf.method.parms[1]).toEqual(
    dag.node.map.get('site.canopy.sheltered.windSpeedAdjustmentFactor')
  )
  expect(waf.method.parms[2]).toEqual(
    dag.node.map.get('surface.primary.fuel.bed.open.windSpeedAdjustmentFactor')
  )

  // Step 1b - try minimal configuration
  dag.runConfigs(ConfigMinimalInput)

  // Step 2 - selection
  expect(dag.node.map.has('surface.weighted.fire.spreadRate')).toEqual(true)
  const ros = dag.node.map.get('surface.weighted.fire.spreadRate')
  expect(dag.node.map.has('surface.fire.ellipse.head.spreadDistance')).toEqual(
    true
  )
  const dist = dag.node.map.get('surface.fire.ellipse.head.spreadDistance')
  expect(ros.status.isSelected).toEqual(false)
  expect(dist.status.isSelected).toEqual(false)

  // Here it is...
  dag.runSelected([
    [ros, true],
    [dist, true]
  ])
  expect(ros.status.isSelected).toEqual(true)
  expect(dist.status.isSelected).toEqual(true)
  expect(dag.sorted.nodes.length).toEqual(NodeMapSize)
  const selectedNodes = dag.selectedNodes()
  // console.log(DagJest.batchList(dag.dag.nodes))

  // Step 3 - get required inputs
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(
    inputNodes.includes(dag.node.map.get('site.moisture.live.category'))
  ).toEqual(true)
  expect(
    inputNodes.includes(
      dag.node.map.get('surface.primary.fuel.model.catalogKey')
    )
  ).toEqual(true)
  expect(
    inputNodes.includes(dag.node.map.get('site.moisture.dead.category'))
  ).toEqual(true)
  expect(
    inputNodes.includes(dag.node.map.get('site.slope.steepness.ratio'))
  ).toEqual(true)
  expect(
    inputNodes.includes(dag.node.map.get('site.wind.speed.atMidflame'))
  ).toEqual(true)
  expect(
    inputNodes.includes(dag.node.map.get('site.fire.time.sinceIgnition'))
  ).toEqual(true)

  const configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(11)
  // console.log(DagJest.arrayList(configNodes, 'Config Nodes'))

  // Step 4 - set input values
  dag.runInputs([
    ['site.moisture.live.category', [1, 2]],
    ['surface.primary.fuel.model.catalogKey', [1, 2]],
    ['site.moisture.dead.category', [1, 2]],
    ['site.slope.steepness.ratio', [1, 2]],
    ['site.wind.speed.atMidflame', [1, 2]],
    ['site.fire.time.sinceIgnition', [1, 2]]
  ])
})

test('Node lists1', () => {
  const dag = BpxDag('simple')

  // return this.sorted.required.filter(node => node.method.key !== 'Dag.config')
  let batchNodes = dag.requiredUpdateNodes()
  expect(batchNodes.length).toEqual(0)

  // return this.sorted.required.filter(node => node.method.key === 'Dag.config')
  let configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(0)

  // return this.sorted.required.filter(node => ['Dag.input', 'Dag.dangler'].includes(node.method.key))
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(0)

  // return this.sorted.required }
  let requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(0)

  // { return this.sorted.required.filter(node => node.status.isSelected) }
  let selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(0)

  // { return this.sorted.nodes }
  const sortedNodes = dag.sortedNodes()
  expect(sortedNodes.length).toEqual(dag.node.map.size) // 1285 or so

  // Select just a single Node
  const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')
  dag.runSelected([[catalogKey, true]])

  batchNodes = dag.requiredUpdateNodes()
  expect(batchNodes.length).toEqual(1)
  expect(batchNodes).toContain(catalogKey)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(0)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(catalogKey)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(1)
  expect(requiredNodes).toContain(catalogKey)

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(1)
  expect(selectedNodes).toContain(catalogKey)

  // Unselect catalogKey and select depth
  const depth = dag.get('surface.primary.fuel.model.behave.parms.depth')
  dag.runSelected([
    [catalogKey, false],
    [depth, true]
  ])

  batchNodes = dag.requiredUpdateNodes()
  expect(batchNodes.length).toEqual(2)
  expect(batchNodes).toContain(catalogKey)
  expect(batchNodes).toContain(depth)

  const primary = dag.get('configure.fuel.primary')
  configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(1)
  expect(configNodes).toContain(primary)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(catalogKey)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(3)
  expect(requiredNodes).toContain(catalogKey)
  expect(requiredNodes).toContain(depth)
  expect(requiredNodes).toContain(primary)

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(1)
  expect(selectedNodes).toContain(depth)
})
