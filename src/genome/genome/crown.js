import * as Bed from './surface.fuel.bed.js'
import * as Fire from './surface.fuel.fire.js'
import * as Life from './surface.fuel.bed.life.js'
import * as Particle from './surface.fuel.bed.particle.js'

const prefix = 'crown.canopy.fuel'

export const canopyParticles = [
  [`${prefix}.bed.dead.particle.class1.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.dead.particle.class1.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.dead.particle.class1.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Dead 1-h time-lag (0 to 0.25 inch diameter) branch wood`]
  // ]]],
  [`${prefix}.bed.dead.particle.class1.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.138]
  ]]],
  [`${prefix}.bed.dead.particle.class1.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h']
  ]]],
  [`${prefix}.bed.dead.particle.class1.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 2000]
  ]]],
  [`${prefix}.bed.dead.particle.class1.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.dead.particle.class1.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.dead.particle.class1`
  [`${prefix}.bed.dead.particle.class2.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.dead.particle.class2.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.dead.particle.class2.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Dead 10-h time-lag (0.25 to 1 inch diameter) branch wood`]
  // ]]],
  [`${prefix}.bed.dead.particle.class2.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.092]
  ]]],
  [`${prefix}.bed.dead.particle.class2.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl10h']
  ]]],
  [`${prefix}.bed.dead.particle.class2.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 109]
  ]]],
  [`${prefix}.bed.dead.particle.class2.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.dead.particle.class2.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.dead.particle.class2`
  [`${prefix}.bed.dead.particle.class3.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.dead.particle.class3.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.dead.particle.class3.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Dead 100-h time-lag (1 to 3 inch diameter) branch wood`]
  // ]]],
  [`${prefix}.bed.dead.particle.class3.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.23]
  ]]],
  [`${prefix}.bed.dead.particle.class3.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl100h']
  ]]],
  [`${prefix}.bed.dead.particle.class3.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 30]
  ]]],
  [`${prefix}.bed.dead.particle.class3.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.dead.particle.class3.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.dead.particle.class3`
  [`${prefix}.bed.dead.particle.class4.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.dead.particle.class4.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.dead.particle.class4.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Dead herb`]
  // ]]],
  [`${prefix}.bed.dead.particle.class4.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.dead.particle.class4.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h']
  ]]],
  [`${prefix}.bed.dead.particle.class4.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]
  ]]],
  [`${prefix}.bed.dead.particle.class4.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.dead.particle.class4.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.dead.particle.class4`
  [`${prefix}.bed.dead.particle.class5.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.dead.particle.class5.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.dead.particle.class5.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `unused`],
  // ]]],
  [`${prefix}.bed.dead.particle.class5.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.dead.particle.class5.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]
  ]]],
  [`${prefix}.bed.dead.particle.class5.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]
  ]]],
  [`${prefix}.bed.dead.particle.class5.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.dead.particle.class5.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.dead.particle.class5`
  // end `${prefix}.bed.dead.particle`
  [`${prefix}.bed.live.particle.class1.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.live.particle.class1.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.live.particle.class1.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Live herb`]
  // ]]],
  [`${prefix}.bed.live.particle.class1.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.live.particle.class1.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.herb']
  ]]],
  [`${prefix}.bed.live.particle.class1.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]
  ]]],
  [`${prefix}.bed.live.particle.class1.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.live.particle.class1.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.live.particle.class1`
  [`${prefix}.bed.live.particle.class2.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.live.particle.class2.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.live.particle.class2.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `Live stem wood`]
  // ]]],
  [`${prefix}.bed.live.particle.class2.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.092]
  ]]],
  [`${prefix}.bed.live.particle.class2.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.stem']
  ]]],
  [`${prefix}.bed.live.particle.class2.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]
  ]]],
  [`${prefix}.bed.live.particle.class2.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.live.particle.class2.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.live.particle.class2`
  [`${prefix}.bed.live.particle.class3.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.live.particle.class3.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.live.particle.class3.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `unused`],
  // ]]],
  [`${prefix}.bed.live.particle.class3.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.live.particle.class3.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]
  ]]],
  [`${prefix}.bed.live.particle.class3.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]
  ]]],
  [`${prefix}.bed.live.particle.class3.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.live.particle.class3.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.live.particle.class3`
  [`${prefix}.bed.live.particle.class4.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.live.particle.class4.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.live.particle.class4.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `unused`]
  // ]]],
  [`${prefix}.bed.live.particle.class4.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.live.particle.class4.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]
  ]]],
  [`${prefix}.bed.live.particle.class4.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]
  ]]],
  [`${prefix}.bed.live.particle.class4.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.live.particle.class4.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]],
  // end `${prefix}.bed.live.particle.class4`
  [`${prefix}.bed.live.particle.class5.fiberDensity`, [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]
  ]]],
  [`${prefix}.bed.live.particle.class5.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]
  ]]],
  // [`${prefix}.bed.live.particle.class5.label`, [[`Variant.FuelLabelText`], [
  //   [`finally`, `Dag.fixed`, `unused`]
  // ]]],
  [`${prefix}.bed.live.particle.class5.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  [`${prefix}.bed.live.particle.class5.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]
  ]]],
  [`${prefix}.bed.live.particle.class5.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]
  ]]],
  [`${prefix}.bed.live.particle.class5.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]
  ]]],
  [`${prefix}.bed.live.particle.class5.total.mineralContent`, [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]
  ]]]
  // end `${prefix}.bed.live.particle.class5`
]

