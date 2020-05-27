import { Root } from '../index.js'
import { MethodMap } from '../../equations/index.js'
import { ConfigMinimalInput, BpxVariantMap } from '../../behaveplus/index.js'
import * as Genome0 from '../../utils/BpxFullGenome.js'
import * as Genome1 from '../../utils/BpxFullGenome1.js'
import * as Genome2 from '../../utils/BpxFullGenome2.js'
import * as Genome3 from '../../utils/BpxFullGenome3.js'

import * as DagJest from '../../utils/matchers.js'
const sig = DagJest.sig
expect.extend({ sig })

// Note that the entire behaveplus/genome/*.js is 132 Kb,
// while the fully hydrated BpxFullGenome.js version is 319 Kb
test('1: Import from BpxFullGenome.js', () => {
  const root = new Root(Genome0.BpxGenome, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(1208)
})

test('2: Import from BpxFullGenome1.js', () => {
  const root = new Root(Genome1.BpxGenome, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(1208)
})

test('3: Import from BpxFullGenome2.js', () => {
  const root = new Root(Genome2.BpxGenome, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(1208)
})

test('4: Import from BpxFullGenome3.js', () => {
  const root = new Root(Genome3.BpxGenome, BpxVariantMap, MethodMap)
  const dag = root.addDag('casewise')
  expect(dag.node.map.size).toEqual(0)
})
