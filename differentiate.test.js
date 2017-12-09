const {test} = require('tape')
const {parseEq, differentiateAndEval, splitEq, splitExp, splitCoe, handleMinus, calcDerivative, reduceTerms, differentiateToArrays, calcPolyElem, solve, substituteX, renderEquation} = require('./differentiate')

test('parseEq', assert => {
  assert.deepEqual(parseEq('3x+2'), [['3', 'x'], ['2', '']], '3x+2')
  assert.deepEqual(parseEq('x^2+2x+4'), [['', 'x', '2'], ['2', 'x'], ['4', '']], 'x^2+2x+4')
  assert.deepEqual(parseEq('2x^2-4x'), [['2', 'x', '2'], ['-4', 'x']], '2x^2-4x')
  assert.deepEqual(parseEq('-x^2'), [['-1', 'x', '2']], '-x^2')
  assert.end()
})

test('splitCoe', assert => {
  assert.deepEqual(splitCoe('12x'), ['12', 'x'], '12x')
  assert.deepEqual(splitCoe('x'), ['', 'x'], 'x')
  assert.deepEqual(splitCoe('2'), ['2', ''])
  assert.end()
})

test('handleMinus', assert => {
  assert.equal(handleMinus('-x^2'), '-1x^2', '-x^2')
  assert.equal(handleMinus('2x-3'), '2x+-3', '2x-3')
  assert.end()
})

test('splitExp', assert => {
  assert.deepEqual(splitExp('12x'), ['12x'], '12x')
  assert.deepEqual(splitExp('x^2'), ['x', '2'], 'x^2')
  assert.end()
})

test('splitEq', assert => {
  assert.deepEqual(splitEq('12x+2'), ['12x', '2'], '12x+2')
  assert.deepEqual(splitEq('x^2+3x+2'), ['x^2', '3x', '2'], 'x^2+3x+2')
  assert.end()
})

test('calcDerivative', assert => {
  assert.deepEqual(calcDerivative(['', 'x', '2']), [2, 'x', 1], 'x^2')
  assert.deepEqual(calcDerivative(['2', 'x']), [2, 'x', 0], '2x')
  assert.deepEqual(calcDerivative(['12', '']), [0], '12')
  assert.deepEqual(calcDerivative(['-2', 'x', '2']), [-4, 'x', 1], '-2x^2')
  assert.end()
})

test('differentiateToArrays', assert => {
  assert.deepEqual(differentiateToArrays([['2', 'x', '2'], ['3', 'x'], ['4', '']]), [[4, 'x', 1], [3], [0]], '2x^2+3x+4')
  assert.deepEqual(differentiateToArrays([['2', 'x', '2'], ['-4', 'x']]), [[4, 'x', 1], [-4]], '2x^2-4x')
  assert.end()
})

test('calcPolyElem', assert => {
  assert.equal(calcPolyElem(0, [3, 2, 2]), 12, '3(2)^2')
  assert.equal(calcPolyElem(0, [5]), 5, '5 (single-element array)')
  assert.end()
})

test('substituteX', assert => {
  assert.deepEqual(substituteX([[4, 'x', 1], [3], [0]], 2), [[4, 2, 1], [3], [0]], '4x+3, x = 2')
  assert.end()
})

test('solve', assert => {
  assert.equal(solve([[4, 2, 1], [3], [0]]), 11, '4x+3, x = 2')
  assert.end()
})

test('reduceTerms', assert => {
  assert.deepEqual(reduceTerms([2, 'x', 0]), [2], '2x^0')
  assert.deepEqual(reduceTerms([0]), [0], 'Already zero')
  assert.deepEqual(reduceTerms([2, 'x', 1]), [2, 'x', 1], '2x^1')
  assert.end()
})

test('differentiateAndEval', assert => {
  assert.equal(differentiateAndEval('12x+2', 3), 12, '12x+2, 3 => 12')
  assert.equal(differentiateAndEval('x^2+3x+2', 3), 9, 'x^2+3x+2, 3 => 9')
  assert.equal(differentiateAndEval('x^2-3x-1', 5), 7, 'x^2-3x-1')
  assert.equal(differentiateAndEval('-x^2+3x-3', 1234567908), -2469135813, '-x^2+3x-3')
  assert.equal(differentiateAndEval('-7x^5+22x^4-55x^3-94x^2+87x-56', -3), -6045, '-7x^5+22x^4-55x^3-94x^2+87x-56')
  assert.end()
})

test('renderEquation', assert => {
  assert.equal(renderEquation([[4, 'x', 1], [3], [0]]), '4x+3', '4x+3')
  assert.equal(renderEquation([[2, 'x', 2]]), '2x^2', '2x^2')
  assert.end()
})
