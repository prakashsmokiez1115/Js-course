// ===================================================
// 🔰 Increment & Decrement (Deep Understanding)
// ===================================================



// ===================================================
// 1️⃣ POST INCREMENT (num++)
// ===================================================

/*
Rules of Post Increment:
1. Substitute original value
2. Perform operation
3. Increment value
*/

// Example 1
let num = 20; // final value will be 22

let num1 = num++ + num++;
// Step-by-step:
// First num++  → substitute 20, then num becomes 21
// Second num++ → substitute 21, then num becomes 22
// num1 = 20 + 21 = 41

console.log(num, num1); // Output: 22 41



// ===================================================
// 2️⃣ PRE INCREMENT (++num)
// ===================================================

/*
Rules of Pre Increment:
1. Increment value first
2. Substitute incremented value
*/

// Example 2
let newNum = 40; // final value will be 42

let newNum1 = ++newNum;
// ++newNum → 41
// newNum1 = 41

let newNum2 = ++newNum + ++newNum;
// First ++newNum → 42
// Second ++newNum → 43
// newNum2 = 42 + 43 = 85

console.log(newNum, newNum1); // 43 41
console.log(newNum, newNum2); // 43 85



// ===================================================
// 3️⃣ MIXED PRE & POST INCREMENT
// ===================================================

let mixedNum = 30; // final value will be 32

let mixedResult = mixedNum++ + ++mixedNum;
// mixedNum++ → substitute 30, mixedNum = 31
// ++mixedNum → increment to 32, substitute 32
// mixedResult = 30 + 32 = 62

console.log(mixedNum, mixedResult); // 32 62



// ===================================================
// 4️⃣ PRE & POST DECREMENT
// ===================================================

let num4 = 10; // final value will be 8

let num6 = --num4 + num4--;
// --num4 → decrement to 9, substitute 9
// num4-- → substitute 9, then decrement to 8
// num6 = 9 + 9 = 18

console.log(num4, num6); // 8 18





































// 🔥 INTERVIEW GOLD RULES (REMEMBER THIS)
// POST (num++)

// 👉 Use first, then change

// PRE (++num)

// 👉 Change first, then use











// 🧠 QUICK MEMORY TRICK

// | Expression | Meaning                       |
// | ---------- | ----------------------------- |
// | `num++`    | Use old value, then increment |
// | `++num`    | Increment first, then use     |
// | `num--`    | Use old value, then decrement |
// | `--num`    | Decrement first, then use     |




// ⚠️ INTERVIEW WARNING

// ❌ Don’t write code like this in real projects
// ✅ But you MUST understand it for interviews