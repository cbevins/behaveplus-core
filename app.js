import { BehavePlus } from './dist/bundle.esm.js'

const dag = new BehavePlus.BpxDag('caseWise')
console.log(`BehavePlus has ${dag.node.map.size} Nodes`)
