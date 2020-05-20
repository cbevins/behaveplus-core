export function slopeRatio (prefix) {
  return (prefix === 'crown.canopy.fuel')
    ? [`${prefix}.fire.slope.ratio`, [['Variant.SlopeSteepness'], [
      ['finally', 'Dag.fixed', 0]
    ]]]
    : [`${prefix}.fire.slope.ratio`, [['Variant.SlopeSteepness'], [
      ['finally', 'Dag.bind', 'site.slope.steepness.ratio']
    ]]]
}

export function windHeadingFromUpslope (prefix) {
  return (prefix === 'crown.canopy.fuel')
    ? [`${prefix}.fire.wind.heading.fromUpslope`, [['Variant.CompassAzimuth'], [
      ['finally', 'Dag.fixed', 0]
    ]]]
    : [`${prefix}.fire.wind.heading.fromUpslope`, [['Variant.CompassAzimuth'], [
      ['finally', 'Dag.bind', 'site.wind.direction.heading.fromUpslope']
    ]]]
}

export function windSpeedAdjustmentFactor (prefix) {
  return (prefix === 'crown.canopy.fuel')
    ? [`${prefix}.fire.windSpeedAdjustmentFactor`, [['Variant.WindSpeedAdjustmentFraction'], [
      ['finally', 'Dag.fixed', 0.4]
    ]]]
    : [`${prefix}.fire.windSpeedAdjustmentFactor`, [['Variant.WindSpeedAdjustmentFraction'], [
      ['when', 'configure.fuel.windSpeedAdjustmentFactor', 'equals', 'input',
        'Dag.bind', 'site.windSpeedAdjustmentFactor'],
      ['finally', 'SurfaceFire.windSpeedAdjustmentFactor',
        'site.canopy.fuel.isSheltered',
        'site.canopy.sheltered.windSpeedAdjustmentFactor',
        `${prefix}.bed.open.windSpeedAdjustmentFactor`]
    ]]]
}

