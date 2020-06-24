import { BpxDag } from '../../behaveplus/BpxDag.js'
import * as Generate from '../GenomeArrayGenerator.js'

const dag = new BpxDag('genomeList')

Generate.genomeArray(
  Array.from(dag.node.map.values()),
  'BehavePlus Genome in Dag.node.map Node insertion order',
  'BehavePlusGenome_NodeInsertionOrder.js'
)

Generate.genomeArray(
  dag.sortedNodes(),
  'BehavePlus Genome in Node topological order',
  'BehavePlusGenome_NodeTopologicalOrder.js'
)

Generate.genomeArray(
  dag.sortedNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
  'BehavePlus Genome in Node key order',
  'BehavePlusGenome_NodeKeyOrder.js'
)

let chars = 0
dag.sorted.nodes.forEach(node => {
  chars += node.node.key.length
})
console.log(`The total length of all keys = ${chars}`)
