// ===================================================
// 🔰 PART 1: JavaScript Currying
// ===================================================
// Description:
// Currying means:
// 👉 Converting a function with multiple arguments
// 👉 Into a series of functions with ONE argument each
// 👉 Each function returns another function
// 👉 Final function performs the operation



// ===================================================
// ❌ PART 2: Normal Function (Multiple Arguments)
// ===================================================

// function add(a, b, c) {
//     console.log(a + b + c);
// }
// add(1, 2, 3);

// 🔎 Normal function takes all arguments at once.



// ===================================================
// ✅ PART 3: Curried Function (One Argument at a Time)
// ===================================================

function add(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);
        };
    };
}

// 🔎 Structure:
// add(a) → returns function(b)
// function(b) → returns function(c)
// function(c) → executes logic



// ===================================================
// 1️⃣ PART 4: Direct Invocation
// ===================================================

add(10)(20)(30);   // Output: 60

// 🔎 Explanation:
// ✔ add(10) returns function(b)
// ✔ (20) returns function(c)
// ✔ (30) executes and prints result



// ===================================================
// 2️⃣ PART 5: Step-by-Step Invocation (Very Important)
// ===================================================

let curry1 = add(100);     // returns function(b)
let curry2 = curry1(200);  // returns function(c)
curry2(300);               // Output: 600

// console.log(curry1);  // function (b)
// console.log(curry2);  // function (c)


// 🔎 Explanation:
// ✔ curry1 remembers a = 100
// ✔ curry2 remembers a = 100, b = 200
// ✔ Final call prints 100 + 200 + 300




// ===================================================
// 🧠 PART 6: What is Happening Internally?
// ===================================================

// add(10)(20)(30)

// Execution Flow:

// 1️⃣ add(10)
// ➡ returns function(b)
// ➡ remembers a = 10

// 2️⃣ add(10)(20)
// ➡ returns function(c)
// ➡ remembers a = 10, b = 20

// 3️⃣ add(10)(20)(30)
// ➡ prints 10 + 20 + 30

// ✔ This memory behavior is called Closure




// ===================================================
// 🔥 PART 7: Currying + Closure Connection (Interview 🔥)
// ===================================================

// Currying  → Function transformation
// Closure   → Function remembers outer variables

// 👉 Currying works because of closures
// 👉 Inner functions remember values of outer functions




// ===================================================
// 📌 PART 8: Real-World Why Currying is Used
// ===================================================

// ✔ Reusability
// ✔ Cleaner functional code
// ✔ Partial execution
// ✔ Configuration-based functions

// Used in:
// ✔ React (event handlers)
// ✔ Redux (middleware)
// ✔ Functional programming libraries
// ✔ Utility function creation




// ===================================================
// ⚠️ PART 9: Common Beginner Confusion
// ===================================================

// ❌ Thinking currying is mandatory everywhere
// ❌ Confusing nested functions with currying
// ❌ Forgetting return statement
// ❌ Expecting output without final ()
// ❌ Not understanding closure concept




// ===================================================
// 🚀 PRO TIP (Advanced Understanding)
// ===================================================
// 🔥 Currying allows partial application of functions
// 🔥 Very useful for reusable configuration functions
// 🔥 Always remember: No final () → No execution
// 🔥 Practice both direct & step-by-step invocation
// 🔥 Closure + Currying is a powerful interview topic