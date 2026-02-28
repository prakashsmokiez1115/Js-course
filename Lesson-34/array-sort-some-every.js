// ===================================================
// 🔰 Array sort() Method (Ascending & Descending)
// ===================================================


// ===================================================
// 1️⃣ Numeric Sorting (Ascending)
// ===================================================

// let arr = [10, 5, 100, 30, 6, 2];

// let newArr = arr.sort((a, b) => {
//     return a - b;
// });

// console.log(newArr);



// ===================================================
// 2️⃣ Numeric Sorting (Descending)
// ===================================================

let newArr = [10, 20, 30, 1, 4, true, "100A"];

// Descending order
let descendingSort = newArr.sort((a, b) => {
    return b - a;
});

console.log("Descending Sort:", descendingSort);



// ===================================================
// 🔰 some() & every()
// ===================================================

let arr1 = [10, 2, 30, 40, 5];


// some()
// 👉 Returns TRUE if AT LEAST ONE element matches condition
let value = arr1.some((ele, ind, arr) => {
    return ele % 2 == 0;
});


// every()
// 👉 Returns TRUE only if ALL elements match condition
let value1 = arr1.every((ele, ind, arr) => {
    return ele % 2 == 0;
});

console.log("Some:", value);
console.log("Every:", value1);


















































// 🧠 IMPORTANT CONCEPTS YOU MUST UNDERSTAND


// 🔥 sort() Important Rules
// Without comparator:
// arr.sort()


// ➡ Sorts in ASCII order
// ➡ Converts values to strings




// 🔥 With comparator:
// (a, b) => a - b




// Ascending:
// a - b

// Descending:
// b - a






// ⚠️ VERY IMPORTANT (Mixed Data Types)

// Your array:
// [10, 20, 30, 1, 4, true, "100A"]




// What happens?
// true → becomes 1
// "100A" → becomes NaN
// NaN breaks numeric comparison


// So sorting becomes unpredictable.





// 👉 Interview Question:
// Why should we avoid sorting mixed data types?
// Answer: Because numeric comparator expects numbers.







// 🔥 some() vs every()
// | Method  | Condition         | Stops Early | Return Type |
// | ------- | ----------------- | ----------- | ----------- |
// | some()  | At least one true | ✅ Yes       | Boolean     |
// | every() | All must be true  | ✅ Yes       | Boolean     |






// Example:
// [10, 2, 30, 40, 5]




// some(even)?
// ✔ Yes → true




// every(even)?
// ❌ No → false






// ⚠️ Common Mistakes

// ❌ Forgetting comparator in numeric sort
// ❌ Sorting mixed types
// ❌ Confusing some() with filter()
// ❌ Thinking every() returns array



















