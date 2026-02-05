// ===================================================
// 🔰 JavaScript Currying
// ===================================================

// Currying means:
// 👉 Converting a function with multiple arguments
// 👉 Into a series of functions with ONE argument each



// ===================================================
// ❌ Normal Function (Multiple Arguments)
// ===================================================

// function add(a, b, c) {
//     console.log(a + b + c);
// }
// add(1, 2, 3);



// ===================================================
// ✅ Curried Function (One Argument at a Time)
// ===================================================

function add(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);
        };
    };
}



// ===================================================
// 1️⃣ Direct Invocation
// ===================================================

add(10)(20)(30);   // Output: 60



// ===================================================
// 2️⃣ Step-by-Step Invocation (Very Important)
// ===================================================

let curry1 = add(100);     // returns function(b)
let curry2 = curry1(200); // returns function(c)
curry2(300);              // Output: 600



// console.log(curry1);  // function (b)
// console.log(curry2);  // function (c)























// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 What is happening internally?
// add(10)(20)(30)


// Execution flow 👇

// 1️⃣ add(10)
// ➡ returns function(b)
// ➡ remembers a = 10

// 2️⃣ add(10)(20)
// ➡ returns function(c)
// ➡ remembers a = 10, b = 20

// 3️⃣ add(10)(20)(30)
// ➡ prints 10 + 20 + 30

// ✔ This memory behavior is called Closure








// 🔥 CURRYING + CLOSURE CONNECTION (Interview 🔥)

// Currying → function transformation
// Closure → function remembers outer variables

// 👉 Currying works because of closures






// 📌 REAL-WORLD WHY CURRYING IS USED

// ✔ Reusability
// ✔ Cleaner code
// ✔ Partial execution
// ✔ Used in:

// React
// Redux
// Functional programming
// Event handlers

// ⚠️ COMMON BEGINNER CONFUSION

// ❌ Thinking currying is mandatory
// ❌ Confusing nested functions
// ❌ Forgetting return
// ❌ Expecting output without final ()