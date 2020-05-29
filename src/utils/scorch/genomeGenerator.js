import { BpxDag } from '../../behaveplus/BpxDag.js'
import { generateGenomeArray } from '../GenomeArrayGenerator.js'

const dag = new BpxDag('scorchGenome')

dag.runConfigs([
  ['configure.module', 'scorchHeight'],
  ['configure.fire.firelineIntensity', 'flameLength']
])

dag.runSelected([[dag.get('mortality.scorchHeight'), true]])

generateGenomeArray(
  dag.requiredNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
  'Scorch Module Genome',
  'ScorchGenome.js'
)
