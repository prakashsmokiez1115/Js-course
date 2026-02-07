// ===================================================
// 🔰 JavaScript For Loop with Array
// ===================================================

// Arrays store multiple values in indexed form



// ===================================================
// 1️⃣ Array Iteration using For Loop
// ===================================================

let arr = [10, 20, 30, 40];

// Access single element
console.log(arr[0]); // 10

// Get array length
let length = arr.length;
console.log(length); // 4

// Loop through array
for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}



// ===================================================
// 🔰 JavaScript For Loop with String
// ===================================================

// Strings are also iterable (character by character)



// ===================================================
// 2️⃣ String Iteration using For Loop
// ===================================================

let str = "Javascript";

// Get string length
let length1 = str.length;

// Loop through string characters
for (let i = 0; i < length1; i++) {
    console.log(str[i]);
}































// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 Array Indexing
// Index starts from 0
// Last index = length - 1



// 🔹 Why i < length and not i <= length?
// ❌ i <= length → undefined
// ✅ i < length → safe loop






// 🔹 Strings Behave Like Arrays (Read-only)
// str[0] // 'J'
// ✔ Can read characters
// ❌ Cannot change characters directly








// 🔥 INTERVIEW IMPORTANT


// | Data Type | Iterable | Mutable |
// | --------- | -------- | ------- |
// | Array     | ✔ Yes    | ✔ Yes   |
// | String    | ✔ Yes    | ❌ No    |










// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using <= length
// ❌ Forgetting .length
// ❌ Trying to modify string characters