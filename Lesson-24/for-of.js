// ===================================================
// 🔰 JavaScript for...of Loop
// ===================================================

// for...of is used to iterate over ITERABLE values
// ✔ Arrays
// ✔ Strings
// ✔ Maps
// ✔ Sets
// ✔ Generators



// ===================================================
// 1️⃣ for...of with Array
// ===================================================

// let arr = [10, 100, 1000, 10000];

// for (let val of arr) {
//     console.log(val);
// }



// ===================================================
// 2️⃣ for...of with String
// ===================================================

// let str = "Javascript";

// for (let char of str) {
//     console.log(char);
// }



// ===================================================
// 🔰 JavaScript Generator Function
// ===================================================

// Generator functions return ITERATORS
// They pause execution using `yield`



// ===================================================
// 3️⃣ Generator Function Example
// ===================================================

function* genFunction() {
    yield "One";
    yield "Two";
    yield "Three";
}

// Calling generator → returns iterator
let iterator = genFunction();

// Iterating generator using for...of
for (let val of iterator) {
    console.log(val);
}



// ===================================================
// 🔥 NOTE: for...of does NOT work with Objects
// ===================================================

// To iterate objects → use for...in

/*
let obj = {
    id: 1,
    name: "Prakash"
};

for (let key in obj) {
    console.log(key, obj[key]);
}
*/






































// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 for...of Loop

// ✔ Used for values
// ✔ Cleaner than normal for
// ✔ Works only with iterables

// for (let value of iterable) {}












// 🔹 Generator Function (function*)

// ✔ Special function
// ✔ Returns values one by one
// ✔ Uses yield instead of return

// function* demo() {
//     yield 1;
//     yield 2;
// }











// 🔹 Generator Execution Flow
// genFunction()


// ➡ returns iterator object
// ➡ for...of pulls values one by one
// ➡ Stops when done





// 🔥 INTERVIEW COMPARISON

// | Feature  | for   | for...of | for...in            |
// | -------- | ----- | -------- | ------------------- |
// | Used for | index | values   | keys                |
// | Arrays   | ✔     | ✔        | ✔ (not recommended) |
// | Strings  | ✔     | ✔        | ❌                   |
// | Objects  | ❌     | ❌        | ✔                   |










// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using for...of on objects
// ❌ Confusing for...in and for...of
// ❌ Forgetting * in generator function