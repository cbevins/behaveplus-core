/**
 * Updater class hold data for a single configuration-method pair for a Node.
 * Nodes may have one or more Updater.  When the DAG is reconfigured,
 * each Node's updater array is examined for its first Updater whose specs are true,
 * and that Updater's associated method is then applied to the Node.
 * @class
 */
export class Updater {
  constructor () {
    this.config = {
      // properties relating to when this Updater is applied to its Node
      key: null, // string key of the specification Config Node (or null)
      op: null, // string key of the specification operation ('equals', 'includes')
      value: null, // specification value
      ref: null // reference to the specification Config Node
    }
    this.method = {
      key: null, // key string for the Update method for this specification
      parms: [], // array of parameters required by the method
      ref: null // reference to the specification updater method
    }
  }
}

/**
 * Node class holds data for a single DAG Node.
 * @class
 */
export class Node {
  constructor (nodeKey, variantKey, updaterArray) {
    this.dag = {
      // properties relating to the directed acyclical graph
      consumers: [], // references to all Nodes that required *this* Node
      depth: 0, // topological depth
      providers: [] // references to all Nodes that are required by *this* Node
    }
    this.variant = {
      // properties relating to the Node's value type and representation
      key: variantKey, // key string for *this* Node's value type Variant class
      ref: null // reference to *this* Node's shared Variant instance
    }
    this.input = {
      // properties relating to alternate input values
      values: [], // array of input values to be iterated
      cases: [] // temporary copy of input.values when in 'casewise' mode
    }
    this.method = {
      // properties relating to the Node's current updater method
      key: null, // key string for *this* Node's current updater method
      parms: [], // array of parameters describing arguments to be passed to updater method
      ref: null // reference to *this* Node's current updater method
    }
    this.node = {
      // properties relating to the Node's identification
      key: nodeKey // string key identifier that is unique across the DAG
    }
    this.status = {
      // properties relating to the Node's status
      isEnabled: true, // TRUE if *this* Node is enabled within the DAG
      isRequired: false, // TRUE if *this* Node is required to update the current set of selected Nodes
      isSelected: false // TRUE if *this* Node is selected as output
    }
    this.updaters = updaterArray // An array of all possible updater methods for *this* Node
    this.value = {
      // properties relating to the Node's value
      current: null, // *this* Node's current (most recently updated) value
      default: null, // *this* Node's default value
      run: [] // if isSelected, an array of *this* Node's values for each run iteration
    }
  }

  displayAmount () {
    return this.variant.ref.displayAmount(this.value.current)
  }

  displayString () {
    return this.variant.ref.displayString(this.value.current)
  }

  displayRunAmount (idx) {
    return this.variant.ref.displayAmount(this.value.run[idx])
  }

  displayRunString (idx) {
    return this.variant.ref.displayString(this.value.run[idx])
  }

  /**
   * @returns True if, under the current DAG configuration,
   * this Node is must be provided by the client as input.
   */
  isInput () {
    return this.method.key === 'Dag.input' || this.method.key === 'Dag.dangler'
  }

  /**
   * Called only by DagPrivate.updateRecursive() to update *this* Node's current vlaue.
   * @return The Node.value.current
   */
  updateValue () {
    // If the Node has a fixed value, just assign the fixed value
    if (this.method.key === 'Dag.fixed') {
      return (this.value.current = this.method.parms[0])
    }
    // If the Node is a Config, no need to do anything
    if (this.method.key === 'Dag.config') {
      return this.value.current
    }
    // If the Node is bound, set this Node's value from the bound Nodes's value
    if (this.method.key === 'Dag.bind') {
      return (this.value.current = this.method.parms[0].value.current)
    }
    // If the Node is an input, DagPrivate.updateRecursive() handles value iteration
    // so the following block should never be entered
    if (this.method.key === 'Dag.input' || this.method.key === 'Dag.dangler') {
      // The following statement should never be executed
      return this.current.value
    }
    // Otherwise lookup the updater method, evaluate its parms, and invoke it it
    const args = []
    this.method.parms.forEach(parm => {
      let arg = parm // assume the parm is a literal primitive or object arg
      if (parm instanceof Node) {
        // if the parm is a Node reference, use its value as the arg
        arg = parm.value.current
      }
      args.push(arg)
    })
    // Call the method with the args and return its value
    // DagPrivate.clone() should have caught all invalid method refs, but still...
    if (typeof this.method.ref === 'undefined') {
      // The following statement should never be executed
      throw new Error(`undefined method ref for '${this.method.key}'`)
    }
    return (this.value.current = this.method.ref.apply(null, args))
  }
}
