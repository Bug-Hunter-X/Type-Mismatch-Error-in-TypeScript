# Type Mismatch Bug in TypeScript

This repository demonstrates a common type error in TypeScript where a type mismatch occurs when passing parameters of different types to a function.

## Bug Description

The `add` and `subtract` functions are defined to accept only number parameters. However, the code attempts to pass string values to these functions. This results in a type error because TypeScript's type system enforces type safety.

## Bug Solution

The solution involves type checking before performing the operations or using type assertion.