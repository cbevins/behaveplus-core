import { BpxDag } from '../behaveplus/BpxDag.js'
import * as fs from 'fs'

const dag = new BpxDag('genomeList')

function alphaOrder (fileName) {
  let str = 'export const alphabeticalOrder = [\n'
  Array.from(dag.node.map.keys())
    .sort()
    .forEach((key, idx) => {
      const node = dag.get(key)
      str += `  [${idx}, ${node.dag.depth}, '${key}'],\n`
    })
  str += ']\n'
  write(str, fileName)
}

function topoOrder (fileName) {
  let str = 'export const topologicalOrder = [\n'
  dag.sorted.nodes.forEach((node, idx) => {
    str += `  [${idx}, ${node.dag.depth}, '${node.node.key}'],\n`
  })
  str += ']\n'
  write(str, fileName)
}

function write (str, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`Wrote file ${fileName}`)
  })
}

alphaOrder('BpxGenomeAlphabetical.js')
topoOrder('BpxGenomeTopological.js')
