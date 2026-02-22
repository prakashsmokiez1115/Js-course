// ===================================================
// 🔰 PART 1: JavaScript Strings & Template Literals
// ===================================================
// Description:
// Strings are used to store text.
// JavaScript provides two main ways to combine strings:
// 1️⃣ Using + (Concatenation)
// 2️⃣ Using Template Literals (Modern & Recommended)


// ===================================================
// 1️⃣ PART 2: String Concatenation (Using +)
// ===================================================
// Description:
// Concatenation means joining multiple strings together
// using the + operator.

let str = "Hello";
let str1 = "John";

// Joining strings (No space)
let output = str + str1;
console.log(output); // HelloJohn

// Adding space and extra text manually
console.log(str + " " + str1 + " Welcome to Our Website");

// 👉 Notice:
// We must manually add spaces using " "
// Otherwise words will stick together.



// ===================================================
// 2️⃣ PART 3: Template Strings / Template Literals (` `)
// ===================================================
// Description:
// Template literals use backticks (` `).
// They are modern, cleaner, and more powerful.

let newStr = `JavaScript`;

// 👉 Backticks are NOT single quotes.
// They are located below the ESC key on keyboard.



// ===================================================
// 3️⃣ PART 4: String Interpolation
// ===================================================
// Description:
// String interpolation allows inserting variables
// directly inside a string using ${ }.

let newStr1 = `${newStr} is a Scripting Language`;
console.log(newStr1);

// 👉 ${variableName} works ONLY inside backticks.



// ===================================================
// 4️⃣ PART 5: Real Example (Without Template Literal)
// ===================================================

let num = 5;
let first = 1;

console.log(num + "*" + first + "=" + (num * first));
// Output: 5*1=5

// ❌ Hard to read
// ❌ Too many + operators
// ❌ Confusing in complex expressions



// ===================================================
// 5️⃣ PART 6: Same Example (With Template Literal - BEST WAY)
// ===================================================

console.log(`${num}*${first}=${num * first}`);
// Output: 5*1=5

// ✅ Clean
// ✅ Easy to read
// ✅ Less error-prone




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 String Concatenation
// Using + to join strings:

// Example:
// "Hello" + "World"


// 🔹 Template Literals (Modern & Recommended ✅)
// ➡️ Uses backticks → `
// ➡️ Allows variables inside strings
// ➡️ Cleaner & more readable

// Example:
// `Hello ${name}`




// ===================================================
// 🔥 PART 8: Interview Comparison
// ===================================================

// ❌ Old Way (Confusing)
// num + "*" + first + "=" + (num * first)


// ✅ New Way (Clean)
// `${num}*${first}=${num * first}`




// ===================================================
// ⚠️ PART 9: Important Notes
// ===================================================

// ➡️ ${} works ONLY inside backticks (` `)
// ➡️ Template literals support:

// ✔ Variables
// ✔ Expressions (like num * first)
// ✔ Multi-line strings:

// Example:
let message = `
Welcome
to
JavaScript
`;


// ===================================================
// 🚀 PRO TIP (Professional Coding Habit)
// ===================================================
// 🔥 Always prefer template literals in modern JavaScript
// 🔥 Use ${} for dynamic values
// 🔥 Avoid complex + concatenation
// 🔥 Template literals are heavily used in React & Node.js
// 🔥 Clean string formatting improves readability