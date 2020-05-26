/* eslint-disable no-unused-vars */
import { BpxDag } from '../behaveplus/index.js'

const dag = new BpxDag('caseWise')

configModule(dag, 'crownFire')
const danglerNodes = dag.danglerNodes()

console.log('debug finished')
