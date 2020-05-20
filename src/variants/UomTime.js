// ------------------------------------------------------------------------------
// TIME and its derivatives
// ------------------------------------------------------------------------------

export const Time = {
  name: 'Time',
  base: 'min',
  fromBaseInto: {
    min: 1,
    s: 60,
    h: 1 / 60,
    d: 1 / (60 * 24),
    y: 1 / (60 * 24 * 365)
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Time.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Time.fromBaseInto[fromUom]
  }
}

export const Hertz = {
  name: 'Hertz',
  base: '1/min',
  fromBaseInto: {
    '1/min': 1,
    '1/s': 60
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Hertz.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Hertz.fromBaseInto[fromUom]
  }
}

export const Years = {
  name: 'Years',
  base: 'y',
  fromBaseInto: {
    y: 1
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Years.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Years.fromBaseInto[fromUom]
  }
}
