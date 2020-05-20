// ------------------------------------------------------------------------------
// DISTANCE
// ------------------------------------------------------------------------------
import { baseAsUom2, baseFromUom2 } from './UomHelper.js'
import { Time } from './UomTime.js'

export const Distance = {
  name: 'Distance',
  base: 'ft',
  fromBaseInto: {
    ft: 1, // based on [ft_us}, NOT [ft_i]]
    ch: 1 / 66,
    in: 12,
    mi: 1 / 5280,
    yd: 1 / 3,
    m: 0.3048,
    cm: 30.48,
    km: 0.0003048
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Distance.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Distance.fromBaseInto[fromUom]
  }
}

export const DistanceSquared = {
  name: 'Distance^2',
  base: 'ft2',
  fromBaseInto: {
    ft2: 1,
    in2: 144,
    ac: 1 / 43560,
    m2: 0.3048 * 0.3048,
    cm2: 30.48 * 30.48,
    ha: 1 / 107639
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Area.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Area.fromBaseInto[fromUom]
  }
}

export const DistanceCubed = {
  name: 'Distance^3',
  base: 'ft3',
  fromBaseInto: {
    ft3: 1,
    in3: 144 * 12,
    m3: 0.3048 * 0.3048 * 0.3048,
    cm3: 30.48 * 30.48 * 30.48
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAmount * Volume.fromBaseInto[asUom]
  },
  baseFromUom: function (fromAmount, fromUom) {
    return fromAmount / Volume.fromBaseInto[fromUom]
  }
}

export const DistancePerUnitTime = {
  name: 'Distance/Time',
  base: 'ft/min',
  fromBaseInto: {
    'ft/min': true,
    'ft/s': true,
    'ft/h': true,
    'ch/min': true,
    'ch/h': true,
    'mi/h': true,
    'm/min': true,
    'm/s': true,
    'm/h': true,
    'km/h': true
  },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Distance, Time)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Distance, Time)
  }
}

// Specialized...

export const Area = { ...DistanceSquared }
export const Velocity = { ...DistancePerUnitTime }
export const Volume = { ...DistanceCubed }

export const AreaPerUnitVolume = {
  name: 'Area/Volume',
  base: 'ft2/ft3',
  fromBaseInto: { 'ft2/ft3': true, 'm2/m3': true, 'cm2/cm3': true },
  baseAsUom: function (baseAmount, asUom) {
    return baseAsUom2(baseAmount, asUom, Area, Volume)
  },
  baseFromUom: function (fromAmount, fromUom) {
    return baseFromUom2(fromAmount, fromUom, Area, Volume)
  }
}

export const Savr = { ...AreaPerUnitVolume }
