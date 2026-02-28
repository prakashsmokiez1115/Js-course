// ===================================================
// 🔰 ES Modules – Default Export
// ===================================================

// Default export allows exporting ONE main value
// from a file.

// ✔ Only ONE default export per file
// ✔ No curly braces while importing
// ✔ Can rename freely while importing



// ===================================================
// 1️⃣ Default Export Example
// ===================================================

let userData = {
    name: "Arjun",
    age: 55,
    profession: "Actor",
};

export default userData;



// ===================================================
// 2️⃣ How to Import Default Export
// ===================================================

// In another file:

/*
import user from "./userdata.js";

console.log(user.name);
*/




// ===================================================
// 3️⃣ Rename While Importing (Very Important)
// ===================================================

// You can rename freely:

/*
import hero from "./userdata.js";

console.log(hero.profession);
*/




// ===================================================
// 4️⃣ Default Export with Function
// ===================================================

/*
export default function greet() {
    console.log("Hello");
}
*/

// Import:

/*
import greetFunction from "./file.js";
greetFunction();
*/



// ===================================================
// 🧠 WHAT YOU MUST UNDERSTAND
// ===================================================

// 🔥 Default Export Rules

// ✔ Only one default export per file
// ✔ Import without {}
// ✔ Can rename freely
// ✔ Works only in module system (type="module")



// ===================================================
// 🔥 Named vs Default Export (Interview Comparison)
// ===================================================

// | Feature              | Named Export        | Default Export      |
// | -------------------- | ------------------ | ------------------ |
// | Multiple allowed     | ✅ Yes              | ❌ Only one         |
// | Curly braces needed  | ✅ Yes              | ❌ No               |
// | Rename while import  | ❌ Use `as`         | ✅ Any name allowed |



// ===================================================
// ⚠️ COMMON BEGINNER MISTAKES
// ===================================================

// ❌ Trying to export two defaults
// ❌ Using {} while importing default
// ❌ Forgetting file extension in browser
// ❌ Not using type="module" in HTML



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Use default export when file has one main entity
// 🔥 Use named exports for utility/helper collections
// 🔥 Keep export style consistent across project
// 🔥 Most modern frameworks (React, Node ESM) use this pattern