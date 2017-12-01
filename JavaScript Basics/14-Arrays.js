let sandwich = ['peanut butter', 'jelly', 'bread'];
let teams = [['Bulls', 23], ['White Sox', 45]];
console.log(sandwich[1]); // 'jelly'
sandwich[1] = 'bananas';
console.log(sandwich[1]);
console.log(teams[1][0]); // 'White Sox'

sandwich.forEach((element) => {
  console.log(element);
});
