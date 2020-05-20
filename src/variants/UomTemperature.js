// ------------------------------------------------------------------------------
// TEMPERATURE and its derivatives
// ------------------------------------------------------------------------------

export const Temperature = {
  name: 'Temperature',
  base: 'F',
  fromBaseInto: {
    F: 1,
    C: 5 / 9,
    K: 5 / 9
  },
  baseAsUom: function (baseAmount, asUom) {
    if (asUom === 'C') return ((baseAmount - 32) * 5) / 9
    if (asUom === 'K') return 459.67 + ((baseAmount - 32) * 5) / 9
    return baseAmount // else asUom === 'F'
  },
  baseFromUom: function (fromAmount, fromUom) {
    if (fromUom === 'C') return 32 + fromAmount * 1.8
    if (fromUom === 'K') return 32 + (fromAmount - 459.67) * 1.8
    return fromAmount // if (fromUom === 'F')
  }
}
