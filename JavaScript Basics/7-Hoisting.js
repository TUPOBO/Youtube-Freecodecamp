console.log(definedLater); // undefined
var definedLater;
definedLater = 'I am defined!';
console.log(definedLater); // 'I am defined!'

console.log(definedSimulateneously); // undefined
var definedSimulateneously = 'I am defined!';
console.log(definedSimulateneously); // 'I am defined!'

doSomethingElse(); // 'I did it!'
function doSomethingElse() {
  console.log('I did it!');
}

functionVar(); // undefined
var functionVar = function () {
  console.log('I did it!');
};
