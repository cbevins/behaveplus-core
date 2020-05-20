# Wildfire Variant

[![Build Status](https://travis-ci.org/cbevins/wildfire-variant.svg?branch=master)](https://travis-ci.org/cbevins/wildfire-variant)

[![Coverage Status](https://coveralls.io/repos/github/cbevins/wildfire-variant/badge.svg?branch=master)](https://coveralls.io/github/cbevins/wildfire-variant?branch=master)

The **wildfire-variant** package supports the Wildland Fire Simulator Project (WFSP).

The WFSP uses a directed acyclical graph (DAG) defining simulation variable dependencies to maintain its model state.  Each Dag Node is a simulation model variable whose value has a specific type; the value type is called a *Variant*.

A Variant is a _specification_ for a Node value. A Variant does not actually hold a value itself; just the Node itself has a value.  Rather a Variant holds specifications for:

- the _type_ of value held by a Node,
- all filters, validator functions, and validation parameters to be applied to a Node's value on input, and
- all transformers, converters, and decorators applied to a Node's value upon output or display.

For example, in the *wildfire-behaveplus* package, a fire *SpreadRate* Variant is a specialized *Velocity* Variant whose input filters and display decorators are applied to all the fire spread rate Nodes in the simulation model.

---

## Variant Classes

The following Variant class hierarchy is implemented:

- **AbstractVariant** is the base Variant class with a default value property, and default displayString(value) and isValid(value) methods that are usually overridden by the derived Variant classes.

  - The **Blob** Variant supports generic Javascript Object values.  Blob serves as a base class for more specialized Objects defined by clients.

  - The **Bool** Variant supports primitive Javascript boolean values and contains client-defined display strings for true and false states.

  - The **Text** Variant supports primitive Javascript string values and applies minimum and maximum length validators. Client may extend the Text class to, for example, add regular expression validators.

    - The **Option** Variant restricts **Text** values to a set of valid client-defined strings.

      - The **Config** Variant is a specialized **Option** for identifying a Node as a DAG *configuration* item rather than a model *variable* item.

  - The **Float** Variant supports primitive Javascript number values and applies minimum and maximum value validators.

    - The **Integer** Variant restricts **Float** values to whole numbers.

      - The **Count** Variant restricts **Integer** values to non-negative whole numbers.

        - The **Index** Variant restricts **Count** values to a range [0, size-1]

    - The **Quantity** Variant restricts **Float** values to non-negative amounts with an associated units-of-measure (Uom) property.  It also provides methods to convert values between the Uom base measurement and other input or display units of measure supported by the Uom.

---

## VariantArray and VariantMap

---

## Uom

Units of measure conversion values have been validated against the Unified Code for Units of Measure [units conversion web service](https://ucum.nlm.nih.gov/ucum-service.html#conversion).

For example, to convert US survey foot to UCUM base units:
[ft_us](https://ucum.nlm.nih.gov/ucum-service/v1/toBaseUnits/%5Bft_us%5D)