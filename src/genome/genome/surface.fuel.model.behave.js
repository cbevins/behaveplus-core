export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.behave.domain`, [['Variant.FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'behave']
    ]]],
    [`${prefix}.model.behave.parms.cured.herb.fraction`, [['Variant.FuelDeadFraction'], [
      ['when', 'configure.fuel.curedHerbFraction', 'equals', 'estimated', 'Behave.curedHerbFraction',
        'site.moisture.live.herb'
      ],
      ['finally', 'Dag.input']
    ]]],
    [`${prefix}.model.behave.parms.depth`, [['Variant.FuelBedDepth'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDepth',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    [`${prefix}.model.behave.parms.dead.extinction.moistureContent`, [['Variant.FuelMoistureContent'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDeadMext',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.25]
    ]]],
    [`${prefix}.model.behave.parms.total.herb.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.dead.tl1h.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDead1Load',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.dead.tl10h.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDead10Load',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.dead.tl100h.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDead100Load',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.live.stem.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.behave.parms.live.herb.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 1]
    ]]],
    [`${prefix}.model.behave.parms.live.stem.surfaceAreaToVolumeRatio`, [['Variant.FuelSurfaceAreaToVolumeRatio'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 1]
    ]]],
    [`${prefix}.model.behave.parms.dead.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 8000]
    ]]],
    [`${prefix}.model.behave.parms.live.heatOfCombustion`, [['Variant.FuelHeatOfCombustion'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 8000]
    ]]],
    // end `${prefix}.model.behave.parms`
    [`${prefix}.model.behave.derived.dead.herb.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Behave.deadHerbLoad',
        `${prefix}.model.behave.parms.total.herb.ovendryLoad`,
        `${prefix}.model.behave.parms.cured.herb.fraction`
      ]
    ]]],
    [`${prefix}.model.behave.derived.live.herb.ovendryLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Behave.liveHerbLoad',
        `${prefix}.model.behave.parms.total.herb.ovendryLoad`,
        `${prefix}.model.behave.parms.cured.herb.fraction`
      ]
    ]]]
    // end `${prefix}.model.behave.derived`
  ]
}
