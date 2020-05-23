import { BpxDag } from '../behaveplus/BpxDag.js'
import { Node } from '../dag/Node.js'
import * as fs from 'fs'

console.log('genomeLister()...')

function genomeDef (dag) {
  const ar = []
  dag.node.map.forEach((node, key) => {
    ar.push(nodeDef(node))
  })
  return 'export const BpxGenome = [\n' + ar.join(',\n') + '\n]\n'
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

const dag = new BpxDag('genomeList')
const genome = genomeDef(dag)
write(genome, 'BpxGenome.js')
