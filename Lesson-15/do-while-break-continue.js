// ===================================================
// 🔰 PART 1: JavaScript do...while Loop
// ===================================================
// Description:
// do...while loop runs AT LEAST ONCE
// even if the condition is false.
// Condition is checked AFTER executing the block.


// ===================================================
// 📌 PART 2: Syntax of do...while
// ===================================================
/*
do {
    // code
} while (condition);
*/

// 👉 Code runs first
// 👉 Condition is checked later
// 👉 Semicolon (;) at end is mandatory



// ===================================================
// 1️⃣ PART 3: Example – do...while (Runs Once)
// ===================================================

// let num = 21;

// do {
//     console.log(num);
//     num++;
// } while (num <= 20);

// 🔎 Explanation:
// num = 21
// do block runs → prints 21
// Then condition checked → 22 <= 20 → false
// Loop stops
// ✔ Ran once even though condition was false



// ===================================================
// 🔥 PART 4: Why it runs?
// ===================================================
// ✔ do block executes first
// ✔ Condition is checked after execution
// ✔ Key difference from while loop



// ===================================================
// 🔰 PART 5: break Statement
// ===================================================
// Description:
// break immediately stops the loop
// and exits completely.


// ===================================================
// 2️⃣ PART 6: Example – break inside loop
// ===================================================

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 === 0) {

//         if (i === 10) {
//             break;   // loop stops here
//         }

//         console.log(i);
//     }
// }

// 🔎 Explanation:
// ✔ Prints even numbers
// ✔ Stops completely when i === 10
// ✔ After break → loop ends immediately



// ===================================================
// 🔰 PART 7: continue Statement
// ===================================================
// Description:
// continue skips current iteration
// but does NOT stop the loop.
// Loop continues with next value.


// ===================================================
// 3️⃣ PART 8: Example – continue
// ===================================================

for (let i = 1; i <= 20; i++) {

    if (i === 10) {
        continue;   // skips 10
    }

    console.log(i);
}

// 🔎 Explanation:
// ✔ When i = 10 → skipped
// ✔ Loop continues from 11
// ✔ Everything else prints normally




// ===================================================
// 🧠 PART 9: What a Fresher MUST Understand
// ===================================================

// | Feature             | while  | do...while |
// | ------------------- | ------ | ---------- |
// | Runs at least once? | ❌ No   | ✅ Yes      |
// | Condition check     | Before | After      |


// 🔹 break
// ✔ Completely stops the loop
// ✔ Used when condition is met


// 🔹 continue
// ✔ Skips current loop step
// ✔ Loop continues normally




// ===================================================
// 🔥 PART 10: Interview Difference
// ===================================================

// break;    → EXIT loop completely
// continue; → SKIP current iteration only




// ===================================================
// 🚀 PRO TIP (Loop Control Mastery)
// ===================================================
// 🔥 Use break when goal is achieved
// 🔥 Use continue to skip unwanted values
// 🔥 Prefer do...while when at least one execution is required
// 🔥 Always ensure loop condition eventually becomes false
// 🔥 Understand flow control deeply for interviews