// ===================================================
// 🔰 PART 1: JavaScript Scope (var, let, const)
// ===================================================
// Description:
// Scope defines where a variable can be accessed.
// It controls visibility and lifetime of variables.


// ===================================================
// 1️⃣ PART 2: var → Function Scope or Global Scope
// ===================================================
// Description:
// var is function-scoped, NOT block-scoped.
// It ignores { } blocks and stays accessible
// throughout the entire function.

// function outerFunction() {
//     if (true) {
//         if (true) {
//             var innerVar = "Hi I'm a variable";
//         }
//     }
//     // var is accessible outside block
//     console.log(innerVar);
// }
// outerFunction();

// 🔎 Explanation:
// ✔ innerVar is declared inside block
// ✔ But var ignores block scope
// ✔ It becomes accessible throughout function



// ===================================================
// 2️⃣ PART 3: let & const → Block Scope
// ===================================================
// Description:
// let and const are block-scoped.
// They are accessible ONLY inside { } where defined.

// function outerFunction() {

//     let newVar = "I'm a variable";

//     if (true) {
//         if (true) {
//             const innerVar = "I'm a Block Scoped Variable";
//         }

//         console.log(newVar);

//         // ❌ ReferenceError (innerVar is block scoped)
//         // console.log(innerVar);
//     }
// }
// outerFunction();

// 🔎 Explanation:
// ✔ newVar is accessible inside function
// ✔ innerVar is accessible only inside its block
// ✔ Trying to access outside → ReferenceError



// ===================================================
// 3️⃣ PART 4: Global Scope (var vs let / const)
// ===================================================
// Description:
// In browsers, global var attaches to window.
// let & const do NOT attach to window.

// var globalVar = "I'm accessible throughout global context";
// console.log(window.globalVar);   // ✔ works

// const blockScopedVar = "Hi I'm block scoped";
// console.log(window.blockScopedVar); // ❌ undefined

// 🔎 Important:
// ✔ var becomes property of window (browser only)
// ✔ let & const stay in global scope but NOT on window



// ===================================================
// 4️⃣ PART 5: Function Scope Example
// ===================================================

// function name1() {
//     var innerVar = "I'm a Function Scope";
//     console.log(innerVar);
// }
// name1();

// 🔎 Explanation:
// ✔ innerVar exists only inside function
// ✔ Accessing outside → ReferenceError



// ===================================================
// 5️⃣ PART 6: Global vs Local Scope (Real Example)
// ===================================================

var a = 50;   // Global variable
let b = 60;
const c = 70;

function sample() {

    // Uncomment to test local scope
    // var a = 10;
    // let b = 20;
    // const c = 30;

    if (true) {
        console.log(a + b + c);
    }
}

sample();
console.log(a + b + c);

// 🔎 Explanation:
// ✔ If local variables are commented → global values used
// ✔ If local variables uncommented → local overrides global
// ✔ Scope chain searches from local → global




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 var
// ✔ Function scoped
// ✔ NOT block scoped
// ✔ Gets attached to window (browser)


// 🔹 let / const
// ✔ Block scoped
// ✔ Safer & predictable
// ✔ NOT attached to window




// ===================================================
// 🔥 PART 8: Interview Comparison
// ===================================================

// | Feature       | var      | let   | const |
// | ------------- | -------- | ----- | ----- |
// | Scope         | Function | Block | Block |
// | Redeclare     | ✔ Yes    | ❌ No  | ❌ No  |
// | Reassign      | ✔ Yes    | ✔ Yes | ❌ No  |
// | Window object | ✔ Yes    | ❌ No  | ❌ No  |




// ===================================================
// ⚠️ PART 9: Common Beginner Mistakes
// ===================================================

// ❌ Using var inside blocks expecting block scope
// ❌ Expecting let to be global on window
// ❌ Accessing block variables outside block
// ❌ Redeclaring let in same scope
// ❌ Forgetting const must be initialized




// ===================================================
// 🚀 PRO TIP (Professional Scope Rule)
// ===================================================
// 🔥 Always prefer const first
// 🔥 Use let when value needs change
// 🔥 Avoid var in modern development
// 🔥 Understand scope chain (local → parent → global)
// 🔥 Scope questions are VERY common in interviews