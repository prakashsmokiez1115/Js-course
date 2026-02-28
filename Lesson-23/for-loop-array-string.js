// ===================================================
// 🔰 PART 1: JavaScript For Loop with Array
// ===================================================
// Description:
// Arrays store multiple values in indexed form.
// Index always starts from 0.
// We commonly use for loop to iterate over arrays.


// ===================================================
// 1️⃣ PART 2: Array Iteration using For Loop
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

// 🔎 Explanation:
// let i = 0      → start from first index
// i < length     → run until last valid index
// i++            → move to next index
// arr[i]         → access each element



// ===================================================
// 🔰 PART 3: JavaScript For Loop with String
// ===================================================
// Description:
// Strings are also iterable.
// We can loop through characters one by one.


// ===================================================
// 2️⃣ PART 4: String Iteration using For Loop
// ===================================================

let str = "Javascript";

// Get string length
let length1 = str.length;

// Loop through string characters
for (let i = 0; i < length1; i++) {
    console.log(str[i]);
}

// 🔎 Explanation:
// ✔ str[i] gives character at index
// ✔ Loop works same like array
// ✔ But string is read-only (immutable)




// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Array Indexing
// ✔ Index starts from 0
// ✔ Last index = length - 1


// 🔹 Why i < length and NOT i <= length?

// ❌ i <= length → Last iteration gives undefined
// Example:
// arr[4] → undefined (for 4-element array)

// ✅ i < length → Safe loop



// 🔹 Strings Behave Like Arrays (Read-only)

// str[0] // 'J'

// ✔ Can read characters
// ❌ Cannot modify directly
// Example:
// str[0] = "H"; ❌ (won’t change string)




// ===================================================
// 🔥 PART 6: Interview Important
// ===================================================

// | Data Type | Iterable | Mutable |
// | --------- | -------- | ------- |
// | Array     | ✔ Yes    | ✔ Yes   |
// | String    | ✔ Yes    | ❌ No    |

// 👉 Mutable = can change content
// 👉 Immutable = cannot change directly




// ===================================================
// ⚠️ PART 7: Common Beginner Mistakes
// ===================================================

// ❌ Using <= length in loop
// ❌ Forgetting .length
// ❌ Trying to modify string characters
// ❌ Starting loop from 1 instead of 0
// ❌ Hardcoding array size instead of using length




// ===================================================
// 🚀 PRO TIP (Loop Optimization)
// ===================================================
// 🔥 Store arr.length in variable for performance
// 🔥 Always use < not <=
// 🔥 Use meaningful variable names in real projects
// 🔥 Practice nested loops for patterns
// 🔥 Master array iteration — used everywhere in JS