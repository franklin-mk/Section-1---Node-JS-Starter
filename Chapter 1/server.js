// 1. Node.JS runs on a server not on a browser (backend not frontend)
// 2. The console is in the terminal not browser
console.log('Hello')
// 3. Global object instead of window object
//console.log(global)
// 4. Has common core modules
// 5. CommonJS modules instead of ES6 MODULES
// 6. missing some Js APIs like fetch

const os = require('os')
const path = require("path")
const {add, subtract, multiply, divide} = require("./math")

console.log(multiply(2, 3))

/* console.log(os.type())
console.log(os.version)
console.log(os.homedir)

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
 */


// Node.JS is a JavaScript runtime environment (not a programming language)
// Node.JS is used for creating server-side applications (not client-side)
// Node.JS is built on Chrome's V8 JavaScript engine (not on Mozilla
// Node.JS is single-threaded (not multi-threaded)