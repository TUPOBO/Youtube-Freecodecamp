// condition ? expr1 : expr2

let age = 19;
if (age >= 18) {
  console.log('You are an adult!');
} else if (age <= 18) {
  console.log('You are kid!');
}

console.log((age >= 18) ? 'You are an adult!' : 'You are a kid.');

let step;
age > 18 ? (
    console.log('OK, you can go.'),
    stop = false
) : (
    console.log('Sorry, you are much too young!'),
    stop = true
);

var firstCheck = false;
var secondCheck = false;
var access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';
console.log(access);
