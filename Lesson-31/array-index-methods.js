// ===================================================
// 🔰 Array Searching Methods
// indexOf() & lastIndexOf()
// ===================================================

let arr = [10, 20, 30, 20, 40, 50, 10];


// ===================================================
// 1️⃣ indexOf(value, fromIndex)
// 👉 Searches from LEFT to RIGHT
// 👉 Returns FIRST matching index
// 👉 If not found → -1
// ===================================================

// let newIndex = arr.indexOf(10, 2);   // starts search from index 2
// let newIndex = arr.indexOf(20, -4);  // negative index counts from end
// let newIndex = arr.indexOf(20, 0);   // full search

// console.log(newIndex);


// ===================================================
// 2️⃣ lastIndexOf(value, fromIndex)
// 👉 Searches from RIGHT to LEFT
// 👉 Returns LAST matching index
// 👉 If not found → -1
// ===================================================

// let findIndexFromLast = arr.lastIndexOf(10);     // last occurrence of 10
// let findIndexFromLast = arr.lastIndexOf(20);     // last occurrence of 20
// let findIndexFromLast = arr.lastIndexOf(20, -5); // backward search limit

let findIndexFromLast = arr.lastIndexOf(20, 0);

console.log(findIndexFromLast);



























// 🔑 KEY DIFFERENCES (INTERVIEW FAVORITE 🔥)

// Method	Direction	Finds
// indexOf()	Left → Right	First match
// lastIndexOf()	Right → Left	Last match




// ⚠️ IMPORTANT RULES
// ✔ Negative index
// arr.indexOf(20, -4);
// // Starts from (length - 4)





// ✔ If value not found
// indexOf() → -1
// lastIndexOf() → -1