# [Twice Linear](https://www.codewars.com/kata/5672682212c8ecf83e000050)
## Difficulty: 4kyu (~6/10)
## Instructions:

  Consider a sequence `u` defined as follows:
    The number `u(0) = 1` is the first one in `u`.
    For each `x` in `u`, then `y = 2 * x + 1` and `z = 3 * x + 1` must be in `u` too.
    There are no other numbers in `u`.

 Example:
    `u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]`
    1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

### Task:
  Given parameter `n` the function `dbl_linear` (or `dblLinear`...) returns the element `u(n)` of the ordered, unique sequence `u`.
  - Ordered smallest to largest (<)

### Example:
  dbl_linear(10) should return 22

### Notes:
  Focus attention on efficiency

## TAGS: [ALGORITHMS NUMBERS MATHEMATICS]
