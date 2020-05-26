import { Node, Updater } from './Node.js'

/**
 * Returns a Node reference for the Node key string.
 *
 * This is a convenience function that allows clients to use
 * either direct Node references or Node.node.key strings as function args.
 * @param {Dag} dag
 * @param {string|Node} nodeKeyOrRef Either a Node reference or a Node.node.key string
 * @return A Node reference
 */
export function asNodeRef (dag, nodeKeyOrRef) {
  if (nodeKeyOrRef instanceof Node) {
    return nodeKeyOrRef
  } else if (typeof nodeKeyOrRef === 'string') {
    if (dag.node.map.has(nodeKeyOrRef)) {
      return dag.node.map.get(nodeKeyOrRef)
    }
  }
  throw new Error(
    `asNodeRef() arg is neither a Node reference nor a Node key string:\n${nodeKeyOrRef}`
  )
}

// Clones new Nodes into the Dag from the genomeArray
/**
 * Creates a new Dag.node.map from the genomeArray
 * with all Node, Variant, and method references resolved.
 *
 * @param {Dag} dag
 * @param {Array} genomeArray Dag definition genome composed of string keys.
 */
export function clone (dag, genomeArray) {
  // Step 1 - Add just Dag Nodes to the dag.node.map
  genomeArray.forEach(genome => {
    const my = createNode(genome)
    if (dag.node.map.has(my.node.key)) {
      throw new Error(
        `GenomeArray Node '${my.node.key}' was previously defined`
      )
    }
    if (!dag.variant.map.has(my.variant.key)) {
      throw new Error(
        `GenomeArray Node '${my.node.key}' has unknown variant '${my.variant.key}'`
      )
    }
    my.variant.ref = dag.variant.map.get(my.variant.key)
    my.value.default = my.variant.ref.defaultValue()
    my.value.current = my.value.default
    dag.node.map.set(my.node.key, my)
  })

  // Step 2 - validate configKeys and methodKeys
  dag.node.map.forEach(my => {
    // Ensure all updater method names are valid
    if (!my.updaters.length) {
      throw new Error(
        `GenomeArray Node '${my.node.key}' has no updater method options`
      )
    }
    my.updaters.forEach((updater, idx) => {
      // Ensure the configKey is valid
      if (updater.config.key !== null) {
        if (!dag.node.map.has(updater.config.key)) {
          throw new Error(
            `GenomeArray Node '${my.node.key}' updater ${idx} has unknown config Node '${updater.config.key}'`
          )
        }
        const config = dag.node.map.get(updater.config.key)
        my.updaters[idx].config.ref = config
        // Ensure the config test value is valid
        const configValues = Array.isArray(updater.config.value)
          ? updater.config.value
          : [updater.config.value]
        configValues.forEach(configValue => {
          if (!config.variant.ref.has(configValue)) {
            throw new Error(
              `GenomeArray Node '${my.node.key}' updater ${idx} config Node '${
                updater.config.key
              }' references invalid value '${configValue}'\nOptions are: ${config.variant.ref.options()}`
            )
          }
        })
      }
      // Ensure the methodKey is valid
      if (!dag.method.map.has(updater.method.key)) {
        throw new Error(
          `GenomeArray Node '${my.node.key}' updater ${idx} has unknown method '${updater.method.key}'`
        )
      }
      my.updaters[idx].method.ref = dag.method.map.get(updater.method.key)
    })
  })
}

/**
 * clone() helper function that decodes a single GenomeArray element
 * into a single Node instance
 * @param {Array} genome
 * @return A new Node instance
 */
function createNode (genome) {
  const [nodeKey, info] = genome
  // Variant information
  const variantArray = info[0]
  const variantString = variantArray[0] // Variant strings look like 'Variant.SomeVariant'
  const variantKey = variantString.substring(8)
  // Updater information
  const updaterArray = info[1]
  const updaters = []
  updaterArray.forEach((option, idx) => {
    const updater = new Updater()
    const [condition, ...conditionArgs] = option
    if (condition === 'when') {
      const [configKey, op, value, methodKey, ...methodParms] = conditionArgs
      updater.config = { key: configKey, op: op, value: value, ref: null }
      updater.method = { key: methodKey, parms: methodParms, ref: null }
    } else if (condition === 'finally') {
      const [methodKey, ...methodParms] = conditionArgs
      updater.method = { key: methodKey, parms: methodParms, ref: null }
    } else {
      throw new Error(
        `GenomeArray Node '${nodeKey}' updater ${idx} has invalid condition '${condition}'`
      )
    }
    updaters.push(updater)
  })
  return new Node(nodeKey, variantKey, updaters)
}

export function generateArray (start, stop, step) {
  if (start === stop) {
    return [start]
  }
  if (step === 0) {
    return [start, stop]
  }
  step = Math.abs(step)
  const ar = []
  const end = start < stop ? stop + step / 2 : stop - step / 2
  if (start < stop) {
    for (let v = start; v <= end; v += step) {
      ar.push(v)
    }
  } else {
    // if (start > stop) {
    for (let v = start; v >= end; v -= step) {
      ar.push(v)
    }
  }
  return ar
}

