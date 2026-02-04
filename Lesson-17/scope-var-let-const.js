// ===================================================
// 🔰 JavaScript Scope (var, let, const)
// ===================================================

// Scope defines where a variable can be accessed



// ===================================================
// 1️⃣ var → Function Scope or Global Scope
// ===================================================

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



// ===================================================
// 2️⃣ let & const → Block Scope
// ===================================================

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



// ===================================================
// 3️⃣ Global Scope (var vs let / const)
// ===================================================

// var globalVar = "I'm accessible throughout global context";
// console.log(window.globalVar);   // ✔ works

// const blockScopedVar = "Hi I'm block scoped";
// console.log(window.blockScopedVar); // ❌ undefined



// ===================================================
// 4️⃣ Function Scope Example
// ===================================================

// function name1() {
//     var innerVar = "I'm a Function Scope";
//     console.log(innerVar);
// }
// name1();



// ===================================================
// 5️⃣ Global vs Local Scope (Real Example)
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































// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 var

// ✔ Function scoped
// ✔ NOT block scoped
// ✔ Gets attached to window (browser)

// 🔹 let / const

// ✔ Block scoped
// ✔ Safer & predictable
// ✔ NOT attached to window












// 🔥 INTERVIEW COMPARISON


// | Feature       | var      | let   | const |
// | ------------- | -------- | ----- | ----- |
// | Scope         | Function | Block | Block |
// | Redeclare     | ✔ Yes    | ❌ No  | ❌ No  |
// | Reassign      | ✔ Yes    | ✔ Yes | ❌ No  |
// | Window object | ✔ Yes    | ❌ No  | ❌ No  |












// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using var inside blocks
// ❌ Expecting let to be global on window
// ❌ Accessing block variables outside block