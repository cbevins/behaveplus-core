// ------------------------------------------------------------------------------
// Dimensionless Units of Measure (can be a rtio or a percent)
// ------------------------------------------------------------------------------

export const Fraction = {
  name: 'Fraction',
  base: 'ratio',
  fromBaseInto: {
    ratio: 1,
    percent: 100
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Fraction.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Fraction.fromBaseInto[fromUom]
  }
}

export const Ratio = {
  name: 'Ratio',
  base: 'ratio',
  fromBaseInto: {
    ratio: 1,
    percent: 100
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Ratio.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Ratio.fromBaseInto[fromUom]
  }
}
