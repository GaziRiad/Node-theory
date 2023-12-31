// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");
const myCalculator1 = new Calculator();
console.log(myCalculator1.multiply(6, 4));

// exports
// const myCalculator2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(add(2, 3));
console.log(multiply(2, 3));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
