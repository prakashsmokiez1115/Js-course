// ===================================================
// 🔰 JavaScript do...while Loop
// ===================================================

// do...while loop runs AT LEAST ONCE
// even if the condition is false



// ===================================================
// 📌 Syntax of do...while
// ===================================================
/*
do {
    // code
} while (condition);
*/



// ===================================================
// 1️⃣ Example: do...while (Runs once)
// ===================================================

// let num = 21;

// do {
//     console.log(num);
//     num++;
// } while (num <= 20);



// ===================================================
// 🔥 Why it runs?
// ===================================================
// Condition is false, but do block runs ONCE
// This is the key difference from while loop



// ===================================================
// 🔰 break Statement
// ===================================================

// break stops the loop immediately



// ===================================================
// 2️⃣ Example: break inside loop
// ===================================================

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 === 0) {

//         if (i === 10) {
//             break;   // loop stops here
//         }

//         console.log(i);
//     }
// }



// ===================================================
// 🔰 continue Statement
// ===================================================

// continue skips current iteration
// loop continues with next value



// ===================================================
// 3️⃣ Example: continue
// ===================================================

for (let i = 1; i <= 20; i++) {

    if (i === 10) {
        continue;   // skips 10
    }

    console.log(i);
}




























// 🧠 WHAT A FRESHER MUST UNDERSTAND


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




// 🔥 INTERVIEW DIFFERENCE
// break;    // EXIT loop
// continue; // SKIP current iteration