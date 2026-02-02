// ===================================================
// 🔰 JavaScript Logical Operators
// ===================================================

// Logical operators are used to:
// ✔ Combine multiple conditions
// ✔ Make decisions (if / else)
// ✔ Validate inputs (login, age check, etc.)



// ===================================================
// 1️⃣ Logical AND ( && )
// ===================================================

/*
cond1     cond2     Result
true      true      true
true      false     false
false     true      false
false     false     false
*/

// Example: Age validation
let age = 18;
console.log(age >= 18 && age <= 30); // true && true → true

age = 35;
console.log(age >= 18 && age <= 30); // true && false → false

age = 16;
console.log(age >= 18 && age <= 30); // false && true → false
// Short-circuit evaluation happens here



// Example: ID proof check
let idProof = "Adhaar";
console.log(
    idProof == "PanCard" && idProof == "Driving License"
); // false && false → false



// ===================================================
// 2️⃣ Logical OR ( || )
// ===================================================

/*
cond1     cond2     Result
true      true      true
true      false     true
false     true      true
false     false     false
*/

// Password validation
let pwd_input = "12345";
console.log(
    pwd_input == "12345" || pwd_input == "54321"
); // true || false → true

pwd_input = "54321";
console.log(
    pwd_input == "12345" || pwd_input == "54321"
); // false || true → true

let userName = "abc";
console.log(
    pwd_input == "54321" || userName == "abc"
); // true || true → true

console.log(
    pwd_input == "12345" || userName == "xyz"
); // false || false → false



// ===================================================
// 3️⃣ Logical NOT ( ! )
// ===================================================

// NOT operator reverses the result

console.log(!(10 > 4)); // !(true) → false
console.log(!false);    // true










































// 🧠 WHAT A FRESHER MUST UNDERSTAND


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






// 🔥 INTERVIEW QUICK TABLE (MEMORIZE)

// | Operator | Meaning | Rule           |    |              |
// | -------- | ------- | -------------- | -- | ------------ |
// | `&&`     | AND     | All true       |    |              |
// | `        |         | `              | OR | Any one true |
// | `!`      | NOT     | Reverse result |    |              |









// ⚠️ IMPORTANT INTERVIEW POINT
// Short-Circuit Evaluation
// false && anything  // stops early → false
// true || anything   // stops early → true


// JavaScript does not check second condition if result is already decided.