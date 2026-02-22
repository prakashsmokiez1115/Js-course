// ===================================================
// 🔰 PART 1: JavaScript Hoisting
// ===================================================
// Description:
// Hoisting means:
// ✔ JavaScript moves DECLARATIONS to the top
// ✔ NOT initializations
// ✔ Happens during Memory Creation Phase
// ✔ Happens before code execution



// ===================================================
// 🧠 PART 2: JavaScript Internally (Conceptual)
// ===================================================
/*
Before Execution Phase (Memory Creation):

var a;              // hoisted → initialized as undefined
let b;              // hoisted → in TDZ
const c;            // hoisted → in TDZ
function sample(){} // fully hoisted
let sample1;        // hoisted → in TDZ
*/

// 👉 Only declarations are moved
// 👉 Assignments stay in original place



// ===================================================
// 1️⃣ PART 3: Hoisting with var
// ===================================================

console.log(a); // undefined (no error)

var a = 10;

console.log(a); // 10

// 🔎 Internally behaves like:
// var a;
// console.log(a);
// a = 10;



// ===================================================
// 2️⃣ PART 4: Hoisting with let
// ===================================================

// ❌ Temporal Dead Zone (TDZ) starts here
// console.log(b); // ReferenceError

let b = 20;

console.log(b); // 20

// 🔎 Explanation:
// ✔ let is hoisted
// ❌ But NOT initialized
// ❌ Access before declaration → ReferenceError
// 👉 This period is called Temporal Dead Zone



// ===================================================
// 3️⃣ PART 5: Hoisting with const
// ===================================================

// ❌ Temporal Dead Zone
// console.log(c); // ReferenceError

const c = 30;

console.log(c); // 30

// 🔎 Same behavior as let
// ✔ Hoisted
// ❌ Not initialized
// ❌ Must be initialized at declaration



// ===================================================
// 4️⃣ PART 6: Function Declaration Hoisting
// ===================================================

sample(); // ✔ works (fully hoisted)

function sample() {
    console.log("I'M in");
}

// 🔎 Explanation:
// ✔ Entire function is hoisted
// ✔ Can call before definition



// ===================================================
// 5️⃣ PART 7: Function Expression Hoisting
// ===================================================

// ❌ ReferenceError (TDZ)
// console.log(sample1);

// ❌ Cannot call before initialization
// sample1();

let sample1 = function () {
    console.log("Am I accessible");
};

sample1(); // ✔ works AFTER initialization

// 🔎 Explanation:
// ✔ Variable sample1 is hoisted (like let)
// ❌ Function body NOT hoisted
// ❌ Cannot access before initialization




// ===================================================
// 🧠 PART 8: What a Fresher MUST Understand
// ===================================================

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
// 👉 This phase is called Temporal Dead Zone


// 🔹 Function Declaration
// ✔ Fully hoisted
// ✔ Can be called before definition


// 🔹 Function Expression
// ✔ Variable hoisted
// ❌ Function body NOT hoisted
// ❌ Cannot use before initialization




// ===================================================
// 🔥 PART 9: Interview Summary Table
// ===================================================

// | Type                 | Hoisted   | Usable Before | Result/Error     |
// | -------------------- | --------- | ------------- | ---------------- |
// | var                  | ✔ Yes     | ✔ Yes         | undefined        |
// | let                  | ✔ Yes     | ❌ No          | ReferenceError   |
// | const                | ✔ Yes     | ❌ No          | ReferenceError   |
// | function declaration | ✔ Yes     | ✔ Yes         | Works            |
// | function expression  | ✔ Partial | ❌ No          | ReferenceError   |




// ===================================================
// ⚠️ PART 10: Common Beginner Mistakes
// ===================================================

// ❌ Using var thinking it's safe
// ❌ Accessing let before declaration
// ❌ Calling function expression before init
// ❌ Confusing hoisting with execution
// ❌ Thinking JS runs code top-to-bottom only




// ===================================================
// 🚀 PRO TIP (Advanced Interview Understanding)
// ===================================================
// 🔥 JavaScript has two phases:
//    1️⃣ Memory Creation Phase
//    2️⃣ Execution Phase
// 🔥 Hoisting happens in memory phase
// 🔥 Always declare variables at top (clean practice)
// 🔥 Avoid var in modern JavaScript
// 🔥 TDZ questions are very common in interviews