type Operator = "+" | "-" | "*" | "/";

type Operand = number;

type Instructions = (Operator | Operand)[];

export function rpn(o: Instructions): number {
  const [result] = internal([...o].reverse());
  return result;
}

function internal([i, ...r1]: Instructions): [Operand, Instructions] {
  if (isOperand(i)) {
    return [i, r1];
  }

  const [b, r2] = internal(r1);
  if (isUnaryMinusOperation(i, r2)) {
    return [-b, []];
  }

  const [a, r3] = internal(r2);
  switch (i) {
    case "+":
      return [a + b, r3];
    case "-":
      return [a - b, r3];
    case "*":
      return [a * b, r3];
    case "/":
      return [a / b, r3];
  }
}

function isOperand(instruction: Operator | Operand): instruction is Operand {
  return !isNaN(instruction as Operand);
}

function isUnaryMinusOperation(operator: Operator, rest: Instructions): boolean {
  return operator === "-" && rest.length === 0;
}
