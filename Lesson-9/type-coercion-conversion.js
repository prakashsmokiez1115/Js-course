// ===================================================
// 🔰 PART 1: JavaScript Type Coercion & Type Conversion
// ===================================================
// Description:
// JavaScript automatically converts data types when needed.
// This is called Type Coercion (automatic).
// When we manually convert types, it is called Type Conversion.


// ===================================================
// 1️⃣ PART 2: String + Number (Type Coercion)
// ===================================================

let str = "45";
let num = 100;

console.log(str + num);              // "45100"
console.log(typeof (str + num));     // string

// 👉 Because one operand is string,
// JavaScript converts number to string.
// Rule: If + sees a string → concatenation happens.



// ===================================================
// 2️⃣ PART 3: String + Anything = String
// ===================================================

console.log("Hi" + true);        // "Hitrue"
console.log("Hi" + undefined);   // "Hiundefined"
console.log("Hi" + null);        // "Hinull"
console.log("Hi" + [1, 2]);      // "Hi1,2"
console.log("Hi" + {});          // "Hi[object Object]"

// 🔥 Golden Rule:
// 👉 String + anything = string



// ===================================================
// 3️⃣ PART 4: Number + Other Types
// ===================================================

// 🔹 Boolean → true = 1, false = 0
console.log(10 + false);     // 10
console.log(10 + true);      // 11

// 🔹 Undefined
console.log(10 + undefined); // NaN (Not a Number)

// 🔹 Null
console.log(10 + null);      // 10  (null → 0)

// 🔹 Array
console.log(10 + [1, 2]);    // "101,2"
console.log(typeof (10 + [1])); // string

// 🔹 Object
console.log(10 + {});        // "10[object Object]"

// 🔹 Empty string
console.log(typeof (10 + "")); // string



// ===================================================
// 4️⃣ PART 5: Boolean with Other Types
// ===================================================

console.log(true + undefined); // NaN
console.log(true + null);      // 1

// 👉 true → 1
// 👉 null → 0
// 👉 undefined → NaN when in arithmetic



// ===================================================
// 5️⃣ PART 6: Loose Equality (==)
// ===================================================

console.log(10 == "10"); // true

// 👉 == allows type coercion
// It compares VALUE only.



// ===================================================
// 6️⃣ PART 7: Arithmetic with Strings
// ===================================================

console.log(10 - "abc"); // NaN
console.log(10 - "");    // 10  ("" → 0)

// 👉 -, *, / trigger numeric conversion.
// If conversion fails → NaN



// ===================================================
// 7️⃣ PART 8: Explicit Type Conversion (Manual)
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
// 8️⃣ PART 9: String Comparison
// ===================================================

console.log("bg" > "bb"); // true

// 👉 String comparison is lexicographical (dictionary order)
// Compared character by character.



// ===================================================
// 9️⃣ PART 10: Global Variable & window Object (Browser Only)
// ===================================================

let a = 10;

// This works ONLY in browser, not Node.js
console.log(window.a); 
// undefined (because let does NOT attach to window)




// ===================================================
// 🧠 PART 11: What a Fresher MUST Understand
// ===================================================

// 🔹 Type Coercion (Automatic)
// JavaScript converts types automatically.

// Examples:
// "10" + 5   → "105"
// 10 - "5"   → 5


// 🔹 Type Conversion (Manual)
// You force conversion using:
// Number()
// String()
// Boolean()



// ===================================================
// 🔥 PART 12: Interview Gold Rules
// ===================================================

// ✅ String Rules
// string + anything → string

// ✅ Boolean Rules
// true → 1
// false → 0

// ✅ Falsy Values
// false, 0, "", null, undefined, NaN

// Everything else is truthy.


// ===================================================
// ⚠️ PART 13: Important Interview Point
// ===================================================

// 10 == "10"   → true
// 10 === "10"  → false

// 👉 ==  → compares value only (type coercion happens)
// 👉 === → compares value + type (RECOMMENDED)



// ===================================================
// ⚠️ PART 14: Browser vs Node.js
// ===================================================

// var x = 10;
// console.log(window.x); // 10

// let y = 10;
// console.log(window.y); // undefined

// 👉 var attaches to window
// 👉 let & const do NOT




// ===================================================
// 🚀 PRO TIP (Advanced Understanding)
// ===================================================
// 🔥 Always prefer === instead of ==
// 🔥 Avoid relying on automatic coercion in real projects
// 🔥 Convert explicitly using Number(), Boolean(), String()
// 🔥 Memorize falsy values — very common interview question
// 🔥 Understanding coercion deeply makes debugging easier