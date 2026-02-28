// ===================================================
// 🔰 ES Modules – Importing Named + Default Together
// ===================================================

// You are importing:

// ✔ Default export from signUpPage.js
// ✔ Named exports from loginPage.js (with alias)



// ===================================================
// 1️⃣ Default Import (No Curly Braces)
// ===================================================

import personData from "./signUpPage.js";

// ✔ personData refers to default export
// ✔ Name can be anything
// ✔ No {} required



// ===================================================
// 2️⃣ Named Import with Alias
// ===================================================

import { actor1 as a1, actor2 as a2, actor3 as a3 } from "./loginPage.js";

// ✔ actor1 → renamed as a1
// ✔ actor2 → renamed as a2
// ✔ actor3 → renamed as a3
// ✔ Curly braces are required
// ✔ Must match exported names exactly



// ===================================================
// 3️⃣ Using Imported Values
// ===================================================

console.log(personData);
console.log(a1, a2, a3);



// ===================================================
// 🧠 WHAT IS HAPPENING INTERNALLY
// ===================================================

// signUpPage.js
// export default userData;

// loginPage.js
// export let actor1 = {...}
// export let actor2 = {...}
// export let actor3 = {...}

// So:

// personData → default object
// a1 → actor1 object
// a2 → actor2 object
// a3 → actor3 object



// ===================================================
// 🔥 Alternative: Import Default + Named Together
// ===================================================

// You can also write:

/*
import personData, { actor1, actor2, actor3 }
from "./loginPage.js";
*/

// But ONLY if both default + named exports
// exist in same file.



// ===================================================
// ⚠️ COMMON BEGINNER MISTAKES
// ===================================================

// ❌ Using {} for default import
// ❌ Forgetting alias syntax (as)
// ❌ Wrong file path
// ❌ Mixing up default & named imports
// ❌ Forgetting type="module" in HTML



// ===================================================
// 🔥 Quick Interview Table
// ===================================================

// | Import Type   | Syntax Example |
// |---------------|----------------|
// | Default       | import x from "./file.js" |
// | Named         | import { y } from "./file.js" |
// | Alias Named   | import { y as z } from "./file.js" |
// | All Named     | import * as obj from "./file.js" |



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Use aliasing to avoid naming conflicts
// 🔥 Keep consistent export style in project
// 🔥 Prefer named exports for utility files
// 🔥 Default export for main component/module
// 🔥 Modern frameworks rely heavily on ES Modules