// Creats a printable listing of Dag Node elements in the passed array
export function arrayList (ar, header) {
  return ar.reduce(
    (acc, my, idx) =>
      `${acc}${idx}: ${my.dag.depth} ${my.node.key} ='${my.value.current}'\n`,
    `${header} (${ar.length}):\n`
  )
}

// Returns a printable listing of Dag.sorted.nodes or Dag.sorted.required
export function batchList (ar, header) {
  return ar.reduce(
    (acc, my, idx) =>
      `${acc}${idx}: ${my.dag.depth} ${my.node.key} [${my.method.key}]\n`,
    `${header} (${ar.length}):\n`
  )
}

const bar = '        : 1.23456789012'

/**
  A Jest matcher specifically for Dag Node value testing

  Use as follows:
  import * as DagJest from '../jest/matchers.js'
  const value = DagJest.value
  expect.extend({ value })
  expect(nodeRef).value(expected, significantDigits)
  expect(dag.get(nodeKey)).value(expected, significantDigits)
*/
export const sig = function (received, expected, precision, msg = '') {
  if (typeof expected === 'number') {
    const exp = expected.toExponential(precision)
    const rec = received.toExponential(precision)
    const pass = exp === rec
    if (pass) {
      return {
        message: () =>
          `${msg} should NOT agree to ${precision} digits:\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `${msg} should agree to ${precision} digits\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: false
      }
    }
  } else {
    const pass = expected === received
    if (pass) {
      return {
        message: () =>
          `${msg} should NOT be equal\nexpected: ${expected}\nreceived: ${received}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `${msg} should be equal\nexpected: ${expected}\nreceived: ${received}\n${bar}`,
        pass: false
      }
    }
  }
}

/**
  A Jest matcher specifically for Dag Node value testing

  Use as follows:
  import * as DagJest from '../jest/matchers.js'
  const value = DagJest.value
  expect.extend({ value })
  expect(nodeRef).value(expected, significantDigits)
  expect(dag.get(nodeKey)).value(expected, significantDigits)
*/
export const value = function (node, expected, prec = 12) {
  const precision = prec === null ? 11 : prec - 1
  if (typeof expected === 'number') {
    const exp = expected.toExponential(precision)
    const rec = node.value.current.toExponential(precision)
    const pass = exp === rec
    if (pass) {
      return {
        message: () =>
          `Node key: '${node.node.key}' should NOT be equal\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `Node key: '${node.node.key}' should be equal\nexpected: ${exp}\nreceived: ${rec}\n${bar}`,
        pass: false
      }
    }
  } else {
    const pass = expected === node.value.current
    if (pass) {
      return {
        message: () =>
          `Node key: '${node.node.key}' should NOT be equal\nexpected: ${expected}\nreceived: ${node.value.current}\n${bar}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `Node key: '${node.node.key}' should be equal\nexpected: ${expected}\nreceived: ${node.value.current}\n${bar}`,
        pass: false
      }
    }
  }
}
