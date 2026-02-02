// ===================================================
// 🔰 JavaScript Variables: var, let, const
// ===================================================



// ===================================================
// 1️⃣ var Keyword
// ===================================================

// Declaration
var age;

// Initialization / Assignment
age = 40;

// Re-declaration (ALLOWED with var)
var age = 70;

// Re-assignment (ALLOWED)
age = "Eighty";

console.log(age);



// ===================================================
// 2️⃣ let Keyword
// ===================================================

// Declaration
let newAge;

// Initialization / Assignment
newAge = 150;

// ❌ Re-declaration is NOT allowed
// let newAge = 30;

// Re-assignment is allowed
newAge = "Hundred";

console.log(newAge);



// ===================================================
// 3️⃣ const Keyword
// ===================================================

// Declaration + Initialization (MUST be together)
const employeeName = "xyz";

// ❌ Re-assignment NOT allowed
// employeeName = 30;

console.log(employeeName);



// ===================================================
// 4️⃣ Printing Statements (Browser Based)
// ===================================================

// alert(employeeName);

// document.write(newAge);
// document.writeln(newAge);

// confirm(newAge);



// ===================================================
// 5️⃣ User Input (prompt)
// ===================================================

// let userAge = prompt("Enter Your Age");
// console.log(userAge);



// ===================================================
// 6️⃣ Console Methods (Developer Tools)
// ===================================================

// console.log("Normal log:", userAge);
// console.error("This is an error message");
// console.warn("This is a warning message");

// console.clear(); // clears console










































// ✅ WHAT A FRESHER MUST UNDERSTAND FROM THIS

// 🔹 var
// ✔ Can be re-declared
// ✔ Can be re-assigned
// ❌ Causes bugs → avoid using





// 🔹 let
// ✔ Can be re-assigned
// ❌ Cannot be re-declared
// ✅ Best for changeable values





// 🔹 const
// ❌ Cannot be re-declared
// ❌ Cannot be re-assigned
// ✅ Best for fixed values









// 🔥 INTERVIEW SUMMARY (VERY IMPORTANT)

// | Keyword | Re-declare | Re-assign | Use           |
// | ------- | ---------- | --------- | ------------- |
// | var     | ✅ Yes      | ✅ Yes     | ❌ Avoid       |
// | let     | ❌ No       | ✅ Yes     | ✅ Recommended |
// | const   | ❌ No       | ❌ No      | ✅ Best        |






// ⚠️ IMPORTANT NOTE (BEGINNERS ALWAYS MISS THIS)

//➡️ alert, prompt, confirm → Browser only
//➡️ document.write → HTML page
//➡️ console.log → Developer Console
//➡️ prompt() always returns string