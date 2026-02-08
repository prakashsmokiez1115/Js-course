// ===================================================
// 🔰 JavaScript Destructuring
// ===================================================

// Destructuring allows you to extract values
// from arrays or objects into variables easily



// ===================================================
// 1️⃣ Array Destructuring
// ===================================================

// let arr = [10, 20, 30, 40, 5, 4, 5, 6, 7, 8, 9, 10];

// Old way ❌
// let fVal = arr[0];

// New way ✅
// let [a, b, c, d] = arr;

// Skipping values
// let [a, , , d] = arr;

// Using rest operator
// let [a1, a2, a3, ...a4] = arr;

// console.log(a1, a2, a3, a4);



// ===================================================
// 2️⃣ Nested Array Destructuring
// ===================================================

// let nestArr = [1, 2, 3, 4, [10, 20, [30, 40]]];

// let [a, b, c, d, [a1, a2, [a11, a12]]] = nestArr;

// console.log(d, a12);



// ===================================================
// 3️⃣ Object Destructuring
// ===================================================

// let obj = {
//     id: 1,
//     name1: "Kesavan"
// };

// let { name1, id } = obj;
// console.log(id, name1);



// ===================================================
// 4️⃣ Nested Object Destructuring
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








































// 🧠 WHAT A FRESHER MUST UNDERSTAND


// 🔹 Why Destructuring?

// ❌ Without destructuring:

// let x = obj.id;
// let y = obj.name;


// ✅ With destructuring:

// let { id, name } = obj;


// ✔ Cleaner
// ✔ Less code
// ✔ Very common in React & APIs















// 🔹 Array Destructuring Rules

// Order matters
// You can skip values
// You can use rest (...)
// let [first, , third] = arr;














// 🔹 Object Destructuring Rules

// Key names must match
// Order does NOT matter
// let { id, name } = obj;








// 🔹 Nested Destructuring

// ✔ Works for both arrays & objects
// ✔ Looks complex but very powerful
















// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Forgetting correct key names
// ❌ Expecting order to matter in objects
// ❌ Over-destructuring (hurts readability)