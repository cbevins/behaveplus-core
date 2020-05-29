import { BpxDag } from '../../behaveplus/BpxDag.js'
import * as Generate from '../GenomeArrayGenerator.js'

const dag = new BpxDag('scorchGenome')

dag.runConfigs([
  ['configure.module', 'scorchHeight'],
  ['configure.fire.firelineIntensity', 'flameLength']
])

dag.runSelected([[dag.get('mortality.scorchHeight'), true]])

Generate.genomeArray(
  dag.requiredNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
  'Scorch Genome Array',
  'ScorchGenome.js'
)

Generate.methodArray(
  dag.requiredNodes(),
  'Scorch Method Array',
  'ScorchMethods.js'
)

Generate.variantArray(
  dag.requiredNodes(),
  'Scorch Variant Array',
  'ScorchVariants.js'
)
