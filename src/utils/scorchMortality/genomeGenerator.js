import { BpxDag } from '../../behaveplus/BpxDag.js'
import { generateGenomeArray } from '../GenomeArrayGenerator.js'

const dag = new BpxDag('scorchMortalityGnome')

dag.runConfigs([
  ['configure.module', 'scorchHeight'],
  ['configure.fire.firelineIntensity', 'flameLength']
])

dag.runSelected([
  [dag.get('mortality.rate'), true],
  [dag.get('mortality.scorchHeight'), true],
  [dag.get('site.canopy.tree.barkThickness'), true],
  [dag.get('mortality.crownLengthScorched'), true],
  [dag.get('mortality.crownVolumeScorched'), true]
])

generateGenomeArray(
  dag.requiredNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
  'Scorch-Mortality Module Genome',
  'ScorchMortalityGenome.js'
)
