import * as Available from './Available.js'
import { generateArray } from '../dag/DagPrivate.js'
import { Root } from '../dag/index.js'
import { BpxGenome } from '../behaveplus/BpxGenome.js'
// import { BpxTranslationMap } from '../behaveplus/BpxTranslationMap.js'
import { BpxVariantMap } from '../behaveplus/BpxVariantMap.js'
import { MethodMap } from '../equations/index.js'
import * as Dictionary from './Dictionary.js'
import * as Variant from '../variants/index.js'

const GraphLine = { color: '#000000', width: 1, style: 'solid' }
const GraphVar = {
  node: null,
  units: null,
  decimals: 2,
  data: [],
  line: { ...GraphLine }
}

export class Product {
  constructor (language = 'en_US') {
    this.root = new Root(
      BpxGenome,
      BpxVariantMap,
      MethodMap,
      Dictionary.TranslationMap
    )
    this.dag = this.root.addDag('Products')
    this.lang = language
    this.product = null // 'graph', 'oneWayTable', etc
    this.module = null // 'surfaceFire', 'fireEllipse', etc
    this.palette = 'common' // 'common', 'technical', 'advanced'
    this.decoration = {}
    this.inputs = {}
    this.graph = {
      x: { ...GraphVar },
      y: { ...GraphVar },
      z: { ...GraphVar, atValues: [] }
    }
  }

  // Returns an array of Selector options
  // from the Available.items and Dictionary text
  _getOptions (availableItems, prefix) {
    const ar = []
    availableItems.forEach(key => {
      ar.push([
        key,
        this.dag.tr(`${prefix}.value.${key}/label`, this.lang, key)
      ])
    })
    return ar
  }

  // Step 1
  /**
   * @return A Selector of available products
   */
  requestProduct () {
    return {
      selector: 'radio',
      single: true,
      label: this.dag.tr('product/label', this.lang, 'Products'),
      options: this._getOptions(Available.Products, 'product')
    }
  }

  /**
   * Sets the product type
   * @param {string} product One of the product keys ['graph', 'oneWay', ...]
   */
  setProduct (product) {
    this.product = product
  }

  // Step 2
  requestModule () {
    return {
      selector: 'radio',
      single: true,
      label: this.dag.tr('module/label', this.lang, 'Modules'),
      options: this._getOptions(Available.Modules, 'module')
    }
  }

  setModule (module) {
    this.module = module
  }

  // Step 3
  requestPalette () {
    return {
      selector: 'radio',
      single: true,
      label: this.dag.tr('palette/label', this.lang, 'Palettes'),
      options: this._getOptions(Available.Palettes, 'palette')
    }
  }

  setPalette (palette) {
    this.palette = palette
  }

  // Step 4
  requestGraphYVariable () {
    const ar = []
    const module = Available.Variables[this.module]
    module.common.forEach(key => {
      ar.push([key, this.dag.tr(`${key}/label`, this.lang, key)])
    })
    if (this.palette === 'intermediate' || this.palette === 'advanced') {
      module.intermediate.forEach(key => {
        ar.push([key, this.dag.tr(`${key}/label`, this.lang, key)])
      })
    }
    if (this.palette === 'advanced') {
      module.advanced.forEach(key => {
        ar.push([key, this.dag.tr(`${key}/label`, this.lang, key)])
      })
    }
    const units = []
    ar.forEach(key => {
      const node = this.dag.get(key[0])
      const variant = node.variant.ref
      units.push(variant instanceof Variant.Quantity ? variant.uomKeys() : null)
    })
    return {
      selector: 'menu',
      single: false,
      label: this.dag.tr(
        'selector.graph.y.variable/label',
        this.lang,
        'Y Variable'
      ),
      options: ar,
      units
    }
  }

  setGraphYVariable (nodeKey, units) {
    this.graph.y.node = this.dag.get(nodeKey)
    this.graph.y.units = units
    this.graph.y.data = []
    this.dag.clearSelected()
    this.dag.runSelected([[this.graph.y.node, true]])
  }

