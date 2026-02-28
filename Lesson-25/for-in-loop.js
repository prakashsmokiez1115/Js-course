// ===================================================
// 🔰 PART 1: JavaScript for...in Loop
// ===================================================
// Description:
// for...in is used to iterate over KEYS (indexes / property names).
// ✔ Best for Objects
// ❌ Not recommended for Arrays (but works)
// ⚠️ Works with Strings (gives index numbers)



// ===================================================
// 1️⃣ PART 2: for...in with Object
// ===================================================

// let person1 = {
//     uName: "Kesavan",
//     hobbies: ["Cricket", "Video Maker", "Editor"],
//     familyDetails: {
//         totalMembers: 5,
//         siblings: ["a", "b", "c"]
//     },
//     walk() {
//         console.log("I'm going to home");
//     }
// };

// for (let key in person1) {
//     console.log(key, ":", person1[key]);
// }

// 🔎 Explanation:
// ✔ key represents property name
// ✔ person1[key] gives corresponding value
// ✔ Best usage of for...in → Objects



// ===================================================
// 2️⃣ PART 3: for...in with Array (Not Recommended)
// ===================================================

// let arr = [120, 130, 140, 150];

// for (let key in arr) {
//     console.log(arr[key]);
// }

// 🔎 Explanation:
// ✔ key represents index (0,1,2,3)
// ❌ Not recommended for arrays
// ✔ Use for...of instead for cleaner value iteration



// ===================================================
// 3️⃣ PART 4: for...in with String
// ===================================================

let str = "ECMA Script";

for (let key in str) {
    console.log(str[key] + 1);
}

// 🔎 Explanation:
// ✔ key represents index
// ✔ str[key] gives character
// ✔ "E" + 1 → "E1" (string concatenation)
// 👉 + with string converts number to string




// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 What does for...in give?

// It gives KEYS, not values.
// Object → property names
// Array  → index numbers
// String → index numbers



// 🔹 Why output looks strange?

// console.log(str[key] + 1);

// Example:
// str[key] → "E"
// "E" + 1 → "E1"
// ✔ String + number → string concatenation




// ===================================================
// 🔥 PART 6: Interview Comparison (Very Important)
// ===================================================

// | Loop       | Used For        | Gives |
// | ---------- | --------------- | ----- |
// | `for`      | Any             | Index |
// | `for...of` | Arrays, Strings | Value |
// | `for...in` | Objects         | Key   |




// ===================================================
// ⚠️ PART 7: Common Beginner Mistakes
// ===================================================

// ❌ Using for...in for arrays instead of for...of
// ❌ Expecting values instead of keys
// ❌ Confusing for...in and for...of
// ❌ Forgetting bracket notation when accessing value
// ❌ Modifying array while iterating with for...in




// ===================================================
// 🚀 PRO TIP (Professional Rule)
// ===================================================
// 🔥 Use for...in → Objects
// 🔥 Use for...of → Arrays & Strings
// 🔥 Avoid for...in on arrays (can cause unexpected issues)
// 🔥 Always remember: for...in gives KEY, not VALUE
// 🔥 Master loop differences — very common interview topic