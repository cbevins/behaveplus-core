/**
 * @file Exported BehavePlus fuel catalog accessors.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */

import { FuelCatalogData } from './FuelCatalogData.js'
export { Domains } from './FuelCatalogData.js'

export function domain (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain
}

export function ensureKey (key) {
  if (!hasKey(key)) {
    throw new Error(`Fuel catalog does not have key '${key}'`)
  }
}

export function hasKey (key) {
  return Object.prototype.hasOwnProperty.call(FuelCatalogData, key)
}

export function keys () {
  return Object.keys(FuelCatalogData).sort()
}

export function list () {
  return Object.keys(FuelCatalogData)
    .sort()
    .map(key => [key, FuelCatalogData[key].label])
}

export function label (key) {
  ensureKey(key)
  return FuelCatalogData[key].label
}

export function behaveDead1Load (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].dead1Load
    : 0
}

export function behaveDead1Savr (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].dead1Savr
    : 1
}

export function behaveDead10Load (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].dead10Load
    : 0
}

export function behaveDead100Load (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].dead100Load
    : 0
}

export function behaveDeadHeat (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].deadHeat
    : 0
}

export function behaveDeadMext (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].deadMext
    : 0.01
}

export function behaveDepth (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].depth
    : 0.01
}

export function behaveLiveHeat (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].liveHeat
    : 0
}

export function behaveLiveHerbSavr (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].liveHerbSavr
    : 1
}

export function behaveLiveStemLoad (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].liveStemLoad
    : 0
}

export function behaveLiveStemSavr (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].liveStemSavr
    : 1
}

export function behaveTotalHerbLoad (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'behave'
    ? FuelCatalogData[key].totalHerbLoad
    : 0
}

export function chaparralDeadFraction (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'chaparral'
    ? FuelCatalogData[key].deadFraction
    : 0
}

export function chaparralDepth (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'chaparral'
    ? FuelCatalogData[key].depth
    : 0.01
}

export function chaparralFuelType (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'chaparral'
    ? FuelCatalogData[key].fuelType
    : 'none'
}

export function chaparralTotalLoad (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'chaparral'
    ? FuelCatalogData[key].totalLoad
    : 0
}

export function pgAge (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'palmettoGallberry'
    ? FuelCatalogData[key].age
    : 0
}

export function pgBasalArea (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'palmettoGallberry'
    ? FuelCatalogData[key].basalArea
    : 0
}

export function pgCover (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'palmettoGallberry'
    ? FuelCatalogData[key].cover
    : 'none'
}

export function pgHeight (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'palmettoGallberry'
    ? FuelCatalogData[key].height
    : 0
}

export function westernAspenCuringLevel (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'westernAspen'
    ? FuelCatalogData[key].curingLevel
    : 0
}

export function westernAspenFuelType (key) {
  ensureKey(key)
  return FuelCatalogData[key].domain === 'westernAspen'
    ? FuelCatalogData[key].fuelType
    : 'none'
}
