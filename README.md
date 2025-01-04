# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The `foo` function recursively calls itself until the base case (`a` or `b` equals 0) is reached. However, if the initial input values (`a` and `b`) are not such that the base case will be reached in a reasonable number of recursive calls, the function will exceed the JavaScript call stack limit, resulting in a stack overflow error.

## Bug Description
The bug is caused by the recursive function's lack of appropriate base case handling which causes infinite recursion and leads to a stack overflow error.

## Bug Solution
The solution adds a check to ensure both a and b are non-negative to prevent the stack overflow. Additional error handling is added to make the function more robust.