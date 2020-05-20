export function extinctionMoistureContent (prefix, life) {
  if (life === 'dead') {
    return (prefix === 'crown.canopy.fuel')
      ? ['crown.canopy.fuel.bed.dead.extinction.moistureContent', [['Variant.FuelMoistureContent'], [
        ['finally', 'Dag.fixed', 0.25]
      ]]]
      : [`${prefix}.bed.${life}.extinction.moistureContent`, [['Variant.FuelMoistureContent'], [
        ['finally', 'FuelParticle.selectByDomain',
          `${prefix}.model.domain`,
          `${prefix}.model.behave.parms.${life}.extinction.moistureContent`,
          0.3,
          0.4,
          0.25
        ]
      ]]]
  }
  return [`${prefix}.bed.live.extinction.moistureContent`, [['Variant.FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent',
      `${prefix}.bed.live.extinction.moistureContentFactor`,
      `${prefix}.bed.dead.effectiveFuel.moistureContent`,
      `${prefix}.bed.dead.extinction.moistureContent`
    ]
  ]]]
}

export function genome (prefix, life) {
  return [
    [`${prefix}.bed.${life}.surfaceArea`, [['Variant.FuelSurfaceArea'], [
      ['finally', 'Calc.sum',
        `${prefix}.bed.${life}.particle.class1.surfaceArea`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea`
      ]
    ]]],
    [`${prefix}.bed.${life}.surfaceArea.weightingFactor`, [['Variant.WeightingFactor'], [
      ['finally', 'Calc.divide',
        `${prefix}.bed.${life}.surfaceArea`,
        `${prefix}.bed.surfaceArea`
      ]
    ]]],
    [`${prefix}.bed.${life}.mineralDamping`, [['Variant.FireDampingCoefficient'], [
      ['finally', 'FuelBed.mineralDamping',
        `${prefix}.bed.${life}.effective.mineralContent`
      ]
    ]]],
    [`${prefix}.bed.${life}.moistureDamping`, [['Variant.FireDampingCoefficient'], [
      ['finally', 'FuelBed.moistureDamping',
        `${prefix}.bed.${life}.moistureContent`,
        `${prefix}.bed.${life}.extinction.moistureContent`
      ]
    ]]],
    [`${prefix}.bed.${life}.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.heatOfCombustion`,
        `${prefix}.bed.${life}.particle.class2.heatOfCombustion`,
        `${prefix}.bed.${life}.particle.class3.heatOfCombustion`,
        `${prefix}.bed.${life}.particle.class4.heatOfCombustion`,
        `${prefix}.bed.${life}.particle.class5.heatOfCombustion`
      ]
    ]]],
    [`${prefix}.bed.${life}.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Calc.sum',
        `${prefix}.bed.${life}.particle.class1.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class2.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class3.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class4.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class5.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.${life}.effectiveFuel.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Calc.sum',
        `${prefix}.bed.${life}.particle.class1.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class2.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class3.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class4.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class5.effectiveFuel.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.${life}.effectiveFuel.waterLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Calc.sum',
        `${prefix}.bed.${life}.particle.class1.effectiveFuel.waterLoad`,
        `${prefix}.bed.${life}.particle.class2.effectiveFuel.waterLoad`,
        `${prefix}.bed.${life}.particle.class3.effectiveFuel.waterLoad`,
        `${prefix}.bed.${life}.particle.class4.effectiveFuel.waterLoad`,
        `${prefix}.bed.${life}.particle.class5.effectiveFuel.waterLoad`
      ]
    ]]],
    // Dead and Live categories have different methods and args...
    extinctionMoistureContent(prefix, life),
    // only actually used by the 'live' fuel category, but included here for simplicity...
    [`${prefix}.bed.${life}.extinction.moistureContentFactor`, [['Variant.Factor'], [
      ['finally', 'FuelBed.extinctionMoistureContentFactor',
        `${prefix}.bed.dead.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.live.effectiveFuel.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.${life}.moistureContent`, [['Variant.FuelMoistureContent'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.moistureContent`,
        `${prefix}.bed.${life}.particle.class2.moistureContent`,
        `${prefix}.bed.${life}.particle.class3.moistureContent`,
        `${prefix}.bed.${life}.particle.class4.moistureContent`,
        `${prefix}.bed.${life}.particle.class5.moistureContent`
      ]
    ]]],
    [`${prefix}.bed.${life}.effectiveFuel.moistureContent`, [['Variant.FuelMoistureContent'], [
      ['finally', 'Calc.divide',
        `${prefix}.bed.${life}.effectiveFuel.waterLoad`,
        `${prefix}.bed.${life}.effectiveFuel.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.${life}.volume`, [['Variant.FuelBedDepth'], [
      ['finally', 'Calc.sum',
        `${prefix}.bed.${life}.particle.class1.volume`,
        `${prefix}.bed.${life}.particle.class2.volume`,
        `${prefix}.bed.${life}.particle.class3.volume`,
        `${prefix}.bed.${life}.particle.class4.volume`,
        `${prefix}.bed.${life}.particle.class5.volume`
      ]
    ]]],
    [`${prefix}.bed.${life}.heatOfPreignition`, [['Variant.FuelHeatOfPreignition'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.heatOfPreignition`,
        `${prefix}.bed.${life}.particle.class2.heatOfPreignition`,
        `${prefix}.bed.${life}.particle.class3.heatOfPreignition`,
        `${prefix}.bed.${life}.particle.class4.heatOfPreignition`,
        `${prefix}.bed.${life}.particle.class5.heatOfPreignition`
      ]
    ]]],
    [`${prefix}.bed.${life}.reactionIntensity`, [['Variant.FireReactionIntensity'], [
      ['finally', 'Calc.multiply',
        `${prefix}.bed.${life}.reactionIntensityDry`,
        `${prefix}.bed.${life}.moistureDamping`
      ]
    ]]],
    [`${prefix}.bed.${life}.reactionIntensityDry`, [['Variant.FireReactionIntensity'], [
      ['finally', 'FuelBed.reactionIntensityDry',
        `${prefix}.bed.reactionVelocityOptimum`,
        `${prefix}.bed.${life}.net.ovendryLoad`,
        `${prefix}.bed.${life}.heatOfCombustion`,
        `${prefix}.bed.${life}.mineralDamping`
      ]
    ]]],
    [`${prefix}.bed.${life}.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class2.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class3.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class4.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class5.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.bed.${life}.effective.mineralContent`, [['Variant.FuelEffectiveMineralContent'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.effective.mineralContent`,
        `${prefix}.bed.${life}.particle.class2.effective.mineralContent`,
        `${prefix}.bed.${life}.particle.class3.effective.mineralContent`,
        `${prefix}.bed.${life}.particle.class4.effective.mineralContent`,
        `${prefix}.bed.${life}.particle.class5.effective.mineralContent`
      ]
    ]]],
    [`${prefix}.bed.${life}.sizeClass.weightingFactor`, [['Variant.WeightingFactor'], [
      ['finally', 'FuelBed.sizeClassWeightingFactorArray',
        `${prefix}.bed.${life}.particle.class1.surfaceArea`,
        `${prefix}.bed.${life}.particle.class1.sizeClass`,
        `${prefix}.bed.${life}.particle.class2.surfaceArea`,
        `${prefix}.bed.${life}.particle.class2.sizeClass`,
        `${prefix}.bed.${life}.particle.class3.surfaceArea`,
        `${prefix}.bed.${life}.particle.class3.sizeClass`,
        `${prefix}.bed.${life}.particle.class4.surfaceArea`,
        `${prefix}.bed.${life}.particle.class4.sizeClass`,
        `${prefix}.bed.${life}.particle.class5.surfaceArea`,
        `${prefix}.bed.${life}.particle.class5.sizeClass`
      ]
    ]]],
    [`${prefix}.bed.${life}.net.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Calc.sumOfProducts',
        `${prefix}.bed.${life}.particle.class1.sizeClass.weightingFactor`,
        `${prefix}.bed.${life}.particle.class2.sizeClass.weightingFactor`,
        `${prefix}.bed.${life}.particle.class3.sizeClass.weightingFactor`,
        `${prefix}.bed.${life}.particle.class4.sizeClass.weightingFactor`,
        `${prefix}.bed.${life}.particle.class5.sizeClass.weightingFactor`,
        `${prefix}.bed.${life}.particle.class1.net.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class2.net.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class3.net.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class4.net.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class5.net.ovendryLoad`
      ]
    ]]]
  ]
}
