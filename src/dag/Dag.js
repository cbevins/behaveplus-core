/* eslint-disable new-cap */
import * as Private from './DagPrivate.js'

/**
 * Root class contains shared data for multiple Dags.
 */
export class Root {
  constructor (genomeArray, variantMapConstructor, methodMap) {
    this.shared = {
      genomeArray: genomeArray,
      variantMapConstructor: variantMapConstructor,
      methodMap: methodMap
    }
    this.dag = {}
  }

  addDag (dagKey) {
    this.dag[dagKey] = new Dag(
      this,
      dagKey,
      this.shared.genomeArray,
      new this.shared.variantMapConstructor(),
      this.shared.methodMap
    )
    return this.dag[dagKey]
  }
}

/**
 * A class defining all the Dag data structures
 * and its client-accessible (public) methods.
 *
 * Note: all non-public methods are in DagPrivate.js
 */
export class Dag {
  constructor (root, dagKey, genomeArray, variantMap, methodMap) {
    this.variant = { map: variantMap }
    this.node = { map: new Map() }
    this.method = { map: methodMap }
    this.result = { mode: 'orthogonal', nodes: [] }
    this.id = { root: root, self: dagKey }
    this.sorted = {
      nodes: [], // includes disabled Nodes
      required: [] // includes only required && enabled Nodes
    }
    Private.clone(this, genomeArray, variantMap, methodMap)
    // Generate the sorted node list
    this.runConfigs([])
  }

  /**
   * Sets all Node.status.isSelected flags to false.
   */
  clearSelected (update = true) {
    this.node.map.forEach(node => (node.status.isSelected = false))
    if (update) {
      Private.resetStatusRequired(this)
      Private.updateOrthogonal(this)
    }
  }

  /**
   * @param {string} nodeKey
   * @return A reference to the Node with the Node.node.key matching `nodeKey`
   */
  get (nodeKey) {
    if (!this.node.map.has(nodeKey)) {
      throw new Error(`Dag.get('${nodeKey}) has no such Node`)
    }
    return this.node.map.get(nodeKey)
  }

  /**
   * @return An array of all required Config Nodes in topological order.
   */
  requiredConfigNodes () {
    return this.sorted.required.filter(node => node.method.key === 'Dag.config')
  }

  /**
   * @return An array of all required input Nodes in topological order.
   */
  requiredInputNodes () {
    return this.sorted.required.filter(node =>
      ['Dag.input', 'Dag.dangler'].includes(node.method.key)
    )
  }

  /**
   * @return An array of all required (including selected and Config) Nodes in topological order.
   */
  requiredNodes () {
    return this.sorted.required
  }

  /**
   * @returns An array of all required, updatable (non-Config) Node references in topological order.
   */
  requiredUpdateNodes () {
    return this.sorted.required.filter(node => node.method.key !== 'Dag.config')
  }

  /**
   * Sets the current value of zero or more Config Nodes and updates the Dag.
   * @param {Array} keyValuePairs An array of Config Node keyOrRef-value pairs
   * @param {bool} update If true, the Dag is reconfigured, a new topology is determined,
   *  and updateOrthogonal() is called to update all Node values.
   */
  runConfigs (keyValuePairs) {
    this.setConfigs(keyValuePairs)
    Private.update(this)
  }

  /**
   * Returns an array of result run indices that satisfy the input-value pair specs
   * @param {*} inputValues An array of input nodeKey => value specifications
   * @param {*} possible Null on client invocation
   */
  runIndices (inputValues) {
    const node = Private.asNodeRef(this, inputValues[0][0])
    const possible = node.value.run.map((val, idx) => idx)
    return possible.length
      ? this.runIndicesRecursive(inputValues, possible)
      : []
  }

  runIndicesRecursive (inputValues, possible) {
    const [nodeKeyOrRef, specValue] = inputValues.shift()
    const node = Private.asNodeRef(this, nodeKeyOrRef)
    const remaining = possible.filter(idx => node.value.run[idx] === specValue)
    return inputValues.length && remaining.length
      ? this.runIndicesRecursive(inputValues, remaining)
      : remaining
  }

  /**
   * Sets the inputs values of zero or more input Nodes AND updates the Dag.
   * @param {Array} keyValuePairs An array of input Node keyOrRef-valueArray pairs
   * @param {bool} update If true, updateOrthogonal() is called to update all Node values.
   */
  runInputs (keyValuePairs) {
    this.setInputs(keyValuePairs)
    Private.update(this)
  }

  /**
   * Sets the Node.status.isSelected flags of zero or more Nodes AND updates the Dag.
   * @param {Array} keyValuePairs An array of Node keyOrRef-isSelected pairs
   */
  runSelected (keyValuePairs) {
    this.setSelected(keyValuePairs)
    Private.update(this)
  }

  setModeCasewise () {
    this.result.mode = 'casewise'
  }

  setModeOrthogonal () {
    this.result.mode = 'orthogonal'
  }

  /**
   *  @return An array of all selected Nodes in topological order.
   */
  selectedNodes () {
    return this.sorted.required.filter(node => node.status.isSelected)
  }

  /**
   * Sets the current value of zero or more Config Nodes WITHOUT updating the Dag.
   * @param {Array} keyValuePairs An array of Config Node keyOrRef-value pairs
   */
  setConfigs (keyValuePairs) {
    keyValuePairs.forEach(pair => {
      const [nodeKeyOrRef, value] = pair
      const node = Private.asNodeRef(this, nodeKeyOrRef)
      if (node.status.isEnabled) {
        node.value.current = value
      }
    })
    Private.resetMethods(this)
    Private.resetTopology(this)
  }

  /**
   * Sets the inputs values of zero or more input Nodes WITHOUT updating the Dag.
   * @param {Array} keyValuePairs An array of input Node keyOrRef-valueArray pairs
   */
  setInputs (keyValuePairs) {
    keyValuePairs.forEach(pair => {
      const [nodeKeyOrRef, value] = pair
      const node = Private.asNodeRef(this, nodeKeyOrRef)
      if (node.status.isEnabled) {
        node.input.values = Array.isArray(value) ? value : [value]
      }
    })
  }

  /**
   * Sets the Node.status.isSelected flags of zero or more Nodes WITHOUT updating the Dag.
   * @param {Array} keyValuePairs An array of Node keyOrRef-isSelected pairs
   */
  setSelected (keyValuePairs) {
    keyValuePairs.forEach(pair => {
      const [nodeKeyOrRef, isSelected] = pair
      const node = Private.asNodeRef(this, nodeKeyOrRef)
      if (node.status.isEnabled) {
        node.status.isSelected = isSelected
      }
    })
  }

  /**
   * @return An array of all Nodes in topological order.
   */
  sortedNodes () {
    return this.sorted.nodes
  }
}
