function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is a number
let result2 = subtract(10, 5); // result2 is a number

let result3 = add(result1, "5"); // Type 'string' is not assignable to type 'number'.
let result4 = subtract(result2, "5"); // Type 'string' is not assignable to type 'number'.