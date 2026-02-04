// ===================================================
// 🔰 JavaScript Function Types
// ===================================================

// Functions help us:
// ✔ Reuse code
// ✔ Organize logic
// ✔ Pass behavior (callbacks)
// ✔ Build real applications



// ===================================================
// 1️⃣ Named Function
// ===================================================

function add(uName) {
    console.log("Named Function " + uName);
}

add("I am a Function");



// ===================================================
// 2️⃣ Anonymous Function
// ===================================================

// Function without a name
// Stored inside a variable

let anonFun = function (a, b) {
    console.log("Anonymous Function " + (a * b));
};

anonFun(10, 20);



// ===================================================
// 3️⃣ Arrow Function (Modern JS)
// ===================================================

// Shorter syntax
// No function keyword

let fatArrow = (a, b) => console.log("Arrow Function " + (a * b));
fatArrow(10, 20);

// Single parameter → brackets optional
let newFun = name1 => console.log(name1);
newFun("John");



// ===================================================
// 4️⃣ Arrow Function with Return
// ===================================================

let firstName = "Brendan";

// Implicit return
let returnedFun = fName => fName;

let finalOutput = returnedFun(firstName);
console.log(finalOutput);



// ===================================================
// 5️⃣ Higher Order Function (HOF)
// ===================================================

// A function that:
// ✔ Accepts another function as argument
// ✔ OR returns a function

function function1() {
    console.log("I am a Higher Order Function");
}

function function2() {
    console.log("I am a Callback Function");
}

// ❌ WRONG (function executed immediately)
// function1(function2())



// ===================================================
// 6️⃣ Callback Function (Correct Way)
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


































// 🧠 WHAT A FRESHER MUST UNDERSTAND


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
// map
// filter
// setTimeout
// add(subtract, 20, 40)











// 🔹 Callback Function

// ✔ A function passed as argument
// ✔ Executed later by another function

// Example:
// add(subtract, 20, 40);


// Here:
// add → Higher Order Function
// subtract → Callback Function












// 🔥 INTERVIEW TRICKS

// | Term           | Meaning                             |
// | -------------- | ----------------------------------- |
// | Callback       | Function passed as argument         |
// | HOF            | Function that uses another function |
// | Arrow function | Short syntax function               |
// | Anonymous      | Function without name               |










// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Calling callback instead of passing it
// ❌ Confusing return vs console.log
// ❌ Overusing arrow functions for complex logic