export const crownFire = [
  ['crown.fire.active.size.area', [['Variant.FireArea'], [
    ['finally', 'CrownFire.area',
      'crown.fire.active.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  ['crown.fire.active.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.spreadDistance',
      'crown.fire.active.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['crown.fire.active.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter',
      'crown.fire.active.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  ['crown.fire.active.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.active.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  // end 'crown.fire.active.size'
  ['crown.fire.active.map.area', [['Variant.MapArea'], [
    ['finally', 'CrownFire.mapArea',
      'crown.fire.active.size.area',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.active.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.active.size.length',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.active.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.active.size.perimeter',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.active.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.active.size.width',
      'site.map.scale'
    ]
  ]]],
  // end 'crown.fire.active.map'
  ['crown.fire.active.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'CrownFire.lengthToWidthRatio',
      'site.wind.speed.at20ft'
    ]
  ]]],
  ['crown.fire.active.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rActive',
      'crown.canopy.fuel.fire.spreadRate'
    ]
  ]]],
  ['crown.fire.active.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliActive',
      'crown.fire.active.heatPerUnitArea',
      'crown.fire.active.spreadRate'
    ]
  ]]],
  ['crown.fire.active.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'CrownFire.flameLengthThomas',
      'crown.fire.active.firelineIntensity'
    ]
  ]]],
  ['crown.fire.active.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'CrownFire.hpuaActive',
      'site.canopy.fire.heatPerUnitArea',
      'crown.fire.surface.heatPerUnitArea'
    ]
  ]]],
  ['crown.fire.active.powerOfTheFire', [['Variant.FirePower'], [
    ['finally', 'CrownFire.powerOfTheFire',
      'crown.fire.active.firelineIntensity'
    ]
  ]]],
  ['crown.fire.active.powerOfTheWind', [['Variant.FirePower'], [
    ['finally', 'CrownFire.powerOfTheWind',
      'site.wind.speed.at20ft',
      'crown.fire.active.spreadRate'
    ]
  ]]],
  ['crown.fire.active.powerRatio', [['Variant.FirePowerRatio'], [
    ['finally', 'Calc.divide',
      'crown.fire.active.powerOfTheFire',
      'crown.fire.active.powerOfTheWind'
    ]
  ]]],
  ['crown.fire.active.isPlumeDominated', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isPlumeDominated',
      'crown.fire.active.powerRatio'
    ]
  ]]],
  ['crown.fire.active.isWindDriven', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isWindDriven',
      'crown.fire.active.powerRatio'
    ]
  ]]],
  // end 'crown.fire.active'
  ['crown.fire.final.size.area', [['Variant.FireArea'], [
    ['finally', 'CrownFire.area',
      'crown.fire.final.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  ['crown.fire.final.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.spreadDistance',
      'crown.fire.final.spreadRate',
      'site.fire.time.sinceIgnition'
    ]
  ]]],
  ['crown.fire.final.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter',
      'crown.fire.final.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  ['crown.fire.final.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.final.size.length',
      'crown.fire.active.lengthToWidthRatio'
    ]
  ]]],
  // end 'crown.fire.final.size'
  ['crown.fire.final.map.area', [['Variant.MapArea'], [
    ['finally', 'CrownFire.mapArea',
      'crown.fire.final.size.area',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.final.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.final.size.length',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.final.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.final.size.perimeter',
      'site.map.scale'
    ]
  ]]],
  ['crown.fire.final.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide',
      'crown.fire.final.size.width',
      'site.map.scale'
    ]
  ]]],
  // end 'crown.fire.final.map'
  ['crown.fire.final.rSa', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rSa',
      'crown.fire.initiation.oActive',
      'surface.primary.fuel.bed.noWindNoSlope.spreadRate',
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      'surface.primary.fuel.fire.wind.factor.b',
      'surface.primary.fuel.fire.wind.factor.k',
      'surface.primary.fuel.fire.slope.phi'
    ]
  ]]],
  ['crown.fire.final.crownFractionBurned', [['Variant.CrownFireBurnedFraction'], [
    ['finally', 'CrownFire.crownFractionBurned',
      'surface.primary.fuel.fire.spreadRate',
      'crown.fire.initiation.spreadRate',
      'crown.fire.final.rSa'
    ]
  ]]],
  ['crown.fire.final.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rFinal',
      'surface.primary.fuel.fire.spreadRate',
      'crown.fire.active.spreadRate',
      'crown.fire.final.crownFractionBurned'
    ]
  ]]],
  ['crown.fire.final.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliFinal',
      'crown.fire.final.spreadRate',
      'crown.fire.final.crownFractionBurned',
      'site.canopy.fire.heatPerUnitArea',
      'crown.fire.surface.heatPerUnitArea'
    ]
  ]]],
  ['crown.fire.final.flameLength', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.flameLengthThomas',
      'crown.fire.final.firelineIntensity'
    ]
  ]]],
  // end 'crown.fire.final'
  ['crown.fire.initiation.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliInit',
      'site.canopy.fuel.foliar.moistureContent',
      'site.canopy.crown.baseHeight'
    ]
  ]]],
  ['crown.fire.initiation.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'CrownFire.flameLength',
      'crown.fire.initiation.firelineIntensity'
    ]
  ]]],
  ['crown.fire.initiation.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rInit',
      'crown.fire.initiation.firelineIntensity',
      'crown.fire.surface.heatPerUnitArea'
    ]
  ]]],
  ['crown.fire.initiation.rPrime', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rPrimeActive',
      'site.canopy.fuel.bulkDensity'
    ]
  ]]],
  ['crown.fire.initiation.transitionRatio', [['Variant.CrownTransitionRatio'], [
    ['finally', 'CrownFire.transitionRatio',
      'crown.fire.surface.firelineIntensity',
      'crown.fire.initiation.firelineIntensity'
    ]
  ]]],
  ['crown.fire.initiation.canTransition', [['Variant.Boolean'], [
    ['finally', 'CrownFire.canTransition',
      'crown.fire.initiation.transitionRatio'
    ]
  ]]],
  ['crown.fire.initiation.activeRatio', [['Variant.CrownFireActiveRatio'], [
    ['finally', 'CrownFire.activeRatio',
      'crown.fire.active.spreadRate',
      'crown.fire.initiation.rPrime'
    ]
  ]]],
  ['crown.fire.initiation.type', [['Variant.CrownFireInitiationTypeOption'], [
    ['finally', 'CrownFire.type',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.isActiveCrownFire', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isActive',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.isCrownFire', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isCrown',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.isPassiveCrownFire', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isPassive',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.isConditionalCrownFire', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isConditional',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.isSurfaceFire', [['Variant.Boolean'], [
    ['finally', 'CrownFire.isSurface',
      'crown.fire.initiation.transitionRatio',
      'crown.fire.initiation.activeRatio'
    ]
  ]]],
  ['crown.fire.initiation.oActive', [['Variant.WindSpeed'], [
    ['finally', 'CrownFire.oActive',
      'site.canopy.fuel.bulkDensity',
      'crown.canopy.fuel.fire.reactionIntensity',
      'crown.canopy.fuel.bed.heatSink',
      'crown.canopy.fuel.fire.slope.phi'
    ]
  ]]],
  ['crown.fire.initiation.crowningIndex', [['Variant.Factor'], [
    ['finally', 'CrownFire.crowningIndex',
      'crown.fire.initiation.oActive'
    ]
  ]]],
  // end 'crown.fire.initiation'
  ['crown.fire.surface.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']
  ]]],
  ['crown.fire.surface.flameLength', [['Variant.FireFlameLength'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength']
  ]]],
  ['crown.fire.surface.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['when', 'configure.module', 'equals', 'surfaceFire',
      'Dag.bind', 'surface.weighted.fire.heatPerUnitArea'],
    ['finally', 'Dag.bind', 'site.fire.observed.heatPerUnitArea']
  ]]]
  // end 'crown.fire.surface'
  // end 'crown.fire'
  // end 'crown'
]

export const genome = [
  ...canopyParticles,
  ...Particle.derived(prefix, 'dead', '1'),
  ...Particle.derived(prefix, 'dead', '2'),
  ...Particle.derived(prefix, 'dead', '3'),
  ...Particle.derived(prefix, 'dead', '4'),
  ...Particle.derived(prefix, 'dead', '5'),
  ...Particle.derived(prefix, 'live', '1'),
  ...Particle.derived(prefix, 'live', '2'),
  ...Particle.derived(prefix, 'live', '3'),
  ...Particle.derived(prefix, 'live', '4'),
  ...Particle.derived(prefix, 'live', '5'),
  ...Life.genome(prefix, 'dead'),
  ...Life.genome(prefix, 'live'),
  ...Bed.bed(prefix),
  ...Fire.genome(prefix),
  ...crownFire
]
