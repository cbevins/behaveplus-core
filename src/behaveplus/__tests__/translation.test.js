import { BpxDag } from '../BpxDag.js'

const dag = BpxDag()

test('1: Translation test', () => {
  expect(dag.tr('configure.fuel.primary.label', 'en_US')).toEqual(
    'Primary fuels are specified by entering'
  )
  expect(dag.tr('configure.fuel.primary.label', 'en_GB')).toEqual(
    'configure.fuel.primary.label'
  )
  expect(dag.tr('unknown.key', 'en_US')).toEqual('unknown.key')

  expect(dag.tr('configure.fuel.primary.label', 'unknown_lang')).toEqual(
    'configure.fuel.primary.label'
  )
  expect(dag.tr('Unknown Key', 'en_US', 'Some Default String')).toEqual(
    'Some Default String'
  )
})
