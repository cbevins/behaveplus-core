// ------------------------------------------------------------------------------
// MASS and its derivatives
// ------------------------------------------------------------------------------
import { baseAsUom2, baseFromUom2 } from './UomHelper.js'
import { Area, Volume } from './UomDistance.js'

export const Mass = {
  name: 'Mass',
  base: 'lb',
  fromBaseInto: {
    lb: 1,
    oz: 16,
    ton: 1 / 2000,
    kg: 0.45359237,
    g: 453.59237,
    T: 0.00045359237 // 1 / 2204.622621848776
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Mass.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Mass.fromBaseInto[fromUom]
  }
}

export const MassPerUnitArea = {
  name: 'Mass/Area',
  base: 'lb/ft2',
  fromBaseInto: { 'lb/ft2': true, 'ton/ac': true, 'kg/m2': true, 'T/ha': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Mass, Area)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Mass, Area)
  }
}

export const MassPerUnitVolume = {
  name: 'Mass/Volume',
  base: 'lb/ft3',
  fromBaseInto: { 'lb/ft3': true, 'kg/m3': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Mass, Volume)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Mass, Volume)
  }
}

// Specializations

export const Density = { ...MassPerUnitVolume }

export const Load = { ...MassPerUnitArea }
