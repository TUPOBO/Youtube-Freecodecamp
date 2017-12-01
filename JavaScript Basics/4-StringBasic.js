const myName = 'liubo';

// Escape character
let sentence = "He said \"Hi!\""; // He said Hi!
let sentence = 'He said "Hi!"'; // He said Hi!

/*
  Code Output
  \' single quote
  \" double quote
  \\ backslash
  \n newline
  \r carriage return
  \t tab
  \b backspace
  \f form feed
*/

// +
let fullName = 'Liu ' + 'Bo'; // 'LiuBo'
let sentence2 = 'My name is ' + fullName; // 'My name is LiuBo'
fullName += ' is my name.'; // 'LiuBo is my name.'

// Strinig: [bracket notation]
let fullName = 'LiuBo';
console.log(fullName[0]); // 'L'
console.log(fullName[fullName.length - 1]); // 'o'
fullName[0] = 'Q'; // Wrong
fullName = 'HaHa';

// 20-String-Methods
let stringOne = 'freecodecamp is the best place to learn';
let stringTwo = 'frontend and backend development';

//charAt()
