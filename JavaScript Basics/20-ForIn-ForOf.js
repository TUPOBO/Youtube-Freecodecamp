for (variable of iterable) {
  statement;
}

for (var variable in object) {
  statement;
}

let person = {
  fname: 'Beau',
  lname: 'Carnes',
  arms: 2,
};

let arr = [3, 5, 7];
arr.foo = 'hello';

let text = '';
for (let i in person) {
  text += person[i];
  console.log(i); // 'fname''lname''arms'
}

console.log(text); // 'BeauCarnes2'

for (var i in object) {
  console.log(i); // '0''1''2''foo'
}

for (i of iterable) {
  console.log(i); // 3 5 7
}
