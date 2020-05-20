/**
 * The BpxFilterMap maps Variant keys from the BpxGenome
 * to their BpxVariant class constructor
 *
 * Each Dag has its own instance of the BpxVariantMap so that it can have
 * its own set of value display decorators (precision, decimals, uoms, etc)
 */
import * as WildfireVariant from 'wildfire-variant'
import * as BpxVariant from './BpxVariants.js'

export const BpxVariantArray = [
  ['AirTemperature', new BpxVariant.AirTemperature()],
  // \todo Add Booleans with specialized display strings, i.e.,
  ['ChaparralTypeOption', new BpxVariant.ChaparralTypeOption()],
  ['CompassAzimuth', new BpxVariant.CompassAzimuth()],
  ['ConfigChaparralTotalLoad', new BpxVariant.ConfigChaparralTotalLoad()],
  ['ConfigCuredHerbFraction', new BpxVariant.ConfigCuredHerbFraction()],
  [
    'ConfigEffectiveWindSpeedLimit',
    new BpxVariant.ConfigEffectiveWindSpeedLimit()
  ],
  [
    'ConfigFireLengthToWidthRatio',
    new BpxVariant.ConfigFireLengthToWidthRatio()
  ],
  ['ConfigFireVector', new BpxVariant.ConfigFireVector()],
  ['ConfigFireWeightingMethod', new BpxVariant.ConfigFireWeightingMethod()],
  ['ConfigFirelineIntensity', new BpxVariant.ConfigFirelineIntensity()],
  ['ConfigMoistureContents', new BpxVariant.ConfigMoistureContents()],
  ['ConfigModule', new BpxVariant.ConfigModule()],
  ['ConfigPrimaryFuels', new BpxVariant.ConfigPrimaryFuels()],
  ['ConfigSecondaryFuels', new BpxVariant.ConfigSecondaryFuels()],
  ['ConfigSlopeSteepness', new BpxVariant.ConfigSlopeSteepness()],
  ['ConfigWindDirection', new BpxVariant.ConfigWindDirection()],
  ['ConfigWindSpeed', new BpxVariant.ConfigWindSpeed()],
  [
    'ConfigWindSpeedAdjustmentFactor',
    new BpxVariant.ConfigWindSpeedAdjustmentFactor()
  ],
  ['CrownFillFraction', new BpxVariant.CrownFillFraction()],
  ['CrownFireActiveRatio', new BpxVariant.CrownFireActiveRatio()],
  ['CrownFireBurnedFraction', new BpxVariant.CrownFireBurnedFraction()],
  [
    'CrownFireInitiationTypeOption',
    new BpxVariant.CrownFireInitiationTypeOption()
  ],
  ['CrownRatioFraction', new BpxVariant.CrownRatioFraction()],
  ['CrownTransitionRatio', new BpxVariant.CrownTransitionRatio()],
  ['Documentation', new BpxVariant.Documentation()],
  ['FireArea', new BpxVariant.FireArea()],
  ['FireDampingCoefficient', new BpxVariant.FireDampingCoefficient()],
  ['FireElapsedTime', new BpxVariant.FireElapsedTime()],
  ['FireFirelineIntensity', new BpxVariant.FireFirelineIntensity()],
  ['FireFlameDuration', new BpxVariant.FireFlameDuration()],
  ['FireFlameLength', new BpxVariant.FireFlameLength()],
  ['FireHeatPerUnitArea', new BpxVariant.FireHeatPerUnitArea()],
  ['FireLengthToWidthRatio', new BpxVariant.FireLengthToWidthRatio()],
  ['FirePower', new BpxVariant.FirePower()],
  ['FirePowerRatio', new BpxVariant.FirePowerRatio()],
  ['FirePropagatingFluxRatio', new BpxVariant.FirePropagatingFluxRatio()],
  ['FireReactionIntensity', new BpxVariant.FireReactionIntensity()],
  ['FireReactionVelocity', new BpxVariant.FireReactionVelocity()],
  ['FireResidenceTime', new BpxVariant.FireResidenceTime()],
  ['FireScorchHeight', new BpxVariant.FireScorchHeight()],
  ['FireSpotDistance', new BpxVariant.FireSpotDistance()],
  ['FireSpreadDistance', new BpxVariant.FireSpreadDistance()],
  ['FireSpreadRate', new BpxVariant.FireSpreadRate()],
  ['FuelAge', new BpxVariant.FuelAge()],
  ['FuelBasalArea', new BpxVariant.FuelBasalArea()],
  ['FuelBedBulkDensity', new BpxVariant.FuelBedBulkDensity()],
  ['FuelBedDepth', new BpxVariant.FuelBedDepth()],
  ['FuelBedHeatOfPreignition', new BpxVariant.FuelBedHeatOfPreignition()],
  ['FuelBedPackingRatio', new BpxVariant.FuelBedPackingRatio()],
  ['FuelCoverFraction', new BpxVariant.FuelCoverFraction()],
  ['FuelCylindricalDiameter', new BpxVariant.FuelCylindricalDiameter()],
  ['FuelCylindricalVolume', new BpxVariant.FuelCylindricalVolume()],
  ['FuelDeadFraction', new BpxVariant.FuelDeadFraction()],
  ['FuelEffectiveHeatingNumber', new BpxVariant.FuelEffectiveHeatingNumber()],
  ['FuelEffectiveMineralContent', new BpxVariant.FuelEffectiveMineralContent()],
  ['FuelHeatOfCombustion', new BpxVariant.FuelHeatOfCombustion()],
  ['FuelHeatOfPreignition', new BpxVariant.FuelHeatOfPreignition()],
  ['FuelHeatSink', new BpxVariant.FuelHeatSink()],
  ['FuelLabelText', new BpxVariant.FuelLabelText()],
  ['FuelModelDomainOption', new BpxVariant.FuelModelDomainOption()],
  ['FuelModelKeyOption', new BpxVariant.FuelModelKeyOption()],
  ['FuelMoistureContent', new BpxVariant.FuelMoistureContent()],
  ['FuelOvendryLoad', new BpxVariant.FuelOvendryLoad()],
  ['FuelParticleFiberDensity', new BpxVariant.FuelParticleFiberDensity()],
  ['FuelSizeClassIndex', new BpxVariant.FuelSizeClassIndex()],
  ['FuelSurfaceArea', new BpxVariant.FuelSurfaceArea()],
  [
    'FuelSurfaceAreaToVolumeRatio',
    new BpxVariant.FuelSurfaceAreaToVolumeRatio()
  ],
  ['FuelTotalMineralContent', new BpxVariant.FuelTotalMineralContent()],
  ['FuelVolume', new BpxVariant.FuelVolume()],
  ['IgnitionFuelDepth', new BpxVariant.IgnitionFuelDepth()],
  ['IgnitionFuelTypeOption', new BpxVariant.IgnitionFuelTypeOption()],
  [
    'IgnitionLightningChargeOption',
    new BpxVariant.IgnitionLightningChargeOption()
  ],
  ['MapArea', new BpxVariant.MapArea()],
  ['MapContoursCount', new BpxVariant.MapContoursCount()],
  ['MapDistance', new BpxVariant.MapDistance()],
  ['MortalityFraction', new BpxVariant.MortalityFraction()],
  ['SlopeSteepness', new BpxVariant.SlopeSteepness()],
  ['SpottingFirebrandObject', new BpxVariant.SpottingFirebrandObject()],
  [
    'SpottingSourceLocationOption',
    new BpxVariant.SpottingSourceLocationOption()
  ],
  ['TorchingTreeSpeciesOption', new BpxVariant.TorchingTreeSpeciesOption()],
  ['TreeBarkThickness', new BpxVariant.TreeBarkThickness()],
  ['TreeCount', new BpxVariant.TreeCount()],
  ['TreeDbh', new BpxVariant.TreeDbh()],
  ['TreeHeight', new BpxVariant.TreeHeight()],
  ['TreeSpeciesFofem6Option', new BpxVariant.TreeSpeciesFofem6Option()],
  ['WeightingFactor', new BpxVariant.WeightingFactor()],
  ['WesternAspenTypeOption', new BpxVariant.WesternAspenTypeOption()],
  ['WindSpeed', new BpxVariant.WindSpeed()],
  ['WindSpeedAdjustmentFraction', new BpxVariant.WindSpeedAdjustmentFraction()]
]

export class BpxVariantMap extends Map {
  constructor () {
    super([...WildfireVariant.VariantArray, ...BpxVariantArray])
  }
}
