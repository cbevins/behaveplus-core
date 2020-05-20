function uomParse (uomStr, parts) {
  const uomArray = uomStr.split('/')
  if (uomArray.length !== parts) {
    throw new Error(`Expected a 2-dimensional Uom name, but got '${uomStr}'`)
  }
  return uomArray
}

// Helper function that converts a 2-dimensional base amount into some other units-of-measure
export function baseAsUom2 (baseAmount, asUom, numType, denType) {
  const uom = uomParse(asUom, 2)
  const factor = numType.fromBaseInto[uom[0]] / denType.fromBaseInto[uom[1]]
  return baseAmount * factor
}

// Helper function that converts a 2-dimensional units-of-measure into the base amount
export function baseFromUom2 (fromAmount, asUom, numType, denType) {
  const uom = uomParse(asUom, 2)
  const factor =
    1 / (numType.fromBaseInto[uom[0]] / denType.fromBaseInto[uom[1]])
  return fromAmount * factor
}

// Helper function that converts a 3-dimensional base amount into some other units-of-measure
export function baseAsUom3 (baseAmount, asUom, numType, den1Type, den2Type) {
  const uom = uomParse(asUom, 3)
  const factor =
    numType.fromBaseInto[uom[0]] /
    den1Type.fromBaseInto[uom[1]] /
    den2Type.fromBaseInto[uom[2]]
  return baseAmount * factor
}

// Helper function that converts a 3-dimensional units-of-measure into the base unbits-of-measure
export function baseFromUom3 (baseAmount, asUom, numType, den1Type, den2Type) {
  const uom = uomParse(asUom, 3)
  const factor =
    1 /
    (numType.fromBaseInto[uom[0]] /
      den1Type.fromBaseInto[uom[1]] /
      den2Type.fromBaseInto[uom[2]])
  return baseAmount * factor
}
