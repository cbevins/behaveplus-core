export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.westernAspen.domain`, [['Variant.FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'westernAspen']
    ]]],
    [`${prefix}.model.westernAspen.parms.aspenType`, [['Variant.WesternAspenTypeOption'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'westernAspen', 'Dag.input'],
      ['finally', 'Dag.fixed', 'aspenShrub']
    ]]],
    [`${prefix}.model.westernAspen.parms.curingLevel`, [['Variant.FuelDeadFraction'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'westernAspen', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    // end `${prefix}.model.westernAspen.parms`
    [`${prefix}.model.westernAspen.derived.depth`, [['Variant.FuelBedDepth'], [
      ['finally', 'WesternAspen.depth',
        `${prefix}.model.westernAspen.parms.aspenType`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.fine.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.deadFineLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.small.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.deadSmallLoad',
        `${prefix}.model.westernAspen.parms.aspenType`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.deadFineSavr',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.herb.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.liveHerbLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.stem.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.liveStemLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'WesternAspen.liveStemSavr',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]]
    // end `${prefix}.model.westernAspen.derived`
  ]
}
