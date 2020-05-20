/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import * as Bpx from '../bpx/BpxDag.js'
import * as fs from 'fs'

const dag = new Bpx.Dag('genomeList')

dag.runConfigs([
  ['configure.module', 'surfaceFire'],
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  [
    'configure.fire.lengthToWidthRatio',
    ['lengthToWidthRatio', 'effectiveWindSpeed'][0]
  ],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][1]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  [
    'configure.fuel.moisture',
    ['individual', 'liveCategory', 'category', 'catalog'][0]
  ],
  [
    'configure.fuel.primary',
    ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]
  ],
  [
    'configure.fuel.secondary',
    [
      'none',
      'catalog',
      'behave',
      'chaparral',
      'palmettoGallberry',
      'westernAspen'
    ][1]
  ],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  [
    'configure.wind.direction',
    ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]
  ],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
])

let str = 'export const topologicalOrder = [\n'
dag.sorted.nodes.forEach((node, idx) => {
  str += `  [${idx}, ${node.dag.depth}, '${node.node.key}'],\n`
})
str += ']\n'
fs.writeFile('BpxGenomeTopological.js', str, function (err) {
  if (err) throw err
  console.log('Saved!')
})

str = 'export const alphabeticalOrder = [\n'
Array.from(dag.node.map.keys())
  .sort()
  .forEach((key, idx) => {
    const node = dag.get(key)
    str += `  [${idx}, ${node.dag.depth}, '${key}'],\n`
  })
str += ']\n'
fs.writeFile('BpxGenomeAlphabetical.js', str, function (err) {
  if (err) throw err
  console.log('Saved!')
})
