// ===================================================
// 🔰 PART 1: JavaScript Functions
// ===================================================
// Description:
// Functions are used to:
// ✔ Reuse code
// ✔ Organize logic
// ✔ Perform actions
// ✔ Return values
// ✔ Make programs modular and clean



// ===================================================
// 1️⃣ PART 2: Logical OR (||) Usage in Functions
// ===================================================
// Description:
// Logical OR can be used to provide fallback values.
// If first value is truthy → it is chosen.
// Otherwise → second value is used.

// let employeeId = true;
// let newId = employeeId || "UQI123";
// console.log(newId);

// 🔎 Explanation:
// ✔ If employeeId is truthy → newId = employeeId
// ✔ If employeeId is falsy → newId = "UQI123"
// ✔ Commonly used for default values (older JS pattern)



// ===================================================
// 2️⃣ PART 3: Function with Parameters & Default Values
// ===================================================

function printUserName(uName = "Keshav", uAge = 25) {
    console.log(`Hi ${uName}, your age is ${uAge}`);
}

// Function calls
// printUserName("Kesavan", 40);
// printUserName("Murugesan", 60);
// printUserName("John", 30);
// printUserName("David");            // default age used
// printUserName(undefined, 45);      // default name used

// 🔎 Important:
// ✔ Default parameters work when argument is missing
// ✔ undefined triggers default
// ✔ null does NOT trigger default



// ===================================================
// 3️⃣ PART 4: Function with Return Value
// ===================================================

// 🧠 Simple rule to remember forever:

// {}  → you MUST use return to send value
// No {} (arrow function without braces) → implicit return

function findRectArea(l, b) {

    let condition = false;

    if (condition) {
        return l * b;   // returns number
    } else {
        return null;    // returns null
    }
}

// let newVal = findRectArea(20, 10);
// console.log(findRectArea(100, 50), newVal);

// 🔎 Explanation:
// ✔ Function returns value back to caller
// ✔ If condition false → returns null
// ✔ Returned value can be stored in variable



// ===================================================
// 4️⃣ PART 5: Return Stops Execution
// ===================================================

function cubic(num) {
    console.log(num ** 3);
    return num ** 3;    // function stops here
}

// let newVal = cubic(4);
// console.log(newVal);

// 🔎 Important:
// ✔ Code after return will NOT execute
// ✔ return immediately exits the function



// ===================================================
// 5️⃣ PART 6: Non-Return vs Return Function
// ===================================================

function name1() {
    console.log("Non-return type");
    return 12;  // still returns a value
}

let noReturn = name1();
console.log(noReturn);

// 🔎 Explanation:
// ✔ Even though function logs something,
//   it still returns 12
// ✔ Value can be stored in variable




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 Default Parameters
// function demo(name = "User") {}
// ✔ Used when argument is missing
// ✔ undefined triggers default


// 🔹 Return Keyword
// ✔ Sends value back to caller
// ✔ Stops function execution immediately
// ✔ Syntax: return value;


// 🔹 Non-Return Function Myth

// ❌ There is no true non-return function
// ✔ If no return, JavaScript returns undefined




// ===================================================
// 🔥 PART 8: Interview Tricks
// ===================================================

// | Case            | Output          |
// | --------------- | --------------- |
// | `return 10`     | 10              |
// | `return;`       | undefined       |
// | no return       | undefined       |
// | multiple return | only first runs |




// ===================================================
// 🚀 PRO TIP (Function Mastery)
// ===================================================
// 🔥 Always return value when logic needs reuse
// 🔥 Use clear parameter names
// 🔥 Avoid writing very long functions
// 🔥 Remember: return ends function immediately
// 🔥 Functions are foundation of React & backend