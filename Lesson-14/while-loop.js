// ===================================================
// 🔰 PART 1: JavaScript While Loop
// ===================================================
// Description:
// while loop is used when:
// ✔ Number of iterations is NOT known
// ✔ Loop depends purely on a condition
// ✔ Execution continues until condition becomes false



// ===================================================
// 📌 PART 2: Syntax of while Loop
// ===================================================
/*
initialization;

while (condition) {
    // statements
    counter;   // update variable
}
*/

// 👉 initialization → done before loop
// 👉 condition      → checked before every iteration
// 👉 counter/update → must be inside loop



// ===================================================
// 1️⃣ PART 3: Example – Countdown using while Loop
// ===================================================

let val = 0;

// Condition is false at start → loop will NOT run
while (val >= 1) {
    console.log(val);
    val--;
}

// 🔎 Why didn’t it run?
// ✔ val = 0
// ✔ Condition → 0 >= 1 → false
// ✔ Loop body skipped
// ✔ This is correct behavior 👍



// ===================================================
// 2️⃣ PART 4: Example – Sum of Digits of a Number
// ===================================================

// Uncomment to test

// let num = 234;   // input number
// let sum = 0;     // to store sum

// while (num > 0) {

//     let last = num % 10;        // get last digit
//     sum = sum + last;           // add digit to sum
//     num = parseInt(num / 10);   // remove last digit
// }

// console.log("Sum of digits:", sum);



// ===================================================
// 🔥 PART 5: Dry Run (Very Important)
// ===================================================
// Example: 234

// | Step | num | last digit | sum |
// | ---- | --- | ---------- | --- |
// | 1    | 234 | 4          | 4   |
// | 2    | 23  | 3          | 7   |
// | 3    | 2   | 2          | 9   |
// | End  | 0   | -          | 9   |

// 👉 Loop stops when num becomes 0
// 👉 Final sum = 9



// ===================================================
// 🧠 PART 6: What a Fresher MUST Understand
// ===================================================

// 🔹 while loop checks condition FIRST
// 🔹 If condition is false → loop never runs
// 🔹 Counter/update is mandatory
// 🔹 Very useful when iteration count is unknown



// ===================================================
// ⚠️ PART 7: Common Beginner Mistakes
// ===================================================

// ❌ Forgetting counter → Infinite loop
// ❌ Wrong condition (always true)
// ❌ Not updating variable inside loop
// ❌ Writing update outside loop



// ===================================================
// 🔥 PART 8: for vs while (Interview Comparison)
// ===================================================

// | Feature        | for Loop                 | while Loop              |
// | -------------- | ------------------------ | ----------------------- |
// | Iterations     | Known                    | Unknown                 |
// | Structure      | All in one line          | Separate initialization |
// | Usage          | Counting loops           | Condition-based loops   |



// ===================================================
// 🚀 PRO TIP (Loop Mastery)
// ===================================================
// 🔥 Always dry run loops on paper
// 🔥 Ensure condition will eventually become false
// 🔥 Prefer for loop when count is known
// 🔥 Prefer while loop when logic depends on condition
// 🔥 Infinite loops are common beginner mistake