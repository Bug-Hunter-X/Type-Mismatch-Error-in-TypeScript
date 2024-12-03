function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)){
    throw new Error("Invalid Input: parameters must be numbers or convertible to numbers");
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)){
    throw new Error("Invalid Input: parameters must be numbers or convertible to numbers");
  }
  return numA - numB;
}

let result1 = add(5, 3); // result1 is a number
let result2 = subtract(10, 5); // result2 is a number

let result3 = addSafe(result1, "5"); //Now this works 
let result4 = subtractSafe(result2, "5"); //Now this works

console.log(result3); //Outputs 10
console.log(result4); //Outputs 0