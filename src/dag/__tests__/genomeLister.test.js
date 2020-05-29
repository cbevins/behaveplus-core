import { Root } from '../index.js'
import { MethodMap } from '../../equations/index.js'
import { BpxVariantMap } from '../../behaveplus/index.js'
import * as BehavePlusInsertOrder from '../../utils/behaveplus/BehavePlusGenome_NodeInsertionOrder.js'
import * as BehavePlusTopoOrder from '../../utils/behaveplus/BehavePlusGenome_NodeTopologicalOrder.js'
import * as ScorchMortality from '../../utils/scorchMortality/ScorchMortalityGenome.js'
import * as Scorch from '../../utils/scorch/ScorchGenome.js'

import * as DagJest from '../../utils/matchers.js'
const sig = DagJest.sig
expect.extend({ sig })

// Note that the entire behaveplus/genome/*.js is 132 Kb,
// while the fully hydrated BpxFullGenome.js version is 319 Kb
test('1: Import from BpxFullGenomeInsertionOrder.js', () => {
  const root = new Root(
    BehavePlusInsertOrder.GenomeArray,
    BpxVariantMap,
    MethodMap
  )
  const dag = root.addDag('fullGenomeInsertionOrder')
  expect(dag.node.map.size).toEqual(1208)
})

test('2: Import from BpxFullGenomeTopologicalOrder.js', () => {
  const root = new Root(
    BehavePlusTopoOrder.GenomeArray,
    BpxVariantMap,
    MethodMap
  )
  const dag = root.addDag('fullGenomeTopologicalOrder')
  expect(dag.node.map.size).toEqual(1208)
})

test('3: Import from BpxScorchMortalityGenome.js', () => {
  const root = new Root(ScorchMortality.GenomeArray, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(19)
})

test('4: Import from BpxScorchGenome.js', () => {
  const root = new Root(Scorch.GenomeArray, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(11)
})
