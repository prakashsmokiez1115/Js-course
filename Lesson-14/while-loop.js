// ===================================================
// 🔰 JavaScript While Loop
// ===================================================

// while loop is used when:
// ✔ Number of iterations is NOT known
// ✔ Loop depends on a condition



// ===================================================
// 📌 Syntax of while loop
// ===================================================
/*
initialization;

while (condition) {
    // statements
    counter;
}
*/



// ===================================================
// 1️⃣ Example: Countdown using while loop
// ===================================================

let val = 0;

// Condition is false at start → loop will NOT run
while (val >= 1) {
    console.log(val);
    val--;
}



// ===================================================
// 2️⃣ Example: Sum of Digits of a Number
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





























// 🔹 Why your first loop didn’t run?
// let val = 0;

// while (val >= 1) {
//     ...
// }


// ✔ Condition is false at start
// ✔ So loop body is skipped
// ✔ This is correct behavior 👍











// 🔥 DRY RUN (Sum of Digits)
// Example: 234

// | Step | num | last digit | sum |
// | ---- | --- | ---------- | --- |
// | 1    | 234 | 4          | 4   |
// | 2    | 23  | 3          | 7   |
// | 3    | 2   | 2          | 9   |
// | End  | 0   | -          | 9   |







// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Forgetting counter → infinite loop
// ❌ Wrong condition
// ❌ Not updating variable