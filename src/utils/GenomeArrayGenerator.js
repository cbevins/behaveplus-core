/* eslint-disable no-unused-vars */
import { Node } from '../dag/Node.js'
import * as fs from 'fs'

export function generateGenomeArray (nodeArray, title, fileName) {
  const ar = []
  nodeArray.forEach(node => {
    ar.push(generateNodeArray(node))
  })
  const str =
    `// ${title} (${nodeArray.length} nodes)\nexport const GenomeArray = [\n` +
    ar.join(',\n') +
    '\n]\n'
  writeGenomeArray(str, title, fileName)
}

function generateNodeArray (node) {
  const str = `  ['${node.node.key}', [['Variant.${node.variant.key}'], [\n`
  const ar = []
  node.updaters.forEach(updater => {
    ar.push(generateUpdaterArray(updater))
  })
  return str + ar.join(',\n') + ']]]'
}

function generateUpdaterArray (updater) {
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
    ar.push(generateParm(parm))
  })
  return '    [' + ar.join(', ') + ']'
}

function generateParm (parm) {
  if (typeof parm === 'string') {
    return `'${parm}'`
  } else if (parm instanceof Node) {
    return `'${parm.node.key}'`
  }
  return parm
}

function writeGenomeArray (str, title, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`'${title}' written to file '${fileName}'`)
  })
}
