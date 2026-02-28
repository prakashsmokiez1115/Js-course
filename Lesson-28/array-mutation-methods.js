// ===================================================
// 🔰 PART 1: JavaScript Array Methods (Mutation Methods)
// ===================================================
// Description:
// These methods MODIFY the original array.
// They change the existing array instead of creating a new one.
// 🔥 Important for interviews (Mutation vs Non-mutation).



// ===================================================
// 📌 PART 2: Sample Array
// ===================================================

// let arr = [100, 200, 300, 400];



// ===================================================
// 1️⃣ PART 3: pop() → Remove LAST element
// ===================================================

// let poppedVal = arr.pop();
// console.log(poppedVal, arr);

// 🔎 Explanation:
// ✔ Removes last element
// ✔ Returns removed element
// ✔ Array length decreases by 1



// ===================================================
// 2️⃣ PART 4: push() → Add element(s) at END
// ===================================================

// arr.push(500, 550, 600);
// console.log(arr);

// 🔎 Explanation:
// ✔ Adds element(s) at end
// ✔ Returns new length of array
// ✔ Fast operation



// ===================================================
// 3️⃣ PART 5: shift() → Remove FIRST element
// ===================================================

// let firstVal = arr.shift();
// console.log(firstVal, arr);

// 🔎 Explanation:
// ✔ Removes first element
// ✔ Returns removed value
// ❗ Slower than pop (re-indexing happens)



// ===================================================
// 4️⃣ PART 6: unshift() → Add element(s) at START
// ===================================================

// arr.unshift(-2, -1, 0, 10, 20);
// console.log(arr);

// 🔎 Explanation:
// ✔ Adds element(s) at beginning
// ✔ Returns new length
// ❗ Slower than push (re-indexing happens)



// ===================================================
// 🔥 5️⃣ PART 7: splice() (VERY IMPORTANT)
// ===================================================

// Syntax:
// splice(startIndex, deleteCount, ...items)

// It can:
// ✔ Add elements
// ✔ Remove elements
// ✔ Replace elements
// ✔ Modify original array



// ===================================================
// PART 8: Splice Examples
// ===================================================

let newArr = [10, 20, 30, 40];

// 🔹 Add elements at START (no deletion)
newArr.splice(0, 0, 100, 200, 300);

// 🔹 Add elements before LAST index using negative index
newArr.splice(-1, 0, 500, 600, 700);

console.log(newArr);

// 🔎 Explanation:
// ✔ splice(0,0,...) → insert at beginning
// ✔ splice(-1,0,...) → insert before last element
// ✔ Negative index counts from end
// ✔ Original array is modified




// ===================================================
// 🧠 PART 9: What a Fresher MUST Understand
// ===================================================

// 🔹 pop()
// ✔ Removes last element
// ✔ Returns removed element

// 🔹 push()
// ✔ Adds element(s) to end
// ✔ Returns new length

// 🔹 shift()
// ✔ Removes first element
// ✔ Slower than pop (re-indexing)

// 🔹 unshift()
// ✔ Adds element(s) at start
// ✔ Slower than push




// ===================================================
// 🔹 PART 10: splice() (🔥 Interview Favorite)
// ===================================================

// array.splice(start, deleteCount, ...items)

// ✔ Modifies original array
// ✔ Extremely powerful
// ✔ Can insert, delete, replace




// ===================================================
// 🔥 PART 11: Splice Behavior Table
// ===================================================

// | Use     | Example             |
// | ------- | ------------------- |
// | Insert  | splice(1, 0, "A")   |
// | Delete  | splice(1, 2)        |
// | Replace | splice(1, 1, "X")   |




// ===================================================
// ⚠️ PART 12: Common Beginner Mistakes
// ===================================================

// ❌ Expecting splice to return new array
// ❌ Confusing splice with slice
// ❌ Forgetting negative index behavior
// ❌ Not understanding deleteCount
// ❌ Accidentally mutating array in React state




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 pop & push are faster than shift & unshift
// 🔥 splice mutates array — be careful in React
// 🔥 If you want non-mutating method → use slice()
// 🔥 Always know which methods modify original array
// 🔥 Mutation questions are common in interviews