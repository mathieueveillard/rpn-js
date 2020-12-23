# Reverse Polish Notation

Write a calculator that computes an instruction provided as an array of operators and operands as per the rules of the [reverse polish notation](https://fr.wikipedia.org/wiki/Notation_polonaise_inverse).

Examples:

- `1 2 + 2 *` is the reverse polish notation for `(1 + 2) * 2` and should output `6`
- `2 1 2 + *` is the reverse polish notation for `2 * (1 + 2)` and should output `6`
- `1 2 + -` is the reverse polish notation for `-(1 + 2)` and should output `-3`
