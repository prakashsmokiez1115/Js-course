// ===================================================
// 🔰 JavaScript Hoisting
// ===================================================

// Hoisting means:
// ✔ JavaScript moves DECLARATIONS to the top
// ✔ NOT initializations
// ✔ Happens before code execution



// ===================================================
// 🧠 JavaScript Internally (Conceptual)
// ===================================================
/*
Before Execution Phase:

var a;          // hoisted (initialized as undefined)
let b;          // hoisted (in TDZ)
const c;        // hoisted (in TDZ)
function sample() {}
let sample1;    // hoisted (in TDZ)
*/



// ===================================================
// 1️⃣ Hoisting with var
// ===================================================

console.log(a); // undefined (no error)

var a = 10;

console.log(a); // 10



// ===================================================
// 2️⃣ Hoisting with let
// ===================================================

// ❌ Temporal Dead Zone starts here
// console.log(b); // ReferenceError

let b = 20;

console.log(b); // 20



// ===================================================
// 3️⃣ Hoisting with const
// ===================================================

// ❌ Temporal Dead Zone
// console.log(c); // ReferenceError

const c = 30;

console.log(c); // 30



// ===================================================
// 4️⃣ Function Declaration Hoisting
// ===================================================

sample(); // ✔ works (fully hoisted)

function sample() {
    console.log("I'M in");
}



// ===================================================
// 5️⃣ Function Expression Hoisting
// ===================================================

// ❌ ReferenceError (TDZ)
// console.log(sample1);

// ❌ Cannot call before initialization
// sample1();

let sample1 = function () {
    console.log("Am I accessible");
};

sample1(); // ✔ works AFTER initialization








































// 🧠 WHAT A FRESHER MUST UNDERSTAND (VERY IMPORTANT)

// 🔹 var Hoisting

// ✔ Declaration hoisted
// ✔ Initialized as undefined
// ✔ No error, but risky

// console.log(a); // undefined
// var a = 10;












// 🔹 let & const Hoisting (TDZ 🔥)

// ✔ Hoisted
// ❌ NOT initialized
// ❌ Access before declaration → ReferenceError

// This phase is called Temporal Dead Zone




// 🔹 Function Declaration

// ✔ Fully hoisted
// ✔ Can be called before definition

// sample();
// function sample() {}





// 🔹 Function Expression

// ❌ NOT hoisted like functions
// ❌ Acts like let / var variable
















// 🔥 INTERVIEW SUMMARY TABLE


// | Type                 | Hoisted   | Usable Before | Error          |
// | -------------------- | --------- | ------------- | -------------- |
// | var                  | ✔ Yes     | ✔ Yes         | undefined      |
// | let                  | ✔ Yes     | ❌ No          | ReferenceError |
// | const                | ✔ Yes     | ❌ No          | ReferenceError |
// | function declaration | ✔ Yes     | ✔ Yes         | No             |
// | function expression  | ✔ Partial | ❌ No          | ReferenceError |










// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using var thinking it's safe
// ❌ Accessing let before declaration
// ❌ Calling function expression before init
// ❌ Confusing hoisting with execution