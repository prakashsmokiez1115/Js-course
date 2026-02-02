// ===================================================
// 🔰 JavaScript if / else-if / else Statement
// ===================================================

// Used for:
// ✔ Decision making
// ✔ Conditions
// ✔ Validations (marks, age, time, login, etc.)



// ===================================================
// 📌 Syntax (Else-if Ladder)
// ===================================================
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



// ===================================================
// 1️⃣ Example: Time Based Condition
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



// ===================================================
// 2️⃣ Example: Student Marks & Grades
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















































// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 if

// ✔ Runs only if condition is true

// 🔹 else if

// ✔ Checks next condition if previous is false

// 🔹 else

// ✔ Runs when all conditions fail















// 🔥 INTERVIEW IMPORTANT RULES

// 1️⃣ Conditions are checked top to bottom
// 2️⃣ Only ONE block executes
// 3️⃣ else is optional, but recommended
// 4️⃣ Use && to define range conditions











// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Writing conditions without range check
// ❌ Overlapping conditions
// ❌ Forgetting else for invalid input