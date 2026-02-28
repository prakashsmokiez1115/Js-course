// ===================================================
// 🔰 PART 1: JavaScript Spread Operator ( ... )
// ===================================================
// Description:
// Spread operator is used to:
// ✔ Copy arrays
// ✔ Merge arrays
// ✔ Copy objects
// ✔ Update values immutably (VERY IMPORTANT in React)
// ✔ Avoid direct mutation



// ===================================================
// 1️⃣ PART 2: Spread Operator with Arrays
// ===================================================

// let hobbies = ["Cricket", "Football", "BasketBall"];
// let hobbies1 = ["Reader", "Writer"];

// 🔹 Merge arrays
// let newArr = [...hobbies, ...hobbies1];

// 🔹 Change original array
// hobbies[0] = "BaseBall";

// 🔹 Add new values
// let newArr1 = [...newArr, "VideoCreator", "Content Writer"];

// console.log(newArr);
// console.log(newArr1);

// 🔎 Explanation:
// ✔ [...hobbies] creates shallow copy
// ✔ ... expands array values
// ✔ Original array remains unchanged
// ✔ Very important for immutable updates



// ===================================================
// 2️⃣ PART 3: Spread Operator with Objects
// ===================================================

let empDetail = {
    empId: "IQ123",
    empName: "Kesavan",
    empRole: "React Developer"
};

// Copy + override + add new properties
let team2 = {
    ...empDetail,
    empId: "IQ456",                 // override
    empSalary: 100000,              // new property
    team2Desig: "Full Stack Developer"
};

console.log(team2);

// 🔎 Explanation:
// ✔ ...empDetail copies properties
// ✔ Later properties override earlier ones
// ✔ Creates new object (new reference)



// ===================================================
// 🔰 PART 4: Rest Parameter ( ... )
// ===================================================
// Description:
// Rest parameter collects remaining arguments into an array.
// Used only inside function parameters.

function restParams(a, b, ...arr) {
    console.log(a, b, arr);
}

restParams(1, 2, 3, 4, 5);

// 🔎 Output:
// a = 1
// b = 2
// arr = [3, 4, 5]

// ✔ rest is always an array
// ✔ Must be the LAST parameter




// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Spread Operator (...)
// Used to expand values.

// [...array]
// {...object}

// ✔ Creates a new copy (shallow)
// ✔ Prevents accidental mutation
// ✔ Used heavily in React & Redux




// ===================================================
// 🔥 PART 6: Spread vs Reference (VERY IMPORTANT)
// ===================================================

// ❌ Reference copy (Same memory address)
// let b = a;

// ✔ Both variables point to same object
// ✔ Changing one affects the other


// ✅ Spread copy (New memory address)
// let b = [...a];

// ✔ Creates new array
// ✔ Changing b does NOT affect a




// ===================================================
// 🔹 PART 7: Rest Parameter
// ===================================================

// Used in function parameters:
// function demo(a, ...rest) {}

// ✔ rest collects remaining arguments
// ✔ Always an array
// ✔ Must be last parameter




// ===================================================
// 🔥 PART 8: Spread vs Rest (Interview Favorite)
// ===================================================

// | Feature  | Spread          | Rest                |
// | -------- | --------------- | ------------------- |
// | Usage    | Copy / Merge    | Collect             |
// | Location | RHS (outside)   | Function parameters |
// | Output   | Expanded values | Array               |




// ===================================================
// 🧠 PART 9: Memory Concept (Important Theory)
// ===================================================

// 🔹 Stack Memory
// ✔ Stores primitive values
// ✔ Stores references (addresses)

// Example:
// Variable  → Address
// objRef    → 0x001


// 🔹 Heap Memory
// ✔ Stores actual objects & arrays

// 0x001 → { name: "Bob" }

// ✔ Multiple variables can point to same object
// ✔ Spread creates a new address (shallow copy)




// ===================================================
// ⚠️ PART 10: Common Beginner Mistakes
// ===================================================

// ❌ Forgetting spread creates only shallow copy
// ❌ Using rest parameter in wrong position
// ❌ Confusing spread & rest (same syntax, different usage)
// ❌ Mutating original object in React state
// ❌ Forgetting order matters when overriding properties




// ===================================================
// 🚀 PRO TIP (Professional Level Understanding)
// ===================================================
// 🔥 Spread creates shallow copy, not deep copy
// 🔥 For nested objects → use structuredClone or libraries
// 🔥 Always use spread for state updates in React
// 🔥 Remember: Spread expands, Rest collects
// 🔥 Master immutability — critical for frontend interviews