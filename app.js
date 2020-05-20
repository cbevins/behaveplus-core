import * as Variant from 'wildfire-variant'

function testBlob () {
  const blob = new Variant.Blob({ first: 'Collin', last: 'Bevins' })
  console.log(`Blob defaultValue: ${JSON.stringify(blob._specs._defaultValue)}`)
}

function testBool () {
  const bool = new Variant.Bool(false, 'yep', 'nope')
  console.log(`Bool defaultValue: ${bool._specs._defaultValue}`)
  console.log(`Bool trueString: ${bool._specs._trueString}`)
  console.log(`Bool falseString: ${bool._specs._falseString}`)
}

function testCount () {
  const count = new Variant.Count(5, 9)
  console.log(`Count default defaultValue: ${count._specs._defaultValue}`)
  console.log(`Count default minimumValue: ${count._specs._minimumValue}`)
  console.log(`Count default maximumValue: ${count._specs._maximumValue}`)
}

function testConfig () {
  const config = new Variant.Config(['configA', 'configB'])
  console.log(`Config defaultValue: ${config._specs._defaultValue}`)
  console.log(`Config options: ${config._specs._options}`)
}

function testFloat () {
  const float = new Variant.Float()
  console.log(`Float default defaultValue: ${float._specs._defaultValue}`)
  console.log(`Float default minimumValue: ${float._specs._minimumValue}`)
  console.log(`Float default maximumValue: ${float._specs._maximumValue}`)
}

function testInteger () {
  const integer = new Variant.Integer()
  console.log(`Integer default defaultValue: ${integer._specs._defaultValue}`)
  console.log(`Integer default minimumValue: ${integer._specs._minimumValue}`)
  console.log(`Integer default maximumValue: ${integer._specs._maximumValue}`)
}

function testNumeric () {
  const numeric = new Variant.Numeric()
  console.log(`Numeric default defaultValue: ${numeric._specs._defaultValue}`)
  console.log(`Numeric default minimumValue: ${numeric._specs._minimumValue}`)
  console.log(`Numeric default maximumValue: ${numeric._specs._maximumValue}`)
}

function testOption () {
  const option = new Variant.Config(['optionA', 'optionB', 'optionC'], 1)
  console.log(`Option defaultValue: ${option._specs._defaultValue}`)
  console.log(`Option options: ${option._specs._options}`)
}

function testQuantity () {
  const d = new Variant.Quantity(Variant.Distance)
  console.log(`Quantity Distance base: ${d.uomBase()}`)
}

function testText () {
  const text = new Variant.Text()
  console.log(`Text default defaultValue: '${text._specs._defaultValue}'`)
  console.log(`Text default minimumLength: ${text._specs._minimumLength}`)
  console.log(`Text default maximumLength: ${text._specs._maximumLength}`)
}

testBlob()
testBool()
testConfig()
testCount()
testFloat()
testInteger()
testNumeric()
testOption()
testQuantity()
testText()