/**
 * Determines all the Dag's Nodes' applicable updater method
 * by iterating through all updater options until it finds one that meets the conditions.
 * If no condition is found, or the condition requires a method parm that is disabled,
 * its method becomes 'Dag.dangler'
 *
 * @param {Dag} dag
 */
export function resetMethods (dag) {
  dag.node.map.forEach(node => {
    if (node.status.isEnabled) {
      resetNodeMethods(dag, node)
    }
  })
}

/**
 * resetMethods() helper function the determine's a single Node's updater method
 * based upon current Dag configuration and the Node's definition.
 * @param {Dag} dag
 * @param {*} my
 */
function resetNodeMethods (dag, node) {
  let found = false
  const len = node.updaters.length
  for (let i = 0; i < len; i += 1) {
    const { config, method } = node.updaters[i]
    // Always apply an updater with a null config.key
    if (config.key === null) {
      // 'finally'
      node.method = { ...method }
      found = true
      break
    } else if (config.ref.status.isEnabled) {
      if (
        (config.op === 'equals' && config.ref.value.current === config.value) ||
        (config.op === 'includes' &&
          config.value.includes(config.ref.value.current))
      ) {
        node.method = { ...method }
        found = true
        break
      }
    }
  }
  if (found) {
    // Replace any nodeKey parms with their Node reference, and ensure they are enabled
    node.method.parms.forEach((parm, idx) => {
      if (typeof parm === 'string' && dag.node.map.has(parm)) {
        // is this a Node key?
        const parmNode = dag.node.map.get(parm) // get its reference
        if (!parmNode.status.isEnabled) {
          found = false // can't use this updater since it requires a disabled Node value
        }
        node.method.parms[idx] = parmNode
      }
    })
  }
  if (!found) {
    node.method = {
      key: 'Dag.dangler',
      parms: [],
      ref: dag.method.map.get('Dag.dangler')
    }
  }
}

// Determines the DAG topology given current Node enabled/disabled status,
// configured updater methods, and providers/consumers.
// Its OK to reset topology for disabled Nodes
export function resetTopology (dag) {
  dag.node.map.forEach(
    node => (node.dag = { consumers: [], depth: 0, providers: [] })
  )
  dag.node.map.forEach(node => resetNodeProviders(node))
  dag.sorted.nodes = resetNodeDepths(dag)
  // \todo Determine if there are separate, independent DAGs present,
  // and put them in their own stack
  // const keyMap = Pathways.keyMap(dag)
  // const nPathways = keyMap.size
}

/**
 * resetTopology() helper function that determines all the Node's
 * provider Nodes, and assigns itself to its provider Node's as a consumer Node.
 *
 * Note: the node.method.parms property is a *mixed* array of Node references, Node keys,
 * function references, and/or literal objects and primitives passed to the node.method.
 * Its OK to determine providers of disabled Nodes
 *
 * @param {Node} node
 */
function resetNodeProviders (node) {
  node.method.parms.forEach(parm => {
    if (parm instanceof Node) {
      node.dag.providers.push(parm)
      parm.dag.consumers.push(node)
    }
  })
}

/**
 * A resetTopology() helper function that returns a topologically sorted array
 * of the Dag Nodes, but with:
 *  - *input* Nodes deferred to the greatest depth allowed by their consumers (out edges)
 *  - *fixed* Nodes are run first and just once
 * Its OK to determine depths of disabled Nodes
 */
function resetNodeDepths (dag) {
  // Step 1 - determine consumer-chain depth of each Node
  let maxDepth = 0
  dag.node.map.forEach((node, key) => {
    maxDepth = Math.max(maxDepth, consumerDepth(node, [key]))
  })
  // Step 2 - ensure input Nodes are processed after all other Nodes at their depth
  // - non-input Nodes have an odd numbered level = 2 * depth - 1
  // - input Nodes have an even numbered level = 2 * depth
  const sorted = []
  dag.node.map.forEach(node => {
    node.dag.depth = node.isInput()
      ? 2 * node.dag.depth - 1
      : 2 * node.dag.depth
    sorted.push(node)
  })
  // Step 3 - topologically sort the Node array
  sorted.sort((n1, n2) => n2.dag.depth - n1.dag.depth)
  return sorted
}

/**
 * A resetNodeDepths() helper function (and therefore, also a resetTopology() helper function)
 * that returns the Node's depth, calculating it first, if necessary
 * (Its OK to determine depths of disabled Nodes)
 * @param {Node} node
 * @param {bool} visited
 */
