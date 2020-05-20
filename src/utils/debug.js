import { Root } from '../dag/index.js'
import { BpxGenome, BpxVariantMap } from '../genome/index.js'

const root = new Root(BpxGenome, BpxVariantMap, BpxVariantMap)
const dag = root.addDag('casewise')

console.log('debug finished')
