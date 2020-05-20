export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.palmettoGallberry.domain`, [['Variant.FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'palmettoGallberry']
    ]]],
    [`${prefix}.model.palmettoGallberry.parms.age`, [['Variant.FuelAge'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylAge',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'palmettoGallberry', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.palmettoGallberry.parms.basalArea`, [['Variant.FuelBasalArea'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylBasalArea',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'palmettoGallberry', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.palmettoGallberry.parms.cover`, [['Variant.FuelCoverFraction'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylCover',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'palmettoGallberry', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.palmettoGallberry.parms.height`, [['Variant.FuelBedDepth'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.palmettoGallberrylHeight',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'palmettoGallberry', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    // end `${prefix}.model.palmettoGallberry.parms`
    [`${prefix}.model.palmettoGallberry.derived.depth`, [['Variant.FuelBedDepth'], [
      ['finally', 'PalmettoGallberry.fuelDepth',
        `${prefix}.model.palmettoGallberry.parms.height`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.deadFineLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.deadFineLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.height`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.deadSmallLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.deadSmallLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.cover`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.deadFoliageLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.deadFoliageLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.cover`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.deadLitterLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.deadLitterLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.basalArea`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.liveFineLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.liveFineLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.height`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.liveSmallLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.liveSmallLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.height`
      ]
    ]]],
    [`${prefix}.model.palmettoGallberry.derived.liveFoliageLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'PalmettoGallberry.liveFoliageLoad',
        `${prefix}.model.palmettoGallberry.parms.age`,
        `${prefix}.model.palmettoGallberry.parms.cover`,
        `${prefix}.model.palmettoGallberry.parms.height`
      ]
    ]]]
    // end `${prefix}.model.palmettoGallberry.derived`
  ]
}
