////////////////////////Array.prototype...////////////////////////////
// var myObject = {
//   name: "HKhansh",
//   phone: "0382344159",
//   mail: "khanh201011@gmail.com",
// };
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// /////////////////////////////////////////////////////////////// reduce by me
// Array.prototype.reduce2 = function (callback, result) {
//   let len = this.length;
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < len; i++) {
//     result = callback(result, this[i]);
//   }
//   return result;
// };

// console.log(
//   myArray.reduce2((accumulator, current) => {
//     return (accumulator += current);
//   })
// );
// for (const key in myObject) {
//   console.log(key);
// }
// // for (const value of Object.values(myObject)) {
// //   console.log(value);
// // }
// // var keyArray = Object.keys(myObject);
// // console.log(Object.keys(myObject));
// // console.log(Object.values(myObject));
// // console.log(keyArray[1]);
// // for (const key in myArray) {
// //   console.log(key);
// // }
// // for (const value of myArray) {
// //   console.log(value);
// // }
// // const a = Object.values(myArray);
// // var b = a.some(function (course, index) {
// //   return a[index].vnd === 0;
// // });
// // console.log(b);
// // for (const a of myArray) {
// //   console.log(a);
// // }
// // myArray.forEach((a) => {
// //   console.log(a);
// //   console.log(a.vnd);
// //   // a.some((b) => {
// //   //   return b.vnd === 0;
// //   // });
// // });
// // function getRequestBodyFromValues(formValues) {
// //   const obj = {};
// //   for (let x of formValues) {
// //     obj[x.field] = x.value;
// //   }
// //   return obj;
// // }

// // myArray.forEach(function (value) {
// //   let valueArrayOfObject = Object.values(value);
// //   console.log(valueArrayOfObject);
// //   obj[valueArrayOfObject[0]] = `${valueArrayOfObject[1]}`;

// //   return obj;
// // });
// // console.log(obj);
// // myArray.forEach((string) => {
// //   if (string.startsWith("PHP")) return string;
// //   return [];
// // });

// var inputs = [1, 2, 3];

// console.log("callback Array.some()");
// Array.prototype.some2 = function (callback) {
//   var arrayLength = this.length;
//   var newArray = [];
//   for (var i = 0; i < arrayLength; i++) {
//     if (callback(this[i])) {
//       newArray.push(this[i]);
//     }
//   }
//   var result = newArray.length === 0 ? false : true;
//   return result;
// };

// var someResult = inputs.some2(function (input) {
//   return input > 2;
// });
// console.log(someResult);

// console.log("callback Array.every()");
// Array.prototype.every2 = function (callback) {
//   var arrayLength = this.length;
//   var newArray = [];
//   for (var i = 0; i < arrayLength; i++) {
//     if (callback(this[i])) {
//       newArray.push(this[i]);
//     }
//   }
//   var result = newArray.length === arrayLength ? true : false;
//   return result;
// };

// var everyResult = inputs.every2(function (input) {
//   return input > 1;
// });
// console.log(everyResult);
// Array.prototype.find2 = function (calback) {
//   for (let i = 0; i < this.length; i++) {
//     if (calback(this[i], i)) {
//       return this[i];
//     } else {
//       return undefined;
//     }
//   }
// };
// let a = inputs.find2((item) => {
//   return item == 1;
// });

// console.log(a);
// Array.prototype.forEach2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i);
//   }
// };
// inputs.forEach2((item) => {
//   console.log(item);
// });
// console.log(inputs);

////////////////////////////////Hoisting////////////////////////////
// declare();
// expressFunction(); //khong the goi express function va arrow function khi chua khai bao function.
// var expressFunction = function () {
//   console.log("express function");
// };

// function declare() {
//   console.log("declare function");
// }
// declare();
// expressFunction();

////////////////////////Promise////////////////////////////////
// var users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     userId: 1,
//     content: "Content written by User id 1",
//   },
//   {
//     id: 2,
//     userId: 2,
//     content: "Content written by User id 2",
//   },
//   {
//     id: 3,
//     userId: 1,
//     content: "Content written by User id 1",
//   },
// ];
// var getUsersByIds = function (ids) {
//   return new Promise(function (resolve) {
//     let newUsers = users.filter((user) => ids.includes(user.id));
//     setTimeout(() => {
//       return resolve(newUsers);
//     }, 2000);
//   });
// };

// var getComments = function () {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       return resolve(comments);
//     }, 3000);
//   });
// };

// getComments()
//   .then((comments) => {
//     let commentIds = comments.map((comment) => comment.id);
//     return getUsersByIds(commentIds);
//   })
//   .then((users) => {
//     return {
//       users: users,
//       comments: comments,
//     };
//   })
//   .then((data) => {
//     let commentBlock = document.querySelector("#comment-block");
//     let html = "";
//     data.comments.forEach((comment) => {
//       //lặp qua mỗi comment
//       let user = data.users.find((user) => user.id === comment.userId); //tìm user ứng với comment đó
//       html += `<li> ${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
//   });
////////////////////////Destructuring////////////////////////////////
// const user = {
//   name: "HKhansh",
//   age: 19,
//   sex: "male",
// };
// // Thay vì viết dài dòng như thế này
// // const name = user.name
// // const age = user.age
// // const sex = user.sex
// // Dùng Destructuring làm code ngắn gọn hơn nhiều
// const { name, age, sex, height = "1m8" } = user;

// const list = [
//   1,
//   function (a, b) {
//     return a + b;
//   },
// ];
// const [value, func] = list;

// const handle = ({ a, b = 0, c }) => {
//   return a + b + c;
// };
// handle({ a: 1, b: 2, c: 3 });

// ////////////////////////Spread//////////////////////////////
// const user = {
//   name: "Duoc",
//   age: 24,
//   ability: ["coding", "sleeping"],
// };
// console.log((user1 = { ...user.age.toString() }));
// // Thêm thuộc tính ability vào userPlus
// // Nếu user đã có ability thì nó sẽ bị ghi đè
// const userPlus = { ...user, ability: ["sing"] }; // {name: "Duoc", age: 24, ability: ['sing']}

// // shallow copy
// const cloneUser = { ...user };
// // Object.assign(document.querySelector('div').style, {
// //   backgroundColor: '#F05123',
// //   fontSize: '2rem'
// // });
// // console.log(Object.assign({}, user));
// // console.log(cloneUser);
// //merge obj...
// const a = {
//   person: [{ id: "123" }, { id: "234" }, { id: "345" }],
// };
// const b = { ...a.person[2] }; //shallow
// const c = a.person[2];
// console.log(typeof b);
// console.log(typeof c);
// // merge array
// const list1 = [1, 2, 3, 4];
// const list2 = [5, 6, 7, 8];
// const list3 = [...list1, ...list2];
// // shallow copy array
// const cloneList1 = [...list1];
// // shallow copy và add 1 phần từ vào cuối
// const list4 = [...list1, 5];
// // shallow copy và add 1 phần tử vào đầu
// const list5 = [0, ...list1];
//////////////////////////////////////////////Rest//////////////////////////////////
// let sum = (...args) => {
//   // ==============================> vi arrow function k the bind arguments va this nen phai dung rest...<==============================
//   return Array.from(args).reduce(
//     (accumulator, current) => (accumulator += current)
//   );
// };
// // console.log(sum(1, 2, 3));
// const handle = (a, b, ...c) => {
//   return c;
// };
// console.log(handle(1, 2, 3, 4, 5, 6)); //[3, 4, 5, 6]
// let handle2 = function (arguments) {
//   // express, declare function bind this, arguments
//   Array.from(arguments).forEach((arg) => console.log(arg));
// };
// handle2([1, 2, 3]);
//////////////////////////////////////////////Tagged template literals////////////////////////////////
// function highLight([first, ...strings], ...values) {
//   console.log(first);
//   console.log(...strings);
//   console.log(values);
//   return values.reduce(
//     (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//     [first]
//   );
// }
// // acc.concat(curr, strings.shift()), [first]`
// const brand = "F8";
// const course = "JavaScript";
// let htmls = highLight`Hoc lap trinh ${course} tai ${brand} !`;
// console.log(htmls.join(""));
////////////////////////////////regex.test()////////////////////////////////
// const regex = new RegExp("foo", "g");
// console.log(regex.lastIndex);
// console.log(regex.test("foobar"));
// console.log(regex.lastIndex);
// console.log(regex.test("foobarfoobarfoobar"));
// console.log(regex.lastIndex);
////////custom function to implement deep clone///////////////////////////
// const deepCopyFunction = (inputObject) => {
//   let outputObject, value, key;

//   if (typeof inputObject !== "object" || inputObject === null) {
//     return inputObject; // Return the value if inputObject is not an object //ayush
//   }

//   // Create an array or object to hold the values
//   outputObject = Array.isArray(inputObject) ? [] : {};
//   for (key in inputObject) {
//     console.log(key, inputObject[key]);
//     value = inputObject[key]; //Ayush
//     // Recursively (deep) copy for nested objects, including arrays
//     outputObject[key] = deepCopyFunction(value);
//   }

//   return outputObject;
// };

// let originalArray = { name: "Ayush", age: 27 };
// let deepCopyArray = deepCopyFunction(originalArray);
// // originalArray[1] = 15;
// // originalArray.name = "Verma";
// // console.log({ originalArray });
// console.log({ deepCopyArray });
//
// var x = 0;
// function DelayPrint(x, timeout) {
//   this.x = x;
//   console.log(this);
//   setTimeout(function print() {
//     console.log(`%c ${this} in print sto`, "color: red");
//     console.log(`The value is ${this.x}`);
//   }, timeout);
// }
// let p = new DelayPrint(1, 1000);// 0

// var x = 0;
// function DelayPrint1(x, timeout) {
//   this.x = x;
//   console.log(this);
//   setTimeout(
//     (print = () => {
//       console.log(`%c ${this} in print sto`, "color: red");
//       console.log(`The value in arrow function is ${this.x}`);
//     }),
//     timeout
//   );
// }
// let p1 = new DelayPrint1(1, 1000); //1

////////////Pipe line operator (not support yet)
// const splitBySpace = (str) => str.split(" ");
// const reverseArray = (arr) => arr.reduce((acc, cur) => [cur, ...acc], []);
// const joinWithSpace = (arr) => arr.join(" ");
// // const reverseWords = (str) => joinWithSpace(reverseArray(splitBySpace(str)));

// // console.log(reverseWords("this is fun")); //
// const reverseWords = (str) =>
//   str |> splitBySpace |> reverseArray |> joinWithSpace;

// console.log(reverseWords("this is fun"));
// const state = {
//   ingredients: {
//     salad: 2,
//     meat: 3,
//     bacon: 1,
//   },
// };
// const tranformedIngredients = Object.keys(state.ingredients)
//   .map((igKey) => {
//     return [...Array(state.ingredients[igKey])].map(
//       (_, i) => `<BugerIngredient ${i}`
//     );
//   })
//   .reduce((acc, val) => acc.concat(val), []);

// console.log(tranformedIngredients);
// const arr = [
//   [1, 2, 3],
//   [4, 5],
//   [7, 8, 9],
// ];

// const arr1 = arr.map((_, a) => {
//   return _.map((__, i) => );
// });
// // .reduce((acc, val) => acc.concat(val), []);

// console.log(arr1);

// function isPrime(element, index, array) {
//   var start = 2;
//   let sqrtEl = Math.sqrt(element);
//   while (start <= sqrtEl) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 7, 12].findIndex(isPrime));

///////////////// spread operator vs rest parameter
// const add = function (...numbers) { //rest parameter
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
// };

// add(2, 3);
// add(2, 3, 4, 5, 6);
// const x = [2, 3, 4, 5];
// add(...x); spread operator
//////coding challenge 2 - bonus

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }
// const result = game.scored.reduce((acc, val) => {
//   acc[val] = acc[val] ? ++acc[val] : 1;
//   return acc;
// }, {});
// console.log(result);
// const scorers = {};
// const arr = [];
// const arrLength = game.scored.length;
// let dem = 0;
// for (let i = 0; i < arrLength; i++) {
//   for (let j = i + 1; j < arrLength; j++) {
//     if (game.scored[j] === game.scored[i]) {
//       dem++;
//       game.scored[j] = false;
//     }
//   }
//   arr.push(dem);
//   dem = 0;
//   game.scored = game.scored.filter((scores) => scores);
// }
// for (const [i, scorer] of game.scored.entries()) {
//   scorers[scorer] = arr[i] + 1;
// }
// //                      So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// //FUCKING WOW SHIT? 💩💩💩
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
//                                                    String coding challenge 4
//underscore_case
//first_name
//Some_Variable
// const underscoreToCamel = (string) => {
//   const strLowerFirst = string.toLowerCase().split("_")[0];
//   const capitalizeStr = string.toLowerCase().split("_");
//   const finalStr = [strLowerFirst];
//   for (const [i, str] of capitalizeStr.entries()) {
//     if (i >= 1) finalStr.push(str.replace(str[0], str[0].toUpperCase()));
//   }
//   console.log(finalStr.join(""));
//   // .join(" ");
//   // console.log(strLowerFirst);
//   // console.log(capitalizeStr);
// };
// underscoreToCamel("underscore_case");
// underscoreToCamel("first_name");
// underscoreToCamel("Some_Variable");
// underscoreToCamel("calculate_AGE");

