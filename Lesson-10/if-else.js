// ===================================================
// 🔰 PART 1: JavaScript if / else-if / else Statement
// ===================================================
// Description:
// Used for:
// ✔ Decision making
// ✔ Conditions
// ✔ Validations (marks, age, time, login, etc.)



// ===================================================
// 📌 PART 2: Syntax (Else-if Ladder)
// ===================================================
// Description:
// The else-if ladder is used when you need to check
// multiple conditions in sequence.

/*
if (condition1) {
    // statement
}
else if (condition2) {
    // statement
}
else if (condition3) {
    // statement
}
else {
    // default statement
}
*/

// 👉 Conditions are checked from top to bottom.
// 👉 As soon as one condition becomes true,
//     its block runs and the rest are skipped.



// ===================================================
// 1️⃣ PART 3: Example – Time Based Condition
// ===================================================

let hour = -1;

// Uncomment and test one by one

if (hour >= 1 && hour <= 6) {
    console.log("Early Morning");
}
else if (hour >= 7 && hour <= 12) {
    console.log("Morning");
}
else if (hour >= 13 && hour <= 18) {
    console.log("Noon");
}
else if (hour >= 19 && hour <= 24) {
    console.log("Night");
}
else {
    console.log("It is not a valid hour");
}

// 🔎 Explanation:
// ✔ Uses logical AND (&&) to define ranges.
// ✔ If hour doesn't match any valid range,
//   the else block runs.
// ✔ Since hour = -1, output will be:
//   "It is not a valid hour"



// ===================================================
// 2️⃣ PART 4: Example – Student Marks & Grades
// ===================================================

let mark = 32;

// Uncomment and test

if (mark >= 41 && mark <= 60) {
    console.log("E-Grade");
}
else if (mark >= 61 && mark <= 80) {
    console.log("C-Grade");
}
else if (mark >= 81 && mark <= 90) {
    console.log("A-Grade");
}
else if (mark >= 91 && mark <= 100) {
    console.log("S-Grade");
}
else {
    console.log("Arrear");
}

// 🔎 Explanation:
// ✔ Conditions are checked in order.
// ✔ Only ONE block executes.
// ✔ Since mark = 32 (below 41),
//   output will be "Arrear".





// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 if
// ✔ Runs only if condition is true

// 🔹 else if
// ✔ Checks next condition if previous one is false

// 🔹 else
// ✔ Runs when ALL conditions fail




// ===================================================
// 🔥 PART 6: Interview Important Rules
// ===================================================

// 1️⃣ Conditions are checked top to bottom
// 2️⃣ Only ONE block executes
// 3️⃣ else is optional, but recommended
// 4️⃣ Use && to define range conditions
// 5️⃣ Always handle invalid input using else




// ===================================================
// ⚠️ PART 7: Common Beginner Mistakes
// ===================================================

// ❌ Writing conditions without proper range check
// ❌ Overlapping conditions (example: >= 50 twice)
// ❌ Forgetting else for invalid input
// ❌ Not validating negative values
// ❌ Using = instead of == or === in condition



// ===================================================
// 🚀 PRO TIP (Clean Logical Thinking)
// ===================================================
// 🔥 Always think: "What if none of these conditions match?"
// 🔥 Arrange conditions from smallest to largest OR vice versa
// 🔥 Avoid overlapping ranges
// 🔥 Prefer strict comparison (===) when possible
// 🔥 Write clean, readable conditions — not clever ones