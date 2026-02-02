// ===================================================
// 🔰 JavaScript Type Coercion & Type Conversion
// ===================================================



// ===================================================
// 1️⃣ String + Number (Type Coercion)
// ===================================================

let str = "45";
let num = 100;

console.log(str + num);              // "45100"
console.log(typeof (str + num));     // string



// ===================================================
// 2️⃣ String + Anything = String
// ===================================================

console.log("Hi" + true);        // "Hitrue"
console.log("Hi" + undefined);   // "Hiundefined"
console.log("Hi" + null);        // "Hinull"
console.log("Hi" + [1, 2]);      // "Hi1,2"
console.log("Hi" + {});          // "Hi[object Object]"

// Rule:
// 👉 String + anything = string



// ===================================================
// 3️⃣ Number + Other Types
// ===================================================

// Boolean → true = 1, false = 0
console.log(10 + false);     // 10
console.log(10 + true);      // 11

// Undefined
console.log(10 + undefined); // NaN (Not a Number)

// Null
console.log(10 + null);      // 10  (null → 0)

// Array
console.log(10 + [1, 2]);    // "101,2"
console.log(typeof (10 + [1])); // string

// Object
console.log(10 + {});        // "10[object Object]"

// Empty string
console.log(typeof (10 + "")); // string



// ===================================================
// 4️⃣ Boolean with Other Types
// ===================================================

console.log(true + undefined); // NaN
console.log(true + null);      // 1



// ===================================================
// 5️⃣ Loose Equality (==)
// ===================================================

console.log(10 == "10"); // true (type coercion happens)



// ===================================================
// 6️⃣ Arithmetic with Strings
// ===================================================

console.log(10 - "abc"); // NaN
console.log(10 - "");    // 10  ("" → 0)



// ===================================================
// 7️⃣ Explicit Type Conversion (Manual)
// ===================================================

// -------- Number Conversion --------
console.log(10 + Number("10")); // 20
console.log(Number(""));        // 0
console.log(Number("abc"));     // NaN
console.log(Number(false));     // 0
console.log(Number(undefined));// NaN
console.log(Number([1, 2]));    // NaN
console.log(Number({}));        // NaN



// -------- Boolean Conversion --------
console.log(Boolean(""));       // false
console.log(Boolean("123"));    // true

console.log(Boolean(-10));      // true
console.log(Boolean(0));        // false
console.log(Boolean(undefined));// false
console.log(Boolean(null));     // false
console.log(Boolean([1]));      // true
console.log(Boolean({}));       // true

console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity));// true
console.log(Boolean(NaN));      // false



// -------- String Conversion --------
console.log(String());          // "undefined"



// ===================================================
// 8️⃣ String Comparison
// ===================================================

console.log("bg" > "bb"); // true (lexicographical order)



// ===================================================
// 9️⃣ Global Variable & window Object (Browser Only)
// ===================================================

let a = 10;

// This works ONLY in browser, not Node.js
console.log(window.a); // undefined (because let does NOT attach to window)

































// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 Type Coercion (Automatic)
// JavaScript automatically converts types during operations.

// Examples:

// "10" + 5   // "105"
// 10 - "5"   // 5






// 🔹 Type Conversion (Manual)
// You force conversion using:

// Number()

// String()

// Boolean()







// 🔥 INTERVIEW GOLD RULES (MEMORIZE)

// ✅ String Rules
// string + anything → string

// ✅ Boolean Rules
// true → 1
// false → 0

// ✅ Falsy Values
// false, 0, "", null, undefined, NaN

// Everything else is truthy.



// ⚠️ IMPORTANT INTERVIEW POINT
// 10 == "10"   // true
// 10 === "10"  // false


// 👉 == → compares value
// 👉 === → compares value + type (RECOMMENDED)






// ⚠️ Browser vs Node.js
// var x = 10;
// console.log(window.x); // 10

// let y = 10;
// console.log(window.y); // undefined


// 👉 var attaches to window
// 👉 let & const do NOT
