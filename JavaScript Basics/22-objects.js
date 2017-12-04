let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustanng';
myCar.color;
console.log(myCar.make, myCar.color); // 'Ford' undefined

myCar['which year'] = 1969;
console.log(myCar['which year']);

function showProps(obj, objName) {
  let result = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}
`;
    }
  }

  return result;
}

console.log(showProps(myCar, 'myCar'));

// creation: object initializer
let myHonda = {
  color: 'red',
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};

// creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let mycar = new Car('Chevy', 'Malibu', 1993);
let anothercar = new Car('Mazda', 'Moata', 1990);
console.log(mycar.model);
mycar.color = 'black';
console.log(mycar.color);

// creation: Object.create
let Animal = {
  type: 'Invertebrates',
  displayType: function () {
    console.log(this.type);
  },
};

let animal1 = Object.create(Animal);
animal1.displayType(); // 'Invertebrates'

let fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // 'Fish'

// Using Objects for Lookups
let alpha = {
  1: 'Z',
  2: 'Y',

  // ...
};
console.log(alpha[2]);

// Remove Object Properties
let dishes = {
  plates: 8,
  cups: 10,
  forks: 28,
  bowls: 13,
};
delete dishes.cups;
console.log(dishes);

// Testing Objects for Properties
console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty(cups));

// Accessing and Modifying Nested Objects

let ourStorage = {
  desk: {
    drawer: 'stpler',
  },
  cabinet: {
    'top drawer': {
      folder1: 'a file',
      folder2: 'secrets',
    },
    'bottom drawer': 'soda',
  },
};
console.log(ourStorage.cabinet['top drawer'].folder2);
