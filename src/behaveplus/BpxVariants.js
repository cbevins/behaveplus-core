/**
 * Declares each specialized Variant class whose instances are injected into the Bpx VariantMap.
 *
 * The BpxVariantMap maps a Variant key from the BpxGenome entry to its Variant instance.
 *
 * Each Dag has its own instance of the VariantMap so that it can have
 * its own set of Node display decorators (value precision, decimals, uoms, etc)
 *
 * Note that:
 * - a class derived from Variant.Option() requires an array of options argument
 * - a class derived from Variant.Quantity() requires a Uom reference argument
 */
import * as Variant from '../variants/index.js'
import * as Lib from '../equations/index.js'
import * as Config from './BpxConfigOptions.js'

export class AirTemperature extends Variant.Quantity {
  constructor () {
    super(Variant.Temperature)
  }
}
export class ChaparralTypeOption extends Variant.Option {
  constructor () {
    super(Lib.Chaparral.Types)
  }
}
export class CompassAzimuth extends Variant.Quantity {
  constructor () {
    super(Variant.Arc)
  }
}
export class ConfigChaparralTotalLoad extends Variant.Config {
  constructor () {
    super(Config.ChaparralTotalLoad)
  }
}
export class ConfigCuredHerbFraction extends Variant.Config {
  constructor () {
    super(Config.CuredHerbFraction)
  }
}
export class ConfigEffectiveWindSpeedLimit extends Variant.Config {
  constructor () {
    super(Config.EffectiveWindSpeedLimit)
  }
}
export class ConfigFireLengthToWidthRatio extends Variant.Config {
  constructor () {
    super(Config.FireLengthToWidthRatio)
  }
}
export class ConfigFireVector extends Variant.Config {
  constructor () {
    super(Config.FireVector)
  }
}
export class ConfigFireWeightingMethod extends Variant.Config {
  constructor () {
    super(Config.FireWeightingMethod)
  }
}
export class ConfigFirelineIntensity extends Variant.Config {
  constructor () {
    super(Config.FirelineIntensity)
  }
}
export class ConfigModule extends Variant.Config {
  constructor () {
    super(Config.Module)
  }
}
export class ConfigMoistureContents extends Variant.Config {
  constructor () {
    super(Config.MoistureContent)
  }
}
export class ConfigPrimaryFuels extends Variant.Config {
  constructor () {
    super(Config.PrimaryFuel)
  }
}
export class ConfigSecondaryFuels extends Variant.Config {
  constructor () {
    super(Config.SecondaryFuel)
  }
}
export class ConfigSlopeSteepness extends Variant.Config {
  constructor () {
    super(Config.SlopeSteepness)
  }
}
export class ConfigWindDirection extends Variant.Config {
  constructor () {
    super(Config.WindDirection)
  }
}
export class ConfigWindSpeed extends Variant.Config {
  constructor () {
    super(Config.WindSpeed)
  }
}
export class ConfigWindSpeedAdjustmentFactor extends Variant.Config {
  constructor () {
    super(Config.WindSpeedAdjustmentFactor)
  }
}
export class CrownFillFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class CrownFireActiveRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class CrownFireBurnedFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class CrownFireInitiationTypeOption extends Variant.Option {
  constructor () {
    super(Lib.CrownFire.InitiationTypes)
  }
}
export class CrownRatioFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Load)
  }
}
export class CrownTransitionRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class Documentation extends Variant.Text {
  constructor () {
    super('')
  }
}
export class FireArea extends Variant.Quantity {
  constructor () {
    super(Variant.Area)
  }
}
export class FireDampingCoefficient extends Variant.Float {
  constructor () {
    super(0)
  }
}
export class FireElapsedTime extends Variant.Quantity {
  constructor () {
    super(Variant.Time)
  }
}
export class FireFirelineIntensity extends Variant.Quantity {
  constructor () {
    super(Variant.HeatIntensity)
  }
}
export class FireFlameDuration extends Variant.Quantity {
  constructor () {
    super(Variant.Time)
  }
}
export class FireFlameLength extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class FireHeatPerUnitArea extends Variant.Quantity {
  constructor () {
    super(Variant.HeatLoad)
  }
}
export class FireLengthToWidthRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class FirePower extends Variant.Quantity {
  constructor () {
    super(Variant.Power)
  }
}
export class FirePowerRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class FirePropagatingFluxRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class FireReactionIntensity extends Variant.Quantity {
  constructor () {
    super(Variant.HeatFlux)
  }
}
export class FireReactionVelocity extends Variant.Quantity {
  constructor () {
    super(Variant.Hertz, 0.1)
  }
}
export class FireResidenceTime extends Variant.Quantity {
  constructor () {
    super(Variant.Time)
  }
}
export class FireScorchHeight extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class FireSpotDistance extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class FireSpreadDistance extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class FireSpreadRate extends Variant.Quantity {
  constructor () {
    super(Variant.Velocity)
  }
}
export class FuelAge extends Variant.Quantity {
  constructor () {
    super(Variant.Years)
  }
}
export class FuelBasalArea extends Variant.Quantity {
  constructor () {
    super(Variant.Area)
  }
}
export class FuelBedBulkDensity extends Variant.Quantity {
  constructor () {
    super(Variant.Density)
  }
}
export class FuelBedDepth extends Variant.Quantity {
  constructor () {
    super(Variant.Distance, 0.1)
  }
}
export class FuelBedHeatOfPreignition extends Variant.Quantity {
  constructor () {
    super(Variant.HeatContent)
  }
}
export class FuelBedPackingRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class FuelCoverFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class FuelCylindricalDiameter extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class FuelCylindricalVolume extends Variant.Quantity {
  constructor () {
    super(Variant.Volume)
  }
}
export class FuelDeadFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class FuelEffectiveHeatingNumber extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class FuelEffectiveMineralContent extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class FuelHeatOfCombustion extends Variant.Quantity {
  constructor () {
    super(Variant.HeatContent)
  }
}
export class FuelHeatOfPreignition extends Variant.Quantity {
  constructor () {
    super(Variant.HeatContent)
  }
}
export class FuelHeatSink extends Variant.Quantity {
  constructor () {
    super(Variant.HeatDensity)
  }
}
export class FuelLabelText extends Variant.Text {
  constructor () {
    super('')
  }
}
export class FuelModelDomainOption extends Variant.Option {
  constructor () {
    super(Lib.FuelCatalog.Domains)
  }
}
export class FuelModelKeyOption extends Variant.Option {
  constructor () {
    super(Lib.FuelCatalog.keys())
  }
}
export class FuelMoistureContent extends Variant.Quantity {
  constructor () {
    super(Variant.Ratio)
  }
}
export class FuelOvendryLoad extends Variant.Quantity {
  constructor () {
    super(Variant.Load)
  }
}
export class FuelParticleFiberDensity extends Variant.Quantity {
  constructor () {
    super(Variant.Density)
  }
}
export class FuelSizeClassIndex extends Variant.Index {
  constructor () {
    super(6)
  }
}
export class FuelSurfaceArea extends Variant.Quantity {
  constructor () {
    super(Variant.Area)
  }
}
export class FuelSurfaceAreaToVolumeRatio extends Variant.Quantity {
  constructor () {
    super(Variant.Savr, 1)
  }
}
export class FuelTotalMineralContent extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class FuelVolume extends Variant.Quantity {
  constructor () {
    super(Variant.Volume)
  }
}
export class IgnitionFuelDepth extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class IgnitionFuelTypeOption extends Variant.Option {
  constructor () {
    super(Lib.IgnitionProbability.LightningFuels)
  }
}
export class IgnitionLightningChargeOption extends Variant.Option {
  constructor () {
    super(Lib.IgnitionProbability.LightningCharges)
  }
}
export class MapArea extends Variant.Quantity {
  constructor () {
    super(Variant.Area)
  }
}
export class MapContoursCount extends Variant.Count {
  constructor () {
    super(0)
  }
}
export class MapDistance extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class MortalityFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class SlopeSteepness extends Variant.Quantity {
  constructor () {
    super(Variant.Arc, 0, 0, 89)
  }
}
export class SpottingFirebrandObject extends Variant.Blob {
  // Crown fire spotting distance
  constructor () {
    super({
      zdrop: 0,
      xdrop: 0,
      xdrift: 0,
      xspot: 0,
      layer: 0
    })
  }
}
export class SpottingSourceLocationOption extends Variant.Option {
  constructor () {
    super(Lib.Spotting.locations())
  }
}
export class TorchingTreeSpeciesOption extends Variant.Option {
  constructor () {
    super(Lib.Spotting.TorchingTreeSpecies)
  }
}
export class TreeBarkThickness extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class TreeCount extends Variant.Count {
  constructor () {
    super(0)
  }
}
export class TreeDbh extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class TreeHeight extends Variant.Quantity {
  constructor () {
    super(Variant.Distance)
  }
}
export class TreeSpeciesFofem6Option extends Variant.Option {
  constructor () {
    super(Lib.TreeMortality.fofem6Codes())
  }
}
export class WeightingFactor extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
export class WesternAspenTypeOption extends Variant.Option {
  constructor () {
    super(Lib.WesternAspen.Types)
  }
}
export class WindSpeed extends Variant.Quantity {
  constructor () {
    super(Variant.Velocity)
  }
}
export class WindSpeedAdjustmentFraction extends Variant.Quantity {
  constructor () {
    super(Variant.Fraction)
  }
}
