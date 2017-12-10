# diffeq

Library to differentiate string representations of equations.

I originally started writing this to solve [a Codewars
kata](https://www.codewars.com/kata/566584e3309db1b17d000027), but I wanted to
keep fleshing it out because the problem intrigued me.

# Important Functions

## `differentiate(equation)`

Function takes a string representation of a simple function, differentiates,
and returns the result as a string.

All strings are assumed to be an expression set equal to `y`.

`^` is used to represent exponents. For example, `'2x^2'` represents 2x
squared.

## `differentiateAndEval(equation, value)`

Function takes a string representation of a simple function, differentiates,
and returns an evaluation of numeric value of `y` based on the given value for
`x`.

All strings are assumed to be an expression set equal to `y`.

`^` is used to represent exponents. For example, `'2x^2'` represents 2x
squared.

# Contribution

Pull requests are always welcome. Code will only be accepted with appropriate
unit tests.
