// ===================================================
// 🔰 PART 1: Array Searching Methods
// indexOf() & lastIndexOf()
// ===================================================
// Description:
// These methods help find element positions in an array.
// ✔ Return index number
// ✔ If not found → return -1
// ✔ Do NOT modify original array



let arr = [10, 20, 30, 20, 40, 50, 10];



// ===================================================
// 1️⃣ PART 2: indexOf(value, fromIndex)
// ===================================================
// 👉 Searches from LEFT to RIGHT
// 👉 Returns FIRST matching index
// 👉 If not found → -1

// let newIndex = arr.indexOf(10, 2);   // starts search from index 2
// let newIndex = arr.indexOf(20, -4);  // negative index counts from end
// let newIndex = arr.indexOf(20, 0);   // full search

// console.log(newIndex);

// 🔎 Explanation:
// ✔ indexOf(value, startPosition)
// ✔ If startPosition is negative:
//    start = array.length + negativeValue
// ✔ Only first match is returned
// ✔ Stops searching after first match



// ===================================================
// 2️⃣ PART 3: lastIndexOf(value, fromIndex)
// ===================================================
// 👉 Searches from RIGHT to LEFT
// 👉 Returns LAST matching index
// 👉 If not found → -1

// let findIndexFromLast = arr.lastIndexOf(10);     // last occurrence of 10
// let findIndexFromLast = arr.lastIndexOf(20);     // last occurrence of 20
// let findIndexFromLast = arr.lastIndexOf(20, -5); // backward search limit

let findIndexFromLast = arr.lastIndexOf(20, 0);

console.log(findIndexFromLast);

// 🔎 Explanation:
// ✔ lastIndexOf(value, fromIndex)
// ✔ Searches backward
// ✔ fromIndex defines starting point (moving left)
// ✔ If fromIndex = 0 → only checks index 0




// ===================================================
// 🔑 PART 4: Key Differences (Interview Favorite 🔥)
// ===================================================

// | Method         | Direction        | Finds        |
// | -------------- | ---------------- | ------------ |
// | indexOf()      | Left → Right     | First match  |
// | lastIndexOf()  | Right → Left     | Last match   |




// ===================================================
// ⚠️ PART 5: Important Rules
// ===================================================

// ✔ Negative index behavior:
// arr.indexOf(20, -4);
// Starts from (length - 4)

// Example:
// length = 7
// -4 → start from index 3


// ✔ If value not found:
// indexOf() → -1
// lastIndexOf() → -1

// Example:
// arr.indexOf(999) → -1




// ===================================================
// 🧠 PART 6: What a Fresher MUST Understand
// ===================================================

// ✔ These methods return index, NOT value
// ✔ -1 means "not found"
// ✔ Strict comparison is used (===)
// ✔ Works for primitives
// ✔ Not reliable for objects (reference comparison)




// ===================================================
// 🚀 PRO TIP (Professional Insight)
// ===================================================
// 🔥 Use includes() if you only need true/false
// 🔥 Use indexOf() when you need position
// 🔥 For complex search → use find() or findIndex()
// 🔥 Always check for -1 before using index
// 🔥 Searching methods are common in interviews