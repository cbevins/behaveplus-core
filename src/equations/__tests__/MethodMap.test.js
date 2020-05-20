import { MethodMap } from '../index.js'

test('MethodMap', () => {
  // console.log(MethodMap)
  expect(MethodMap instanceof Map).toEqual(true)
  expect(MethodMap.has('Dag.bind')).toEqual(true)
})
