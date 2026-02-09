// ===================================================
// 🔰 JavaScript Array → String & Utility Methods
// ===================================================



// ===================================================
// 1️⃣ join() → Convert array to string with separator
// ===================================================

let arr = [1, 2, 3, 4, 5];

// Join array elements using "0" as separator
let joinedVal = arr.join("0");

console.log(joinedVal); 
// Output: "102030405"


// 👉 Important:
// join() returns a STRING
// Original array is NOT changed



// ===================================================
// 2️⃣ toString() → Convert array to string
// ===================================================

// toString() always uses comma (,)
let stringVal = arr.toString("12");

console.log(stringVal);
// Output: "1,2,3,4,5"


// ⚠️ Interview Point:
// toString() does NOT accept separator
// Any argument passed is ignored



// ===================================================
// 3️⃣ sort() → Sort array (ASCII / Lexicographical)
// ===================================================

let arr2 = [
  5, 1, 4, 6, 2, 8, 10, 20, 15, 45, 101, 111, 26, 345, "&", " "
];

// Sorts based on ASCII values
arr2.sort();

console.log(arr2);


// ⚠️ Very Important Interview Rule:
// sort() converts elements to STRING
// Then sorts based on ASCII code



// ===================================================
// 4️⃣ reverse() → Reverse array order
// ===================================================

let arr1 = [10, 20, 30, 40, 50];

arr1.reverse();

console.log(arr1);
// Output: [50, 40, 30, 20, 10]


// ⚠️ reverse() MUTATES the original array



// ===================================================
// 5️⃣ includes() → Check if value exists
// ===================================================

console.log(arr1.includes(11)); // false
console.log(arr1.includes(20)); // true


// 👉 includes() returns BOOLEAN
// true  → value exists
// false → value does not exist



































// 🧠 CONCEPTS YOU JUST LEARNED (FRESHER FRIENDLY)


// 🔹 join(separator)
// ✔ Converts array → string
// ✔ Separator is customizable
// ✔ Does NOT modify array

// [1,2,3].join("-") → "1-2-3"





// 🔹 toString()
// ✔ Converts array → string
// ✔ Always uses ,
// ✔ No arguments allowed








// 🔹 sort() ⚠️ (INTERVIEW FAVORITE 🔥)

// ✔ Sorts as strings, not numbers
// ✔ ASCII-based sorting

// [10, 2, 5].sort()
// // Output: [10, 2, 5] ❌ (wrong numerically)


// ✅ Correct numeric sort:
// arr.sort((a, b) => a - b);








// 🔹 reverse()
// ✔ Reverses array order
// ✔ Mutates original array




// 🔹 includes()
// ✔ Checks value existence
// ✔ Returns true or false





// ❌ COMMON BEGINNER MISTAKES

// ❌ Expecting numeric sort without callback
// ❌ Thinking toString() accepts separator
// ❌ Forgetting reverse() mutates array