// ===================================================
// 🔰 PART 1: JavaScript Variables Overview (var, let, const)
// ===================================================
// Description:
// JavaScript provides three keywords to declare variables:
// var (old), let (modern), const (modern & safest).
// They differ in re-declaration, re-assignment, and scope behavior.


// ===================================================
// 1️⃣ PART 2: var Keyword
// ===================================================
// Description:
// var is the old way to declare variables.
// It is function-scoped and can cause unexpected bugs.
// Not recommended in modern JavaScript.

// Declaration (creates variable without value)
var age;

// Initialization / Assignment (assigning value later)
age = 40;

// Re-declaration (ALLOWED with var)
// This overwrites previous declaration
var age = 70;

// Re-assignment (ALLOWED)
// Value can be changed anytime
age = "Eighty";

// Final value will be "Eighty"
console.log(age);



// ===================================================
// 2️⃣ PART 3: let Keyword
// ===================================================
// Description:
// let is block-scoped (safer than var).
// Used for variables whose value may change.
// Cannot be re-declared in the same scope.

// Declaration
let newAge;

// Initialization / Assignment
newAge = 150;

// ❌ Re-declaration is NOT allowed
// let newAge = 30;  // This will cause an error

// Re-assignment is allowed
newAge = "Hundred";

// Final value will be "Hundred"
console.log(newAge);



// ===================================================
// 3️⃣ PART 4: const Keyword
// ===================================================
// Description:
// const is block-scoped.
// Must be initialized at the time of declaration.
// Cannot be re-assigned or re-declared.

// Declaration + Initialization (MUST be together)
const employeeName = "xyz";

// ❌ Re-assignment NOT allowed
// employeeName = 30; // Error

console.log(employeeName);



// ===================================================
// 4️⃣ PART 5: Printing Statements (Browser Based)
// ===================================================
// Description:
// These methods interact directly with the browser.
// They do NOT work in Node.js (backend environment).

// alert(employeeName);
// → Shows popup message box

// document.write(newAge);
// document.writeln(newAge);
// → Writes directly into HTML page

// confirm(newAge);
// → Shows OK / Cancel dialog and returns true/false



// ===================================================
// 5️⃣ PART 6: User Input (prompt)
// ===================================================
// Description:
// prompt() is used to take input from user (browser only).
// IMPORTANT: It always returns STRING.

// let userAge = prompt("Enter Your Age");
// console.log(userAge);



// ===================================================
// 6️⃣ PART 7: Console Methods (Developer Tools)
// ===================================================
// Description:
// These methods help developers debug code.

// console.log("Normal log:", userAge);
// → Standard output

// console.error("This is an error message");
// → Displays red error message

// console.warn("This is a warning message");
// → Displays yellow warning

// console.clear();
// → Clears console



// ===================================================
// 🎯 PART 8: What a Fresher MUST Understand
// ===================================================

// 🔹 var
// ✔ Can be re-declared
// ✔ Can be re-assigned
// ❌ Function scoped
// ❌ Can cause bugs → avoid using



// 🔹 let
// ✔ Can be re-assigned
// ❌ Cannot be re-declared
// ✅ Block scoped
// ✅ Best for changeable values



// 🔹 const
// ❌ Cannot be re-declared
// ❌ Cannot be re-assigned
// ✅ Block scoped
// ✅ Best for fixed values



// ===================================================
// 🔥 PART 9: Interview Summary Table
// ===================================================

// | Keyword | Re-declare | Re-assign | Scope        | Use           |
// | ------- | ---------- | --------- | ------------ | ------------- |
// | var     | ✅ Yes      | ✅ Yes     | Function     | ❌ Avoid       |
// | let     | ❌ No       | ✅ Yes     | Block        | ✅ Recommended |
// | const   | ❌ No       | ❌ No      | Block        | ✅ Best        |



// ===================================================
// ⚠️ PART 10: Important Beginner Notes
// ===================================================

// ➡️ alert, prompt, confirm → Work in Browser only
// ➡️ document.write → Writes into HTML page
// ➡️ console.log → Shows output in Developer Console
// ➡️ prompt() always returns STRING (even if user types number)



// ===================================================
// 🚀 PRO TIP (Very Important for Developers)
// ===================================================
// 🔥 Always default to const first
// 🔥 If value needs to change → use let
// 🔥 Avoid var in modern development
// 🔥 Remember: const prevents accidental bugs
// 🔥 In interviews, explain scope clearly (block vs function)