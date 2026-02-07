// ===================================================
// 🔰 JavaScript for...in Loop
// ===================================================

// for...in is used to iterate over KEYS (indexes / property names)
// ✔ Best for Objects
// ❌ Not recommended for Arrays (but works)
// ⚠️ Works with Strings (indexes)



// ===================================================
// 1️⃣ for...in with Object
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



// ===================================================
// 2️⃣ for...in with Array (Not Recommended)
// ===================================================

// let arr = [120, 130, 140, 150];

// for (let key in arr) {
//     console.log(arr[key]);
// }



// ===================================================
// 3️⃣ for...in with String
// ===================================================

let str = "ECMA Script";

for (let key in str) {
    console.log(str[key] + 1);
}



























// 🧠 WHAT A FRESHER MUST UNDERSTAND
// 🔹 What does for...in give?

// It gives KEYS, not values.
// Object → property names
// Array → index numbers
// String → index numbers









// 🔹 Why output looks strange here?
// console.log(str[key] + 1);


// Example:
// str[key] → "E"
// "E" + 1 → "E1" (string concatenation)
// ✔ + with string → converts number to string







// 🔥 INTERVIEW COMPARISON (VERY IMPORTANT)

// | Loop       | Used For        | Gives |
// | ---------- | --------------- | ----- |
// | `for`      | Any             | Index |
// | `for...of` | Arrays, Strings | Value |
// | `for...in` | Objects         | Key   |









// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using for...in for arrays instead of for...of
// ❌ Expecting values instead of keys
// ❌ Confusing for...in and for...of