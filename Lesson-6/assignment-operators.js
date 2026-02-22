// ===================================================
// 🔰 PART 1: JavaScript Assignment Operators
// ===================================================
// Description:
// Assignment operators are used to:
// ✔ Assign values to variables
// ✔ Update existing values
// ✔ Shorten mathematical operations (cleaner code)


// ===================================================
// 1️⃣ PART 2: Basic Assignment (=)
// ===================================================
// Description:
// The = operator assigns a value to a variable.

let x = 10;   // Assign 10 to x
console.log(x); // 10



// ===================================================
// 2️⃣ PART 3: Add & Assign (+=)
// ===================================================
// Description:
// Adds a value to the variable and stores the result back.
// Shortcut for: x = x + value

// x += 5  →  x = x + 5

x += 5;
console.log(x); // 15



// ===================================================
// 3️⃣ PART 4: Subtract & Assign (-=)
// ===================================================
// Description:
// Subtracts a value and updates the variable.
// Shortcut for: x = x - value

// x -= 3  →  x = x - 3

x -= 3;
console.log(x); // 12



// ===================================================
// 4️⃣ PART 5: Multiply & Assign (*=)
// ===================================================
// Description:
// Multiplies and updates the variable.
// Shortcut for: x = x * value

// x *= 2  →  x = x * 2

x *= 2;
console.log(x); // 24



// ===================================================
// 5️⃣ PART 6: Divide & Assign (/=)
// ===================================================
// Description:
// Divides and updates the variable.
// Shortcut for: x = x / value

// x /= 4  →  x = x / 4

x /= 4;
console.log(x); // 6



// ===================================================
// 6️⃣ PART 7: Modulus & Assign (%=)
// ===================================================
// Description:
// Applies modulus (remainder) and updates the variable.
// Shortcut for: x = x % value

// x %= 4  →  x = x % 4

x %= 4;
console.log(x); // 2



// ===================================================
// 7️⃣ PART 8: Exponent & Assign (**=)
// ===================================================
// Description:
// Raises value to a power and updates variable.
// Shortcut for: x = x ** value

// x **= 3  →  x = x ** 3

x **= 3;
console.log(x); // 8




// ===================================================
// 🧠 PART 9: How This Works (Very Important)
// ===================================================

// Every assignment operator is just a shortcut.

// Example:
x += 5;

// Actually means:
x = x + 5;

// Same logic applies to all other assignment operators.




// ===================================================
// 🔥 PART 10: Interview Table (Memorize This)
// ===================================================

// | Operator | Meaning           |
// | -------- | ----------------- |
// | `=`      | Assign            |
// | `+=`     | Add & assign      |
// | `-=`     | Subtract & assign |
// | `*=`     | Multiply & assign |
// | `/=`     | Divide & assign   |
// | `%=`     | Modulus & assign  |
// | `**=`    | Power & assign    |




// ===================================================
// ⚠️ PART 11: Beginner Mistakes
// ===================================================

// ❌ Wrong:
x =+ 5;  // This assigns positive 5, not addition

// ✅ Correct:
x += 5;




// ===================================================
// 🚀 PRO TIP (Clean Code Practice)
// ===================================================
// 🔥 Use assignment operators to write shorter & cleaner code
// 🔥 Very common inside loops and counters
// 🔥 Understand that variable updates step-by-step
// 🔥 Always read left to right: "x plus equals 5"
// 🔥 Small syntax mistakes (=+ vs +=) can break logic