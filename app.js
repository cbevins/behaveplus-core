import { BehavePlus } from './dist/bundle.esm.js'
import { LoopIterator } from './src/dag/LoopIterator.js'

const root = new BehavePlus.BpxDag('caseWise')
console.log(`BehavePlus has ${root.node.map.size} Nodes`)

const a = [...new LoopIterator(1, 10, 1)]
console.log('LoopIterator(1, 10, 1) yields: ', a)
const b = [...new LoopIterator(10, -2, 2)]
console.log('LoopIterator(10, -2, 2) yields: ', b)
