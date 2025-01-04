function foo(a, b) {
  if (a < 0 || b < 0) {
    return NaN; //Handle invalid inputs
  }
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return foo(a - 1, b - 1);
}
console.log(foo(5, 2)); //This will output 3
console.log(foo(-5,2)); //This will output NaN
console.log(foo(5,-2)); //This will output NaN