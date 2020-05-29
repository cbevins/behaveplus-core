/* eslint-disable no-unused-vars */
import { BpxDag, configModule } from '../behaveplus/BpxDag.js'
import { Node } from '../dag/Node.js'
import * as fs from 'fs'

console.log('genomeLister()...')

function genomeDef (nodeArray, title) {
  const ar = []
  nodeArray.forEach(node => {
    ar.push(nodeDef(node))
  })
  const header = `// ${title} (${nodeArray.length} nodes)\nexport const BpxGenome = [\n`
  return header + ar.join(',\n') + '\n]\n'
}

function nodeDef (node) {
  const str = `  ['${node.node.key}', [['Variant.${node.variant.key}'], [\n`
  const ar = []
  node.updaters.forEach(updater => {
    ar.push(updaterDef(updater))
  })
  return str + ar.join(',\n') + ']]]'
}

function updaterDef (updater) {
  const ar = []
  const { config, method } = updater
  if (config.key === null) {
    ar.push("'finally'")
  } else {
    ar.push("'when'")
    ar.push(`'${config.key}'`)
    ar.push(`'${config.op}'`)
    if (config.op === 'includes') {
      const itemArray = []
      config.value.forEach(item => {
        itemArray.push(`'${item}'`)
      })
      ar.push('[' + itemArray.join(', ') + ']')
    } else {
      ar.push(`'${config.value}'`)
    }
  }
  ar.push(`'${method.key}'`)
  // Loop for each Node Updater parameter
  method.parms.forEach(parm => {
    ar.push(parmDef(parm))
  })
  return '    [' + ar.join(', ') + ']'
}

function parmDef (parm) {
  if (typeof parm === 'string') {
    return `'${parm}'`
  } else if (parm instanceof Node) {
    return `'${parm.node.key}'`
  }
  return parm
}

function write (str, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`Wrote file ${fileName}`)
  })
}

// Example 1
function behavePlusFullGenomeInsertionOrder () {
  const dag = new BpxDag('genomeList')
  const title = 'Full BehavePlus Genome in Dag.node.map insertion order'
  const genome = genomeDef(Array.from(dag.node.map.values()), title)
  write(genome, 'BpxFullGenomeInsertionOrder.js')
}

// Example 2
function behavePlusFullGenomeToplogicalOrder () {
  const dag = new BpxDag('genomeList')
  const title = 'Full BehavePlus Genome in Dag topoplogical order'
  const genome = genomeDef(dag.sortedNodes(), title)
  write(genome, 'BpxFullGenomeTopologicalOrder.js')
}

// Example 3
function scorchGenome () {
  const dag = new BpxDag('scorchGenome')
  const title = 'Scorch Module Genome'
  // configModule(dag, 'scorchHeight')
  dag.clearSelected()
  dag.runConfigs([
    ['configure.module', 'scorchHeight'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.runSelected([[dag.get('mortality.scorchHeight'), true]])
  const genome = genomeDef(
    dag.requiredNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
    title
  )
  write(genome, 'BpxScorchGenome.js')
}

// Example 3
function scorchMortalityGenome () {
  const dag = new BpxDag('scorchMortalityGnome')
  const title = 'Scorch-Mortality Module Genome'
  // configModule(dag, 'scorchHeight')
  dag.clearSelected()
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
  const genome = genomeDef(
    dag.requiredNodes().sort((n1, n2) => (n1.node.key > n2.node.key ? 1 : -1)),
    title
  )
  write(genome, 'BpxScorchMortalityGenome.js')
}

behavePlusFullGenomeInsertionOrder()
behavePlusFullGenomeToplogicalOrder()
scorchGenome()
scorchMortalityGenome()
