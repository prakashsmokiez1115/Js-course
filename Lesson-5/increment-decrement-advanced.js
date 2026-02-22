// ===================================================
// 🔰 PART 1: Increment & Decrement (Deep Understanding)
// ===================================================
// Description:
// Increment (++) and Decrement (--) operators can behave differently
// depending on whether they are used BEFORE or AFTER a variable.
// This section explains how JavaScript evaluates them step-by-step.


// ===================================================
// 1️⃣ PART 2: POST INCREMENT (num++)
// ===================================================

/*
Rules of Post Increment:
1️⃣ Substitute original value
2️⃣ Perform operation
3️⃣ Increment value
*/

// Example 1
let num = 20; // final value will be 22

let num1 = num++ + num++;

// Step-by-step breakdown:
// First num++
// → Substitute 20
// → Then num becomes 21

// Second num++
// → Substitute 21
// → Then num becomes 22

// num1 = 20 + 21 = 41

console.log(num, num1); // Output: 22 41



// ===================================================
// 2️⃣ PART 3: PRE INCREMENT (++num)
// ===================================================

/*
Rules of Pre Increment:
1️⃣ Increment value first
2️⃣ Substitute incremented value
*/

// Example 2
let newNum = 40; // final value will be 43

let newNum1 = ++newNum;

// ++newNum
// → Increment to 41
// → Substitute 41
// newNum1 = 41

let newNum2 = ++newNum + ++newNum;

// First ++newNum
// → 42

// Second ++newNum
// → 43

// newNum2 = 42 + 43 = 85

console.log(newNum, newNum1); // 43 41
console.log(newNum, newNum2); // 43 85



// ===================================================
// 3️⃣ PART 4: MIXED PRE & POST INCREMENT
// ===================================================

let mixedNum = 30; // final value will be 32

let mixedResult = mixedNum++ + ++mixedNum;

// mixedNum++
// → Substitute 30
// → mixedNum becomes 31

// ++mixedNum
// → Increment to 32
// → Substitute 32

// mixedResult = 30 + 32 = 62

console.log(mixedNum, mixedResult); // 32 62



// ===================================================
// 4️⃣ PART 5: PRE & POST DECREMENT
// ===================================================

let num4 = 10; // final value will be 8

let num6 = --num4 + num4--;

// --num4
// → Decrement to 9
// → Substitute 9

// num4--
// → Substitute 9
// → Then decrement to 8

// num6 = 9 + 9 = 18

console.log(num4, num6); // 8 18




// ===================================================
// 🔥 PART 6: Interview Gold Rules (Remember This)
// ===================================================

// POST (num++)
// 👉 Use first, then change

// PRE (++num)
// 👉 Change first, then use




// ===================================================
// 🧠 PART 7: Quick Memory Trick
// ===================================================

// | Expression | Meaning                       |
// | ---------- | ----------------------------- |
// | `num++`    | Use old value, then increment |
// | `++num`    | Increment first, then use     |
// | `num--`    | Use old value, then decrement |
// | `--num`    | Decrement first, then use     |




// ===================================================
// ⚠️ PART 8: Interview Warning
// ===================================================

// ❌ Avoid writing complex increment logic in real projects
// ❌ It reduces readability
// ✅ But you MUST understand execution order for interviews
// ✅ Always do step-by-step dry run on paper



// ===================================================
// 🚀 PRO TIP (Logic Mastery Tip)
// ===================================================
// 🔥 When confused, rewrite expressions in steps
// 🔥 Replace num++ with:
//     temp = num;
//     num = num + 1;
// 🔥 Replace ++num with:
//     num = num + 1;
//     temp = num;
// 🔥 Understanding evaluation order makes you interview-ready
// 🔥 Clean code > clever code in real-world projects