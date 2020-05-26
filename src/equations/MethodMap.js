import * as Behave from './BehaveFuel.js'
import * as Calc from './Calc.js'
import * as Canopy from './Canopy.js'
import * as Chaparral from './ChaparralFuel.js'
import * as Compass from './Compass.js'
import * as CrownFire from './CrownFire.js'
import * as CrownSpotting from './CrownSpotting.js'
import * as FireEllipse from './FireEllipse.js'
import * as FuelBed from './FuelBed.js'
import * as FuelCatalog from './FuelCatalog.js'
import * as FuelParticle from './FuelParticle.js'
import * as IgnitionProbability from './IgnitionProbability.js'
import * as PalmettoGallberry from './PalmettoGallberryFuel.js'
import * as Spotting from './Spotting.js'
import * as SurfaceFire from './SurfaceFire.js'
import * as TreeMortality from './TreeMortality.js'
import * as WesternAspen from './WesternAspenFuel.js'
import * as Wind from './Wind.js'

function tbd () {
  return true
}

// \todo Have the Dag add its Dag.* methods directly
export const MethodArray = [
  ['Dag.bind', tbd], // (87 users)
  ['Dag.config', tbd], // Config Leaf update method
  ['Dag.dangler', tbd], // same as input(), but due to boundary conditions
  ['Dag.fixed', tbd], // (164 users)
  ['Dag.input', tbd], // (120 users)
  ['Behave.curedHerbFraction', Behave.curedHerbFraction], // (2 users)
  ['Behave.deadHerbLoad', Behave.deadHerbLoad], // (2 users)
  ['Behave.liveHerbLoad', Behave.liveHerbLoad], // (2 users)
  ['Calc.divide', Calc.divide], // (37 users)
  ['Calc.greaterThan', Calc.greaterThan], // (6 users)
  ['Calc.multiply', Calc.multiply], // (9 users)
  ['Calc.or', Calc.or], // (1 users)
  ['Calc.subtract', Calc.subtract], // (7 users)
  ['Calc.sum', Calc.sum], // (46 users)
  ['Calc.sumOfProducts', Calc.sumOfProducts], // (42 users)
  ['Canopy.crownFill', Canopy.crownFill], // (1 users)
  ['Canopy.crownLength', Canopy.crownLength], // (1 users)
  ['Canopy.crownRatio', Canopy.crownRatio], // (1 users)
  ['Canopy.fuelLoad', Canopy.fuelLoad], // (1 users)
  ['Canopy.heatPerUnitArea', Canopy.heatPerUnitArea], // (1 users)
  ['Canopy.sheltersFuel', Canopy.sheltersFuelFromWind], // (1 users)
  ['Canopy.windSpeedAdjustmentFactor', Canopy.windSpeedAdjustmentFactor], // (1 users)
  ['Chaparral.age', Chaparral.age], // (2 users)
  ['Chaparral.deadClass1Load', Chaparral.deadClass1Load], // (2 users)
  ['Chaparral.deadClass2Load', Chaparral.deadClass2Load], // (2 users)
  ['Chaparral.deadClass3Load', Chaparral.deadClass3Load], // (2 users)
  ['Chaparral.deadClass4Load', Chaparral.deadClass4Load], // (2 users)
  [
    'Chaparral.deadFractionAverageMortality',
    Chaparral.deadFractionAverageMortality
  ], // (2 users)
  [
    'Chaparral.deadFractionSevereMortality',
    Chaparral.deadFractionSevereMortality
  ],
  ['Chaparral.deadLoad', Chaparral.deadLoad], // (2 users)
  ['Chaparral.fuelDepth', Chaparral.fuelDepth], // (2 users)
  ['Chaparral.liveClass1Load', Chaparral.liveClass1Load], // (2 users)
  ['Chaparral.liveClass2Load', Chaparral.liveClass2Load], // (2 users)
  ['Chaparral.liveClass3Load', Chaparral.liveClass3Load], // (2 users)
  ['Chaparral.liveClass4Load', Chaparral.liveClass4Load], // (2 users)
  ['Chaparral.liveClass5Load', Chaparral.liveClass5Load], // (2 users)
  ['Chaparral.liveLoad', Chaparral.liveLoad], // (2 users)
  ['Chaparral.totalLoad', Chaparral.totalLoad], // (2 users)
  ['Compass.diff', Compass.diff],
  ['Compass.opposite', Compass.opposite], // (6 users)
  ['Compass.slopeDegrees', Compass.slopeDegrees], // (1 users)
  ['Compass.slopeDegreesMap', Compass.slopeDegreesMap], // (1 users)
  ['Compass.slopeRatio', Compass.slopeRatio], // (1 users)
  ['Compass.slopeRatioMap', Compass.slopeRatioMap], // (1 users)
  ['Compass.sum', Compass.sum],
  ['CrownFire.activeRatio', CrownFire.activeRatio], // (1 users)
  ['CrownFire.area', CrownFire.area], // (2 users)
  ['CrownFire.canTransition', CrownFire.canTransition], // (1 users)
  ['CrownFire.crownFractionBurned', CrownFire.crownFractionBurned], // (1 users)
  ['CrownFire.crowningIndex', CrownFire.crowningIndex], // (1 users)
  ['CrownFire.flameLength', SurfaceFire.flameLength], // (1 users, 'crown.fire.initiation.flameLength')
  ['CrownFire.flameLengthThomas', CrownFire.flameLengthThomas], // (2 users)
  ['CrownFire.fliActive', CrownFire.fliActive], // (1 users)
  ['CrownFire.fliFinal', CrownFire.fliFinal], // (1 users)
  ['CrownFire.fliInit', CrownFire.fliInit], // (1 users)
  ['CrownFire.hpuaActive', CrownFire.hpuaActive], // (1 users)
  ['CrownFire.isActive', CrownFire.isActive], // (1 users)
  ['CrownFire.isConditional', CrownFire.isConditional], // (1 users)
  ['CrownFire.isCrown', CrownFire.isCrown], // (1 users)
  ['CrownFire.isPassive', CrownFire.isPassive], // (1 users)
  ['CrownFire.isPlumeDominated', CrownFire.isPlumeDominated], // (1 users)
  ['CrownFire.isSurface', CrownFire.isSurface], // (1 users)
  ['CrownFire.isWindDriven', CrownFire.isWindDriven], // (1 users)
  ['CrownFire.lengthToWidthRatio', CrownFire.lengthToWidthRatio], // (1 users)
  ['CrownFire.mapArea', FireEllipse.mapArea], // (2 users)
  ['CrownFire.oActive', CrownFire.oActive], // (1 users)
  ['CrownFire.perimeter', CrownFire.perimeter], // (2 users)
  ['CrownFire.powerOfTheFire', CrownFire.powerOfTheFire], // (1 users)
  ['CrownFire.powerOfTheWind', CrownFire.powerOfTheWind], // (1 users)
  ['CrownFire.rActive', CrownFire.rActive], // (1 users)
  ['CrownFire.rFinal', CrownFire.rFinal], // (1 users)
  ['CrownFire.rInit', CrownFire.rInit], // (1 users)
  ['CrownFire.rPrimeActive', CrownFire.rPrimeActive], // (1 users)
  ['CrownFire.rSa', CrownFire.rSa], // (1 users)
  ['CrownFire.spreadDistance', FireEllipse.spreadDistance], // (2 users)
  ['CrownFire.transitionRatio', CrownFire.transitionRatio], // (1 users)
  ['CrownFire.type', CrownFire.type], // (1 users)
  [
    'CrownSpotting.firelineIntensityThomas',
    CrownSpotting.firelineIntensityThomas
  ], // (1 users, 'site.fire.crown.firelineIntensity')
  ['CrownSpotting.flatDistance', CrownSpotting.flatDistance], // (1 users)
  ['CrownSpotting.xdrift', CrownSpotting.xdrift], // (1 users)
  ['CrownSpotting.xdrop', CrownSpotting.xdrop], // (1 users)
  ['CrownSpotting.xspot', CrownSpotting.xspot], // (1 users)
  ['CrownSpotting.zdrop', CrownSpotting.zdrop], // (1 users)
  ['FireEllipse.area', FireEllipse.area], // (1 users)
  ['FireEllipse.backingSpreadRate', FireEllipse.backingSpreadRate], // (1 users)
  ['FireEllipse.betaSpreadRate', FireEllipse.betaSpreadRate], // (1 users)
  ['FireEllipse.eccentricity', FireEllipse.eccentricity], // (1 users)
  ['FireEllipse.flameLength', SurfaceFire.flameLength], // (6 users)
  ['FireEllipse.flankingSpreadRate', FireEllipse.flankingSpreadRate], // (1 users)
  ['FireEllipse.fliAtAzimuth', FireEllipse.fliAtAzimuth], // (5 users)
  ['FireEllipse.fSpreadRate', FireEllipse.fSpreadRate], // (1 users)
  ['FireEllipse.gSpreadRate', FireEllipse.gSpreadRate], // (1 users)
  ['FireEllipse.hSpreadRate', FireEllipse.hSpreadRate], // (1 users)
  ['FireEllipse.majorSpreadRate', FireEllipse.majorSpreadRate], // (1 users)
  ['FireEllipse.mapArea', FireEllipse.mapArea], // (1 users)
  ['FireEllipse.minorSpreadRate', FireEllipse.minorSpreadRate], // (1 users)
  ['FireEllipse.perimeter', FireEllipse.perimeter], // (1 users)
  ['FireEllipse.psiFromTheta', FireEllipse.psiFromTheta], // (1 users)
  ['FireEllipse.scorchHeight', SurfaceFire.scorchHeight], // (6 users)
  ['FireEllipse.spreadDistance', FireEllipse.spreadDistance], // (8 users)
  ['FireEllipse.psiSpreadRate', FireEllipse.psiSpreadRate], // (2 users)
  ['FireEllipse.thetaFromBeta', FireEllipse.thetaFromBeta], // (1 users)
  [
    'FireWeighting.arithmeticMeanSpreadRate',
    SurfaceFire.arithmeticMeanSpreadRate
  ], // (1 users)
  [
    'FireWeighting.expectedValueSpreadRate',
    SurfaceFire.expectedValueSpreadRateMOCK
  ], // (1 users)
  ['FireWeighting.harmonicMeanSpreadRate', SurfaceFire.harmonicMeanSpreadRate], // (1 users)
  ['FuelBed.extinctionMoistureContent', FuelBed.extinctionMoistureContent], // (3 users)
  [
    'FuelBed.extinctionMoistureContentFactor',
    FuelBed.extinctionMoistureContentFactor
  ], // (3 users)
  ['FuelBed.heatPerUnitArea', FuelBed.heatPerUnitArea], // (3 users)
  ['FuelBed.heatSink', FuelBed.heatSink], // (3 users)
  ['FuelBed.mineralDamping', FuelBed.mineralDamping], // (6 users)
  ['FuelBed.moistureDamping', FuelBed.moistureDamping], // (6 users)
  ['FuelBed.noWindNoSlopeSpreadRate', FuelBed.noWindNoSlopeSpreadRate], // (3 users)
  [
    'FuelBed.openWindSpeedAdjustmentFactor',
    FuelBed.openWindSpeedAdjustmentFactor
  ], // (3 users)
  ['FuelBed.optimumPackingRatio', FuelBed.optimumPackingRatio], // (3 users)
  ['FuelBed.packingRatio', FuelBed.packingRatio], // (3 users)
  ['FuelBed.propagatingFluxRatio', FuelBed.propagatingFluxRatio], // (3 users)
  ['FuelBed.reactionIntensityDry', FuelBed.reactionIntensityDry], // (6 users)
  ['FuelBed.reactionVelocityExponent', FuelBed.reactionVelocityExponent], // (3 users)
  ['FuelBed.reactionVelocityMaximum', FuelBed.reactionVelocityMaximum], // (3 users)
  ['FuelBed.reactionVelocityOptimum', FuelBed.reactionVelocityOptimum], // (3 users)
  ['FuelBed.savr15', FuelBed.savr15], // (3 users)
  ['FuelBed.slopeK', FuelBed.slopeK], // (3 users)
  [
    'FuelBed.sizeClassWeightingFactorArray',
    FuelBed.sizeClassWeightingFactorArray
  ], // (36 users)
  ['FuelBed.taur', FuelBed.taur], // (3 users)
  ['FuelBed.windB', FuelBed.windB], // (3 users)
  ['FuelBed.windC', FuelBed.windC], // (3 users)
  ['FuelBed.windE', FuelBed.windE], // (3 users)
  ['FuelBed.windI', FuelBed.windI], // (3 users)
  ['FuelBed.windK', FuelBed.windK], // (3 users)
  ['FuelBed.windSpeedAdjustmentFactor', FuelBed.windSpeedAdjustmentFactor], // (2 users)
  ['FuelCatalog.behaveDead100Load', FuelCatalog.behaveDead100Load], // (2 users)
  ['FuelCatalog.behaveDead10Load', FuelCatalog.behaveDead10Load], // (2 users)
  ['FuelCatalog.behaveDead1Load', FuelCatalog.behaveDead1Load], // (2 users)
  ['FuelCatalog.behaveDead1Savr', FuelCatalog.behaveDead1Savr], // (2 users)
  ['FuelCatalog.behaveDeadHeat', FuelCatalog.behaveDeadHeat], // (2 users)
  ['FuelCatalog.behaveDeadMext', FuelCatalog.behaveDeadMext], // (2 users)
  ['FuelCatalog.behaveDepth', FuelCatalog.behaveDepth], // (2 users)
  ['FuelCatalog.behaveLiveHeat', FuelCatalog.behaveLiveHeat], // (2 users)
  ['FuelCatalog.behaveLiveHerbSavr', FuelCatalog.behaveLiveHerbSavr], // (2 users)
  ['FuelCatalog.behaveLiveStemLoad', FuelCatalog.behaveLiveStemLoad], // (2 users)
  ['FuelCatalog.behaveLiveStemSavr', FuelCatalog.behaveLiveStemSavr], // (2 users)
  ['FuelCatalog.behaveTotalHerbLoad', FuelCatalog.behaveTotalHerbLoad], // (2 users)
  ['FuelCatalog.chaparralDeadFraction', FuelCatalog.chaparralDeadFraction], // (2 users)
  ['FuelCatalog.chaparralDepth', FuelCatalog.chaparralDepth], // (2 users)
  ['FuelCatalog.chaparralFuelType', FuelCatalog.chaparralFuelType], // (2 users)
  ['FuelCatalog.chaparralTotalLoad', FuelCatalog.chaparralTotalLoad], // (2 users)
  ['FuelCatalog.domain', FuelCatalog.domain], // (2 users)
  ['FuelCatalog.palmettoGallberrylAge', FuelCatalog.pgAge], // (2 users)
  ['FuelCatalog.palmettoGallberrylBasalArea', FuelCatalog.pgBasalArea], // (2 users)
  ['FuelCatalog.palmettoGallberrylCover', FuelCatalog.pgCover], // (2 users)
  ['FuelCatalog.palmettoGallberrylHeight', FuelCatalog.pgHeight], // (2 users)
  ['FuelCatalog.westernAspenCuringLevel', FuelCatalog.westernAspenCuringLevel], // (2 users)
  ['FuelCatalog.westernAspenFuelType', FuelCatalog.westernAspenFuelType], // (2 users)
  ['FuelParticle.cylindricalDiameter', FuelParticle.cylindricalDiameter], // (30 users)
  ['FuelParticle.heatOfPreignition', FuelParticle.heatOfPreignition], // (30 users)
  ['FuelParticle.effectiveHeatingNumber', FuelParticle.effectiveHeatingNumber], // (30 users)
  ['FuelParticle.effectiveFuelLoad', FuelParticle.effectiveFuelLoad], // (15 users)
  ['FuelParticle.effectiveFuelLoadDead', FuelParticle.effectiveFuelLoadDead], // (15 users)
  ['FuelParticle.effectiveFuelLoadLive', FuelParticle.effectiveFuelLoadLive], // (15 users)
  ['FuelParticle.effectiveFuelWaterLoad', FuelParticle.effectiveFuelWaterLoad], // (30 users)
  ['FuelParticle.netOvendryLoad', FuelParticle.netOvendryLoad], // (30 users)
  ['FuelParticle.volume', FuelParticle.volume], // (30 users)
  ['FuelParticle.selectByDomain', FuelParticle.selectByDomain], // (150 users)
  ['FuelParticle.sizeClass', FuelParticle.sizeClass], // (30 users)
  [
    'FuelParticle.sizeClassWeightingFactor',
    FuelParticle.sizeClassWeightingFactor
  ], // (36 users)
  ['FuelParticle.surfaceArea', FuelParticle.surfaceArea], // (30 users)
  [
    'FuelParticle.surfaceAreaWeightingFactor',
    FuelParticle.surfaceAreaWeightingFactor
  ], // (30 users)
  ['IgnitionProbability.firebrand', IgnitionProbability.firebrand],
  ['IgnitionProbability.fuelTemperature', IgnitionProbability.fuelTemperature],
  ['IgnitionProbability.lightningStrike', IgnitionProbability.lightningStrike],
  ['Math.max', Math.max], // (4 users)
  ['Math.min', Math.min], // (10 users)
  ['PalmettoGallberry.deadFineLoad', PalmettoGallberry.deadFineLoad], // (2 users)
  ['PalmettoGallberry.deadFoliageLoad', PalmettoGallberry.deadFoliageLoad], // (2 users)
  ['PalmettoGallberry.deadLitterLoad', PalmettoGallberry.deadLitterLoad], // (2 users)
  ['PalmettoGallberry.deadSmallLoad', PalmettoGallberry.deadSmallLoad], // (2 users)
  ['PalmettoGallberry.fuelDepth', PalmettoGallberry.fuelDepth], // (2 users)
  ['PalmettoGallberry.liveFineLoad', PalmettoGallberry.liveFineLoad], // (2 users)
  ['PalmettoGallberry.liveFoliageLoad', PalmettoGallberry.liveFoliageLoad], // (2 users)
  ['PalmettoGallberry.liveSmallLoad', PalmettoGallberry.liveSmallLoad], // (2 users)
  ['Spotting.appliedDownWindCoverHeight', Spotting.appliedDownWindCoverHt], // (1 users)
  ['Spotting.burningPileFirebrandHeight', Spotting.burningPileFirebrandHt], // (1 users)
  ['Spotting.criticalCoverHeight', Spotting.criticalCoverHt], // (3 users)
  ['Spotting.spotDistanceFlatTerrain', Spotting.distanceFlatTerrain], // (3 users)
  [
    'Spotting.spotDistanceFlatTerrainWithDrift',
    Spotting.distanceFlatTerrainWithDrift
  ], // (3 users)
  ['Spotting.spotDistanceMountainTerrain', Spotting.distanceMountainTerrain], // (4 users)
  ['Spotting.surfaceFireFirebrandDrift', Spotting.surfaceFireFirebrandDrift], // (1 users)
  ['Spotting.surfaceFireFirebrandHeight', Spotting.surfaceFireFirebrandHt], // (1 users)
  ['Spotting.torchingTreesFirebrandHeight', Spotting.torchingTreesFirebrandHt], // (1 users)
  [
    'Spotting.torchingTreesSteadyFlameDuration',
    Spotting.torchingTreesSteadyFlameDuration
  ], // (1 users)
  [
    'Spotting.torchingTreesSteadyFlameHeight',
    Spotting.torchingTreesSteadyFlameHt
  ], // (1 users)
  ['SurfaceFire.effectiveWindSpeed', SurfaceFire.effectiveWindSpeed], // (12 users)
  [
    'SurfaceFire.effectiveWindSpeedFromLwr',
    SurfaceFire.effectiveWindSpeedFromLwr
  ], // (12 users)
  ['SurfaceFire.effectiveWindSpeedLimit', SurfaceFire.effectiveWindSpeedLimit], // (3 users)
  ['SurfaceFire.firelineIntensity', SurfaceFire.firelineIntensity], // (3 users)
  [
    'SurfaceFire.firelineIntensityFromFlameLength',
    SurfaceFire.firelineIntensityFromFlameLength
  ], // (1 users)
  ['SurfaceFire.flameLength', SurfaceFire.flameLength], // (4 users)
  ['SurfaceFire.lengthToWidthRatio', SurfaceFire.lengthToWidthRatio], // (3 users)
  [
    'SurfaceFire.maximumDirectionSlopeSpreadRate',
    SurfaceFire.maximumDirectionSlopeSpreadRate
  ], // (3 users)
  [
    'SurfaceFire.maximumDirectionSpreadRate',
    SurfaceFire.maximumDirectionSpreadRate
  ], // (3 users)
  [
    'SurfaceFire.maximumDirectionWindSpreadRate',
    SurfaceFire.maximumDirectionWindSpreadRate
  ], // (3 users)
  [
    'SurfaceFire.maximumDirectionXComponent',
    SurfaceFire.maximumDirectionXComponent
  ], // (3 users)
  [
    'SurfaceFire.maximumDirectionYComponent',
    SurfaceFire.maximumDirectionYComponent
  ], // (3 users)
  ['SurfaceFire.maximumSpreadRate', SurfaceFire.maximumSpreadRate], // (3 users)
  ['SurfaceFire.phiEffectiveWind', SurfaceFire.phiEffectiveWind], // (3 users)
  [
    'SurfaceFire.phiEffectiveWindInferred',
    SurfaceFire.phiEffectiveWindInferred
  ], // (9 users)
  ['SurfaceFire.phiSlope', SurfaceFire.phiSlope], // (3 users)
  ['SurfaceFire.phiWind', SurfaceFire.phiWind], // (3 users)
  [
    'SurfaceFire.spreadDirectionFromUpslope',
    SurfaceFire.spreadDirectionFromUpslope
  ], // (3 users)
  [
    'SurfaceFire.spreadRateWithCrossSlopeWind',
    SurfaceFire.spreadRateWithCrossSlopeWind
  ], // (3 users)
  [
    'SurfaceFire.spreadRateWithRosLimitApplied',
    SurfaceFire.spreadRateWithRosLimitApplied
  ], // (6 users)
  ['SurfaceFire.windSlopeSpreadRateCoefficientLimit', SurfaceFire.phiEwFromEws], // (3 users)
  ['SurfaceFire.windSpeedAdjustmentFactor', FuelBed.windSpeedAdjustmentFactor], // (2 users)
  ['TreeMortality.barkThickness', TreeMortality.barkThickness],
  ['TreeMortality.crownLengthScorched', TreeMortality.crownLengthScorched],
  ['TreeMortality.crownVolumeScorched', TreeMortality.crownVolumeScorched],
  ['TreeMortality.mortality', TreeMortality.mortalityRate],
  ['WesternAspen.deadFineLoad', WesternAspen.deadFineLoad], // (2 users)
  ['WesternAspen.deadFineSavr', WesternAspen.deadFineSavr], // (2 users)
  ['WesternAspen.deadSmallLoad', WesternAspen.deadSmallLoad], // (2 users)
  ['WesternAspen.depth', WesternAspen.depth], // (2 users)
  ['WesternAspen.liveHerbLoad', WesternAspen.liveHerbLoad], // (2 users)
  ['WesternAspen.liveStemLoad', WesternAspen.liveStemLoad], // (2 users)
  ['WesternAspen.liveStemSavr', WesternAspen.liveStemSavr], // (2 users)
  ['Wind.speedAt10m', Wind.speedAt10m], // (1 users)
  ['Wind.speedAt20ft', Wind.speedAt20ft], // (1 users)
  ['Wind.speedAt20ftFromMidflame', Wind.speedAt20ftFromMidflame], // (1 users)
  ['Wind.speedAtMidflame', Wind.speedAtMidflame] // (4 users)
]

export const MethodMap = new Map(MethodArray)
