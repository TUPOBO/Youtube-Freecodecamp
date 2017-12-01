let original = [true, true, undefined, false, null];

// slice
let copy1 = original.slice(0);

// spread operator
let copy2 = [...original];

// Deep Copying
let deepArray = [['freecodecamp']];
let shallowCopy = deepArray.slice(0);

shallowCopy[0].push('is great');
console.log(deepArray[0], shallowCopy[0]); // ['freecodecamp', 'is great']['freecodecamp', 'is great']

let deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push('is great');
console.log(deepArray[0], deepCopy[0]); // ['freecodecamp']['freecodecamp', 'is great']