// const addTax = (rate) => (value) => value + value * rate;

// const addVat = addTax(0.23);
// console.log(addVat(100));
//// / / / / / // / / / / ///// / / / / / // / / / / ///// / / / / / // / / / / / / // / / / / / / // / / / / / / // / /  FLATTEN ARRAY
// const nestedArr = [1, 2, [3, 4, [5, 6]], 7, 8];
// const flattenArr = nestedArr.flat(1);
// // console.log(flattenArr);
// function* flatten(arr, depth = 1) {
//   for (const item of arr) {
//     if (Array.isArray(item) && depth) {
//       yield* flatten(item, depth - 1);
//     } else {
//       yield item;
//     }
//   }
// }

// const generator = flatten(nestedArr, Infinity);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//////////////////////////////Internationalization////////////////////////////////////////

/////OOP////
// const Person = (function () {
//   function staticMethod() {}

//   function constructor() {
//     staticMethod();
//   }
//   return Object.assign(constructor, { staticMethod });
// })();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // // Linking prototypes
// const hi = new Student("Khanh", "2001", "CSE");
// console.log(hi);
// Student.prototype = Object.create(Person.prototype);
// const a = new Person("hi", 20);
// // console.log(a.__proto__ === Person.prototype);
// // console.log(a.__proto__.__proto__ === Object.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");

// // mike.introduce();
// // // mike.calcAge();

// // console.log(mike.__proto__);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(Student.prototype);
//////////////////// / / / / ///// / / / / // / / / // / // / / / /   / // / /// / / / / /  // / / / //   / / // / /
// class Account {
//   // 1) Public fields (instances)
//   // locale = navigator.language;

//   // 2) Private fields (instances)
//   // #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.locale = navigator.language;
//     this.movements = [];

//     // Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods

//   // Public interface
//   getMovements() {
//     return this.movements;
//   }

//   deposit(val) {
//     this.movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     // return this;
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       console.log(this);
//       // return this;
//     }
//   }

//   // static helper() {
//   //   console.log("Helper");
//   // }

//   // // 4) Private methods
//   // // #approveLoan(val) {
// }

// const acc1 = new Account("Jonas", "EUR", 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// // acc1.approveLoan(1000);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.movements);

// const x = {};
// const y = { key: "y" };
// const z = { key: "z" };
// x[y] = 123;
// x[z] = 456;
// console.log(x[y]);

const a = [17, 28, 30];
const b = [99, 16, 8];
const result = function (a, b) {
  return a.reduce((a, c, i) => (c > b[i] ? a.push(1) : a.push(0)), []);
};

console.log(result(a, b));
