import { Product } from './Product.js'

/**
 * TO DO
 * - Create the Dag using a Products Translation map
 * - Graph Y variable must be Numeric
 * - Line Graph if X variable isNumeric
 * - Bar Graph if X variable ! isNumeric
 * - this.graph.x.values = []
 * - this.graph.y.values = []
 * - this.graph.z.lines.values = []
 */

test('Graph', () => {
  const product = new Product()
  expect(product.lang).toEqual('en_US')

  // Step 1
  const products = product.requestProduct()
  expect(products.selector).toEqual('radio')
  expect(products.single).toEqual(true)
  expect(products.label).toEqual('Please select a product')
  expect(products.options.length).toEqual(8)
  product.setProduct('graph')
  expect(product.product).toEqual('graph')

  // Step 2
  const modules = product.requestModule()
  expect(modules.selector).toEqual('radio')
  expect(modules.single).toEqual(true)
  expect(modules.label).toEqual('Please select a BehavePlus module')
  expect(modules.options.length).toEqual(7)
  product.setModule('surfaceFire')
  expect(product.module).toEqual('surfaceFire')

  // Step 3
  const palettes = product.requestPalette()
  expect(palettes.selector).toEqual('radio')
  expect(palettes.single).toEqual(true)
  expect(palettes.label).toEqual('Please select a Variable palette')
  expect(palettes.options.length).toEqual(3)
  expect(palettes.options[0][0]).toEqual('common')
  expect(palettes.options[1][0]).toEqual('intermediate')
  expect(palettes.options[2][0]).toEqual('advanced')
  product.setPalette('advanced')
  expect(product.palette).toEqual('advanced')

  // Step 4
  const y = product.requestGraphYVariable()
  expect(y.selector).toEqual('menu')
  expect(y.single).toEqual(false)
  expect(y.label).toEqual('Select the graph Y variable')
  const keys = []
  const units = []
  const rosKey = 'surface.weighted.fire.arithmeticMean.spreadRate'
  let rosIdx = -1
  y.options.forEach((item, idx) => {
    keys.push(item[0])
    units.push(y.units[idx])
    if (item[0] === rosKey) rosIdx = idx
  })
  expect(keys).toContain(rosKey)
  expect(y.units[rosIdx]).toContain('ft/min')
  expect(y.units[rosIdx]).toContain('ch/h')
  expect(y.units[rosIdx]).toContain('m/min')
  product.setGraphYVariable(rosKey, 'ft/min')
  expect(product.graph.y.node.node.key).toEqual(rosKey)
  expect(product.graph.y.units).toEqual('ft/min')
  const selectedNodes = product.dag.selectedNodes()
  expect(selectedNodes.length).toEqual(1)

  // Step 6
  const configs = product.requestConfigurationOptions()
  expect(configs.length).toEqual(10)
  const primaryKey = 'configure.fuel.primary'
  let primaryIdx = -1
  configs.forEach((config, idx) => {
    if (config.key === primaryKey) primaryIdx = idx
  })
  const primary = configs[primaryIdx]
  expect(primary.selector).toEqual('menu')
  expect(primary.single).toEqual(true)
  expect(primary.label).toEqual('Primary fuels are specified by entering')
  expect(primary.options[0][0]).toEqual('catalog')
  expect(primary.options[0][1]).toEqual('a fuel catalog key')
  product.setConfigurationOptions([
    ['configure.fuel.primary', 'catalog'],
    ['configure.fuel.secondary', 'none'],
    ['configure.fuel.moisture', 'individual'],
    ['configure.fuel.curedHerbFraction', 'estimated'],
    ['configure.fuel.chaparralTotalLoad', 'input'],
    ['configure.fuel.windSpeedAdjustmentFactor', 'input'],
    ['configure.slope.steepness', 'ratio'],
    ['configure.wind.direction', 'upslope'],
    ['configure.wind.speed', 'atMidflame'],
    ['configure.fire.effectiveWindSpeedLimit', 'applied']
  ])

  //   // Step 7
  //   const xVariableNodes = product.requestGraphXVariable()
  //   const midflame = dag.get('site.wind.speed.atMidflame')
  //   expect(xVariableNodes).toContain(midflame)
  //   product.setGraphXVariable(midflame, 'ft/min')

  //   // Step 8
  //   const xNode = product.requestGraphXProperties()
  //   expect(xNode).toEqual(midflame)
  //   product.setGraphXProperties(0, 20 * 88, 1 * 88)

  //   // Step 9
  //   const zVariableNodes = product.requestGraphZVariable()
  //   const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')
  //   expect(zVariableNodes).toContain(catalogKey)
  //   product.setGraphZVariable(catalogKey)

  //   // Step 10
  //   const zNode = product.requestGraphZProperties()
  //   expect(zNode).toEqual(catalogKey)
  //   // lines = [[value, units, lineColor, lineWidth, lineStyle]]
  //   const lines = [
  //     ['10', null, 'red', 1, 'solid'],
  //     ['124', null, 'blue', 1, 'solid']
  //   ]
  //   product.setGraphZProperties(lines)

  //   // Step 11
  //   const singleInputs = product.requestRemainingInputs()
  //   expect(singleInputs.length).toEqual(5)
  //   // inputs = [[nodeRef, value, units]]
  //   const inputs = [
  //     [dag.get('site.moisture.dead.tl1h'), [0.05]],
  //     [dag.get('site.moisture.dead.tl10h'), [0.07]],
  //     [dag.get('site.moisture.dead.tl100h'), [0.09]],
  //     [dag.get('site.moisture.live.herb'), [0.5]],
  //     [dag.get('site.moisture.live.stem'), [1.5]]
  //   ]
  //   product.setRemainingInputs(inputs)

  //   // Step 12
  //   product.requestDecorations()
  //   product.setDecorations('Title', 'sub title', 'user name', 'agency', true)

  //   // Step 13
  //   product.generateGraphData()
})
