// Array iteration:8 methods

// forEach
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index); // 1 0  2 1  3 2
});

// map
const three = [1, 2, 3];
const doubled = three.map((item) => {
  item * 2;
});
console.log(doubled); // [2, 4, 6]

//filter
const ints = [1, 2, 3];
const evens = ints.filter((item) => {
  item % 2 === 0;
});
console.log(evens); // [2]

// reduce
const sum = [1, 2, 3].reduce((result, item) => {
  result + item;
}, 0);
console.log(sum); // 6

// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});

console.log(hasNegativeNumbers); // true

// every
const allPositiveNumbers = [1, 2, 3].every(function (item) {
  return item > 0;
});

console.log(allPositiveNumbers); // true

// find
const objects = [
  {
    id: 'a',
  }, {
    id: 'b',
  }, {
    id: 'c',
  },
];
const found = objects.find((item) => {
  item.id === 'b';
});
console.log(found); // Object { id: 'b' }

// find index
const objects2 = [
  {
    id: 'a',
  }, {
    id: 'b',
  }, {
    id: 'c',
  },
];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === 'b';
});

console.log(foundIndex);
