// ===================================================
// 🔰 JavaScript Data Types
// ===================================================



// ===================================================
// 1️⃣ Primitive Data Types
// ===================================================

// ---------------------------
// Number
// ---------------------------
var num = 120;     // integer
var num = 1.25;    // decimal (float)

// JavaScript has only ONE number type



// ---------------------------
// String
// ---------------------------
let userName = "Javascript is a Scripting Language";

// Strings can be written using:
userName = 'Javascript is a Single Threaded Language';
userName = `ECMA Script`; // template literal



// ---------------------------
// Boolean
// ---------------------------
let condition = true;
condition = false;



// ---------------------------
// Undefined
// ---------------------------
let noValue; // declared but not assigned



// ---------------------------
// Null
// ---------------------------
let emptyValue = null; // intentional empty value



// ---------------------------
// Print primitive values
// ---------------------------
console.log(num, userName, condition, noValue);



// ===================================================
// 📝 Comments
// ===================================================

// Single-line comment

/*
   Multi-line comment
   JavaScript
   React JS
*/



// ===================================================
// 2️⃣ Non-Primitive (Reference) Data Types
// ===================================================



// ---------------------------
// Array
// ---------------------------
// Index:              0            1             2             3
let multipleUsers = ["React JS", "JavaScript", "Facebook", "Instagram"];

console.log(multipleUsers);

// Accessing elements
console.log(multipleUsers[0]);
console.log(multipleUsers[1]);
console.log(multipleUsers[3]);

// Array length
console.log(multipleUsers.length);

// Last index
console.log(multipleUsers.length - 1);

// Last element
console.log(multipleUsers[multipleUsers.length - 1]);



// ---------------------------
// Object
// ---------------------------
// Key-value pairs
let vehicle = {
    vehicleType: "Four Wheeler",
    brand: "Hyundai",
    price: 100000,
    fuelType: "Petrol"
};

console.log(vehicle);

// Accessing object properties
console.log(vehicle.price);
console.log(vehicle.brand);



































// ✅ WHAT A FRESHER MUST UNDERSTAND FROM THIS

// 🔹 Primitive Data Types
// ✔ Number
// ✔ String
// ✔ Boolean
// ✔ Undefined
// ✔ Null

// 👉 Store single values




// 🔹 Non-Primitive (Reference) Data Types
// ✔ Array → list of values
// ✔ Object → key-value pairs

// 👉 Store multiple or complex data








// 🔥 INTERVIEW QUICK TABLE

// | Type      | Example         |
// | --------- | --------------- |
// | Number    | `10`, `3.5`     |
// | String    | `"Hello"`       |
// | Boolean   | `true / false`  |
// | Undefined | `let x;`        |
// | Null      | `let x = null;` |
// | Array     | `[1, 2, 3]`     |
// | Object    | `{name: "A"}`   |









// ⚠️ IMPORTANT BEGINNER NOTES

//➡️ JavaScript is loosely typed
//➡️ Arrays start at index 0
//➡️ length - 1 gives last index
//➡️ Objects use dot notation or bracket notation
