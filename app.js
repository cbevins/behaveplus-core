import { BehavePlus } from './dist/bundle.esm.js'

const root = new BehavePlus.BpxDag('caseWise')
console.log(`BehavePlus has ${root.node.map.size} Nodes`)
// function testVariants () {
//   const blob = new Bpx.Variant Variant.Blob({ first: 'Collin', last: 'Bevins' })
//   console.log(`Blob defaultValue: ${JSON.stringify(blob._specs._defaultValue)}`)
// }

// testVariants()
