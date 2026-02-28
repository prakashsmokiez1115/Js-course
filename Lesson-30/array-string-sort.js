// ===================================================
// 🔰 PART 1: JavaScript Array → String & Utility Methods
// ===================================================
// Description:
// These methods help convert arrays to strings,
// sort values, reverse order, and check existence.
// ⚠️ Some methods mutate, some do NOT.



// ===================================================
// 1️⃣ PART 2: join() → Convert array to string with separator
// ===================================================

let arr = [1, 2, 3, 4, 5];

// Join array elements using "0" as separator
let joinedVal = arr.join("0");

console.log(joinedVal); 
// Output: "102030405"

// 🔎 Explanation:
// ✔ join() returns a STRING
// ✔ Separator is customizable
// ✔ Original array is NOT modified



// ===================================================
// 2️⃣ PART 3: toString() → Convert array to string
// ===================================================

// toString() always uses comma (,)
let stringVal = arr.toString("12");

console.log(stringVal);
// Output: "1,2,3,4,5"

// 🔎 Explanation:
// ✔ Converts array → string
// ✔ Always uses comma (,)
// ❌ Does NOT accept separator
// ❌ Any argument passed is ignored



// ===================================================
// 3️⃣ PART 4: sort() → Sort array (ASCII / Lexicographical)
// ===================================================

let arr2 = [
  5, 1, 4, 6, 2, 8, 10, 20, 15, 45, 101, 111, 26, 345, "&", " "
];

// Sorts based on ASCII values
arr2.sort();

console.log(arr2);

// 🔎 Very Important:
// ✔ sort() converts elements to STRING
// ✔ Then sorts based on ASCII code
// ✔ This causes numeric sorting issues

// Example problem:
// [10, 2, 5].sort()
// Output: [10, 2, 5] ❌ (wrong numerically)

// ✅ Correct numeric sort:
// arr2.sort((a, b) => a - b);



// ===================================================
// 4️⃣ PART 5: reverse() → Reverse array order
// ===================================================

let arr1 = [10, 20, 30, 40, 50];

arr1.reverse();

console.log(arr1);
// Output: [50, 40, 30, 20, 10]

// 🔎 Important:
// ✔ reverse() MUTATES the original array
// ✔ Returns the same modified array



// ===================================================
// 5️⃣ PART 6: includes() → Check if value exists
// ===================================================

console.log(arr1.includes(11)); // false
console.log(arr1.includes(20)); // true

// 🔎 Explanation:
// ✔ Returns BOOLEAN
// ✔ true  → value exists
// ✔ false → value does not exist
// ✔ Does NOT modify array




// ===================================================
// 🧠 PART 7: Concepts You Just Learned
// ===================================================

// 🔹 join(separator)
// ✔ Converts array → string
// ✔ Separator is customizable
// ✔ Does NOT modify array

// Example:
// [1,2,3].join("-") → "1-2-3"



// 🔹 toString()
// ✔ Converts array → string
// ✔ Always uses comma
// ✔ No arguments allowed



// 🔹 sort() ⚠️ (INTERVIEW FAVORITE 🔥)
// ✔ Sorts as strings, not numbers
// ✔ ASCII-based sorting
// ✔ Needs callback for numeric sorting

// Numeric sort:
// arr.sort((a, b) => a - b);



// 🔹 reverse()
// ✔ Reverses array order
// ✔ Mutates original array



// 🔹 includes()
// ✔ Checks value existence
// ✔ Returns true or false
// ✔ Case-sensitive for strings




// ===================================================
// ⚠️ PART 8: Common Beginner Mistakes
// ===================================================

// ❌ Expecting numeric sort without callback
// ❌ Thinking toString() accepts separator
// ❌ Forgetting reverse() mutates array
// ❌ Assuming join() modifies original array
// ❌ Confusing includes() with indexOf()




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Always use callback for numeric sort
// 🔥 Use slice().reverse() if you want non-mutating reverse
// 🔥 join() is useful for URL & CSV generation
// 🔥 includes() is cleaner than indexOf()
// 🔥 Know which methods mutate — very common interview topic