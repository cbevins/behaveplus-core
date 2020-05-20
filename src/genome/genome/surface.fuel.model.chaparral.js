export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.chaparral.domain`, [['Variant.FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'chaparral']
    ]]],
    [`${prefix}.model.chaparral.parms.chaparralType`, [['Variant.ChaparralTypeOption'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralFuelType',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 'chamise']
    ]]],
    [`${prefix}.model.chaparral.parms.observed.deadFuelFraction`, [['Variant.FuelDeadFraction'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.chaparral.parms.observed.depth`, [['Variant.FuelBedDepth'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralDepth',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    [`${prefix}.model.chaparral.parms.observed.totalLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog',
        'FuelCatalog.chaparralTotalLoad',
        `${prefix}.model.catalogKey`],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.chaparral.parms.applied.totalLoad`, [['Variant.FuelOvendryLoad'], [
      ['when', 'configure.fuel.chaparralTotalLoad', 'equals', 'estimated',
        'Dag.bind', `${prefix}.model.chaparral.derived.totalLoad`],
      ['finally', 'Dag.bind', `${prefix}.model.chaparral.parms.observed.totalLoad`]
    ]]],
    // end `${prefix}.model.chaparral.parms`
    [`${prefix}.model.chaparral.derived.age`, [['Variant.FuelAge'], [
      ['finally', 'Chaparral.age',
        `${prefix}.model.chaparral.parms.observed.depth`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.averageMortality`, [['Variant.MortalityFraction'], [
      ['finally', 'Chaparral.deadFractionAverageMortality',
        `${prefix}.model.chaparral.derived.age`]
    ]]],
    [`${prefix}.model.chaparral.derived.severeMortality`, [['Variant.MortalityFraction'], [
      ['finally', 'Chaparral.deadFractionSevereMortality',
        `${prefix}.model.chaparral.derived.age`]
    ]]],
    [`${prefix}.model.chaparral.derived.depth`, [['Variant.FuelBedDepth'], [
      ['finally', 'Chaparral.fuelDepth',
        `${prefix}.model.chaparral.derived.age`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.totalLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.totalLoad',
        `${prefix}.model.chaparral.derived.age`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.deadLoad',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadFineLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.deadClass1Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadSmallLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.deadClass2Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadMediumLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.deadClass3Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadLargeLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.deadClass4Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveLoad',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveFineLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveClass1Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveSmallLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveClass2Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveMediumLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveClass3Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLargeLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveClass4Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLeafLoad`, [['Variant.FuelOvendryLoad'], [
      ['finally', 'Chaparral.liveClass5Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]]
    // end `${prefix}.model.chaparral.derived`
  ]
}
