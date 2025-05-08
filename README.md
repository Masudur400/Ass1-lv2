# What is the use of the keyof keyword in TypeScript? Provide an example.
- The keyof keyword in TypeScript is used to extract the keys of an object type as a union of string literal types. It is commonly used in generic programming to create type-safe property access and mappings.

# Explain the difference between any, unknown, and never types in TypeScript.

- any: The any type disables type checking. A variable of type any can be assigned any value, and you can perform any operation on it without compile-time errors. It's flexible but dangerous because it removes all type safety. 
- unknown: The unknown type is similar to any in that it can accept any value, but it’s safer because you can’t use it directly without first performing a type check. This encourages safe coding practices. 
- never: The never type represents values that never occur. It's commonly used for functions that never return, or in exhaustive checks where a value is expected to be impossible.