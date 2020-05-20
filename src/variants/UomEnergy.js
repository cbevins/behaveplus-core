// ------------------------------------------------------------------------------
// ENERGY and its derivatives
// ------------------------------------------------------------------------------
import {
  baseAsUom2,
  baseAsUom3,
  baseFromUom2,
  baseFromUom3
} from './UomHelper.js'
import { Mass } from './UomMass.js'
import { Time } from './UomTime.js'
import { Area, Distance, Volume } from './UomDistance.js'

export const Energy = {
  name: 'Energy',
  base: 'btu',
  fromBaseInto: {
    btu: 1, // [Btu_IT]
    J: 1055.05585262, // btu_IT:
    // J: 1.05967, // btu_39:
    // J: 1.0548, // btu_59:
    // J: 1.05468,  // btu_60:
    // J: 1.05587,  // btu_m:
    // J: 1.05435,  // btu_th:
    kJ: 1.05505585262, // btu_IT:
    'ft-lb': 1055.05585262 / 1.3558179483314004, // 1 ft-lb = 1.3558179483314004 J
    'kw-m': 3.46414
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Energy.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Energy.fromBaseInto[fromUom]
  }
}

export const EnergyPerUnitArea = {
  name: 'Energy/Area',
  base: 'btu/ft2',
  fromBaseInto: { 'btu/ft2': true, 'J/m2': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Energy, Area)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Energy, Area)
  }
}

export const EnergyPerUnitAreaPerUnitTime = {
  name: 'Energy/Area/Time',
  base: 'btu/ft2/min',
  fromBaseInto: { 'btu/ft2/min': true, 'J/m2/min': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom3(baseAmount, asUom, Energy, Area, Time)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom3(fromAmount, fromUom, Energy, Area, Time)
  }
}

export const EnergyPerUnitDistancePerUnitTime = {
  name: 'Energy/Distance/Time',
  base: 'btu/ft/s',
  fromBaseInto: { 'btu/ft/s': true, 'J/m/s': true },
  baseAsUom: function (baseAmount, asUom) {
    // Because the base Time is 's' instead of 'min', multiply by 60
    return 60 * baseAsUom3(baseAmount, asUom, Energy, Distance, Time)
  },
  baseFromUom: function (fromAmount, fromUom) {
    // Because the base Time is 's' instead of 'min', divide by 60
    return baseFromUom3(fromAmount, fromUom, Energy, Distance, Time) / 60
  }
}

export const EnergyPerUnitMass = {
  name: 'Energy/Mass',
  base: 'btu/lb',
  fromBaseInto: { 'btu/lb': true, 'J/kg': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Energy, Mass)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Energy, Mass)
  }
}

export const EnergyPerUnitTime = {
  name: 'EnergyPerUnitTime',
  base: 'btu/min',
  fromBaseInto: {
    'J/s': true,
    'J/min': true,
    'btu/s': true,
    'btu/min': true,
    W: 17.5725,
    'ft-lb/s': 17.5725 / 1.35581795 // 1 ft-lb/s == 1.35581795 watts
  },
  baseAsUom: function (baseAmount, asUom) {
    return asUom === 'W' // asUom.indexOf('/') < 0
      ? baseAmount * this.fromBaseInto[asUom]
      : baseAsUom2(baseAmount, asUom, Energy, Time)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromUom === 'W' // asUom.indexOf('/') < 0
      ? fromAmount / this.fromBaseInto[fromUom]
      : baseFromUom2(fromAmount, fromUom, Energy, Time)
  }
}

export const EnergyPerUnitVolume = {
  name: 'Energy/Volume',
  base: 'btu/ft3',
  fromBaseInto: { 'btu/ft3': true, 'J/m3': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Energy, Volume)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Energy, Volume)
  }
}

// Specialized ...

// HeatContent is Btu/lb used by [HeatOfCombustion, HeatOfPreignition]
export const HeatContent = EnergyPerUnitMass

// HeatDensity (Btu/ft3) used by [HeatSink]
export const HeatDensity = { ...EnergyPerUnitVolume }

// HeatFlux is Btu/ft2/min used by [ReactionIntensity, PropagatingFlux]
export const HeatFlux = { ...EnergyPerUnitAreaPerUnitTime }

// HeatIntensity is Btu/ft/s used by [FirelineIntensity]
export const HeatIntensity = { ...EnergyPerUnitDistancePerUnitTime }

// HeatLoad is Btu/ft2 used by [HeatPerUnitArea]
export const HeatLoad = { ...EnergyPerUnitArea }

export const Power = { ...EnergyPerUnitTime }
