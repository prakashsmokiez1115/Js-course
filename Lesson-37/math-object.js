// ===================================================
// 🔰 PART 1: JavaScript Math Object Methods
// ===================================================
// Description:
// Math is a built-in object.
// ✔ Used for mathematical calculations
// ✔ All methods are static
// ✔ Not a constructor (no new Math())



// ===================================================
// 1️⃣ PART 2: Math.abs(x) → Absolute Value
// ===================================================

console.log(Math.abs(0));
console.log(Math.abs(-10));

// 🔎 Returns positive version of number
// |-10| → 10



// ===================================================
// 2️⃣ PART 3: Math.sign(x) → Returns Sign of Number
// ===================================================

console.log(Math.sign(-10));  // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(10));   // 1

// 🔎 -1 → negative
// 🔎  0 → zero
// 🔎  1 → positive



// ===================================================
// 3️⃣ PART 4: Math.sqrt(x) → Square Root
// ===================================================

console.log(Math.sqrt(25));

// 🔎 √25 → 5



// ===================================================
// 4️⃣ PART 5: Math.cbrt(x) → Cube Root
// ===================================================

console.log(Math.cbrt(27));

// 🔎 ∛27 → 3



// ===================================================
// 5️⃣ PART 6: Math.pow(base, exponent)
// ===================================================

console.log(Math.pow(6, 3));

// 🔎 6³ → 216
// ✔ Alternative: 6 ** 3



// ===================================================
// 6️⃣ PART 7: Math.min() & Math.max()
// ===================================================

let arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr, 10, 15, 0, -1));
console.log(Math.max(...arr, 100, 30));

// 🔎 Important:
// ✔ Use spread operator for arrays
// ❌ Math.max(arr) → NaN
// ✅ Math.max(...arr)



// ===================================================
// 7️⃣ PART 8: Math.random()
// ===================================================

let randomNum = Math.random() * 100;
console.log(randomNum.toFixed(3));

// 🔎 Math.random()
// ✔ Generates number between 0 and 1
// ✔ Multiply to scale range
// ✔ toFixed() formats decimals



// ===================================================
// 8️⃣ PART 9: Rounding Methods
// ===================================================

// Math.ceil() → Always rounds UP
console.log(Math.ceil(2.01));   // 3

// Math.floor() → Always rounds DOWN
console.log(Math.floor(2.99));  // 2

// Math.round() → Normal rounding
console.log(Math.round(2.49));  // 2
console.log(Math.round(2.51));  // 3

// Math.trunc() → Removes decimal part
console.log(Math.trunc(12.999999)); // 12




// ===================================================
// 🧠 PART 10: Important Concepts You MUST Know
// ===================================================

// 🔥 Math.random() Important Formula

// Random number between 0 and 1:
// Math.random()

// Random number between 1 and 100:
// Math.floor(Math.random() * 100) + 1

// 👉 Very common interview question.



// ===================================================
// 🔥 PART 11: Rounding Differences
// ===================================================

// | Method  | Behavior        |
// | ------- | --------------- |
// | ceil()  | Round UP        |
// | floor() | Round DOWN      |
// | round() | Normal rounding |
// | trunc() | Remove decimals |


// Example:
// 2.49 → round() = 2
// 2.51 → round() = 3




// ===================================================
// 🔥 PART 12: Math.min() & Math.max()
// ===================================================

// ✔ Use spread operator for arrays
// ✔ Cannot pass array directly

// ❌ Wrong:
// Math.max(arr)

// ✅ Correct:
// Math.max(...arr)




// ===================================================
// ⚠️ PART 13: Important Notes
// ===================================================

// ✔ Math is NOT a constructor
// ✔ Math methods are static
// ✔ Always use Math.method()
// ✔ Math does NOT mutate anything
// ✔ Works only with numbers




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Always use Math.floor for random integer
// 🔥 Prefer exponent operator (**) over Math.pow
// 🔥 Use spread operator with min/max
// 🔥 Rounding differences are common interview traps
// 🔥 Practice random range formulas deeply