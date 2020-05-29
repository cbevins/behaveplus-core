/* eslint-disable no-unused-vars */
/**
 * Export 3 functions that create a Javascript file:
 * - genomeArray(nodeArray, title, fileName))
 * - methodArray(nodeArray, title, fileName))
 * - variantArray(nodeArray, title, fileName))
 */
import { Node } from '../dag/Node.js'
import * as fs from 'fs'

export function genomeArray (nodeArray, title, fileName) {
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

function setToArray (arrayName, set) {
  let str = `export const ${arrayName} = [\n`
  const ar = Array.from(set).sort((n1, n2) => (n1 > n2 ? 1 : -1))
  ar.forEach(key => {
    str += `  ['${key}'],\n`
  })
  str += ']\n'
  return str
}

export function methodArray (nodeArray, title, fileName) {
  const methods = new Set()
  nodeArray.forEach(node => {
    methods.add(node.method.key)
  })
  const str =
    `// ${title} (${methods.size} methods)\n` +
    setToArray('MethodArray', methods)
  writeGenomeArray(str, title, fileName)
}

export function variantArray (nodeArray, title, fileName) {
  const variants = new Set()
  nodeArray.forEach(node => {
    variants.add(node.variant.key)
  })
  const str =
    `// ${title} (${variants.size} variants)\n` +
    setToArray('VariantArray', variants)
  writeGenomeArray(str, title, fileName)
}
