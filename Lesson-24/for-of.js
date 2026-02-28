// ===================================================
// 🔰 PART 1: JavaScript for...of Loop
// ===================================================
// Description:
// for...of is used to iterate over ITERABLE values.
// ✔ Arrays
// ✔ Strings
// ✔ Maps
// ✔ Sets
// ✔ Generators
// ❌ Not plain objects



// ===================================================
// 1️⃣ PART 2: for...of with Array
// ===================================================

// let arr = [10, 100, 1000, 10000];

// for (let val of arr) {
//     console.log(val);
// }

// 🔎 Explanation:
// ✔ val represents element value (not index)
// ✔ Cleaner than traditional for loop
// ✔ No need to use arr[i]



// ===================================================
// 2️⃣ PART 3: for...of with String
// ===================================================

// let str = "Javascript";

// for (let char of str) {
//     console.log(char);
// }

// 🔎 Explanation:
// ✔ Iterates character by character
// ✔ Works because string is iterable
// ✔ Very readable and simple



// ===================================================
// 🔰 PART 4: JavaScript Generator Function
// ===================================================
// Description:
// Generator functions:
// ✔ Declared using function*
// ✔ Return ITERATOR objects
// ✔ Pause execution using yield
// ✔ Resume from last paused position



// ===================================================
// 3️⃣ PART 5: Generator Function Example
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

// 🔎 Execution Flow:
// ✔ genFunction() returns iterator object
// ✔ for...of automatically calls next()
// ✔ Each yield pauses function
// ✔ Stops when values are exhausted




// ===================================================
// 🔥 PART 6: for...of does NOT work with Objects
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

// 🔎 Explanation:
// ✔ for...of → values (iterables)
// ✔ for...in → keys (objects)




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 for...of Loop

// ✔ Used for values
// ✔ Cleaner than normal for
// ✔ Works only with iterables

// Syntax:
// for (let value of iterable) {}




// 🔹 Generator Function (function*)

// ✔ Special function
// ✔ Returns values one by one
// ✔ Uses yield instead of return

// Example:
// function* demo() {
//     yield 1;
//     yield 2;
// }




// 🔹 Generator Execution Flow

// genFunction()
// ➡ returns iterator object
// ➡ for...of pulls values one by one
// ➡ Stops automatically when done




// ===================================================
// 🔥 PART 8: Interview Comparison
// ===================================================

// | Feature  | for   | for...of | for...in            |
// | -------- | ----- | -------- | ------------------- |
// | Used for | index | values   | keys                |
// | Arrays   | ✔     | ✔        | ✔ (not recommended) |
// | Strings  | ✔     | ✔        | ❌                  |
// | Objects  | ❌     | ❌        | ✔                   |




// ===================================================
// ⚠️ PART 9: Common Beginner Mistakes
// ===================================================

// ❌ Using for...of on objects
// ❌ Confusing for...in and for...of
// ❌ Forgetting * in generator function
// ❌ Thinking yield works like return
// ❌ Reusing exhausted generator (iterator runs once)




// ===================================================
// 🚀 PRO TIP (Advanced Understanding)
// ===================================================
// 🔥 for...of internally uses Symbol.iterator
// 🔥 Generators are powerful for lazy execution
// 🔥 Use for...of for clean array iteration
// 🔥 Use for...in only for object keys
// 🔥 Generators are important in async & advanced JS