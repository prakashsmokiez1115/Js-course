// =======================================
// 🔑 PART 1: JavaScript Keywords
// =======================================
// Description:
// These are reserved words used to declare variables in JavaScript.
// They control how variables behave (scope & re-assignment).

// let   → Modern way to declare variables (block scoped)
// const → Used when value should NOT change (block scoped)
// var   → Old way (function scoped, avoid in modern JS)



// =======================================
// 📦 PART 2: Variable Declaration
// =======================================
// Description:
// Variable declaration means creating a container to store data.
// Basic Syntax:
// keyword variableName = value;

// Structure Breakdown:
// 1️⃣ keyword       → let / const / var
// 2️⃣ variableName  → Your custom name
// 3️⃣ =             → Assignment operator
// 4️⃣ value         → Data you store

// Example:
// let name = "Prakash";
// Here:
// let   → declaration keyword
// name  → variable
// "Prakash" → string value



// =======================================
// 📝 PART 3: Variable Naming Rules
// =======================================
// Description:
// These rules ensure your variable names are valid and readable.

// ✔ Can contain letters (a-z, A-Z), numbers (0-9), $, _
// ✔ Can start with $ or _
// ❌ Should NOT start with a number (Example: 1name ❌)
// ✔ Should be meaningful (Example: userName ✔, x ❌)

// Naming Conventions:

// camelCase  → myName
// - First word lowercase
// - Next words start with capital letter
// - ✅ Recommended in JavaScript

// PascalCase → MyName
// - Every word starts with capital letter
// - Mostly used for Classes or Constructors



// =======================================
// ✅ PART 4: Practical Examples
// =======================================

// Example 1: camelCase variable
let myName = "Prakash";

// Description:
// - myName follows camelCase convention
// - Stores a string value
// - console.log() prints output to browser console

console.log(myName); // printing statement



// Example 2: PascalCase variable
let MyName = "prakash";

// Description:
// - MyName follows PascalCase convention
// - Technically valid for variables
// - But usually PascalCase is used for classes

console.log(MyName); // printing statement





// =======================================
// 🎯 PART 5: What a Fresher Should Learn From This
// =======================================
// ✔ How to declare variables
// ✔ Understanding let, const, var basics
// ✔ Variable naming rules
// ✔ Difference between camelCase and PascalCase
// ✔ How console.log() works
// ✔ Importance of writing clean & readable code



// =======================================
// 🚀 PRO TIP (For Better Coding Practice)
// =======================================
// 🔥 Always prefer "let" and "const" over "var"
// 🔥 Use camelCase for variables (industry standard)
// 🔥 Use meaningful names (userName > u)
// 🔥 Keep consistent formatting like this — recruiters love clean code
// 🔥 Practice explaining your code like this — it builds strong fundamentals