// ===================================================
// 🔰 ES Modules – Named Export
// ===================================================

// Named exports allow exporting multiple values
// from the same file.

// We use:
// export before variable / function / class

// And import using:
// import { name } from "./file.js"



// ===================================================
// 1️⃣ Named Export Example
// ===================================================

export let actor1 = {
    name: "Vijay",
    age: 52
};

export let actor2 = {
    name: "Ajith",
    age: 51
};

export let actor3 = {
    name: "Rajini",
    age: 70
};



// ===================================================
// 2️⃣ How to Import Named Exports
// ===================================================

// In another file:

/*
import { actor1, actor2, actor3 } from "./actors.js";

console.log(actor1.name);
console.log(actor2.age);
*/



// ===================================================
// 3️⃣ Import with Alias (Very Useful)
// ===================================================

/*
import { actor1 as hero1 } from "./actors.js";

console.log(hero1);
*/



// ===================================================
// 4️⃣ Import All Named Exports
// ===================================================

/*
import * as actors from "./actors.js";

console.log(actors.actor1);
console.log(actors.actor2);
*/



// ===================================================
// 🧠 WHAT YOU MUST UNDERSTAND
// ===================================================

// 🔥 Named Export Rules

// ✔ Can export multiple values
// ✔ Must import using curly braces {}
// ✔ Name must match exactly (case-sensitive)
// ✔ Can rename using "as"
// ✔ Works only in module environment (type="module")



// ===================================================
// 🔥 Common Beginner Mistakes
// ===================================================

// ❌ Forgetting curly braces
// ❌ Wrong file path
// ❌ Not using type="module" in HTML
// ❌ Mixing default and named incorrectly



// ===================================================
// 🔥 Named vs Default Export (Quick Preview)
// ===================================================

// | Feature          | Named Export        | Default Export      |
// | ---------------- | ------------------ | ------------------ |
// | Multiple allowed | ✅ Yes              | ❌ Only one         |
// | Curly braces     | ✅ Required         | ❌ Not required     |
// | Rename freely    | ❌ Must use `as`    | ✅ Any name allowed |



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Use named exports in utility files
// 🔥 Use default export when file exports one main thing
// 🔥 Prefer consistent export style in project
// 🔥 Always use ES modules in modern JS apps