// ===================================================
// 🔰 JavaScript IIFE, Closures & Array Internals
// ===================================================



// ===================================================
// 1️⃣ Normal Function
// ===================================================

// A normal function runs ONLY when you call it

// function normalFun() {
//     console.log("Executed whenever I am called");
// }

// normalFun();
// normalFun();
// normalFun();



// ===================================================
// 2️⃣ IIFE – Immediately Invoked Function Expression
// ===================================================

// IIFE runs IMMEDIATELY after definition
// Used to avoid polluting global scope

// (function iifePattern(userName, age) {
//     console.log("Self Invoked Function", userName + age);
// })("Kesavan", 45);

// ❌ Cannot call again
// iifePattern(); // ReferenceError



// ===================================================
// 3️⃣ Closure (VERY IMPORTANT 🔥)
// ===================================================

// Closure means:
// ✔ Inner function remembers variables of outer function
// ✔ Even after outer function execution ends

// function outerFunction() {

//     let outerVariable = "I'm from outer scope";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// let innerFun = outerFunction();
// innerFun(); // Accesses outerVariable



// ===================================================
// 4️⃣ Array Internals (Length Behavior)
// ===================================================

// Creating array using constructor
const arr = new Array();

// Assigning value at index 1
arr[1] = "Kesavan";

console.log(arr);
// Output: [ <1 empty item>, 'Kesavan' ]



// ===================================================
// Reset array using length
// ===================================================

arr.length = 0;

console.log(arr); // []






















// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 IIFE

// ✔ Runs immediately
// ✔ Used for:

// One-time execution
// Data privacy
// Avoiding global variables

// (function(){})();











// 🔹 Closure (INTERVIEW FAVORITE 🔥)

// A closure is created when:
// A function is defined inside another function
// Inner function remembers outer variables

// ✔ Used in:
// Data hiding
// Callbacks
// Currying
// React hooks






// 🔹 Why Closure Works?
// Because JavaScript remembers lexical scope




// 🔹 Array Length Trick
// arr.length = 0;



// ✔ Clears array instantly
// ✔ Faster than creating new array
// ✔ Used in real projects





// ⚠️ COMMON BEGINNER CONFUSIONS

// ❌ Thinking array indexes must be continuous
// ❌ Expecting IIFE to be reusable
// ❌ Thinking closure copies values (it references memory)








// 🔥 INTERVIEW QUICK TABLE

// | Concept        | Meaning                        |
// | -------------- | ------------------------------ |
// | IIFE           | Self-executing function        |
// | Closure        | Function remembers outer scope |
// | arr.length = 0 | Clears array                   |
// | Sparse array   | Missing indexes                |