export function genome (prefix) {
  return [
    [`${prefix}.fire.maximumDirection.slope.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.slope.phi`
      ]
    ]]],
    [`${prefix}.fire.maximumDirection.wind.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.wind.phi`
      ]
    ]]],
    windHeadingFromUpslope(prefix),
    [`${prefix}.fire.maximumDirection.xComponent`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.maximumDirectionXComponent',
        `${prefix}.fire.maximumDirection.wind.spreadRate`,
        `${prefix}.fire.maximumDirection.slope.spreadRate`,
        `${prefix}.fire.wind.heading.fromUpslope`
      ]
    ]]],
    [`${prefix}.fire.maximumDirection.yComponent`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.maximumDirectionYComponent',
        `${prefix}.fire.maximumDirection.wind.spreadRate`,
        `${prefix}.fire.wind.heading.fromUpslope`
      ]
    ]]],
    [`${prefix}.fire.maximumDirection.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.maximumDirectionSpreadRate',
        `${prefix}.fire.maximumDirection.xComponent`,
        `${prefix}.fire.maximumDirection.yComponent`
      ]
    ]]],
    // end `${prefix}.fire.maximumDirection`
    [`${prefix}.fire.limit.effectiveWindSpeed.exceeded`, [['Variant.Boolean'], [
      ['finally', 'Calc.greaterThan',
        `${prefix}.fire.spread.step2.effectiveWindSpeed`,
        `${prefix}.fire.limit.effectiveWindSpeed`
      ]
    ]]],
    [`${prefix}.fire.limit.spreadRate.exceeded`, [['Variant.Boolean'], [
      ['finally', 'Calc.greaterThan',
        `${prefix}.fire.spread.step2.spreadRate`,
        `${prefix}.fire.spread.step3b.spreadRate`
      ]
    ]]],
    // end `${prefix}.fire.exceeded`
    [`${prefix}.fire.limit.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'SurfaceFire.effectiveWindSpeedLimit',
        `${prefix}.fire.reactionIntensity`
      ]
    ]]],
    [`${prefix}.fire.limit.windSlopeSpreadRateCoefficient`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.windSlopeSpreadRateCoefficientLimit',
        `${prefix}.fire.limit.effectiveWindSpeed`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.k`
      ]
    ]]],
    [`${prefix}.fire.limit.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.maximumSpreadRate',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.limit.windSlopeSpreadRateCoefficient`
      ]
    ]]],
    // end `${prefix}.fire.limit`
    slopeRatio(prefix),
    [`${prefix}.fire.slope.k`, [['Variant.Factor'], [
      ['finally', 'FuelBed.slopeK',
        `${prefix}.bed.packingRatio`
      ]
    ]]],
    [`${prefix}.fire.slope.phi`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiSlope',
        `${prefix}.fire.slope.ratio`,
        `${prefix}.fire.slope.k`
      ]
    ]]],
    // end `${prefix}.fire.slope`
    [`${prefix}.fire.spread.step1.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'SurfaceFire.effectiveWindSpeed',
        `${prefix}.fire.spread.step1.phiEffectiveWind`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.i`
      ]
    ]]],
    [`${prefix}.fire.spread.step1.phiEffectiveWind`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiEffectiveWind',
        `${prefix}.fire.wind.phi`,
        `${prefix}.fire.slope.phi`
      ]
    ]]],
    [`${prefix}.fire.spread.step1.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.maximumSpreadRate',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.spread.step1.phiEffectiveWind`
      ]
    ]]],
    // end `${prefix}.fire.spread.step1`
    [`${prefix}.fire.spread.step2.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'SurfaceFire.effectiveWindSpeed',
        `${prefix}.fire.spread.step2.phiEffectiveWind`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.i`
      ]
    ]]],
    [`${prefix}.fire.spread.step2.phiEffectiveWind`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiEffectiveWindInferred',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.spread.step2.spreadRate`
      ]
    ]]],
    [`${prefix}.fire.spread.step2.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.maximumDirection.spreadRate`
      ]
    ]]],
    // end `${prefix}.fire.spread.step2`
    [`${prefix}.fire.spread.step3a.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'Math.min',
        `${prefix}.fire.spread.step2.effectiveWindSpeed`,
        `${prefix}.fire.limit.effectiveWindSpeed`
      ]
    ]]],
    [`${prefix}.fire.spread.step3a.phiEffectiveWind`, [['Variant.Factor'], [
      ['finally', 'Math.min',
        `${prefix}.fire.spread.step2.phiEffectiveWind`,
        `${prefix}.fire.limit.windSlopeSpreadRateCoefficient`
      ]
    ]]],
    [`${prefix}.fire.spread.step3a.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'Math.min',
        `${prefix}.fire.spread.step2.spreadRate`,
        `${prefix}.fire.limit.spreadRate`
      ]
    ]]],
    // end `${prefix}.fire.spread.step3a`
    [`${prefix}.fire.spread.step3b.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'SurfaceFire.effectiveWindSpeed',
        `${prefix}.fire.spread.step3b.phiEffectiveWind`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.i`
      ]
    ]]],
    [`${prefix}.fire.spread.step3b.phiEffectiveWind`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiEffectiveWindInferred',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.spread.step3b.spreadRate`
      ]
    ]]],
    [`${prefix}.fire.spread.step3b.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied',
        `${prefix}.fire.spread.step2.spreadRate`,
        `${prefix}.fire.spread.step2.effectiveWindSpeed`
      ]
    ]]],
    // end `${prefix}.fire.spread.step3b`
    [`${prefix}.fire.spread.step4.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['finally', 'SurfaceFire.effectiveWindSpeed',
        `${prefix}.fire.spread.step4.phiEffectiveWind`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.i`
      ]
    ]]],
    [`${prefix}.fire.spread.step4.phiEffectiveWind`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiEffectiveWindInferred',
        `${prefix}.fire.noWindNoSlope.spreadRate`,
        `${prefix}.fire.spread.step4.spreadRate`
      ]
    ]]],
    [`${prefix}.fire.spread.step4.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied',
        `${prefix}.fire.spread.step3a.spreadRate`,
        `${prefix}.fire.spread.step3a.effectiveWindSpeed`
      ]
    ]]],
    // end `${prefix}.fire.spread.step4`
    // end `${prefix}.fire.spread`
    windSpeedAdjustmentFactor(prefix),
    [`${prefix}.fire.wind.speed.atMidflame`, [['Variant.WindSpeed'], [
      ['when', 'configure.wind.speed', 'equals', 'atMidflame',
        'Dag.bind', 'site.wind.speed.atMidflame'],
      ['finally', 'Wind.speedAtMidflame',
        'site.wind.speed.at20ft',
        `${prefix}.fire.windSpeedAdjustmentFactor`
      ]
    ]]],
    [`${prefix}.fire.wind.factor.b`, [['Variant.Factor'], [
      ['finally', 'FuelBed.windB',
        `${prefix}.bed.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.fire.wind.factor.c`, [['Variant.Factor'], [
      ['finally', 'FuelBed.windC',
        `${prefix}.bed.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.fire.wind.factor.e`, [['Variant.Factor'], [
      ['finally', 'FuelBed.windE',
        `${prefix}.bed.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.fire.wind.factor.k`, [['Variant.Factor'], [
      ['finally', 'FuelBed.windK',
        `${prefix}.bed.packingRatio.ratio`,
        `${prefix}.fire.wind.factor.e`,
        `${prefix}.fire.wind.factor.c`
      ]
    ]]],
    [`${prefix}.fire.wind.factor.i`, [['Variant.Factor'], [
      ['finally', 'FuelBed.windI',
        `${prefix}.bed.packingRatio.ratio`,
        `${prefix}.fire.wind.factor.e`,
        `${prefix}.fire.wind.factor.c`
      ]
    ]]],
    [`${prefix}.fire.wind.phi`, [['Variant.Factor'], [
      ['finally', 'SurfaceFire.phiWind',
        `${prefix}.fire.wind.speed.atMidflame`,
        `${prefix}.fire.wind.factor.b`,
        `${prefix}.fire.wind.factor.k`
      ]
    ]]],
    // end `${prefix}.fire.wind`
    [`${prefix}.fire.effectiveWindSpeed`, [['Variant.WindSpeed'], [
      ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied',
        'Dag.bind', `${prefix}.fire.spread.step4.effectiveWindSpeed`],
      ['finally', 'Dag.bind', `${prefix}.fire.spread.step3b.effectiveWindSpeed`]
    ]]],
    [`${prefix}.fire.firelineIntensity`, [['Variant.FireFirelineIntensity'], [
      ['finally', 'SurfaceFire.firelineIntensity',
        `${prefix}.fire.spreadRate`,
        `${prefix}.fire.reactionIntensity`,
        `${prefix}.fire.flameResidenceTime`
      ]
    ]]],
    [`${prefix}.fire.flameLength`, [['Variant.FireFlameLength'], [
      ['finally', 'SurfaceFire.flameLength',
        `${prefix}.fire.firelineIntensity`
      ]
    ]]],
    [`${prefix}.fire.flameResidenceTime`, [['Variant.FireResidenceTime'], [
      ['finally', 'FuelBed.taur',
        `${prefix}.bed.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.fire.heading.fromUpslope`, [['Variant.CompassAzimuth'], [
      ['finally', 'SurfaceFire.spreadDirectionFromUpslope',
        `${prefix}.fire.maximumDirection.xComponent`,
        `${prefix}.fire.maximumDirection.yComponent`,
        `${prefix}.fire.maximumDirection.spreadRate`
      ]
    ]]],
    [`${prefix}.fire.heading.fromNorth`, [['Variant.CompassAzimuth'], [
      ['finally', 'Compass.sum',
        'site.slope.direction.upslope',
        `${prefix}.fire.heading.fromUpslope`]
    ]]],
    [`${prefix}.fire.heatPerUnitArea`, [['Variant.FireHeatPerUnitArea'], [
      ['finally', 'FuelBed.heatPerUnitArea',
        `${prefix}.fire.reactionIntensity`,
        `${prefix}.fire.flameResidenceTime`
      ]
    ]]],
    [`${prefix}.fire.lengthToWidthRatio`, [['Variant.FireLengthToWidthRatio'], [
      ['finally', 'SurfaceFire.lengthToWidthRatio',
        `${prefix}.fire.effectiveWindSpeed`
      ]
    ]]],
    [`${prefix}.fire.phiEffectiveWind`, [['Variant.Factor'], [
      ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', `${prefix}.fire.spread.step4.phiEffectiveWind`],
      ['finally', 'Dag.bind', `${prefix}.fire.spread.step3b.phiEffectiveWind`]
    ]]],
    [`${prefix}.fire.reactionIntensity`, [['Variant.FireReactionIntensity'], [
      ['finally', 'Dag.bind', `${prefix}.bed.reactionIntensity`]
    ]]],
    [`${prefix}.fire.scorchHeight`, [['Variant.FireScorchHeight'], [
      ['finally', 'FireEllipse.scorchHeight',
        `${prefix}.fire.firelineIntensity`,
        `${prefix}.fire.wind.speed.atMidflame`,
        'site.temperature.air']
    ]]],
    [`${prefix}.fire.spreadRate`, [['Variant.FireSpreadRate'], [
      ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', `${prefix}.fire.spread.step4.spreadRate`],
      ['finally', 'Dag.bind', `${prefix}.fire.spread.step3b.spreadRate`]
    ]]],
    [`${prefix}.fire.noWindNoSlope.spreadRate`, [['Variant.FireSpreadRate'], [
      ['finally', 'Dag.bind', `${prefix}.bed.noWindNoSlope.spreadRate`]
    ]]]
    // end `${prefix}.fire`
  ]
}
