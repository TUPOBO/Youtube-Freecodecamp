// 20-String-methods
let stringOne = 'freecodecamp is a good place to learn';
let stringTwo = 'frontend and backend development';

/*
   charAt(): 从字符串中返回指定的字符;
  str.charAt(index), index: 0 ~ (length - 1), 索引值默认为0；
  索引方向：左 -> 右; 超出索引范围，则返回一个空字符串
*/
console.log(stringOne.charAt(1)); // 'r'

/*
  charCodeAt(): 返回值索引处字符的 UTF-16 代码单元值的数字
  str.charCodeAt(index), index: 0 ~ (length - 1), 默认值为0
  超出索引范围，返回NaN
*/
console.log(stringOne.charCodeAt(1)); // 114

/*
  concat(): 等价于 +
  尽量使用+，有助于提高性能
*/
console.log(stringOne.concat(stringTwo));

/*
  endsWith(): 判断当前字符串是否以给定的字符串作为结尾
  str.endsWith(searchString [, position]), searchString: 想搜索的子字符串，position：搜索结束的位置，默认值为：str.length
*/
console.log(stringOne.endsWith('learn'));

/*
  fromCharCode(): String的静态方法，返回使用指定的Unicode值序列创建的字符串
  String.fromCharCode(num1, ..., numN), num1, ..., numN: 一组表示Unicode值得序列数字
  返回的是字符串，而不是String对象，不能作为你创建的String对象的方法
*/
console.log(String.fromCharCode(114));

/*
  includes(): 判断当前字符串是否包含在里一个字符串中
  str.includes(searchString[, position]), searchString: 想搜索的字符串， position: 索引开始的位置，默认值为0
*/
console.log(stringTwo.includes('end')); // true

/*
  indexOf(): 返回搜索的子字符串在当前字符串中的第一次出现的索引值
  str.indexOf(searchValue[, fromIndex]), searchValue: 需要查找的值， fromIndex： 开始查找的位置，默认值为0
    若fromIndex < 0, 则检索整个字符串；若fromIndex >= String.length, 则返回-1；若查找的为空字符串，则返回String.length
*/
console.log(stringTwo.indexOf('end'));// 5

/*
  lastIndexOf()
*/
console.log(stringTwo.lastIndexOf('end')); // 17

/*
  match()
*/
console.log(stringTwo.match(/end/g)); // ['end', 'end']

/*
  repeat()
*/
console.log(stringOne.repeat(3));

/*
  replace()
*/
console.log(stringTwo.replace(/end/g, 'END'));

/*
  search()
*/
console.log(stringTwo.search('end')); // 5

/*
  slice()
*/
console.log(stringTwo.slice(2, 4)); // 'on'

/*
  split()
*/
console.log(stringOne.split(' '));

/*
  startWith()
*/
console.log(stringOne.startsWith('free'));

/*
  substr()
*/
console.log(stringTwo.substr(2, 4));

/*
  substring()
*/
console.log(stringTwo.substring(2, 4));

/*
  toLowerCase()
*/
console.log(stringOne.toLowerCase());

/*
  toUpperCase()
*/
console.log(stringOne.toUpperCase());

/*
  trim()
*/
console.log('   dfdasf   '.trim());
