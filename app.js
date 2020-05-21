import { BehavePlus } from './dist/bundle.esm.js'

const root = new BehavePlus.BpxDag('caseWise')
console.log(`BehavePlus has ${root.node.map.size} Nodes`)
