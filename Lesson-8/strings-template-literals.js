// ===================================================
// 🔰 JavaScript Strings & Template Literals
// ===================================================



// ===================================================
// 1️⃣ String Concatenation (Using +)
// ===================================================

let str = "Hello";
let str1 = "John";

// Joining strings
let output = str + str1;
console.log(output); // HelloJohn

// Adding space and more text
console.log(str + " " + str1 + " Welcome to Our Website");



// ===================================================
// 2️⃣ Template Strings / Template Literals (` `)
// ===================================================

// Defined using backticks ( ` ` )
let newStr = `JavaScript`;



// ===================================================
// 3️⃣ String Interpolation
// ===================================================
// Used to embed variables inside strings using ${ }

let newStr1 = `${newStr} is a Scripting Language`;
console.log(newStr1);



// ===================================================
// 4️⃣ Real Example: Without Template Literal
// ===================================================

let num = 5;
let first = 1;

console.log(num + "*" + first + "=" + (num * first));
// Output: 5*1=5



// ===================================================
// 5️⃣ Same Example: With Template Literal (BEST WAY)
// ===================================================

console.log(`${num}*${first}=${num * first}`);
// Output: 5*1=5










































// 🧠 WHAT A FRESHER MUST UNDERSTAND


// 🔹 String Concatenation
// Using + to join strings:

// "Hello" + "World"






// 🔹 Template Literals (Modern & Recommended ✅)
// ➡️Uses backticks → `
// ➡️Allows variables inside strings
// ➡️Cleaner & readable

// `Hello ${name}`









// 🔥 INTERVIEW COMPARISON

// ❌ Old Way (Confusing)
// num + "*" + first + "=" + (num * first)


// ✅ New Way (Clean)
// `${num}*${first}=${num * first}`












// ⚠️ IMPORTANT NOTES

// ➡️${} works only inside backticks

// ➡️Template literals support:

// ➡️Variables
// ➡️Expressions
// ➡️Multi-line strings