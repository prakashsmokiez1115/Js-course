// ===================================================
// 🔰 JavaScript Functions
// ===================================================

// Functions are used to:
// ✔ Reuse code
// ✔ Organize logic
// ✔ Perform actions
// ✔ Return values



// ===================================================
// 1️⃣ Logical OR (||) Usage
// ===================================================

// If first value is truthy → it is chosen
// Otherwise → second value is used

// let employeeId = true;
// let newId = employeeId || "UQI123";
// console.log(newId);



// ===================================================
// 2️⃣ Function with Parameters & Default Values
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



// ===================================================
// 3️⃣ Function with Return Value
// ===================================================


// 🧠 Simple rule to remember forever:

// {} → you MUST use return
// No {} → value is returned automatically (implicit return)

// That’s it. Nothing more.




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






// ===================================================
// 4️⃣ Return Stops Execution
// ===================================================

function cubic(num) {
    console.log(num ** 3);
    return num ** 3;    // function stops here
}

// let newVal = cubic(4);
// console.log(newVal);



// ===================================================
// 5️⃣ Non-Return vs Return Function
// ===================================================

function name1() {
    console.log("Non-return type");
    return 12;  // still returns a value
}

let noReturn = name1();
console.log(noReturn);



















































// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 Default Parameters
// function demo(name = "User") {}

// ✔ Used when argument is missing
// ✔ undefined triggers default






// 🔹 Return Keyword
// Sends value back to caller
// Stops function execution immediately
// return value;







// 🔹 Non-Return Function Myth

// ❌ There is no true non-return function
// ✔ If no return, JS returns undefined








// 🔥 INTERVIEW TRICKS

// | Case            | Output          |
// | --------------- | --------------- |
// | `return 10`     | `10`            |
// | `return;`       | `undefined`     |
// | no return       | `undefined`     |
// | multiple return | only first runs |
