// ===================================================
// 🔰 PART 1: JavaScript Function Types
// ===================================================
// Description:
// Functions help us:
// ✔ Reuse code
// ✔ Organize logic
// ✔ Pass behavior (callbacks)
// ✔ Build real applications
// ✔ Create modular & scalable programs



// ===================================================
// 1️⃣ PART 2: Named Function
// ===================================================
// Description:
// A function that has a name.
// Can be called using that name.

function add(uName) {
    console.log("Named Function " + uName);
}

add("I am a Function");

// 🔎 Explanation:
// ✔ Function name → add
// ✔ Easy to debug (name appears in stack trace)
// ✔ Can be reused multiple times



// ===================================================
// 2️⃣ PART 3: Anonymous Function
// ===================================================
// Description:
// Function without a name.
// Usually stored inside a variable.

let anonFun = function (a, b) {
    console.log("Anonymous Function " + (a * b));
};

anonFun(10, 20);

// 🔎 Explanation:
// ✔ No function name
// ✔ Assigned to variable anonFun
// ✔ Commonly used in callbacks



// ===================================================
// 3️⃣ PART 4: Arrow Function (Modern JS)
// ===================================================
// Description:
// Shorter syntax.
// No function keyword.
// Introduced in ES6.

let fatArrow = (a, b) => console.log("Arrow Function " + (a * b));
fatArrow(10, 20);

// Single parameter → brackets optional
let newFun = name1 => console.log(name1);
newFun("John");

// 🔎 Explanation:
// ✔ Cleaner syntax
// ✔ Shorter code
// ✔ Very common in React & modern JavaScript



// ===================================================
// 4️⃣ PART 5: Arrow Function with Return
// ===================================================

let firstName = "Brendan";

// Implicit return (no {} needed)
let returnedFun = fName => fName;

let finalOutput = returnedFun(firstName);
console.log(finalOutput);

// 🔎 Rule:
// {} → must use return
// No {} → implicit return



// ===================================================
// 5️⃣ PART 6: Higher Order Function (HOF)
// ===================================================
// Description:
// A function that:
// ✔ Accepts another function as argument
// ✔ OR returns another function

function function1() {
    console.log("I am a Higher Order Function");
}

function function2() {
    console.log("I am a Callback Function");
}

// ❌ WRONG (function executed immediately)
// function1(function2())

// 👉 function2() executes immediately
// 👉 Instead, pass reference: function2



// ===================================================
// 6️⃣ PART 7: Callback Function (Correct Way)
// ===================================================

function add(callBack, a, b) {

    // Calling callback function
    callBack(100, 200);

    // Normal operation
    console.log(a + b);
}

function subtract(num1, num2) {
    console.log(num1 + num2);
}

// Passing function reference
add(subtract, 20, 40);

// 🔎 Explanation:
// ✔ add → Higher Order Function
// ✔ subtract → Callback Function
// ✔ subtract is passed, not executed immediately




// ===================================================
// 🧠 PART 8: What a Fresher MUST Understand
// ===================================================

// 🔹 Named Function
// ✔ Has a name
// ✔ Easy to debug
// ✔ Can be reused


// 🔹 Anonymous Function
// ✔ No name
// ✔ Stored in variable
// ✔ Used in callbacks


// 🔹 Arrow Function
// ✔ Short syntax
// ✔ Cleaner code
// ✔ Used heavily in React & modern JS




// 🔹 Higher Order Function
// ✔ A function that takes another function
// ✔ OR returns a function

// Examples:
// map()
// filter()
// setTimeout()
// add(subtract, 20, 40)




// 🔹 Callback Function
// ✔ A function passed as argument
// ✔ Executed later by another function

// Example:
// add(subtract, 20, 40);




// ===================================================
// 🔥 PART 9: Interview Tricks
// ===================================================

// | Term           | Meaning                             |
// | -------------- | ----------------------------------- |
// | Callback       | Function passed as argument         |
// | HOF            | Function that uses another function |
// | Arrow function | Short syntax function               |
// | Anonymous      | Function without name               |




// ===================================================
// ⚠️ PART 10: Common Beginner Mistakes
// ===================================================

// ❌ Calling callback instead of passing it
// ❌ Confusing return vs console.log
// ❌ Overusing arrow functions for complex logic
// ❌ Forgetting {} requires return
// ❌ Not understanding function reference vs execution




// ===================================================
// 🚀 PRO TIP (Professional Level Understanding)
// ===================================================
// 🔥 Always pass function reference, not execution
// 🔥 Prefer arrow functions for short callbacks
// 🔥 Use named functions for complex logic
// 🔥 Understand implicit vs explicit return clearly
// 🔥 HOF & callbacks are foundation of async JS & React