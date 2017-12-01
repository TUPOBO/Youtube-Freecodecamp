function square(number) {
  return number * number;
}

console.log(square(4)); // 16

// global scope
const someVar = 'hat';
function myFun() {
  console.log(someVar); // 'hat'
}

myFun();

// local scope
let someVar2 = 'hat';
function myFun2() {
  let someVar2 = 'ha';
  console.log(someVar2); // 'ha'
}

myFun2();
console.log(someVar2); // 'hat'

// nesting functions
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

a = addSquares(2, 3); // 13
b = addSquares(3, 4); // 25
c = addSquares(4, 5); // 41
