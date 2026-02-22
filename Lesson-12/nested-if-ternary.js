// ===================================================
// 🔰 PART 1: JavaScript Nested If Statement
// ===================================================
// Description:
// Nested if means:
// ✔ One if condition inside another if
// ✔ Used when multiple validations depend on each other
// ✔ Execution flows step-by-step (outer → inner)


// ===================================================
// 1️⃣ PART 2: Example – Selection Criteria (Nested If)
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

// 🔎 Step-by-step Flow:
// 1️⃣ First age is checked
// 2️⃣ If age is valid → height is checked
// 3️⃣ If height is valid → weight is checked
// 4️⃣ If all are valid → "You are Selected"
// 5️⃣ If any condition fails → related message prints



// ===================================================
// 🔥 PART 3: How Nested If Works (Important)
// ===================================================

// ✔ Outer condition must be true to enter inner block
// ✔ If outer fails → inner never runs
// ✔ Used when conditions depend on previous validation
// ✔ Common in:
//    ➡️ Eligibility checks
//    ➡️ Forms validation
//    ➡️ Login systems
//    ➡️ Selection criteria




// ===================================================
// 🔰 PART 4: JavaScript Ternary Operator
// ===================================================
// Description:
// Ternary operator is a SHORTCUT for if/else.
// Used when you have ONLY two outcomes.


// ===================================================
// 📌 PART 5: Syntax of Ternary Operator
// ===================================================
/*
condition ? statement_if_true : statement_if_false
*/

// 👉 If condition is true → first statement runs
// 👉 If false → second statement runs



// ===================================================
// 2️⃣ PART 6: Example – Password Validation (Ternary)
// ===================================================

let pwd_input = false;

pwd_input
    ? console.log("Welcome to website")
    : console.log("Password Incorrect");




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 Nested if

// ✔ Used when multiple conditions depend on each other
// ✔ Execution flows inside → deeper → deeper
// ✔ Best for complex validation logic



// 🔹 Ternary Operator

// ✔ Shortcut for if / else
// ✔ Works ONLY for two outcomes
// ✔ Makes code shorter and cleaner (when simple)



// ===================================================
// 🔎 PART 8: Normal if/else vs Ternary
// ===================================================

// ❌ Normal if/else

// if (pwd_input) {
//     console.log("Welcome");
// } else {
//     console.log("Wrong Password");
// }


// ✅ Ternary
// pwd_input ? console.log("Welcome") : console.log("Wrong Password");




// ===================================================
// 🔥 PART 9: Interview Comparison
// ===================================================

// | Feature     | Nested If     | Ternary       |
// | ----------- | ------------- | ------------- |
// | Readability | Medium        | High (simple) |
// | Conditions  | Multiple      | Only two      |
// | Lines       | More          | Less          |
// | Use Case    | Complex logic | Simple checks |




// ===================================================
// ⚠️ PART 10: Common Beginner Mistakes
// ===================================================

// ❌ Using ternary for complex multi-line logic
// ❌ Forgetting : in ternary
// ❌ Deep nesting without indentation
// ❌ Not formatting nested if properly
// ❌ Writing unreadable one-line ternaries




// ===================================================
// 🚀 PRO TIP (Clean Code Principle)
// ===================================================
// 🔥 Use nested if only when logic truly depends step-by-step
// 🔥 Avoid very deep nesting (3+ levels → refactor)
// 🔥 Use ternary only for simple true/false checks
// 🔥 Readability > Short code
// 🔥 Clean indentation is very important in nested logic