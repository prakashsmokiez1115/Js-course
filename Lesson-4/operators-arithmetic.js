// ===================================================
// 🔰 PART 1: JavaScript Arithmetic Operators Overview
// ===================================================
// Description:
// Arithmetic operators are used to perform mathematical calculations.
// They work with numbers and return numeric results.


// ===================================================
// 1️⃣ PART 2: Basic Arithmetic Operators
// ===================================================
// Description:
// These are fundamental math operators used in daily coding.

// ➕ Addition
// Adds two numbers
console.log(10 + 20);   // 30


// ➖ Subtraction
// Subtracts right value from left
console.log(20 - 5);    // 15


// ✖ Multiplication
// Multiplies two numbers
console.log(20 * 2);    // 40


// ➗ Division
// Divides left by right
// Result is quotient
console.log(20 / 2);    // 10


// 🔁 Modulus (Remainder)
// Returns remainder after division
console.log(21 % 5);    // 1
// 21 ÷ 5 = 4 remainder 1


// 🔢 Exponentiation (Power)
// Raises left value to power of right value
console.log(3 ** 4);    // 81
// 3 * 3 * 3 * 3 = 81



// ===================================================
// 2️⃣ PART 3: Increment Operator ( ++ )
// ===================================================
// Description:
// Used to increase a number by 1.
// Very common in loops and counters.

// 🔹 Manual increment
let num = 10;
num = num + 1;          // 10 + 1 = 11
console.log(num);


// 🔹 Post Increment (num++)
// First returns value, then increments
let numPost = 15;
numPost++;              // 15 → 16
console.log(numPost);


// 🔹 Pre Increment (++num)
// First increments, then returns value
++numPost;              // 16 → 17
console.log(numPost);



// ===================================================
// 3️⃣ PART 4: Decrement Operator ( -- )
// ===================================================
// Description:
// Used to decrease a number by 1.

// 🔹 Post Decrement (num--)
let num1 = 20;
num1--;                 // 20 → 19
console.log(num1);


// 🔹 Pre Decrement (--num)
--num1;                 // 19 → 18
console.log(num1);





// ===================================================
// 🎯 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Arithmetic Operators Summary

// | Operator | Meaning        |
// | -------- | -------------- |
// | `+`      | Addition       |
// | `-`      | Subtraction    |
// | `*`      | Multiplication |
// | `/`      | Division       |
// | `%`      | Remainder      |
// | `**`     | Power          |



// 🔹 Increment / Decrement (Interview Favorite 🔥)

// | Type           | Example | Result Logic           |
// | -------------- | ------- | ---------------------- |
// | Post Increment | `num++` | Use first, then +1     |
// | Pre Increment  | `++num` | +1 first, then use     |
// | Post Decrement | `num--` | Use first, then -1     |
// | Pre Decrement  | `--num` | -1 first, then use     |



// ===================================================
// ⚠️ PART 6: Very Important Interview Example
// ===================================================

let x = 5;

console.log(x++); // prints 5 (then x becomes 6)
console.log(++x); // prints 7 (increments first, then prints)

// Step-by-step explanation:
// 1️⃣ x = 5
// 2️⃣ x++ → prints 5, x becomes 6
// 3️⃣ ++x → x becomes 7, then prints 7

// This question is extremely common in interviews.



// ===================================================
// 🚀 PRO TIP (For Strong Logic Building)
// ===================================================
// 🔥 Use % (modulus) to check even/odd numbers
// 🔥 Use ++ inside loops (for, while)
// 🔥 Always understand execution order
// 🔥 Practice writing dry runs on paper
// 🔥 Interviewers love increment/decrement trick questions