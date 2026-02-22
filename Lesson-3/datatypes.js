// ===================================================
// 🔰 PART 1: JavaScript Data Types Overview
// ===================================================
// Description:
// JavaScript data types define what kind of data a variable can store.
// They are divided into:
// 1️⃣ Primitive (single/simple values)
// 2️⃣ Non-Primitive / Reference (complex/multiple values)


// ===================================================
// 1️⃣ PART 2: Primitive Data Types
// ===================================================
// Description:
// Primitive types store single values.
// They are immutable (cannot be changed directly in memory).

// ---------------------------
// 🔢 Number
// ---------------------------
// JavaScript has ONLY ONE number type.
// It handles integers and decimals together.

var num = 120;     // integer
var num = 1.25;    // decimal (float)

// 👉 No separate int or float in JavaScript



// ---------------------------
// 🔤 String
// ---------------------------
// Used to store text data.

let userName = "Javascript is a Scripting Language";

// Strings can be written using:
userName = 'Javascript is a Single Threaded Language'; // single quotes
userName = `ECMA Script`; // template literal (backticks)

// 👉 Template literals allow embedding variables later using ${}



// ---------------------------
// 🔘 Boolean
// ---------------------------
// Used for true/false values (conditions, logic)

let condition = true;
condition = false;



// ---------------------------
// ❓ Undefined
// ---------------------------
// A variable that is declared but NOT assigned a value.

let noValue; // undefined by default



// ---------------------------
// 🚫 Null
// ---------------------------
// Represents an intentional empty value.

let emptyValue = null; // developer assigns empty manually



// ---------------------------
// 🖨 Print primitive values
// ---------------------------
console.log(num, userName, condition, noValue);



// ===================================================
// 📝 PART 3: Comments in JavaScript
// ===================================================
// Description:
// Comments are ignored by JavaScript.
// Used to explain code.

// Single-line comment

/*
   Multi-line comment
   JavaScript
   React JS
*/



// ===================================================
// 2️⃣ PART 4: Non-Primitive (Reference) Data Types
// ===================================================
// Description:
// These types store multiple values or complex structures.
// They are called reference types because they store memory reference.


// ---------------------------
// 📚 Array
// ---------------------------
// Used to store multiple values in order.
// Arrays use index numbers starting from 0.

// Index:              0            1             2             3
let multipleUsers = ["React JS", "JavaScript", "Facebook", "Instagram"];

console.log(multipleUsers);

// Accessing elements (using index)
console.log(multipleUsers[0]);
console.log(multipleUsers[1]);
console.log(multipleUsers[3]);

// Array length (total elements)
console.log(multipleUsers.length);

// Last index
console.log(multipleUsers.length - 1);

// Last element
console.log(multipleUsers[multipleUsers.length - 1]);



// ---------------------------
// 🏷 Object
// ---------------------------
// Objects store data as key-value pairs.

let vehicle = {
    vehicleType: "Four Wheeler",
    brand: "Hyundai",
    price: 100000,
    fuelType: "Petrol"
};

console.log(vehicle);

// Accessing object properties (dot notation)
console.log(vehicle.price);
console.log(vehicle.brand);

// 👉 Can also use bracket notation:
// vehicle["price"]



// ===================================================
// 🎯 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Primitive Data Types
// ✔ Number
// ✔ String
// ✔ Boolean
// ✔ Undefined
// ✔ Null

// 👉 Used to store single/simple values



// 🔹 Non-Primitive (Reference) Data Types
// ✔ Array → Ordered list of values
// ✔ Object → Key-value structured data

// 👉 Used to store multiple or complex data



// ===================================================
// 🔥 PART 6: Interview Quick Table
// ===================================================

// | Type      | Example         |
// | --------- | --------------- |
// | Number    | `10`, `3.5`     |
// | String    | `"Hello"`       |
// | Boolean   | `true / false`  |
// | Undefined | `let x;`        |
// | Null      | `let x = null;` |
// | Array     | `[1, 2, 3]`     |
// | Object    | `{name: "A"}`   |



// ===================================================
// ⚠️ PART 7: Important Beginner Notes
// ===================================================

// ➡️ JavaScript is loosely typed (no need to define type)
// ➡️ Arrays start at index 0
// ➡️ length - 1 gives last index
// ➡️ Objects use dot notation or bracket notation
// ➡️ Primitive = single value
// ➡️ Reference = complex structure



// ===================================================
// 🚀 PRO TIP (Strong Foundation Builder)
// ===================================================
// 🔥 Always know whether your data is primitive or reference
// 🔥 Arrays and Objects are used heavily in React & APIs
// 🔥 Master object property access (very common in interviews)
// 🔥 Practice console.log(typeof variable)
// 🔥 Clear data understanding = strong JavaScript base