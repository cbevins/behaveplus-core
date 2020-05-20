import * as Configs from './genome/configs.js'
import * as Crown from './genome/crown.js'
import * as Docs from './genome/docs.js'
import * as Ignition from './genome/ignition.js'
import * as Mortality from './genome/mortality.js'
import * as Site from './genome/site.js'
import * as Spotting from './genome/spotting.js'
import * as Surface from './genome/surface.js'

export const BpxGenome = [
  ...Configs.genome,
  ...Docs.genome,
  ...Ignition.genome,
  ...Site.genome,
  ...Surface.genome,
  ...Spotting.genome,
  ...Mortality.genome,
  ...Crown.genome
]
