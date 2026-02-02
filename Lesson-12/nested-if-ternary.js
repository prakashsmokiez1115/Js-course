// ===================================================
// 🔰 JavaScript Nested If Statement
// ===================================================

// Nested if means:
// ✔ One if condition inside another if
// ✔ Used when multiple validations depend on each other



// ===================================================
// 1️⃣ Example: Selection Criteria (Nested If)
// ===================================================

// Uncomment and test step by step

// let age = 25;
// let height = 160;
// let weight = 60;

// if (age >= 18) {

//     if (height >= 150) {

//         if (weight >= 45) {
//             console.log("You are Selected");
//         }
//         else {
//             console.log("Weight is not matched");
//         }

//     }
//     else {
//         console.log("Height is not matched");
//     }

// }
// else {
//     console.log("Age is not valid");
// }



// ===================================================
// 🔥 How Nested If Works (Important)
// ===================================================
// 1️⃣ First age is checked
// 2️⃣ If age is valid → height is checked
// 3️⃣ If height is valid → weight is checked
// 4️⃣ If all are valid → selected



// ===================================================
// 🔰 JavaScript Ternary Operator
// ===================================================

// Ternary operator is a SHORTCUT for if/else
// Used when you have ONLY two outcomes



// ===================================================
// 📌 Syntax of Ternary Operator
// ===================================================
/*
condition ? statement_if_true : statement_if_false
*/



// ===================================================
// 2️⃣ Example: Password Validation (Ternary)
// ===================================================

let pwd_input = false;

pwd_input
    ? console.log("Welcome to website")
    : console.log("Password Incorrect");
























//     🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 Nested if

// ✔ Used when multiple conditions depend on each other
// ✔ Execution flows inside → deeper → deeper
// ✔ Common in:
//➡️ Eligibility checks
//➡️ Forms
//➡️ Selection criteria







// 🔹 Ternary Operator

// ✔ Shortcut for if / else
// ✔ Works ONLY for two conditions

// Example comparison:

// ❌ Normal if/else

// if (pwd_input) {
//     console.log("Welcome");
// } else {
//     console.log("Wrong Password");
// }


// ✅ Ternary
// pwd_input ? console.log("Welcome") : console.log("Wrong Password");




// 🔥 INTERVIEW COMPARISON

// | Feature     | Nested If     | Ternary       |
// | ----------- | ------------- | ------------- |
// | Readability | Medium        | High          |
// | Conditions  | Multiple      | Only one      |
// | Lines       | More          | Less          |
// | Use Case    | Complex logic | Simple checks |





// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using ternary for complex logic
// ❌ Forgetting : in ternary
// ❌ Deep nesting without readability