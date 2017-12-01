// AND: && OR: ||
if (num > 5) {
  if (num < 10) {
    cosole.log('Unicycle!');
  }
}

if (num > 5 && num < 10) {
  console.log('Unicycle!');
}

//Short-circuit Evaluation

let test = true;
let isTure = function () {
  console.log('Test is ture.');
};

let isFalse = function () {
  console.log('Test is false.');
};

if (test) {
  isTure();
}

(test && isTrue());

test = false;
if (!test) {
  isFalse();
}

(test || isFalse());

function theSameOldFoo(name) {
  name = name || 'Bar';
  console.log('My best friend\'s name is ' +  name);
}

theSameOldFoo(); // 'My best friend's name is Bar;
theSameOldFoo('Beau'); // 'My best friend's name is Beau.'
