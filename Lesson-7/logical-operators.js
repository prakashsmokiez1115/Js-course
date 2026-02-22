// ===================================================
// 🔰 PART 1: JavaScript Logical Operators
// ===================================================
// Description:
// Logical operators are used to:
// ✔ Combine multiple conditions
// ✔ Make decisions (if / else)
// ✔ Validate inputs (login systems, age check, etc.)



// ===================================================
// 1️⃣ PART 2: Logical AND ( && )
// ===================================================
// Description:
// AND (&&) returns TRUE only if ALL conditions are true.

/*
cond1     cond2     Result
true      true      true
true      false     false
false     true      false
false     false     false
*/

// 🔹 Example: Age validation
let age = 18;

console.log(age >= 18 && age <= 30);
// true && true → true

age = 35;
console.log(age >= 18 && age <= 30);
// true && false → false

age = 16;
console.log(age >= 18 && age <= 30);
// false && true → false

// 👉 Short-circuit evaluation happens here
// If first condition becomes false,
// JavaScript stops checking further.


// 🔹 Example: ID proof check
let idProof = "Adhaar";

console.log(
    idProof == "PanCard" && idProof == "Driving License"
);
// false && false → false
// Both must match to return true



// ===================================================
// 2️⃣ PART 3: Logical OR ( || )
// ===================================================
// Description:
// OR (||) returns TRUE if ANY ONE condition is true.

/*
cond1     cond2     Result
true      true      true
true      false     true
false     true      true
false     false     false
*/

// 🔹 Password validation
let pwd_input = "12345";

console.log(
    pwd_input == "12345" || pwd_input == "54321"
);
// true || false → true

pwd_input = "54321";

console.log(
    pwd_input == "12345" || pwd_input == "54321"
);
// false || true → true

let userName = "abc";

console.log(
    pwd_input == "54321" || userName == "abc"
);
// true || true → true

console.log(
    pwd_input == "12345" || userName == "xyz"
);
// false || false → false

// 👉 If first condition is true,
// JavaScript stops checking (short-circuit).



// ===================================================
// 3️⃣ PART 4: Logical NOT ( ! )
// ===================================================
// Description:
// NOT (!) reverses the boolean result.

// If true → becomes false
// If false → becomes true

console.log(!(10 > 4)); // !(true) → false
console.log(!false);    // true




// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Logical AND (&&)
// 👉 ALL conditions must be true
// Example:
// age >= 18 && age <= 30


// 🔹 Logical OR (||)
// 👉 ANY ONE condition must be true
// Example:
// password == "12345" || password == "54321"


// 🔹 Logical NOT (!)
// 👉 Reverses the result
// Example:
// !true  → false
// !false → true




// ===================================================
// 🔥 PART 6: Interview Quick Table (Corrected)
// ===================================================

// | Operator | Meaning | Rule                |
// | -------- | ------- | ------------------- |
// | `&&`     | AND     | All conditions true |
// | `||`     | OR      | Any one true        |
// | `!`      | NOT     | Reverse result      |




// ===================================================
// ⚠️ PART 7: Important Interview Concept
// ===================================================
// 🔥 Short-Circuit Evaluation

// false && anything  → stops early → false
// true  || anything  → stops early → true

// JavaScript does NOT check second condition
// if result is already decided.


// ===================================================
// 🚀 PRO TIP (Real-World Usage)
// ===================================================
// 🔥 Use && for range validation (age, marks, salary)
// 🔥 Use || for login or multiple acceptable values
// 🔥 Always prefer === instead of == in real projects
// 🔥 Understand short-circuiting — very common interview question
// 🔥 Logical operators are heavily used in React rendering