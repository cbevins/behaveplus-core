/* eslint-disable no-unused-vars */
import { BpxDag } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'
import { ConfigDefault } from '../BpxConfigPalette.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

test('1: Slope direction and steepness', () => {
  const dag = BpxDag('slope')
  dag.runConfigs(ConfigDefault)

  const cfgSlp = dag.get('configure.slope.steepness')
  const aspect = dag.get('site.slope.direction.aspect')
  const upslope = dag.get('site.slope.direction.upslope')
  const ratio = dag.get('site.slope.steepness.ratio')
  const degrees = dag.get('site.slope.steepness.degrees')
  const scale = dag.get('site.map.scale')
  const interval = dag.get('site.map.interval')
  const contours = dag.get('site.map.contours')
  const distance = dag.get('site.map.distance')

  // Start with just aspect selected
  dag.runSelected([[aspect, true]])
  let selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(1)
  expect(selectedNodes).toContain(aspect)

  let configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(0)

  let requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(1)
  expect(requiredNodes).toContain(aspect)

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toContain(aspect)

  // Add upslope to selected list
  dag.runSelected([[upslope, true]])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(2)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(2)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(aspect)
  dag.runInputs([[aspect, 45]])
  expect(upslope.value.current).toEqual(225)

  // Add ratio to selected list
  dag.runSelected([[ratio, true]])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(3)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(4)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)
  expect(requiredNodes).toContain(ratio)
  expect(requiredNodes).toContain(cfgSlp)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(1)
  expect(configNodes).toContain(cfgSlp)
  expect(cfgSlp.value.current).toEqual('ratio')

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(ratio)
  dag.runInputs([
    [aspect, 90],
    [ratio, 1.0]
  ])
  expect(aspect.value.current).toEqual(90)
  expect(upslope.value.current).toEqual(270)
  expect(ratio.value.current).toEqual(1)

  // Add degrees to selected list
  dag.runSelected([[degrees, true]])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(5)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)
  expect(requiredNodes).toContain(ratio)
  expect(requiredNodes).toContain(cfgSlp)
  expect(requiredNodes).toContain(degrees)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(1)
  expect(configNodes).toContain(cfgSlp)
  expect(cfgSlp.value.current).toEqual('ratio')

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(ratio)
  dag.runInputs([
    [aspect, -90],
    [ratio, 1.0]
  ])
  expect(aspect.value.current).toEqual(-90)
  expect(upslope.value.current).toEqual(90)
  expect(ratio.value.current).toEqual(1)
  expect(degrees.value.current).toEqual(45)

  // Configure for degrees input
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  dag.runConfigs([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][1]]
  ])
  expect(cfgSlp.value.current).toEqual('degrees')
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(degrees)
  dag.runInputs([
    [aspect, 270],
    [degrees, 45]
  ])
  expect(aspect.value.current).toEqual(270)
  expect(upslope.value.current).toEqual(90)
  expect(degrees.value.current).toEqual(45)
  expect(ratio.value.current).toBeCloseTo(1, 12)

  // Configure for map input
  dag.runConfigs([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][2]]
  ])
  expect(cfgSlp.value.current).toEqual('map')

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Required Nodes'))

  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Input Nodes'))

  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(scale)
  expect(inputNodes).toContain(interval)
  expect(inputNodes).toContain(contours)
  expect(inputNodes).toContain(distance)
  dag.runInputs([
    [aspect, 270],
    [scale, 24000],
    [interval, 20],
    [contours, 5],
    [distance, 1 / 12]
  ])
  expect(aspect.value.current).toEqual(270)
  expect(upslope.value.current).toEqual(90)
  expect(scale.value.current).toEqual(24000)
  expect(interval.value.current).toEqual(20)
  expect(contours.value.current).toEqual(5)
  expect(distance.value.current).toEqual(1 / 12)
  expect(ratio.value.current).toBeCloseTo(0.05, 12)
  expect(degrees.value.current).toBeCloseTo(2.862405226, 9)
})

test('2: Slope from map', () => {
  const dag = BpxDag('slopeFromMap')
  dag.runConfigs(ConfigDefault)
  dag.runConfigs([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][2]]
  ])

  const cfgSlp = dag.get('configure.slope.steepness')
  const aspect = dag.get('site.slope.direction.aspect')
  const upslope = dag.get('site.slope.direction.upslope')
  const ratio = dag.get('site.slope.steepness.ratio')
  const degrees = dag.get('site.slope.steepness.degrees')
  const scale = dag.get('site.map.scale')
  const interval = dag.get('site.map.interval')
  const contours = dag.get('site.map.contours')
  const distance = dag.get('site.map.distance')

  expect(cfgSlp.value.current).toEqual('map')
  dag.runSelected([
    [ratio, true],
    [aspect, true],
    [upslope, true],
    [degrees, true]
  ])
  const selectedNodes = dag.selectedNodes()
  expect(selectedNodes.length).toEqual(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Required Nodes'))

  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Input Nodes'))
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(scale)
  expect(inputNodes).toContain(interval)
  expect(inputNodes).toContain(contours)
  expect(inputNodes).toContain(distance)
  dag.runInputs([
    [aspect, 270],
    [scale, 24000],
    [interval, 20],
    [contours, 5],
    [distance, 1 / 12]
  ])
  expect(aspect.value.current).toEqual(270)
  expect(upslope.value.current).toEqual(90)
  expect(scale.value.current).toEqual(24000)
  expect(interval.value.current).toEqual(20)
  expect(contours.value.current).toEqual(5)
  expect(distance.value.current).toEqual(1 / 12)
  expect(ratio.value.current).toBeCloseTo(0.05, 12)
  expect(degrees.value.current).toBeCloseTo(2.862405226, 9)
})