  // Step 5
  requestConfigurationOptions () {
    const selectors = []
    this.dag.requiredConfigNodes().forEach(config => {
      const key = config.node.key
      const options = []
      config.variant.ref.options().forEach(opt => {
        const label = this.dag.tr(
          `${key}.value.${opt}/label`,
          this.lang,
          `${key} not found`
        )
        options.push([opt, label])
      })
      selectors.push({
        selector: 'menu',
        single: true,
        key: key,
        label: this.dag.tr(`${key}/label`, this.lang, key),
        options
      })
    })
    return selectors
  }

  /**
   * @param {array} configs Array = [
   *  ['configKey1', 'configValue1],
   *  ['configKeyN', 'configValueN],
   * ]
   */
  setConfigurationOptions (configs) {
    this.dag.runConfigs(configs)
  }

  // Step 7
  requestGraphXVariable () {
    const ar = []
    this.dag.requiredInputNodes().forEach(node => {
      const key = node.node.key
      ar.push([key, this.dag.tr(`${key}/label`, this.lang, key)])
    })
    const units = []
    ar.forEach(key => {
      const node = this.dag.get(key[0])
      const variant = node.variant.ref
      units.push(variant instanceof Variant.Quantity ? variant.uomKeys() : null)
    })
    return {
      selector: 'menu',
      single: true,
      label: this.dag.tr(
        'selector.graph.x.variable/label',
        this.lang,
        'X Variable'
      ),
      options: ar,
      units
    }
  }

  setGraphXVariable (nodeKey, units = null) {
    this.graph.x.node = this.dag.get(nodeKey)
    this.graph.x.units = units
    this.graph.x.data = []
  }

  // Step 9
  requestGraphZVariable () {
    const ar = []
    const remaining = this.dag
      .requiredInputNodes()
      .filter(node => node !== this.graph.x.node)
    remaining.forEach(node => {
      const key = node.node.key
      ar.push([key, this.dag.tr(`${key}/label`, this.lang, key)])
    })
    const units = []
    ar.forEach(key => {
      const node = this.dag.get(key[0])
      const variant = node.variant.ref
      units.push(variant instanceof Variant.Quantity ? variant.uomKeys() : null)
    })
    return {
      selector: 'menu',
      single: true,
      label: this.dag.tr(
        'selector.graph.z.variable/label',
        this.lang,
        'Z Variable'
      ),
      options: [['none', 'none']].concat(ar),
      units: [null].concat(units)
    }
  }

  setGraphZVariable (nodeKey, units = null) {
    this.graph.z.node = nodeKey ? this.dag.get(nodeKey) : null
    this.graph.z.units = units
    this.graph.z.data = []
    this.graph.z.atValues = []
  }

  // Step 10
  requestGraphZProperties () {
    return this.graph.z.node
  }

  // lines = [[value, units, lineColor, lineWidth, lineStyle]]
  setGraphZProperties (lines) {
    this.graph.z.lines = lines
  }

  // Step 11
  requestRemainingInputs () {
    return this.dag
      .requiredInputNodes()
      .filter(node => node !== this.graph.x.node && node !== this.graph.z.node)
  }

  // inputs = [[nodeRef, value, units]]
  setRemainingInputs (inputs) {
    this.inputs = inputs
  }

  // Step 12
  requestDecorations () {}

  setDecorations (title, subtitle, user, agency, timestamp) {
    this.decoration = {
      title: title,
      subtitle: subtitle,
      user: user,
      agency: agency,
      timestamp: timestamp
    }
  }

  // Step 13
  generateGraphData () {
    this.graph.series = []

    // Set all the single-valued inputs
    this.inputs.forEach(([node, value, units]) => {
      // \TODO units conversion on each input value
      this.dag.setInputs([[node, [value]]])
    })

    // Set the x variable range inputs
    const x = this.graph.x
    // \TODO Units conversion on minValue, maxValue, stepValue
    const values = generateArray(x.minValue, x.maxValue, x.stepValue)
    this.dag.runInputs([[x.node, values]])

    // If their is a Z variable, generate a data series for each Z value
    const z = this.graph.z
    if (z.node) {
      z.lines.forEach(line => {
        // \TODO Unit conversions on each line.value from line.units
        this.dag.runInputs([[z.node, line.value]])
        this.graph.series.push([...this.graph.y.node.value.run])
      })
      return
    }

    // Otherwise, we already have the single line series
    this.graph.series.push([...this.graph.y.node.value.run])
  }
}
