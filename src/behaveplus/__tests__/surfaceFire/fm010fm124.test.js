/* eslint-disable no-unused-vars */
import { BpxDag, NodeMapSize, MethodMapSize } from '../../BpxDag.js'
import * as DagJest from '../../../utils/matchers.js'
import {
  ConfigFm010Fm124Config,
  ConfigFm010Fm124Input
} from '../../BpxConfigPalette.js'
import * as Test from './testData.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

test('1: Fm010, FM124, and Weighted results validated against BP6', () => {
  const dag = BpxDag('surfaceFire')
  expect(dag.node.map.size).toEqual(NodeMapSize)
  expect(dag.method.map.size).toEqual(MethodMapSize)

  // Step 1 - configuration
  dag.runConfigs(ConfigFm010Fm124Config) // Standard configuration

  // Step 2 - selection
  dag.runSelected(Test.primarySelections())
  dag.runSelected(Test.secondarySelections())
  dag.runSelected(Test.weightedSelections())

  // Get required inputs and ensure they are included in the provided input array
  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs:'))
  const testInputs = ConfigFm010Fm124Input // Array of [<nodeKey>-<true>] pairs
  const testList = testInputs.map(input => dag.get(input[0])) // Simple array of input Node references
  requiredInputs.forEach(requiredInput => {
    // console.log(requiredInput.node.key)
    expect(testList.includes(requiredInput)).toEqual(true)
  })

  // Ensure the required configuration nodes are as expected
  const configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(11)
  // console.log(DagJest.arrayList(configNodes, 'Config Nodes'))

  // Set required input values and ensure results are as expected
  dag.runInputs(testInputs)

  // Validate FM010 primary fuel results
  const primaryResults = Test.primaryResults()
  primaryResults.forEach(result => {
    const [nodeKey, value, prec] = result
    expect(dag.get(nodeKey)).value(value, prec)
  })

  // Validate FM124 secondary fuel results
  const secondaryResults = Test.secondaryResults()
  secondaryResults.forEach(result => {
    const [nodeKey, value, prec] = result
    expect(dag.get(nodeKey)).value(value, prec)
  })

  // Validate weighted fire results
  const weightedResults = Test.weightedResults()
  weightedResults.forEach(result => {
    const [nodeKey, value, prec] = result
    expect(dag.get(nodeKey)).value(value, prec)
  })
})