function consumerDepth (node, visited) {
  // If this Node doesn't yet have a depth, derive it
  if (!node.dag.depth) {
    let maxDepth = 0
    node.dag.consumers.forEach(consumer => {
      if (visited.includes(consumer.node.key)) {
        visited.push(consumer.node.key)
        throw new Error(
          `Cyclical dependency detected:\n${visited.join(' required by ->\n')}`
        )
      }
      visited.push(consumer.node.key)
      const depth = consumerDepth(consumer, visited)
      visited.pop()
      maxDepth = Math.max(depth, maxDepth)
    })
    node.dag.depth = maxDepth + 1
  }
  return node.dag.depth
}

/**
 * Sets the status.isRequired flag of all Nodes required by the status.isSelected Nodes,
 * and then sets Dag.sorted.required as an array of the currently isRequired Nodes
 * in topological order.
 * @param {Dag} dag
 */
export function resetStatusRequired (dag) {
  // Reset all status.isRequired flags to false
  dag.node.map.forEach(node => (node.status.isRequired = false))
  // Recursively set status.isRequired from each node.status.isSelected
  dag.node.map.forEach(node => {
    if (node.status.isSelected && node.status.isEnabled) {
      resetStatusRequiredRecursive(node)
    }
  })
  // Store the topologically-ordered required Nodes in the Dag
  dag.sorted.required = dag.sorted.nodes.filter(
    node => node.status.isEnabled && node.status.isRequired
  )
}

/**
 * A resetStatusRequired() helper recursive function
 * that first sets node.status.isRequired,
 * then recursively ensures its providers are also set to isRequired
 * @param {Node} node
 */
function resetStatusRequiredRecursive (node) {
  if (node.status.isEnabled) {
    if (!node.status.isRequired) {
      node.status.isRequired = true
      // Set isRequired for every Config Node used by this Node
      node.updaters.forEach(updater => {
        if (
          updater.config.ref !== null &&
          updater.config.ref.status.isEnabled
        ) {
          updater.config.ref.status.isRequired = true
          // Should we push non-redundnant consumers onto the config's consumer array??
        }
      })
      node.dag.providers.forEach(provider =>
        resetStatusRequiredRecursive(provider)
      )
    }
  }
}

export function update (dag) {
  resetStatusRequired(dag)
  updateInit(dag)
  return dag.result.mode === 'orthogonal'
    ? updateOrthogonal(dag)
    : updateCasewise(dag)
}

// Called privately by batchUpdate() and caseUpdate()
function updateInit (dag) {
  // Include all input Nodes and all selected Nodes in the results
  dag.result.nodes = [...dag.requiredInputNodes(), ...dag.selectedNodes()]
  // Clear the result values of every Dag Node
  dag.sorted.nodes.forEach(node => {
    node.value.run = []
  })
  // Ensure every input Node has at least 1 input value
  dag.requiredInputNodes().forEach(node => {
    if (!node.input.values.length) {
      node.input.values = [node.value.current]
    }
  })
}

/**
 * Generates a set of case-wise results for the current Node.input.values
 *
 * Results are stored for all the required input Nodes and all the
 * selected Nodes in their individual Node.value.run[] array.
 *
 * Dag.result.nodes is an array of references to all the result Nodes.
 *
 * The number of case results is determined by the input Node with
 * the largest number of case values.  If an input Node has fewer
 * case values than the number of cases, its last case value is applied.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 4 results are generated.
 *
 * @param {Dag} dag
 */
export function updateCasewise (dag) {
  // Store the current input values in the cases[] array
  const inputNodes = dag.requiredInputNodes()
  inputNodes.forEach(node => (node.input.cases = [...node.input.values]))
  // Determine the maximum number of cases
  const cases = inputNodes.reduce(
    (acc, node) => Math.max(acc, node.input.values.length),
    0
  )
  // Move each case into the input values
  for (let i = 0; i < cases; i += 1) {
    inputNodes.forEach(node => {
      const idx = Math.min(i, node.input.cases.length - 1)
      node.input.values = [node.input.cases[idx]]
    })
    updateRecursive(dag, 0)
  }
  // Restore the input values
  inputNodes.forEach(node => (node.input.values = [...node.input.cases]))
}

/**
 * Generates a set of result values for all combinations of input values.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 2 x 3 x 4 = 24 results are generated.
 *
 * Results are stored for all the required input Nodes and all the
 * selected Nodes in their individual Node.value.run[] array.
 *
 * Dag.result.nodes is an array of references to all the result Nodes.
 *
 * @param {Dag} dag
 */
export function updateOrthogonal (dag) {
  updateRecursive(dag, 0)
}

function updateRecursive (dag, idx) {
  if (idx === dag.sorted.required.length) {
    dag.result.nodes.forEach(node => node.value.run.push(node.value.current))
    return
  }
  const node = dag.sorted.required[idx]
  if (node.isInput()) {
    node.input.values.forEach(value => {
      node.value.current = value
      updateRecursive(dag, idx + 1)
    })
  } else {
    node.updateValue()
    updateRecursive(dag, idx + 1)
  }
}
