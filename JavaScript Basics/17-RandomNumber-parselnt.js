console.log(Math.random());
console.log(Math.floor(Math.random() * 20));

function randomRange(min, max) {
  return Math.floor(Math.random() * (min - max + 1)) + min;
}

console.log(randomRange(1, 9));

parseInt('007'); // 7
parseInt('t005'); // NaN
parseInt('11', 2); // 3
