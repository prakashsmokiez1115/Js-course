// ===================================================
// 🔰 PART 1: JavaScript For Loop
// ===================================================
// Description:
// Loops are used to:
// ✔ Repeat code
// ✔ Avoid writing same lines again and again
// ✔ Work with numbers, arrays, patterns, etc.


// ===================================================
// ❌ PART 2: Without Loop (Bad Practice)
// ===================================================

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// ❌ Repetitive
// ❌ Not scalable
// ❌ Hard to maintain



// ===================================================
// ✅ PART 3: With For Loop (Best Practice)
// ===================================================

// ---------------------------------------------------
// 📌 Syntax
// ---------------------------------------------------
/*
for (initialization; condition; counter) {
    // code to repeat
}
*/

// 👉 initialization → starting point
// 👉 condition      → how long loop runs
// 👉 counter        → update after each iteration



// ===================================================
// 1️⃣ PART 4: Example – Print Numbers from 1 to 10
// ===================================================

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 🔎 Explanation:
// let i = 1  → start from 1
// i <= 10    → run until 10
// i++        → increase by 1 each time



// ===================================================
// 2️⃣ PART 5: Example – Print Only Odd Numbers
// ===================================================

// for (let i = 1; i <= 10; i++) {

//     // Check if number is odd
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 🔎 Explanation:
// i % 2 !== 0 → checks odd numbers
// % gives remainder
// Odd numbers leave remainder 1



// ===================================================
// 🔥 PART 6: How For Loop Works (Very Important)
// ===================================================
/*
1️⃣ Initialization → runs once at start
2️⃣ Condition     → checked before every iteration
3️⃣ Code block    → runs if condition is true
4️⃣ Counter       → updates value
5️⃣ Loop repeats until condition becomes false
*/

// Example Flow:
// i = 1
// 1 <= 10 → true → print 1
// i becomes 2
// 2 <= 10 → true → print 2
// ...
// 11 <= 10 → false → loop stops



// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 Why Loops?

// Without loops → repetitive code
// With loops → clean, short, readable code


// 🔹 Meaning of Parts
// for (let i = 1; i <= 10; i++)

// | Part        | Meaning            |
// | ----------- | ------------------ |
// | `let i = 1` | Starting point     |
// | `i <= 10`   | Loop condition     |
// | `i++`       | Increase counter   |



// ===================================================
// 🔥 PART 8: Interview Favorite Questions
// ===================================================

// ✔ Difference between loop and normal code
// ✔ When does loop stop? (When condition becomes false)
// ✔ What happens if condition is always true?
//    → Infinite loop ❌
// ✔ How to print even numbers?
//    → Use i % 2 === 0
// ✔ Can we decrease numbers?
//    → Yes (i--)



// ===================================================
// 🚀 PRO TIP (Strong Loop Practice)
// ===================================================
// 🔥 Always double-check loop condition
// 🔥 Avoid infinite loops (while(true) without break)
// 🔥 Use meaningful counter names when needed
// 🔥 Practice dry run for understanding
// 🔥 Loops are heavily used with arrays & APIs