// ===================================================
// 🔰 PART 1: JavaScript Destructuring
// ===================================================
// Description:
// Destructuring allows you to extract values
// from arrays or objects into variables easily.
// ✔ Cleaner syntax
// ✔ Less repetitive code
// ✔ Very common in React & APIs



// ===================================================
// 1️⃣ PART 2: Array Destructuring
// ===================================================

// let arr = [10, 20, 30, 40, 5, 4, 5, 6, 7, 8, 9, 10];

// 🔹 Old way ❌
// let fVal = arr[0];

// 🔹 New way ✅
// let [a, b, c, d] = arr;

// 🔹 Skipping values
// let [a, , , d] = arr;

// 🔹 Using rest operator
// let [a1, a2, a3, ...a4] = arr;

// console.log(a1, a2, a3, a4);

// 🔎 Important:
// ✔ Order matters in arrays
// ✔ ... collects remaining elements
// ✔ You can skip values using commas



// ===================================================
// 2️⃣ PART 3: Nested Array Destructuring
// ===================================================

// let nestArr = [1, 2, 3, 4, [10, 20, [30, 40]]];

// let [a, b, c, d, [a1, a2, [a11, a12]]] = nestArr;

// console.log(d, a12);

// 🔎 Explanation:
// ✔ Destructure step-by-step
// ✔ Match structure exactly
// ✔ Useful for deeply nested data



// ===================================================
// 3️⃣ PART 4: Object Destructuring
// ===================================================

// let obj = {
//     id: 1,
//     name1: "Kesavan"
// };

// let { name1, id } = obj;
// console.log(id, name1);

// 🔎 Important:
// ✔ Order does NOT matter
// ✔ Key names must match exactly
// ✔ Variables created with same names



// ===================================================
// 4️⃣ PART 5: Nested Object Destructuring
// ===================================================

let nestObj = {
    id: 1,
    name1: "Murugesan",
    bankDetails: {
        accName: "Murugan",
        accNo: 123456,
        branch: "xyz"
    }
};

// Destructuring nested object
let {
    id,
    name1,
    bankDetails: { accName, accNo, branch }
} = nestObj;

console.log(nestObj.bankDetails.accNo);
console.log(name1, branch);

// 🔎 Explanation:
// ✔ Extracts nested properties
// ✔ No need to write nestObj.bankDetails.accNo repeatedly
// ✔ Clean and readable



// ===================================================
// 🧠 PART 6: What a Fresher MUST Understand
// ===================================================

// 🔹 Why Destructuring?

// ❌ Without destructuring:
// let x = obj.id;
// let y = obj.name;

// ✅ With destructuring:
// let { id, name } = obj;

// ✔ Cleaner
// ✔ Less code
// ✔ Common in modern JavaScript



// ===================================================
// 🔹 PART 7: Array Destructuring Rules
// ===================================================

// ✔ Order matters
// ✔ You can skip values
// ✔ You can use rest (...)

// Example:
// let [first, , third] = arr;



// ===================================================
// 🔹 PART 8: Object Destructuring Rules
// ===================================================

// ✔ Key names must match
// ✔ Order does NOT matter

// Example:
// let { id, name } = obj;



// ===================================================
// 🔹 PART 9: Nested Destructuring
// ===================================================

// ✔ Works for both arrays & objects
// ✔ Must match exact structure
// ✔ Very powerful but can look complex



// ===================================================
// ⚠️ PART 10: Common Beginner Mistakes
// ===================================================

// ❌ Forgetting correct key names
// ❌ Expecting order to matter in objects
// ❌ Over-destructuring (hurts readability)
// ❌ Not matching nested structure properly
// ❌ Forgetting default values when needed



// ===================================================
// 🚀 PRO TIP (Advanced Usage)
// ===================================================
// 🔥 You can rename variables:
// let { id: userId } = obj;
// 🔥 You can set default values:
// let { age = 18 } = obj;
// 🔥 Destructuring is heavily used in React props
// 🔥 Master nested destructuring for API responses
// 🔥 Clean destructuring improves readability drastically