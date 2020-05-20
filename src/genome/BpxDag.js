/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import { Root } from '../dag/index.js'
import { BpxGenome } from './BpxGenome.js'
import { BpxVariantMap } from './BpxVariantMap.js'
import { MethodMap } from '../equations/index.js'

export const NodeMapSize = 1208
export const MethodMapSize = 228

export function BpxDag (dagKey) {
  const root = new Root(BpxGenome, BpxVariantMap, MethodMap)
  return root.addDag(dagKey)
}

/*
  /1/--> surfaceFire -+->/2/--> fireEllipse -+->/3/--> scorchHeight ---/4/--> treeMortality
                      |                      |
                      |                      +->/5/--> fireContainment
                      |
                     /6/--> surfaceSpotting
                      |
                     /7/--> Crown Fire -->/8/--> Crown Spotting

  /9/--> Spotting from Pile, Trees
  /10/--> Ignition Probability
*/

const alwaysEnabled = ['configure', 'site', 'docs']
const moduleEnabled = {
  // Surface Fire, Fire Ellipse, Scorch Height, Tree Mortality, Fire Containment, Surface Spotting, Crown Fire, Crown Spotting
  surfaceFire: ['surface', 'spotting', 'mortality', 'crown'],
  // Fire Ellipse, Scorch Height, Tree Mortality, Fire Containment
  fireEllipse: ['surface.fire.ellipse', 'mortality'],
  // Scorch height, Tree Mortality
  scorchHeight: ['mortality'],
  // Tree Mortality
  treeMortality: ['mortality'], // ['mortality.scorchHeight', false],
  // Fire Containment
  fireContainment: ['contain'],
  // Surface Fire Spotting
  surfaceSpotting: ['spotting.surfaceFire'],
  // Crown Fire, Crown Fire Spotting
  crownFire: ['crown', 'spotting.crownFire'],
  // Crown Fire Spotting
  crownSpotting: ['spotting.crownFire'],
  // Burning Pile Spotting, Torching Trees Spotting
  spottingDistance: ['spotting'],
  // Ignition Probability
  ignitionProbability: ['configure', 'site', 'docs', 'ignition']
}
export const Modules = Object.keys(moduleEnabled)

export function configModule (dag, module) {
  const prefix = [...alwaysEnabled, ...moduleEnabled[module]]
  dag.node.map.forEach((node, key) => {
    let enabled = false
    for (let idx = 0; idx < enable.length; idx += 1) {
      if (key.startsWith(prefix)) {
        enabled = true
        break
      }
    }
    node.status.isEnabled = enabled
  })
  dag.runConfigs([['configure.module', module]])
}
