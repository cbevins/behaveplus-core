export const BpxGenome = [
  ['configure.fuel.primary', [['Variant.ConfigPrimaryFuels'], [
    ['finally', 'Dag.config']]]],
  ['configure.fuel.secondary', [['Variant.ConfigSecondaryFuels'], [
    ['finally', 'Dag.config']]]],
  ['configure.fuel.moisture', [['Variant.ConfigMoistureContents'], [
    ['finally', 'Dag.config']]]],
  ['configure.fuel.windSpeedAdjustmentFactor', [['Variant.ConfigWindSpeedAdjustmentFactor'], [
    ['finally', 'Dag.config']]]],
  ['configure.fuel.curedHerbFraction', [['Variant.ConfigCuredHerbFraction'], [
    ['finally', 'Dag.config']]]],
  ['configure.fuel.chaparralTotalLoad', [['Variant.ConfigChaparralTotalLoad'], [
    ['finally', 'Dag.config']]]],
  ['configure.module', [['Variant.ConfigModule'], [
    ['finally', 'Dag.config']]]],
  ['configure.slope.steepness', [['Variant.ConfigSlopeSteepness'], [
    ['finally', 'Dag.config']]]],
  ['configure.wind.direction', [['Variant.ConfigWindDirection'], [
    ['finally', 'Dag.config']]]],
  ['configure.wind.speed', [['Variant.ConfigWindSpeed'], [
    ['finally', 'Dag.config']]]],
  ['configure.fire.firelineIntensity', [['Variant.ConfigFirelineIntensity'], [
    ['finally', 'Dag.config']]]],
  ['configure.fire.lengthToWidthRatio', [['Variant.ConfigFireLengthToWidthRatio'], [
    ['finally', 'Dag.config']]]],
  ['configure.fire.effectiveWindSpeedLimit', [['Variant.ConfigEffectiveWindSpeedLimit'], [
    ['finally', 'Dag.config']]]],
  ['configure.fire.weightingMethod', [['Variant.ConfigFireWeightingMethod'], [
    ['finally', 'Dag.config']]]],
  ['configure.fire.vector', [['Variant.ConfigFireVector'], [
    ['finally', 'Dag.config']]]],
  ['docs.run.mainTitle', [['Variant.Documentation'], [
    ['finally', 'Dag.input']]]],
  ['docs.run.subTitle', [['Variant.Documentation'], [
    ['finally', 'Dag.input']]]],
  ['docs.run.description', [['Variant.Documentation'], [
    ['finally', 'Dag.input']]]],
  ['docs.run.userName', [['Variant.Documentation'], [
    ['finally', 'Dag.input']]]],
  ['ignition.firebrand.probability', [['Variant.Fraction'], [
    ['finally', 'IgnitionProbability.firebrand', 'site.temperature.fuel', 'site.moisture.dead.tl1h']]]],
  ['ignition.lightningStrike.charge', [['Variant.IgnitionLightningChargeOption'], [
    ['finally', 'Dag.input']]]],
  ['ignition.lightningStrike.fuel.depth', [['Variant.IgnitionFuelDepth'], [
    ['finally', 'Dag.input']]]],
  ['ignition.lightningStrike.fuel.type', [['Variant.IgnitionFuelTypeOption'], [
    ['finally', 'Dag.input']]]],
  ['ignition.lightningStrike.probability', [['Variant.Fraction'], [
    ['finally', 'IgnitionProbability.lightningStrike', 'ignition.lightningStrike.fuel.type', 'ignition.lightningStrike.fuel.depth', 'site.moisture.dead.tl100h', 'ignition.lightningStrike.charge']]]],
  ['site.canopy.cover', [['Variant.FuelCoverFraction'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.crown.baseHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.crown.fill', [['Variant.CrownFillFraction'], [
    ['finally', 'Canopy.crownFill', 'site.canopy.cover', 'site.canopy.crown.ratio']]]],
  ['site.canopy.crown.length', [['Variant.TreeHeight'], [
    ['finally', 'Canopy.crownLength', 'site.canopy.crown.baseHeight', 'site.canopy.crown.totalHeight']]]],
  ['site.canopy.crown.ratio', [['Variant.CrownRatioFraction'], [
    ['finally', 'Canopy.crownRatio', 'site.canopy.crown.length', 'site.canopy.crown.totalHeight']]]],
  ['site.canopy.crown.totalHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'Canopy.heatPerUnitArea', 'site.canopy.fuel.ovendryLoad', 'site.canopy.fuel.heatOfCombustion']]]],
  ['site.canopy.fuel.bulkDensity', [['Variant.FuelBedBulkDensity'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.fuel.foliar.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.fuel.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['site.canopy.fuel.isSheltered', [['Variant.Bool'], [
    ['finally', 'Canopy.sheltersFuel', 'site.canopy.cover', 'site.canopy.crown.totalHeight', 'site.canopy.crown.fill']]]],
  ['site.canopy.fuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Canopy.fuelLoad', 'site.canopy.fuel.bulkDensity', 'site.canopy.crown.length']]]],
  ['site.canopy.fuel.shading', [['Variant.Fraction'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.sheltered.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'Canopy.windSpeedAdjustmentFactor', 'site.canopy.cover', 'site.canopy.crown.totalHeight', 'site.canopy.crown.fill']]]],
  ['site.canopy.downwind.height', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.downwind.isOpen', [['Variant.Bool'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.downwind.appliedHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.appliedDownWindCoverHeight', 'site.canopy.downwind.height', 'site.canopy.downwind.isOpen']]]],
  ['site.canopy.tree.barkThickness', [['Variant.TreeBarkThickness'], [
    ['finally', 'TreeMortality.barkThickness', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh']]]],
  ['site.canopy.tree.dbh', [['Variant.TreeDbh'], [
    ['finally', 'Dag.input']]]],
  ['site.canopy.tree.species.fofem6.code', [['Variant.TreeSpeciesFofem6Option'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.fire.lengthToWidthRatio', 'equals', 'lengthToWidthRatio', 'SurfaceFire.effectiveWindSpeedFromLwr', 'site.fire.observed.lengthToWidthRatio'],
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.fire.firelineIntensity', 'equals', 'flameLength', 'SurfaceFire.firelineIntensityFromFlameLength', 'site.fire.observed.flameLength'],
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.flameLength', [['Variant.FireFlameLength'], [
    ['configure.fire.firelineIntensity', 'equals', 'firelineIntensity', 'SurfaceFire.flameLength', 'site.fire.observed.firelineIntensity'],
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['configure.wind.direction', 'equals', 'upslope', 'Dag.input'],
    ['finally', 'Compass.diff', 'site.fire.observed.heading.fromNorth', 'site.slope.direction.upslope']]]],
  ['site.fire.observed.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['configure.wind.direction', 'equals', 'sourceFromNorth', 'Dag.input'],
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'site.fire.observed.heading.fromUpslope']]]],
  ['site.fire.observed.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['configure.fire.lengthToWidthRatio', 'equals', 'effectiveWindSpeed', 'SurfaceFire.lengthToWidthRatio', 'site.fire.observed.effectiveWindSpeed'],
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.observed.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.crown.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.time.sinceIgnition', [['Variant.FireElapsedTime'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.vector.fromHead', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.vector.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']]]],
  ['site.fire.vector.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']]]],
  ['site.map.scale', [['Variant.Float'], [
    ['finally', 'Dag.input']]]],
  ['site.map.contours', [['Variant.MapContoursCount'], [
    ['finally', 'Dag.input']]]],
  ['site.map.distance', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']]]],
  ['site.map.factor', [['Variant.Float'], [
    ['finally', 'Calc.divide', 1, 'site.map.scale']]]],
  ['site.map.interval', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']]]],
  ['site.map.reach', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.scale', 'site.map.distance']]]],
  ['site.map.rise', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.interval', 'site.map.contours']]]],
  ['site.map.slope.ratio', [['Variant.SlopeSteepness'], [
    ['finally', 'Compass.slopeRatioMap', 'site.map.scale', 'site.map.interval', 'site.map.contours', 'site.map.distance']]]],
  ['site.map.slope.degrees', [['Variant.SlopeSteepness'], [
    ['finally', 'Compass.slopeDegreesMap', 'site.map.scale', 'site.map.interval', 'site.map.contours', 'site.map.distance']]]],
  ['site.moisture.dead.tl1h', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']]]],
  ['site.moisture.dead.tl10h', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']]]],
  ['site.moisture.dead.tl100h', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']]]],
  ['site.moisture.dead.category', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']]]],
  ['site.moisture.live.herb', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']]]],
  ['site.moisture.live.stem', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']]]],
  ['site.moisture.live.category', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.input']]]],
  ['site.slope.direction.aspect', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.input']]]],
  ['site.slope.direction.upslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.slope.direction.aspect']]]],
  ['site.slope.steepness.degrees', [['Variant.SlopeSteepness'], [
    ['configure.slope.steepness', 'equals', 'degrees', 'Dag.input'],
    ['configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.degrees'],
    ['finally', 'Compass.slopeDegrees', 'site.slope.steepness.ratio']]]],
  ['site.slope.steepness.ratio', [['Variant.SlopeSteepness'], [
    ['configure.slope.steepness', 'equals', 'degrees', 'Compass.slopeRatio', 'site.slope.steepness.degrees'],
    ['configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.ratio'],
    ['finally', 'Dag.input']]]],
  ['site.temperature.air', [['Variant.AirTemperature'], [
    ['finally', 'Dag.input']]]],
  ['site.temperature.fuel', [['Variant.AirTemperature'], [
    ['finally', 'IgnitionProbability.fuelTemperature', 'site.temperature.air', 'site.canopy.fuel.shading']]]],
  ['site.wind.direction.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['configure.wind.direction', 'equals', 'sourceFromNorth', 'Compass.diff', 'site.wind.direction.heading.fromNorth', 'site.slope.direction.upslope'],
    ['configure.wind.direction', 'equals', 'upslope', 'Dag.fixed', 0],
    ['finally', 'Dag.fixed', 0]]]],
  ['site.wind.direction.source.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.wind.direction.heading.fromUpslope']]]],
  ['site.wind.direction.source.fromNorth', [['Variant.CompassAzimuth'], [
    ['configure.wind.direction', 'equals', 'headingFromUpslope', 'Compass.opposite', 'site.wind.direction.heading.fromNorth'],
    ['configure.wind.direction', 'equals', 'sourceFromNorth', 'Dag.input'],
    ['configure.wind.direction', 'equals', 'upslope', 'Compass.opposite', 'site.slope.direction.upslope'],
    ['finally', 'Compass.opposite', 'site.slope.direction.upslope']]]],
  ['site.wind.direction.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['configure.wind.direction', 'equals', 'headingFromUpslope', 'Compass.sum', 'site.wind.direction.heading.fromUpslope', 'site.slope.direction.upslope'],
    ['configure.wind.direction', 'equals', 'sourceFromNorth', 'Compass.opposite', 'site.wind.direction.source.fromNorth'],
    ['configure.wind.direction', 'equals', 'upslope', 'Dag.bind', 'site.slope.direction.upslope'],
    ['finally', 'Dag.bind', 'site.slope.direction.upslope']]]],
  ['site.wind.speed.at10m', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'at10m', 'Dag.input'],
    ['finally', 'Wind.speedAt10m', 'site.wind.speed.at20ft']]]],
  ['site.wind.speed.at20ft', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'at20ft', 'Dag.input'],
    ['configure.wind.speed', 'equals', 'at10m', 'Wind.speedAt20ft', 'site.wind.speed.at10m'],
    ['finally', 'Wind.speedAt20ftFromMidflame', 'site.wind.speed.atMidflame', 'site.windSpeedAdjustmentFactor']]]],
  ['site.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'atMidflame', 'Dag.input'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'site.windSpeedAdjustmentFactor']]]],
  ['site.windSpeedAdjustmentFactor', [['Variant.Float'], [
    ['finally', 'Dag.input']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadFineLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad', 'surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', 640, 350, 'surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.primary.fuel.bed.dead.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'dead']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.total.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad', 'surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 109, 127, 140, 109]]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.primary.fuel.bed.dead.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'dead']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.total.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadMediumLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', 0]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl1h', 5]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 30, 61, 2000, 1]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'dead']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.total.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadLargeLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad', 0]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl100h', 5]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', 27, 2000, 1]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'dead']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.total.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'dead']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.total.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['surface.primary.fuel.bed.live.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', 10500, 8300, 8000]]]],
  ['surface.primary.fuel.bed.live.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.liveFineLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad', 'surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.live.herb', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.herb']]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', 640, 350, 2800]]]],
  ['surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.primary.fuel.bed.live.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'live']]]],
  ['surface.primary.fuel.bed.live.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class1.moistureContent', 'surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.total.mineralContent']]]],
  ['surface.primary.fuel.bed.live.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class1.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.primary.fuel.bed.live.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.liveSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad', 'surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem']]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', 127, 140, 'surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.primary.fuel.bed.live.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'live']]]],
  ['surface.primary.fuel.bed.live.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class2.moistureContent', 'surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.total.mineralContent']]]],
  ['surface.primary.fuel.bed.live.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class2.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.primary.fuel.bed.live.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0, 'surface.primary.fuel.model.chaparral.derived.liveMediumLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', 0]]]],
  ['surface.primary.fuel.bed.live.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 5, 'site.moisture.live.stem', 'site.moisture.live.stem', 5]]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 1, 61, 2000, 1]]]],
  ['surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.primary.fuel.bed.live.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'live']]]],
  ['surface.primary.fuel.bed.live.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class3.moistureContent', 'surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.total.mineralContent']]]],
  ['surface.primary.fuel.bed.live.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class3.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.primary.fuel.bed.live.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.primary.fuel.bed.live.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0, 'surface.primary.fuel.model.chaparral.derived.liveLargeLoad', 0, 0]]]],
  ['surface.primary.fuel.bed.live.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 5, 'site.moisture.live.stem', 5, 5]]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 1, 27, 1, 1]]]],
  ['surface.primary.fuel.bed.live.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.primary.fuel.bed.live.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'live']]]],
  ['surface.primary.fuel.bed.live.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class4.moistureContent', 'surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.total.mineralContent']]]],
  ['surface.primary.fuel.bed.live.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class4.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 32, 32, 46, 32]]]],
  ['surface.primary.fuel.bed.live.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', 10500, 8300, 8000]]]],
  ['surface.primary.fuel.bed.live.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0, 'surface.primary.fuel.model.chaparral.derived.liveLeafLoad', 0, 0]]]],
  ['surface.primary.fuel.bed.live.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 5, 'site.moisture.live.herb', 5, 5]]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 1, 2200, 1, 1]]]],
  ['surface.primary.fuel.bed.live.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.01, 0.035, 0.015, 0.01]]]],
  ['surface.primary.fuel.bed.live.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'live']]]],
  ['surface.primary.fuel.bed.live.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class5.moistureContent', 'surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber']]]],
  ['surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.total.mineralContent']]]],
  ['surface.primary.fuel.bed.live.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class5.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['surface.primary.fuel.bed.dead.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.dead.surfaceArea', 'surface.primary.fuel.bed.surfaceArea']]]],
  ['surface.primary.fuel.bed.dead.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.primary.fuel.bed.dead.effective.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.primary.fuel.bed.dead.moistureContent', 'surface.primary.fuel.bed.dead.extinction.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion']]]],
  ['surface.primary.fuel.bed.dead.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad']]]],
  ['surface.primary.fuel.bed.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent', 0.3, 0.4, 0.25]]]],
  ['surface.primary.fuel.bed.dead.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.dead.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.dead.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.volume', 'surface.primary.fuel.bed.dead.particle.class2.volume', 'surface.primary.fuel.bed.dead.particle.class3.volume', 'surface.primary.fuel.bed.dead.particle.class4.volume', 'surface.primary.fuel.bed.dead.particle.class5.volume']]]],
  ['surface.primary.fuel.bed.dead.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition']]]],
  ['surface.primary.fuel.bed.dead.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.primary.fuel.bed.dead.reactionIntensityDry', 'surface.primary.fuel.bed.dead.moistureDamping']]]],
  ['surface.primary.fuel.bed.dead.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.primary.fuel.bed.reactionVelocityOptimum', 'surface.primary.fuel.bed.dead.net.ovendryLoad', 'surface.primary.fuel.bed.dead.heatOfCombustion', 'surface.primary.fuel.bed.dead.mineralDamping']]]],
  ['surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.dead.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent']]]],
  ['surface.primary.fuel.bed.dead.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass']]]],
  ['surface.primary.fuel.bed.dead.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.live.surfaceArea', 'surface.primary.fuel.bed.surfaceArea']]]],
  ['surface.primary.fuel.bed.live.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.primary.fuel.bed.live.effective.mineralContent']]]],
  ['surface.primary.fuel.bed.live.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.primary.fuel.bed.live.moistureContent', 'surface.primary.fuel.bed.live.extinction.moistureContent']]]],
  ['surface.primary.fuel.bed.live.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class4.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class5.heatOfCombustion']]]],
  ['surface.primary.fuel.bed.live.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.live.particle.class2.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.live.particle.class3.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.live.particle.class4.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.live.particle.class5.effectiveFuel.waterLoad']]]],
  ['surface.primary.fuel.bed.live.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'surface.primary.fuel.bed.live.extinction.moistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.moistureContent', 'surface.primary.fuel.bed.dead.extinction.moistureContent']]]],
  ['surface.primary.fuel.bed.live.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.moistureContent', 'surface.primary.fuel.bed.live.particle.class2.moistureContent', 'surface.primary.fuel.bed.live.particle.class3.moistureContent', 'surface.primary.fuel.bed.live.particle.class4.moistureContent', 'surface.primary.fuel.bed.live.particle.class5.moistureContent']]]],
  ['surface.primary.fuel.bed.live.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.live.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.primary.fuel.bed.live.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.volume', 'surface.primary.fuel.bed.live.particle.class2.volume', 'surface.primary.fuel.bed.live.particle.class3.volume', 'surface.primary.fuel.bed.live.particle.class4.volume', 'surface.primary.fuel.bed.live.particle.class5.volume']]]],
  ['surface.primary.fuel.bed.live.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class2.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class3.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class4.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class5.heatOfPreignition']]]],
  ['surface.primary.fuel.bed.live.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.primary.fuel.bed.live.reactionIntensityDry', 'surface.primary.fuel.bed.live.moistureDamping']]]],
  ['surface.primary.fuel.bed.live.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.primary.fuel.bed.reactionVelocityOptimum', 'surface.primary.fuel.bed.live.net.ovendryLoad', 'surface.primary.fuel.bed.live.heatOfCombustion', 'surface.primary.fuel.bed.live.mineralDamping']]]],
  ['surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.live.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class4.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class5.effective.mineralContent']]]],
  ['surface.primary.fuel.bed.live.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.particle.class1.sizeClass', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.sizeClass', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.sizeClass', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.sizeClass', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.sizeClass']]]],
  ['surface.primary.fuel.bed.live.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad']]]],
  ['surface.primary.fuel.bed.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.depth', 'surface.primary.fuel.model.chaparral.parms.observed.depth', 'surface.primary.fuel.model.palmettoGallberry.derived.depth', 'surface.primary.fuel.model.westernAspen.derived.depth']]]],
  ['surface.primary.fuel.bed.bulkDensity', [['Variant.FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.ovendryLoad', 'surface.primary.fuel.bed.depth']]]],
  ['surface.primary.fuel.bed.heatOfPreignition', [['Variant.FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.heatOfPreignition', 'surface.primary.fuel.bed.live.heatOfPreignition']]]],
  ['surface.primary.fuel.bed.heatSink', [['Variant.FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'surface.primary.fuel.bed.heatOfPreignition', 'surface.primary.fuel.bed.bulkDensity']]]],
  ['surface.primary.fuel.bed.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'surface.primary.fuel.bed.reactionIntensity', 'surface.primary.fuel.bed.propagatingFluxRatio', 'surface.primary.fuel.bed.heatSink']]]],
  ['surface.primary.fuel.bed.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.ovendryLoad', 'surface.primary.fuel.bed.live.ovendryLoad']]]],
  ['surface.primary.fuel.bed.open.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'surface.primary.fuel.bed.depth']]]],
  ['surface.primary.fuel.bed.packingRatio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'surface.primary.fuel.bed.dead.volume', 'surface.primary.fuel.bed.live.volume', 'surface.primary.fuel.bed.depth']]]],
  ['surface.primary.fuel.bed.packingRatio.optimum', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.packingRatio.ratio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.packingRatio', 'surface.primary.fuel.bed.packingRatio.optimum']]]],
  ['surface.primary.fuel.bed.propagatingFluxRatio', [['Variant.FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.packingRatio']]]],
  ['surface.primary.fuel.bed.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.reactionIntensity', 'surface.primary.fuel.bed.live.reactionIntensity']]]],
  ['surface.primary.fuel.bed.reactionVelocityExponent', [['Variant.Float'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.reactionVelocityMaximum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'surface.primary.fuel.bed.savr15']]]],
  ['surface.primary.fuel.bed.reactionVelocityOptimum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.bed.reactionVelocityMaximum', 'surface.primary.fuel.bed.reactionVelocityExponent']]]],
  ['surface.primary.fuel.bed.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.savr15', [['Variant.Float'], [
    ['finally', 'FuelBed.savr15', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.bed.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea']]]],
  ['surface.primary.fuel.fire.maximumDirection.slope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.slope.phi']]]],
  ['surface.primary.fuel.fire.maximumDirection.wind.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.wind.phi']]]],
  ['surface.primary.fuel.fire.wind.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'site.wind.direction.heading.fromUpslope']]]],
  ['surface.primary.fuel.fire.maximumDirection.xComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'surface.primary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.primary.fuel.fire.maximumDirection.slope.spreadRate', 'surface.primary.fuel.fire.wind.heading.fromUpslope']]]],
  ['surface.primary.fuel.fire.maximumDirection.yComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'surface.primary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.primary.fuel.fire.wind.heading.fromUpslope']]]],
  ['surface.primary.fuel.fire.maximumDirection.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'surface.primary.fuel.fire.maximumDirection.xComponent', 'surface.primary.fuel.fire.maximumDirection.yComponent']]]],
  ['surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.primary.fuel.fire.limit.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.limit.spreadRate.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.primary.fuel.fire.limit.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'surface.primary.fuel.fire.reactionIntensity']]]],
  ['surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Variant.Float'], [
    ['finally', 'SurfaceFire.windSlopeSpreadRateCoefficientLimit', 'surface.primary.fuel.fire.limit.effectiveWindSpeed', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k']]]],
  ['surface.primary.fuel.fire.limit.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['surface.primary.fuel.fire.slope.ratio', [['Variant.SlopeSteepness'], [
    ['finally', 'Dag.bind', 'site.slope.steepness.ratio']]]],
  ['surface.primary.fuel.fire.slope.k', [['Variant.Float'], [
    ['finally', 'FuelBed.slopeK', 'surface.primary.fuel.bed.packingRatio']]]],
  ['surface.primary.fuel.fire.slope.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiSlope', 'surface.primary.fuel.fire.slope.ratio', 'surface.primary.fuel.fire.slope.k']]]],
  ['surface.primary.fuel.fire.spread.step1.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step1.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i']]]],
  ['surface.primary.fuel.fire.spread.step1.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'surface.primary.fuel.fire.wind.phi', 'surface.primary.fuel.fire.slope.phi']]]],
  ['surface.primary.fuel.fire.spread.step1.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step1.phiEffectiveWind']]]],
  ['surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i']]]],
  ['surface.primary.fuel.fire.spread.step2.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step2.spreadRate']]]],
  ['surface.primary.fuel.fire.spread.step2.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.maximumDirection.spreadRate']]]],
  ['surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.primary.fuel.fire.limit.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.spread.step3a.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['surface.primary.fuel.fire.spread.step3a.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.limit.spreadRate']]]],
  ['surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step3b.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i']]]],
  ['surface.primary.fuel.fire.spread.step3b.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.primary.fuel.fire.spread.step3b.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.spread.step4.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step4.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i']]]],
  ['surface.primary.fuel.fire.spread.step4.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step4.spreadRate']]]],
  ['surface.primary.fuel.fire.spread.step4.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.primary.fuel.fire.spread.step3a.spreadRate', 'surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['configure.fuel.windSpeedAdjustmentFactor', 'equals', 'input', 'Dag.bind', 'site.windSpeedAdjustmentFactor'],
    ['finally', 'SurfaceFire.windSpeedAdjustmentFactor', 'site.canopy.fuel.isSheltered', 'site.canopy.sheltered.windSpeedAdjustmentFactor', 'surface.primary.fuel.bed.open.windSpeedAdjustmentFactor']]]],
  ['surface.primary.fuel.fire.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor']]]],
  ['surface.primary.fuel.fire.wind.factor.b', [['Variant.Float'], [
    ['finally', 'FuelBed.windB', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.fire.wind.factor.c', [['Variant.Float'], [
    ['finally', 'FuelBed.windC', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.fire.wind.factor.e', [['Variant.Float'], [
    ['finally', 'FuelBed.windE', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.fire.wind.factor.k', [['Variant.Float'], [
    ['finally', 'FuelBed.windK', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.fire.wind.factor.e', 'surface.primary.fuel.fire.wind.factor.c']]]],
  ['surface.primary.fuel.fire.wind.factor.i', [['Variant.Float'], [
    ['finally', 'FuelBed.windI', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.fire.wind.factor.e', 'surface.primary.fuel.fire.wind.factor.c']]]],
  ['surface.primary.fuel.fire.wind.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiWind', 'surface.primary.fuel.fire.wind.speed.atMidflame', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k']]]],
  ['surface.primary.fuel.fire.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'surface.primary.fuel.fire.spreadRate', 'surface.primary.fuel.fire.reactionIntensity', 'surface.primary.fuel.fire.flameResidenceTime']]]],
  ['surface.primary.fuel.fire.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.primary.fuel.fire.firelineIntensity']]]],
  ['surface.primary.fuel.fire.flameResidenceTime', [['Variant.FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.primary.fuel.fire.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'surface.primary.fuel.fire.maximumDirection.xComponent', 'surface.primary.fuel.fire.maximumDirection.yComponent', 'surface.primary.fuel.fire.maximumDirection.spreadRate']]]],
  ['surface.primary.fuel.fire.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.primary.fuel.fire.heading.fromUpslope']]]],
  ['surface.primary.fuel.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'surface.primary.fuel.fire.reactionIntensity', 'surface.primary.fuel.fire.flameResidenceTime']]]],
  ['surface.primary.fuel.fire.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'surface.primary.fuel.fire.effectiveWindSpeed']]]],
  ['surface.primary.fuel.fire.phiEffectiveWind', [['Variant.Float'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.phiEffectiveWind']]]],
  ['surface.primary.fuel.fire.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.bed.reactionIntensity']]]],
  ['surface.primary.fuel.fire.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.primary.fuel.fire.firelineIntensity', 'surface.primary.fuel.fire.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.primary.fuel.fire.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.primary.fuel.fire.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.bed.noWindNoSlope.spreadRate']]]],
  ['surface.primary.fuel.model.domain', [['Variant.FuelModelDomainOption'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.domain', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.fixed', 'behave'],
    ['configure.fuel.primary', 'equals', 'chaparral', 'Dag.fixed', 'chaparral'],
    ['configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.fixed', 'palmettoGallberry'],
    ['configure.fuel.primary', 'equals', 'westernAspen', 'Dag.fixed', 'westernAspen'],
    ['finally', 'Dag.fixed', 'none']]]],
  ['surface.primary.fuel.model.catalogKey', [['Variant.FuelModelKeyOption'], [
    ['finally', 'Dag.input']]]],
  ['surface.primary.fuel.model.behave.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'behave']]]],
  ['surface.primary.fuel.model.behave.parms.cured.herb.fraction', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.curedHerbFraction', 'equals', 'estimated', 'Behave.curedHerbFraction', 'site.moisture.live.herb'],
    ['finally', 'Dag.input']]]],
  ['surface.primary.fuel.model.behave.parms.depth', [['Variant.FuelBedDepth'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDepth', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDeadMext', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.25]]]],
  ['surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Load', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead10Load', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead100Load', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.primary.fuel.model.behave.parms.live.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Behave.deadHerbLoad', 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.primary.fuel.model.behave.parms.cured.herb.fraction']]]],
  ['surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Behave.liveHerbLoad', 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.primary.fuel.model.behave.parms.cured.herb.fraction']]]],
  ['surface.primary.fuel.model.chaparral.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'chaparral']]]],
  ['surface.primary.fuel.model.chaparral.parms.chaparralType', [['Variant.ChaparralTypeOption'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralFuelType', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 'chamise']]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.depth', [['Variant.FuelBedDepth'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralDepth', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralTotalLoad', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.chaparral.parms.applied.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.chaparralTotalLoad', 'equals', 'estimated', 'Dag.bind', 'surface.primary.fuel.model.chaparral.derived.totalLoad'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.model.chaparral.parms.observed.totalLoad']]]],
  ['surface.primary.fuel.model.chaparral.derived.age', [['Variant.FuelAge'], [
    ['finally', 'Chaparral.age', 'surface.primary.fuel.model.chaparral.parms.observed.depth', 'surface.primary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.primary.fuel.model.chaparral.derived.averageMortality', [['Variant.MortalityFraction'], [
    ['finally', 'Chaparral.deadFractionAverageMortality', 'surface.primary.fuel.model.chaparral.derived.age']]]],
  ['surface.primary.fuel.model.chaparral.derived.severeMortality', [['Variant.MortalityFraction'], [
    ['finally', 'Chaparral.deadFractionSevereMortality', 'surface.primary.fuel.model.chaparral.derived.age']]]],
  ['surface.primary.fuel.model.chaparral.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'Chaparral.fuelDepth', 'surface.primary.fuel.model.chaparral.derived.age', 'surface.primary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.primary.fuel.model.chaparral.derived.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.totalLoad', 'surface.primary.fuel.model.chaparral.derived.age', 'surface.primary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.primary.fuel.model.chaparral.derived.deadLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadLoad', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.deadFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass1Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.deadSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass2Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.deadMediumLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass3Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.deadLargeLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass4Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveLoad', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass1Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass2Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveMediumLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass3Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLargeLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass4Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLeafLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass5Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.primary.fuel.model.palmettoGallberry.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'palmettoGallberry']]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.age', [['Variant.FuelAge'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylAge', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.basalArea', [['Variant.FuelBasalArea'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylBasalArea', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.cover', [['Variant.FuelCoverFraction'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylCover', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.height', [['Variant.FuelBedDepth'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylHeight', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'PalmettoGallberry.fuelDepth', 'surface.primary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadFineLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadFoliageLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadLitterLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.basalArea']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveFineLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveFoliageLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover', 'surface.primary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.primary.fuel.model.westernAspen.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'westernAspen']]]],
  ['surface.primary.fuel.model.westernAspen.parms.aspenType', [['Variant.WesternAspenTypeOption'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 'aspenShrub']]]],
  ['surface.primary.fuel.model.westernAspen.parms.curingLevel', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel', 'surface.primary.fuel.model.catalogKey'],
    ['configure.fuel.primary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.primary.fuel.model.westernAspen.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'WesternAspen.depth', 'surface.primary.fuel.model.westernAspen.parms.aspenType']]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadFineLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadSmallLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType']]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadFineSavr', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveHerbLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveStemLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveStemSavr', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad', 'surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', 640, 350, 'surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'dead']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad', 'surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 109, 127, 140, 109]]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'dead']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadMediumLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', 0]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl1h', 5]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 30, 61, 2000, 1]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'dead']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 30, 32]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', 8000, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadLargeLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad', 0]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl100h', 5]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', 27, 2000, 1]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.01, 0.01]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'dead']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'dead']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', 10500, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.liveFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad', 'surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.live.herb', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.herb']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', 640, 350, 2800]]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.secondary.fuel.bed.live.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'live']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class1.moistureContent', 'surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.liveSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad', 'surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', 127, 140, 'surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.secondary.fuel.bed.live.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'live']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class2.moistureContent', 'surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0, 'surface.secondary.fuel.model.chaparral.derived.liveMediumLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', 0]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 5, 'site.moisture.live.stem', 'site.moisture.live.stem', 5]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 1, 61, 2000, 1]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'live']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class3.moistureContent', 'surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 46, 46, 32]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', 9550, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0, 'surface.secondary.fuel.model.chaparral.derived.liveLargeLoad', 0, 0]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 5, 'site.moisture.live.stem', 5, 5]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 1, 27, 1, 1]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.015, 0.015, 0.01]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'live']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class4.moistureContent', 'surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 32, 32, 46, 32]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', 10500, 8300, 8000]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0, 'surface.secondary.fuel.model.chaparral.derived.liveLeafLoad', 0, 0]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 5, 'site.moisture.live.herb', 5, 5]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 1, 2200, 1, 1]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.01, 0.035, 0.015, 0.01]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 0.0555, 0.055, 0.03, 0.055]]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'live']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class5.moistureContent', 'surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.total.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['surface.secondary.fuel.bed.dead.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.dead.surfaceArea', 'surface.secondary.fuel.bed.surfaceArea']]]],
  ['surface.secondary.fuel.bed.dead.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.secondary.fuel.bed.dead.effective.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.secondary.fuel.bed.dead.moistureContent', 'surface.secondary.fuel.bed.dead.extinction.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion']]]],
  ['surface.secondary.fuel.bed.dead.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad']]]],
  ['surface.secondary.fuel.bed.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent', 0.3, 0.4, 0.25]]]],
  ['surface.secondary.fuel.bed.dead.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.dead.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.volume', 'surface.secondary.fuel.bed.dead.particle.class2.volume', 'surface.secondary.fuel.bed.dead.particle.class3.volume', 'surface.secondary.fuel.bed.dead.particle.class4.volume', 'surface.secondary.fuel.bed.dead.particle.class5.volume']]]],
  ['surface.secondary.fuel.bed.dead.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition']]]],
  ['surface.secondary.fuel.bed.dead.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.secondary.fuel.bed.dead.reactionIntensityDry', 'surface.secondary.fuel.bed.dead.moistureDamping']]]],
  ['surface.secondary.fuel.bed.dead.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.secondary.fuel.bed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.dead.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.heatOfCombustion', 'surface.secondary.fuel.bed.dead.mineralDamping']]]],
  ['surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.dead.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent']]]],
  ['surface.secondary.fuel.bed.dead.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass']]]],
  ['surface.secondary.fuel.bed.dead.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.live.surfaceArea', 'surface.secondary.fuel.bed.surfaceArea']]]],
  ['surface.secondary.fuel.bed.live.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.secondary.fuel.bed.live.effective.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.secondary.fuel.bed.live.moistureContent', 'surface.secondary.fuel.bed.live.extinction.moistureContent']]]],
  ['surface.secondary.fuel.bed.live.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion']]]],
  ['surface.secondary.fuel.bed.live.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.waterLoad']]]],
  ['surface.secondary.fuel.bed.live.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'surface.secondary.fuel.bed.live.extinction.moistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent', 'surface.secondary.fuel.bed.dead.extinction.moistureContent']]]],
  ['surface.secondary.fuel.bed.live.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.moistureContent', 'surface.secondary.fuel.bed.live.particle.class2.moistureContent', 'surface.secondary.fuel.bed.live.particle.class3.moistureContent', 'surface.secondary.fuel.bed.live.particle.class4.moistureContent', 'surface.secondary.fuel.bed.live.particle.class5.moistureContent']]]],
  ['surface.secondary.fuel.bed.live.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.live.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.live.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.volume', 'surface.secondary.fuel.bed.live.particle.class2.volume', 'surface.secondary.fuel.bed.live.particle.class3.volume', 'surface.secondary.fuel.bed.live.particle.class4.volume', 'surface.secondary.fuel.bed.live.particle.class5.volume']]]],
  ['surface.secondary.fuel.bed.live.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition']]]],
  ['surface.secondary.fuel.bed.live.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.secondary.fuel.bed.live.reactionIntensityDry', 'surface.secondary.fuel.bed.live.moistureDamping']]]],
  ['surface.secondary.fuel.bed.live.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.secondary.fuel.bed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.live.net.ovendryLoad', 'surface.secondary.fuel.bed.live.heatOfCombustion', 'surface.secondary.fuel.bed.live.mineralDamping']]]],
  ['surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.live.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent']]]],
  ['surface.secondary.fuel.bed.live.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass']]]],
  ['surface.secondary.fuel.bed.live.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.depth', 'surface.secondary.fuel.model.chaparral.parms.observed.depth', 'surface.secondary.fuel.model.palmettoGallberry.derived.depth', 'surface.secondary.fuel.model.westernAspen.derived.depth']]]],
  ['surface.secondary.fuel.bed.bulkDensity', [['Variant.FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.ovendryLoad', 'surface.secondary.fuel.bed.depth']]]],
  ['surface.secondary.fuel.bed.heatOfPreignition', [['Variant.FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.heatOfPreignition', 'surface.secondary.fuel.bed.live.heatOfPreignition']]]],
  ['surface.secondary.fuel.bed.heatSink', [['Variant.FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'surface.secondary.fuel.bed.heatOfPreignition', 'surface.secondary.fuel.bed.bulkDensity']]]],
  ['surface.secondary.fuel.bed.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'surface.secondary.fuel.bed.reactionIntensity', 'surface.secondary.fuel.bed.propagatingFluxRatio', 'surface.secondary.fuel.bed.heatSink']]]],
  ['surface.secondary.fuel.bed.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.ovendryLoad', 'surface.secondary.fuel.bed.live.ovendryLoad']]]],
  ['surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'surface.secondary.fuel.bed.depth']]]],
  ['surface.secondary.fuel.bed.packingRatio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'surface.secondary.fuel.bed.dead.volume', 'surface.secondary.fuel.bed.live.volume', 'surface.secondary.fuel.bed.depth']]]],
  ['surface.secondary.fuel.bed.packingRatio.optimum', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.packingRatio.ratio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.packingRatio', 'surface.secondary.fuel.bed.packingRatio.optimum']]]],
  ['surface.secondary.fuel.bed.propagatingFluxRatio', [['Variant.FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.packingRatio']]]],
  ['surface.secondary.fuel.bed.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.reactionIntensity', 'surface.secondary.fuel.bed.live.reactionIntensity']]]],
  ['surface.secondary.fuel.bed.reactionVelocityExponent', [['Variant.Float'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.reactionVelocityMaximum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'surface.secondary.fuel.bed.savr15']]]],
  ['surface.secondary.fuel.bed.reactionVelocityOptimum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.bed.reactionVelocityMaximum', 'surface.secondary.fuel.bed.reactionVelocityExponent']]]],
  ['surface.secondary.fuel.bed.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.savr15', [['Variant.Float'], [
    ['finally', 'FuelBed.savr15', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.bed.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea']]]],
  ['surface.secondary.fuel.fire.maximumDirection.slope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.slope.phi']]]],
  ['surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.wind.phi']]]],
  ['surface.secondary.fuel.fire.wind.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'site.wind.direction.heading.fromUpslope']]]],
  ['surface.secondary.fuel.fire.maximumDirection.xComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.secondary.fuel.fire.maximumDirection.slope.spreadRate', 'surface.secondary.fuel.fire.wind.heading.fromUpslope']]]],
  ['surface.secondary.fuel.fire.maximumDirection.yComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.secondary.fuel.fire.wind.heading.fromUpslope']]]],
  ['surface.secondary.fuel.fire.maximumDirection.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'surface.secondary.fuel.fire.maximumDirection.xComponent', 'surface.secondary.fuel.fire.maximumDirection.yComponent']]]],
  ['surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.limit.spreadRate.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.secondary.fuel.fire.limit.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'surface.secondary.fuel.fire.reactionIntensity']]]],
  ['surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Variant.Float'], [
    ['finally', 'SurfaceFire.windSlopeSpreadRateCoefficientLimit', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.k']]]],
  ['surface.secondary.fuel.fire.limit.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['surface.secondary.fuel.fire.slope.ratio', [['Variant.SlopeSteepness'], [
    ['finally', 'Dag.bind', 'site.slope.steepness.ratio']]]],
  ['surface.secondary.fuel.fire.slope.k', [['Variant.Float'], [
    ['finally', 'FuelBed.slopeK', 'surface.secondary.fuel.bed.packingRatio']]]],
  ['surface.secondary.fuel.fire.slope.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiSlope', 'surface.secondary.fuel.fire.slope.ratio', 'surface.secondary.fuel.fire.slope.k']]]],
  ['surface.secondary.fuel.fire.spread.step1.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step1.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i']]]],
  ['surface.secondary.fuel.fire.spread.step1.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.phi', 'surface.secondary.fuel.fire.slope.phi']]]],
  ['surface.secondary.fuel.fire.spread.step1.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step1.phiEffectiveWind']]]],
  ['surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i']]]],
  ['surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step2.spreadRate']]]],
  ['surface.secondary.fuel.fire.spread.step2.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.maximumDirection.spreadRate']]]],
  ['surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.spread.step3a.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['surface.secondary.fuel.fire.spread.step3a.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.limit.spreadRate']]]],
  ['surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i']]]],
  ['surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.secondary.fuel.fire.spread.step3b.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step4.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i']]]],
  ['surface.secondary.fuel.fire.spread.step4.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step4.spreadRate']]]],
  ['surface.secondary.fuel.fire.spread.step4.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.secondary.fuel.fire.spread.step3a.spreadRate', 'surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['configure.fuel.windSpeedAdjustmentFactor', 'equals', 'input', 'Dag.bind', 'site.windSpeedAdjustmentFactor'],
    ['finally', 'SurfaceFire.windSpeedAdjustmentFactor', 'site.canopy.fuel.isSheltered', 'site.canopy.sheltered.windSpeedAdjustmentFactor', 'surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor']]]],
  ['surface.secondary.fuel.fire.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'surface.secondary.fuel.fire.windSpeedAdjustmentFactor']]]],
  ['surface.secondary.fuel.fire.wind.factor.b', [['Variant.Float'], [
    ['finally', 'FuelBed.windB', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.fire.wind.factor.c', [['Variant.Float'], [
    ['finally', 'FuelBed.windC', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.fire.wind.factor.e', [['Variant.Float'], [
    ['finally', 'FuelBed.windE', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.fire.wind.factor.k', [['Variant.Float'], [
    ['finally', 'FuelBed.windK', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.fire.wind.factor.e', 'surface.secondary.fuel.fire.wind.factor.c']]]],
  ['surface.secondary.fuel.fire.wind.factor.i', [['Variant.Float'], [
    ['finally', 'FuelBed.windI', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.fire.wind.factor.e', 'surface.secondary.fuel.fire.wind.factor.c']]]],
  ['surface.secondary.fuel.fire.wind.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiWind', 'surface.secondary.fuel.fire.wind.speed.atMidflame', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.k']]]],
  ['surface.secondary.fuel.fire.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'surface.secondary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.flameResidenceTime']]]],
  ['surface.secondary.fuel.fire.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.secondary.fuel.fire.firelineIntensity']]]],
  ['surface.secondary.fuel.fire.flameResidenceTime', [['Variant.FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['surface.secondary.fuel.fire.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'surface.secondary.fuel.fire.maximumDirection.xComponent', 'surface.secondary.fuel.fire.maximumDirection.yComponent', 'surface.secondary.fuel.fire.maximumDirection.spreadRate']]]],
  ['surface.secondary.fuel.fire.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.secondary.fuel.fire.heading.fromUpslope']]]],
  ['surface.secondary.fuel.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'surface.secondary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.flameResidenceTime']]]],
  ['surface.secondary.fuel.fire.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'surface.secondary.fuel.fire.effectiveWindSpeed']]]],
  ['surface.secondary.fuel.fire.phiEffectiveWind', [['Variant.Float'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind']]]],
  ['surface.secondary.fuel.fire.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'surface.secondary.fuel.bed.reactionIntensity']]]],
  ['surface.secondary.fuel.fire.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.secondary.fuel.fire.firelineIntensity', 'surface.secondary.fuel.fire.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.secondary.fuel.fire.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.spreadRate']]]],
  ['surface.secondary.fuel.fire.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.secondary.fuel.bed.noWindNoSlope.spreadRate']]]],
  ['surface.secondary.fuel.model.domain', [['Variant.FuelModelDomainOption'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.domain', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.fixed', 'behave'],
    ['configure.fuel.secondary', 'equals', 'chaparral', 'Dag.fixed', 'chaparral'],
    ['configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.fixed', 'palmettoGallberry'],
    ['configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.fixed', 'westernAspen'],
    ['finally', 'Dag.fixed', 'none']]]],
  ['surface.secondary.fuel.model.catalogKey', [['Variant.FuelModelKeyOption'], [
    ['finally', 'Dag.input']]]],
  ['surface.secondary.fuel.model.behave.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'behave']]]],
  ['surface.secondary.fuel.model.behave.parms.cured.herb.fraction', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.curedHerbFraction', 'equals', 'estimated', 'Behave.curedHerbFraction', 'site.moisture.live.herb'],
    ['finally', 'Dag.input']]]],
  ['surface.secondary.fuel.model.behave.parms.depth', [['Variant.FuelBedDepth'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDepth', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDeadMext', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.25]]]],
  ['surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Load', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead10Load', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead100Load', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 1]]]],
  ['surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', 8000]]]],
  ['surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Behave.deadHerbLoad', 'surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.secondary.fuel.model.behave.parms.cured.herb.fraction']]]],
  ['surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Behave.liveHerbLoad', 'surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.secondary.fuel.model.behave.parms.cured.herb.fraction']]]],
  ['surface.secondary.fuel.model.chaparral.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'chaparral']]]],
  ['surface.secondary.fuel.model.chaparral.parms.chaparralType', [['Variant.ChaparralTypeOption'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralFuelType', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 'chamise']]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.depth', [['Variant.FuelBedDepth'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralDepth', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralTotalLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['configure.fuel.chaparralTotalLoad', 'equals', 'estimated', 'Dag.bind', 'surface.secondary.fuel.model.chaparral.derived.totalLoad'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.model.chaparral.parms.observed.totalLoad']]]],
  ['surface.secondary.fuel.model.chaparral.derived.age', [['Variant.FuelAge'], [
    ['finally', 'Chaparral.age', 'surface.secondary.fuel.model.chaparral.parms.observed.depth', 'surface.secondary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.secondary.fuel.model.chaparral.derived.averageMortality', [['Variant.MortalityFraction'], [
    ['finally', 'Chaparral.deadFractionAverageMortality', 'surface.secondary.fuel.model.chaparral.derived.age']]]],
  ['surface.secondary.fuel.model.chaparral.derived.severeMortality', [['Variant.MortalityFraction'], [
    ['finally', 'Chaparral.deadFractionSevereMortality', 'surface.secondary.fuel.model.chaparral.derived.age']]]],
  ['surface.secondary.fuel.model.chaparral.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'Chaparral.fuelDepth', 'surface.secondary.fuel.model.chaparral.derived.age', 'surface.secondary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.secondary.fuel.model.chaparral.derived.totalLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.totalLoad', 'surface.secondary.fuel.model.chaparral.derived.age', 'surface.secondary.fuel.model.chaparral.parms.chaparralType']]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadLoad', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass1Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass2Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadMediumLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass3Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadLargeLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.deadClass4Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveLoad', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass1Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass2Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveMediumLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass3Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLargeLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass4Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLeafLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Chaparral.liveClass5Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'palmettoGallberry']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.age', [['Variant.FuelAge'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylAge', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.basalArea', [['Variant.FuelBasalArea'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylBasalArea', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.cover', [['Variant.FuelCoverFraction'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylCover', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.height', [['Variant.FuelBedDepth'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylHeight', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', 0.01]]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'PalmettoGallberry.fuelDepth', 'surface.secondary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadFoliageLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.deadLitterLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.basalArea']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberry.liveFoliageLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover', 'surface.secondary.fuel.model.palmettoGallberry.parms.height']]]],
  ['surface.secondary.fuel.model.westernAspen.domain', [['Variant.FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'westernAspen']]]],
  ['surface.secondary.fuel.model.westernAspen.parms.aspenType', [['Variant.WesternAspenTypeOption'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 'aspenShrub']]]],
  ['surface.secondary.fuel.model.westernAspen.parms.curingLevel', [['Variant.FuelDeadFraction'], [
    ['configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel', 'surface.secondary.fuel.model.catalogKey'],
    ['configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 0]]]],
  ['surface.secondary.fuel.model.westernAspen.derived.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'WesternAspen.depth', 'surface.secondary.fuel.model.westernAspen.parms.aspenType']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadFineLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadSmallLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.deadFineSavr', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveHerbLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveStemLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio', [['Variant.FuelOvendryLoad'], [
    ['finally', 'WesternAspen.liveStemSavr', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel']]]],
  ['surface.weighted.fire.primaryCover', [['Variant.FuelCoverFraction'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.fixed', 1],
    ['finally', 'Dag.input']]]],
  ['surface.weighted.fire.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.effectiveWindSpeed']]]],
  ['surface.weighted.fire.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromUpslope']]]],
  ['surface.weighted.fire.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromNorth']]]],
  ['surface.weighted.fire.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.lengthToWidthRatio']]]],
  ['surface.weighted.fire.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.wind.speed.atMidflame']]]],
  ['surface.weighted.fire.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor']]]],
  ['surface.weighted.fire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.firelineIntensity'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.firelineIntensity', 'surface.secondary.fuel.fire.firelineIntensity']]]],
  ['surface.weighted.fire.flameLength', [['Variant.FireFlameLength'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.flameLength'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.flameLength', 'surface.secondary.fuel.fire.flameLength']]]],
  ['surface.weighted.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.heatPerUnitArea'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.heatPerUnitArea', 'surface.secondary.fuel.fire.heatPerUnitArea']]]],
  ['surface.weighted.fire.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.reactionIntensity'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.reactionIntensity']]]],
  ['surface.weighted.fire.scorchHeight', [['Variant.FireScorchHeight'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.scorchHeight'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.scorchHeight', 'surface.secondary.fuel.fire.scorchHeight']]]],
  ['surface.weighted.fire.limit.effectiveWindSpeed.exceeded', [['Variant.Bool'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded'],
    ['finally', 'Calc.or', 'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded']]]],
  ['surface.weighted.fire.limit.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed'],
    ['finally', 'Math.min', 'surface.primary.fuel.fire.limit.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed']]]],
  ['surface.weighted.fire.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fire.weightingMethod', 'equals', 'expected', 'Dag.bind', 'surface.weighted.fire.expectedValue.spreadRate'],
    ['configure.fire.weightingMethod', 'equals', 'harmonic', 'Dag.bind', 'surface.weighted.fire.harmonicMean.spreadRate'],
    ['finally', 'Dag.bind', 'surface.weighted.fire.arithmeticMean.spreadRate']]]],
  ['surface.weighted.fire.arithmeticMean.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.arithmeticMeanSpreadRate', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate']]]],
  ['surface.weighted.fire.expectedValue.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.expectedValueSpreadRate', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate']]]],
  ['surface.weighted.fire.harmonicMean.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'FireWeighting.harmonicMeanSpreadRate', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate']]]],
  ['surface.fire.ellipse.axis.eccentricity', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'FireEllipse.eccentricity', 'surface.fire.ellipse.axis.lengthToWidthRatio']]]],
  ['surface.fire.ellipse.axis.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'site.fire.observed.effectiveWindSpeed']]]],
  ['surface.fire.ellipse.axis.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.lengthToWidthRatio'],
    ['finally', 'Dag.bind', 'site.fire.observed.lengthToWidthRatio']]]],
  ['surface.fire.ellipse.axis.major.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.majorSpreadRate', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.back.spreadRate']]]],
  ['surface.fire.ellipse.axis.minor.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.minorSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate', 'surface.fire.ellipse.axis.lengthToWidthRatio']]]],
  ['surface.fire.ellipse.axis.f.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.fSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate']]]],
  ['surface.fire.ellipse.axis.g.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.gSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate', 'surface.fire.ellipse.back.spreadRate']]]],
  ['surface.fire.ellipse.axis.h.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.hSpreadRate', 'surface.fire.ellipse.axis.minor.spreadRate']]]],
  ['surface.fire.ellipse.vector.fromHead', [['Variant.CompassAzimuth'], [
    ['configure.fire.vector', 'equals', 'fromHead', 'Dag.bind', 'site.fire.vector.fromHead'],
    ['configure.fire.vector', 'equals', 'fromUpslope', 'Compass.diff', 'surface.fire.ellipse.vector.fromUpslope', 'surface.fire.ellipse.heading.fromUpslope'],
    ['configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'surface.fire.ellipse.heading.fromNorth'],
    ['finally', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'surface.fire.ellipse.heading.fromNorth']]]],
  ['surface.fire.ellipse.vector.fromNorth', [['Variant.CompassAzimuth'], [
    ['configure.fire.vector', 'equals', 'fromNorth', 'Dag.bind', 'site.fire.vector.fromNorth'],
    ['configure.fire.vector', 'equals', 'fromHead', 'Compass.sum', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.heading.fromNorth'],
    ['configure.fire.vector', 'equals', 'fromUpslope', 'Compass.sum', 'surface.fire.ellipse.vector.fromUpslope', 'site.slope.direction.upslope'],
    ['finally', 'Compass.sum', 'surface.fire.ellipse.vector.fromUpslope', 'site.slope.direction.upslope']]]],
  ['surface.fire.ellipse.vector.fromUpslope', [['Variant.CompassAzimuth'], [
    ['configure.fire.vector', 'equals', 'fromUpslope', 'Dag.bind', 'site.fire.vector.fromUpslope'],
    ['configure.fire.vector', 'equals', 'fromHead', 'Compass.sum', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.heading.fromUpslope'],
    ['configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'site.slope.direction.upslope'],
    ['finally', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'site.slope.direction.upslope']]]],
  ['surface.fire.ellipse.size.area', [['Variant.FireArea'], [
    ['finally', 'FireEllipse.area', 'surface.fire.ellipse.size.length', 'surface.fire.ellipse.axis.lengthToWidthRatio']]]],
  ['surface.fire.ellipse.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.axis.major.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.perimeter', 'surface.fire.ellipse.size.length', 'surface.fire.ellipse.size.width']]]],
  ['surface.fire.ellipse.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.axis.minor.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.map.area', [['Variant.MapArea'], [
    ['finally', 'FireEllipse.mapArea', 'surface.fire.ellipse.size.area', 'site.map.scale']]]],
  ['surface.fire.ellipse.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.length', 'site.map.scale']]]],
  ['surface.fire.ellipse.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.perimeter', 'site.map.scale']]]],
  ['surface.fire.ellipse.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.width', 'site.map.scale']]]],
  ['surface.fire.ellipse.back.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.back.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.back.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.back.spreadRate']]]],
  ['surface.fire.ellipse.back.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength', 'surface.fire.ellipse.back.firelineIntensity']]]],
  ['surface.fire.ellipse.back.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.back.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.back.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.backingSpreadRate', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.axis.eccentricity']]]],
  ['surface.fire.ellipse.back.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.back.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.back.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.back.scorchHeight']]]],
  ['surface.fire.ellipse.flank.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.flank.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.flank.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.flank.spreadRate']]]],
  ['surface.fire.ellipse.flank.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength', 'surface.fire.ellipse.flank.firelineIntensity']]]],
  ['surface.fire.ellipse.flank.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.flank.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.flank.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.flankingSpreadRate', 'surface.fire.ellipse.axis.minor.spreadRate']]]],
  ['surface.fire.ellipse.flank.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.flank.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.flank.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.flank.scorchHeight']]]],
  ['surface.fire.ellipse.head.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.head.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.head.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']]]],
  ['surface.fire.ellipse.head.flameLength', [['Variant.FireFlameLength'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength']]]],
  ['surface.fire.ellipse.head.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.head.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.head.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.spreadRate'],
    ['finally', 'Dag.bind', 'site.fire.observed.spreadRate']]]],
  ['surface.fire.ellipse.head.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.head.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.head.scorchHeight']]]],
  ['surface.fire.ellipse.psi.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.psi.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.psi.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.psi.spreadRate']]]],
  ['surface.fire.ellipse.psi.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength', 'surface.fire.ellipse.psi.firelineIntensity']]]],
  ['surface.fire.ellipse.psi.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.psi.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.psi.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate']]]],
  ['surface.fire.ellipse.psi.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.psi.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.psi.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.psi.scorchHeight']]]],
  ['surface.fire.ellipse.beta5.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.beta5.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.beta5.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.beta.spreadRate']]]],
  ['surface.fire.ellipse.beta5.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength', 'surface.fire.ellipse.beta5.firelineIntensity']]]],
  ['surface.fire.ellipse.beta5.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.beta5.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.beta5.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.fire.ellipse.beta.spreadRate']]]],
  ['surface.fire.ellipse.beta5.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.beta5.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.beta5.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.beta5.scorchHeight']]]],
  ['surface.fire.ellipse.beta.spreadDistance', [['Variant.FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.beta.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['surface.fire.ellipse.beta.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.beta.psiSpreadRate']]]],
  ['surface.fire.ellipse.beta.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'FireEllipse.flameLength', 'surface.fire.ellipse.beta.firelineIntensity']]]],
  ['surface.fire.ellipse.beta.mapDistance', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.beta.spreadDistance', 'site.map.scale']]]],
  ['surface.fire.ellipse.beta.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.betaSpreadRate', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.axis.eccentricity']]]],
  ['surface.fire.ellipse.beta.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'surface.fire.ellipse.beta.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['surface.fire.ellipse.beta.treeMortality', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.beta.scorchHeight']]]],
  ['surface.fire.ellipse.beta.theta', [['Variant.CompassAzimuth'], [
    ['finally', 'FireEllipse.thetaFromBeta', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate']]]],
  ['surface.fire.ellipse.beta.psi', [['Variant.CompassAzimuth'], [
    ['finally', 'FireEllipse.psiFromTheta', 'surface.fire.ellipse.beta.theta', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate']]]],
  ['surface.fire.ellipse.beta.psiSpreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate', 'surface.fire.ellipse.beta.psi', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate']]]],
  ['surface.fire.ellipse.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.heading.fromUpslope'],
    ['finally', 'Dag.bind', 'site.fire.observed.heading.fromUpslope']]]],
  ['surface.fire.ellipse.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.fire.ellipse.heading.fromUpslope']]]],
  ['surface.fire.ellipse.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.wind.speed.atMidflame'],
    ['finally', 'Dag.bind', 'site.wind.speed.atMidflame']]]],
  ['site.terrain.spotSourceLocation', [['Variant.SpottingSourceLocationOption'], [
    ['finally', 'Dag.input']]]],
  ['site.terrain.ridgeValleyDistance', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.input']]]],
  ['site.terrain.ridgeValleyElevation', [['Variant.FireSpreadDistance'], [
    ['finally', 'Dag.input']]]],
  ['spotting.burningPile.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.burningPile.firebrand.height', 'site.canopy.downwind.appliedHeight']]]],
  ['spotting.burningPile.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.burningPileFirebrandHeight', 'spotting.burningPile.flameHeight']]]],
  ['spotting.burningPile.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['spotting.burningPile.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain', 'spotting.burningPile.firebrand.height', 'spotting.burningPile.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft']]]],
  ['spotting.burningPile.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift', 'spotting.burningPile.spotDistance.flatTerrain', 'spotting.burningPile.firebrand.drift']]]],
  ['spotting.burningPile.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain', 'spotting.burningPile.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation']]]],
  ['spotting.burningPile.flameHeight', [['Variant.FireFlameLength'], [
    ['finally', 'Dag.input']]]],
  ['spotting.crownFire.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['spotting.crownFire.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'CrownSpotting.zdrop', 'spotting.crownFire.firebrandObject']]]],
  ['spotting.crownFire.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrift', 'spotting.crownFire.firebrandObject']]]],
  ['spotting.crownFire.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrop', 'spotting.crownFire.firebrandObject']]]],
  ['spotting.crownFire.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'CrownSpotting.xspot', 'spotting.crownFire.firebrandObject']]]],
  ['spotting.crownFire.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain', 'spotting.crownFire.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation']]]],
  ['spotting.crownFire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.module', 'includes', ['crownFire', 'surfaceFire'], 'Dag.bind', 'crown.fire.active.firelineIntensity'],
    ['finally', 'CrownSpotting.firelineIntensityThomas', 'site.fire.crown.flameLength']]]],
  ['spotting.crownFire.firebrandObject', [['Variant.SpottingFirebrandObject'], [
    ['finally', 'CrownSpotting.flatDistance', 'site.canopy.crown.totalHeight', 'site.wind.speed.at20ft', 'spotting.crownFire.firelineIntensity']]]],
  ['spotting.surfaceFire.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.surfaceFire.firebrand.height', 'site.canopy.downwind.appliedHeight']]]],
  ['spotting.surfaceFire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']]]],
  ['spotting.surfaceFire.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.surfaceFireFirebrandHeight', 'spotting.surfaceFire.firelineIntensity', 'site.wind.speed.at20ft']]]],
  ['spotting.surfaceFire.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.surfaceFireFirebrandDrift', 'spotting.surfaceFire.firebrand.height', 'site.wind.speed.at20ft']]]],
  ['spotting.surfaceFire.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain', 'spotting.surfaceFire.firebrand.height', 'spotting.surfaceFire.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft']]]],
  ['spotting.surfaceFire.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift', 'spotting.surfaceFire.spotDistance.flatTerrain', 'spotting.surfaceFire.firebrand.drift']]]],
  ['spotting.surfaceFire.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain', 'spotting.surfaceFire.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation']]]],
  ['spotting.torchingTrees.firebrand.criticalCoverHeight', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.torchingTrees.firebrand.height', 'site.canopy.downwind.appliedHeight']]]],
  ['spotting.torchingTrees.firebrand.height', [['Variant.TreeHeight'], [
    ['finally', 'Spotting.torchingTreesFirebrandHeight', 'spotting.torchingTrees.height', 'spotting.torchingTrees.flameHeight', 'spotting.torchingTrees.flameDuration']]]],
  ['spotting.torchingTrees.firebrand.drift', [['Variant.FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['spotting.torchingTrees.spotDistance.flatTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrain', 'spotting.torchingTrees.firebrand.height', 'spotting.torchingTrees.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft']]]],
  ['spotting.torchingTrees.spotDistance.flatTerrainWithDrift', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceFlatTerrainWithDrift', 'spotting.torchingTrees.spotDistance.flatTerrain', 'spotting.torchingTrees.firebrand.drift']]]],
  ['spotting.torchingTrees.spotDistance.mountainTerrain', [['Variant.FireSpotDistance'], [
    ['finally', 'Spotting.spotDistanceMountainTerrain', 'spotting.torchingTrees.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation']]]],
  ['spotting.torchingTrees.species', [['Variant.TorchingTreeSpeciesOption'], [
    ['finally', 'Dag.input']]]],
  ['spotting.torchingTrees.height', [['Variant.TreeHeight'], [
    ['finally', 'Dag.input']]]],
  ['spotting.torchingTrees.dbh', [['Variant.TreeDbh'], [
    ['finally', 'Dag.input']]]],
  ['spotting.torchingTrees.count', [['Variant.TreeCount'], [
    ['finally', 'Dag.input']]]],
  ['spotting.torchingTrees.flameHeight', [['Variant.FireFlameLength'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameHeight', 'spotting.torchingTrees.species', 'spotting.torchingTrees.dbh', 'spotting.torchingTrees.count']]]],
  ['spotting.torchingTrees.flameDuration', [['Variant.FireFlameDuration'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameDuration', 'spotting.torchingTrees.species', 'spotting.torchingTrees.dbh', 'spotting.torchingTrees.count']]]],
  ['mortality.scorchHeight', [['Variant.FireScorchHeight'], [
    ['configure.module', 'equals', 'scorchHeight', 'FireEllipse.scorchHeight', 'site.fire.observed.firelineIntensity', 'site.wind.speed.atMidflame', 'site.temperature.air'],
    ['configure.module', 'equals', 'treeMortality', 'Dag.bind', 'site.fire.observed.scorchHeight'],
    ['finally', 'Dag.bind', 'surface.fire.ellipse.head.scorchHeight']]]],
  ['mortality.rate', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.mortality', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['mortality.crownLengthScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownLengthScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['mortality.crownVolumeScorched', [['Variant.Fraction'], [
    ['finally', 'TreeMortality.crownVolumeScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.138]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 2000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.092]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl10h']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 109]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.23]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl100h']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 30]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.herb']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.live.particle.class1.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0.092]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.stem']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1500]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.live.particle.class2.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.live.particle.class3.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.live.particle.class4.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.fiberDensity', [['Variant.FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', 32]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 5]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', 0.01]]]],
  ['crown.canopy.fuel.bed.live.particle.class5.total.mineralContent', [['Variant.FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', 0.0555]]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'dead']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'dead']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'dead']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'dead']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'dead']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'live']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class1.moistureContent', 'crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.particle.class1.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'live']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class2.moistureContent', 'crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.particle.class2.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'live']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class3.moistureContent', 'crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.particle.class3.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'live']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class4.moistureContent', 'crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.particle.class4.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['Variant.FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'live']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class5.moistureContent', 'crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.total.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.sizeClass', [['Variant.FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.particle.class5.volume', [['Variant.FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.fiberDensity']]]],
  ['crown.canopy.fuel.bed.dead.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.dead.surfaceArea', 'crown.canopy.fuel.bed.surfaceArea']]]],
  ['crown.canopy.fuel.bed.dead.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'crown.canopy.fuel.bed.dead.effective.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'crown.canopy.fuel.bed.dead.moistureContent', 'crown.canopy.fuel.bed.dead.extinction.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion']]]],
  ['crown.canopy.fuel.bed.dead.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad']]]],
  ['crown.canopy.fuel.bed.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Dag.fixed', 0.25]]]],
  ['crown.canopy.fuel.bed.dead.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.dead.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent']]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.dead.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.volume', 'crown.canopy.fuel.bed.dead.particle.class2.volume', 'crown.canopy.fuel.bed.dead.particle.class3.volume', 'crown.canopy.fuel.bed.dead.particle.class4.volume', 'crown.canopy.fuel.bed.dead.particle.class5.volume']]]],
  ['crown.canopy.fuel.bed.dead.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition']]]],
  ['crown.canopy.fuel.bed.dead.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'crown.canopy.fuel.bed.dead.reactionIntensityDry', 'crown.canopy.fuel.bed.dead.moistureDamping']]]],
  ['crown.canopy.fuel.bed.dead.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'crown.canopy.fuel.bed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.dead.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.heatOfCombustion', 'crown.canopy.fuel.bed.dead.mineralDamping']]]],
  ['crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.dead.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent']]]],
  ['crown.canopy.fuel.bed.dead.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass']]]],
  ['crown.canopy.fuel.bed.dead.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.live.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.live.surfaceArea', 'crown.canopy.fuel.bed.surfaceArea']]]],
  ['crown.canopy.fuel.bed.live.mineralDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'crown.canopy.fuel.bed.live.effective.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.moistureDamping', [['Variant.FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'crown.canopy.fuel.bed.live.moistureContent', 'crown.canopy.fuel.bed.live.extinction.moistureContent']]]],
  ['crown.canopy.fuel.bed.live.heatOfCombustion', [['Variant.FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion']]]],
  ['crown.canopy.fuel.bed.live.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.live.effectiveFuel.waterLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.waterLoad']]]],
  ['crown.canopy.fuel.bed.live.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'crown.canopy.fuel.bed.live.extinction.moistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent', 'crown.canopy.fuel.bed.dead.extinction.moistureContent']]]],
  ['crown.canopy.fuel.bed.live.extinction.moistureContentFactor', [['Variant.Float'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.live.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.moistureContent', 'crown.canopy.fuel.bed.live.particle.class2.moistureContent', 'crown.canopy.fuel.bed.live.particle.class3.moistureContent', 'crown.canopy.fuel.bed.live.particle.class4.moistureContent', 'crown.canopy.fuel.bed.live.particle.class5.moistureContent']]]],
  ['crown.canopy.fuel.bed.live.effectiveFuel.moistureContent', [['Variant.FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.live.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.live.volume', [['Variant.FuelBedDepth'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.volume', 'crown.canopy.fuel.bed.live.particle.class2.volume', 'crown.canopy.fuel.bed.live.particle.class3.volume', 'crown.canopy.fuel.bed.live.particle.class4.volume', 'crown.canopy.fuel.bed.live.particle.class5.volume']]]],
  ['crown.canopy.fuel.bed.live.heatOfPreignition', [['Variant.FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition']]]],
  ['crown.canopy.fuel.bed.live.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'crown.canopy.fuel.bed.live.reactionIntensityDry', 'crown.canopy.fuel.bed.live.moistureDamping']]]],
  ['crown.canopy.fuel.bed.live.reactionIntensityDry', [['Variant.FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'crown.canopy.fuel.bed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.live.net.ovendryLoad', 'crown.canopy.fuel.bed.live.heatOfCombustion', 'crown.canopy.fuel.bed.live.mineralDamping']]]],
  ['crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.live.effective.mineralContent', [['Variant.FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent']]]],
  ['crown.canopy.fuel.bed.live.sizeClass.weightingFactor', [['Variant.WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass']]]],
  ['crown.canopy.fuel.bed.live.net.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.depth', [['Variant.FuelBedDepth'], [
    ['finally', 'Dag.fixed', 1]]]],
  ['crown.canopy.fuel.bed.bulkDensity', [['Variant.FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.ovendryLoad', 'crown.canopy.fuel.bed.depth']]]],
  ['crown.canopy.fuel.bed.heatOfPreignition', [['Variant.FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.heatOfPreignition', 'crown.canopy.fuel.bed.live.heatOfPreignition']]]],
  ['crown.canopy.fuel.bed.heatSink', [['Variant.FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'crown.canopy.fuel.bed.heatOfPreignition', 'crown.canopy.fuel.bed.bulkDensity']]]],
  ['crown.canopy.fuel.bed.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'crown.canopy.fuel.bed.reactionIntensity', 'crown.canopy.fuel.bed.propagatingFluxRatio', 'crown.canopy.fuel.bed.heatSink']]]],
  ['crown.canopy.fuel.bed.ovendryLoad', [['Variant.FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.ovendryLoad', 'crown.canopy.fuel.bed.live.ovendryLoad']]]],
  ['crown.canopy.fuel.bed.open.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'crown.canopy.fuel.bed.depth']]]],
  ['crown.canopy.fuel.bed.packingRatio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'crown.canopy.fuel.bed.dead.volume', 'crown.canopy.fuel.bed.live.volume', 'crown.canopy.fuel.bed.depth']]]],
  ['crown.canopy.fuel.bed.packingRatio.optimum', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.packingRatio.ratio', [['Variant.FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.packingRatio', 'crown.canopy.fuel.bed.packingRatio.optimum']]]],
  ['crown.canopy.fuel.bed.propagatingFluxRatio', [['Variant.FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.packingRatio']]]],
  ['crown.canopy.fuel.bed.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.reactionIntensity', 'crown.canopy.fuel.bed.live.reactionIntensity']]]],
  ['crown.canopy.fuel.bed.reactionVelocityExponent', [['Variant.Float'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.reactionVelocityMaximum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'crown.canopy.fuel.bed.savr15']]]],
  ['crown.canopy.fuel.bed.reactionVelocityOptimum', [['Variant.FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.bed.reactionVelocityMaximum', 'crown.canopy.fuel.bed.reactionVelocityExponent']]]],
  ['crown.canopy.fuel.bed.surfaceAreaToVolumeRatio', [['Variant.FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.savr15', [['Variant.Float'], [
    ['finally', 'FuelBed.savr15', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.bed.surfaceArea', [['Variant.FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea']]]],
  ['crown.canopy.fuel.fire.maximumDirection.slope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.slope.phi']]]],
  ['crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.wind.phi']]]],
  ['crown.canopy.fuel.fire.wind.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.fire.maximumDirection.xComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', 'crown.canopy.fuel.fire.maximumDirection.slope.spreadRate', 'crown.canopy.fuel.fire.wind.heading.fromUpslope']]]],
  ['crown.canopy.fuel.fire.maximumDirection.yComponent', [['Variant.Float'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', 'crown.canopy.fuel.fire.wind.heading.fromUpslope']]]],
  ['crown.canopy.fuel.fire.maximumDirection.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'crown.canopy.fuel.fire.maximumDirection.xComponent', 'crown.canopy.fuel.fire.maximumDirection.yComponent']]]],
  ['crown.canopy.fuel.fire.limit.effectiveWindSpeed.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.limit.spreadRate.exceeded', [['Variant.Bool'], [
    ['finally', 'Calc.greaterThan', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.spread.step3b.spreadRate']]]],
  ['crown.canopy.fuel.fire.limit.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'crown.canopy.fuel.fire.reactionIntensity']]]],
  ['crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Variant.Float'], [
    ['finally', 'SurfaceFire.windSlopeSpreadRateCoefficientLimit', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.k']]]],
  ['crown.canopy.fuel.fire.limit.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['crown.canopy.fuel.fire.slope.ratio', [['Variant.SlopeSteepness'], [
    ['finally', 'Dag.fixed', 0]]]],
  ['crown.canopy.fuel.fire.slope.k', [['Variant.Float'], [
    ['finally', 'FuelBed.slopeK', 'crown.canopy.fuel.bed.packingRatio']]]],
  ['crown.canopy.fuel.fire.slope.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiSlope', 'crown.canopy.fuel.fire.slope.ratio', 'crown.canopy.fuel.fire.slope.k']]]],
  ['crown.canopy.fuel.fire.spread.step1.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step1.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i']]]],
  ['crown.canopy.fuel.fire.spread.step1.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.phi', 'crown.canopy.fuel.fire.slope.phi']]]],
  ['crown.canopy.fuel.fire.spread.step1.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step1.phiEffectiveWind']]]],
  ['crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i']]]],
  ['crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step2.spreadRate']]]],
  ['crown.canopy.fuel.fire.spread.step2.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.maximumDirection.spreadRate']]]],
  ['crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.spread.step3a.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', 'crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient']]]],
  ['crown.canopy.fuel.fire.spread.step3a.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.limit.spreadRate']]]],
  ['crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i']]]],
  ['crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step3b.spreadRate']]]],
  ['crown.canopy.fuel.fire.spread.step3b.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step4.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i']]]],
  ['crown.canopy.fuel.fire.spread.step4.phiEffectiveWind', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step4.spreadRate']]]],
  ['crown.canopy.fuel.fire.spread.step4.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'crown.canopy.fuel.fire.spread.step3a.spreadRate', 'crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.windSpeedAdjustmentFactor', [['Variant.WindSpeedAdjustmentFraction'], [
    ['finally', 'Dag.fixed', 0.4]]]],
  ['crown.canopy.fuel.fire.wind.speed.atMidflame', [['Variant.WindSpeed'], [
    ['configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'crown.canopy.fuel.fire.windSpeedAdjustmentFactor']]]],
  ['crown.canopy.fuel.fire.wind.factor.b', [['Variant.Float'], [
    ['finally', 'FuelBed.windB', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.fire.wind.factor.c', [['Variant.Float'], [
    ['finally', 'FuelBed.windC', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.fire.wind.factor.e', [['Variant.Float'], [
    ['finally', 'FuelBed.windE', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.fire.wind.factor.k', [['Variant.Float'], [
    ['finally', 'FuelBed.windK', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.fire.wind.factor.e', 'crown.canopy.fuel.fire.wind.factor.c']]]],
  ['crown.canopy.fuel.fire.wind.factor.i', [['Variant.Float'], [
    ['finally', 'FuelBed.windI', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.fire.wind.factor.e', 'crown.canopy.fuel.fire.wind.factor.c']]]],
  ['crown.canopy.fuel.fire.wind.phi', [['Variant.Float'], [
    ['finally', 'SurfaceFire.phiWind', 'crown.canopy.fuel.fire.wind.speed.atMidflame', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.k']]]],
  ['crown.canopy.fuel.fire.effectiveWindSpeed', [['Variant.WindSpeed'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'crown.canopy.fuel.fire.spreadRate', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.fire.flameResidenceTime']]]],
  ['crown.canopy.fuel.fire.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'crown.canopy.fuel.fire.firelineIntensity']]]],
  ['crown.canopy.fuel.fire.flameResidenceTime', [['Variant.FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio']]]],
  ['crown.canopy.fuel.fire.heading.fromUpslope', [['Variant.CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'crown.canopy.fuel.fire.maximumDirection.xComponent', 'crown.canopy.fuel.fire.maximumDirection.yComponent', 'crown.canopy.fuel.fire.maximumDirection.spreadRate']]]],
  ['crown.canopy.fuel.fire.heading.fromNorth', [['Variant.CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'crown.canopy.fuel.fire.heading.fromUpslope']]]],
  ['crown.canopy.fuel.fire.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.fire.flameResidenceTime']]]],
  ['crown.canopy.fuel.fire.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'crown.canopy.fuel.fire.effectiveWindSpeed']]]],
  ['crown.canopy.fuel.fire.phiEffectiveWind', [['Variant.Float'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind']]]],
  ['crown.canopy.fuel.fire.reactionIntensity', [['Variant.FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'crown.canopy.fuel.bed.reactionIntensity']]]],
  ['crown.canopy.fuel.fire.scorchHeight', [['Variant.FireScorchHeight'], [
    ['finally', 'FireEllipse.scorchHeight', 'crown.canopy.fuel.fire.firelineIntensity', 'crown.canopy.fuel.fire.wind.speed.atMidflame', 'site.temperature.air']]]],
  ['crown.canopy.fuel.fire.spreadRate', [['Variant.FireSpreadRate'], [
    ['configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.spreadRate']]]],
  ['crown.canopy.fuel.fire.noWindNoSlope.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'Dag.bind', 'crown.canopy.fuel.bed.noWindNoSlope.spreadRate']]]],
  ['crown.fire.active.size.area', [['Variant.FireArea'], [
    ['finally', 'CrownFire.area', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.active.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.spreadDistance', 'crown.fire.active.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['crown.fire.active.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.active.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.active.map.area', [['Variant.MapArea'], [
    ['finally', 'CrownFire.mapArea', 'crown.fire.active.size.area', 'site.map.scale']]]],
  ['crown.fire.active.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.length', 'site.map.scale']]]],
  ['crown.fire.active.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.perimeter', 'site.map.scale']]]],
  ['crown.fire.active.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.width', 'site.map.scale']]]],
  ['crown.fire.active.lengthToWidthRatio', [['Variant.FireLengthToWidthRatio'], [
    ['finally', 'CrownFire.lengthToWidthRatio', 'site.wind.speed.at20ft']]]],
  ['crown.fire.active.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rActive', 'crown.canopy.fuel.fire.spreadRate']]]],
  ['crown.fire.active.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliActive', 'crown.fire.active.heatPerUnitArea', 'crown.fire.active.spreadRate']]]],
  ['crown.fire.active.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'CrownFire.flameLengthThomas', 'crown.fire.active.firelineIntensity']]]],
  ['crown.fire.active.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['finally', 'CrownFire.hpuaActive', 'site.canopy.fire.heatPerUnitArea', 'crown.fire.surface.heatPerUnitArea']]]],
  ['crown.fire.active.powerOfTheFire', [['Variant.FirePower'], [
    ['finally', 'CrownFire.powerOfTheFire', 'crown.fire.active.firelineIntensity']]]],
  ['crown.fire.active.powerOfTheWind', [['Variant.FirePower'], [
    ['finally', 'CrownFire.powerOfTheWind', 'site.wind.speed.at20ft', 'crown.fire.active.spreadRate']]]],
  ['crown.fire.active.powerRatio', [['Variant.FirePowerRatio'], [
    ['finally', 'Calc.divide', 'crown.fire.active.powerOfTheFire', 'crown.fire.active.powerOfTheWind']]]],
  ['crown.fire.active.isPlumeDominated', [['Variant.Bool'], [
    ['finally', 'CrownFire.isPlumeDominated', 'crown.fire.active.powerRatio']]]],
  ['crown.fire.active.isWindDriven', [['Variant.Bool'], [
    ['finally', 'CrownFire.isWindDriven', 'crown.fire.active.powerRatio']]]],
  ['crown.fire.final.size.area', [['Variant.FireArea'], [
    ['finally', 'CrownFire.area', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.final.size.length', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.spreadDistance', 'crown.fire.final.spreadRate', 'site.fire.time.sinceIgnition']]]],
  ['crown.fire.final.size.perimeter', [['Variant.FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.final.size.width', [['Variant.FireSpreadDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio']]]],
  ['crown.fire.final.map.area', [['Variant.MapArea'], [
    ['finally', 'CrownFire.mapArea', 'crown.fire.final.size.area', 'site.map.scale']]]],
  ['crown.fire.final.map.length', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.length', 'site.map.scale']]]],
  ['crown.fire.final.map.perimeter', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.perimeter', 'site.map.scale']]]],
  ['crown.fire.final.map.width', [['Variant.MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.width', 'site.map.scale']]]],
  ['crown.fire.final.rSa', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rSa', 'crown.fire.initiation.oActive', 'surface.primary.fuel.bed.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k', 'surface.primary.fuel.fire.slope.phi']]]],
  ['crown.fire.final.crownFractionBurned', [['Variant.CrownFireBurnedFraction'], [
    ['finally', 'CrownFire.crownFractionBurned', 'surface.primary.fuel.fire.spreadRate', 'crown.fire.initiation.spreadRate', 'crown.fire.final.rSa']]]],
  ['crown.fire.final.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rFinal', 'surface.primary.fuel.fire.spreadRate', 'crown.fire.active.spreadRate', 'crown.fire.final.crownFractionBurned']]]],
  ['crown.fire.final.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliFinal', 'crown.fire.final.spreadRate', 'crown.fire.final.crownFractionBurned', 'site.canopy.fire.heatPerUnitArea', 'crown.fire.surface.heatPerUnitArea']]]],
  ['crown.fire.final.flameLength', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.flameLengthThomas', 'crown.fire.final.firelineIntensity']]]],
  ['crown.fire.initiation.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliInit', 'site.canopy.fuel.foliar.moistureContent', 'site.canopy.crown.baseHeight']]]],
  ['crown.fire.initiation.flameLength', [['Variant.FireFlameLength'], [
    ['finally', 'CrownFire.flameLength', 'crown.fire.initiation.firelineIntensity']]]],
  ['crown.fire.initiation.spreadRate', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rInit', 'crown.fire.initiation.firelineIntensity', 'crown.fire.surface.heatPerUnitArea']]]],
  ['crown.fire.initiation.rPrime', [['Variant.FireSpreadRate'], [
    ['finally', 'CrownFire.rPrimeActive', 'site.canopy.fuel.bulkDensity']]]],
  ['crown.fire.initiation.transitionRatio', [['Variant.CrownTransitionRatio'], [
    ['finally', 'CrownFire.transitionRatio', 'crown.fire.surface.firelineIntensity', 'crown.fire.initiation.firelineIntensity']]]],
  ['crown.fire.initiation.canTransition', [['Variant.Bool'], [
    ['finally', 'CrownFire.canTransition', 'crown.fire.initiation.transitionRatio']]]],
  ['crown.fire.initiation.activeRatio', [['Variant.CrownFireActiveRatio'], [
    ['finally', 'CrownFire.activeRatio', 'crown.fire.active.spreadRate', 'crown.fire.initiation.rPrime']]]],
  ['crown.fire.initiation.type', [['Variant.CrownFireInitiationTypeOption'], [
    ['finally', 'CrownFire.type', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.isActiveCrownFire', [['Variant.Bool'], [
    ['finally', 'CrownFire.isActive', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.isCrownFire', [['Variant.Bool'], [
    ['finally', 'CrownFire.isCrown', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.isPassiveCrownFire', [['Variant.Bool'], [
    ['finally', 'CrownFire.isPassive', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.isConditionalCrownFire', [['Variant.Bool'], [
    ['finally', 'CrownFire.isConditional', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.isSurfaceFire', [['Variant.Bool'], [
    ['finally', 'CrownFire.isSurface', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio']]]],
  ['crown.fire.initiation.oActive', [['Variant.WindSpeed'], [
    ['finally', 'CrownFire.oActive', 'site.canopy.fuel.bulkDensity', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.bed.heatSink', 'crown.canopy.fuel.fire.slope.phi']]]],
  ['crown.fire.initiation.crowningIndex', [['Variant.Float'], [
    ['finally', 'CrownFire.crowningIndex', 'crown.fire.initiation.oActive']]]],
  ['crown.fire.surface.firelineIntensity', [['Variant.FireFirelineIntensity'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']]]],
  ['crown.fire.surface.flameLength', [['Variant.FireFlameLength'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength']]]],
  ['crown.fire.surface.heatPerUnitArea', [['Variant.FireHeatPerUnitArea'], [
    ['configure.module', 'equals', 'surfaceFire', 'Dag.bind', 'surface.weighted.fire.heatPerUnitArea'],
    ['finally', 'Dag.bind', 'site.fire.observed.heatPerUnitArea']]]]
]
