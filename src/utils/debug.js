import { Root } from '../dag/index.js'
import {
  ConfigMinimalInput,
  BpxGenome,
  BpxVariantMap
} from '../genome/index.js'
import { MethodMap } from '../equations/index.js'

const root = new Root(BpxGenome, BpxVariantMap, MethodMap)
const dag = root.addDag('casewise')

console.log('debug finished')
