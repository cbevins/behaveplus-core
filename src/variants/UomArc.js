import { Fraction } from './UomDimensionless.js'

function constrain (degrees) {
  while (degrees >= 90) {
    degrees -= 90
  }
  while (degrees < 0) {
    degrees += 90
  }
  return degrees
}

function degrees (radians) {
  return (radians * 180) / Math.PI
}

function radians (degrees) {
  return (degrees * Math.PI) / 180
}

function slopeDegrees (ratio) {
  const radians = Math.atan(ratio)
  return degrees(radians)
}

function slopeRatio (degrees) {
  const rad = radians(constrain(degrees))
  return Math.tan(rad)
}

// ------------------------------------------------------------------------------
// ARC
// ------------------------------------------------------------------------------

export const Arc = {
  name: 'Arc',
  base: 'ratio',
  fromBaseInto: {
    ratio: 1,
    percent: 100,
    deg: 1
  },
  baseAsUom: function (baseAmount, asUom) {
    return asUom === 'deg'
      ? slopeDegrees(baseAmount)
      : baseAmount * Fraction.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromUom === 'deg'
      ? slopeRatio(fromAmount)
      : fromAmount / Fraction.fromBaseInto[fromUom]
  }
}
