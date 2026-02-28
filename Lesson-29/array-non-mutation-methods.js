// ===================================================
// 🔰 PART 1: JavaScript Array Methods (concat, slice, flat, fill)
// ===================================================
// Description:
// These methods are mostly NON-mutating,
// except fill() which modifies the original array.
// 🔥 Important for interviews (Mutation vs Non-mutation).



// ===================================================
// 1️⃣ PART 2: concat() → Merge arrays / values (NON-mutating)
// ===================================================

// let arr = [1, 2, 3, 4];
// let arr1 = [4, 5, 6, 7];

// 🔹 Merge arrays
// let newArr = arr.concat(arr1);

// 🔹 Add values
// let newArr1 = arr.concat(10, 20, 30);

// 🔹 Copy array
// let newArr2 = [].concat(arr);

// 🔹 Change original array
// arr[0] = 111;

// console.log(newArr, newArr1, newArr2, arr);

// 🔎 Explanation:
// ✔ Returns NEW array
// ✔ Does NOT modify original
// ✔ Can merge arrays or add values
// ✔ Safe method (React friendly)



// ===================================================
// 2️⃣ PART 3: slice() → Extract part of array (NON-mutating)
// ===================================================

// let newArr = [10, 2, 3, 4, 5, 6, 7];

// 🔹 Copy full array
// let slicedVal = newArr.slice();

// 🔹 Modify original
// newArr[0] = 101;

// 🔹 Slice from index
// let slicedVal1 = newArr.slice(1);

// 🔹 Slice with range (start, end-1)
// let slicedVal2 = newArr.slice(1, 4);
// let slicedVal3 = newArr.slice(0, 3);

// console.log(slicedVal, slicedVal1, slicedVal2, slicedVal3);

// 🔎 Explanation:
// ✔ End index is EXCLUDED
// ✔ slice(start, end)
// ✔ Returns new array
// ✔ Does NOT modify original



// ===================================================
// 3️⃣ PART 4: flat() → Flatten nested arrays (NON-mutating)
// ===================================================

// let arr = [1, 2, 3, [4, [5, 6, [40, 50, [70, 80]]]]];

// 🔹 Flatten up to depth 2
// let newArr = arr.flat(2);

// 🔹 Flatten completely
// let newArr1 = arr.flat(Infinity);

// console.log(arr, newArr, newArr1);

// 🔎 Explanation:
// ✔ Removes nested levels
// ✔ Depth controls flattening level
// ✔ flat(Infinity) → fully flattened
// ✔ Returns new array (safe)



// ===================================================
// 4️⃣ PART 5: fill() → Fill array with value (MUTATES array)
// ===================================================

let arr = [10, 20, 30];

// fill(value, startIndex, endIndex)
arr.fill(101, 0, 2);
arr.fill(103, 2, 5);

console.log(arr);

// 🔎 Explanation:
// ✔ Replaces values
// ✔ Modifies original array
// ✔ End index is EXCLUDED
// ✔ Useful for initialization




// ===================================================
// 🧠 PART 6: What a Fresher MUST Understand
// ===================================================

// 🔹 concat()
// ✔ Returns new array
// ✔ Does not change original
// ✔ Used to merge arrays



// 🔹 slice()
// ✔ Extracts part of array
// ✔ End index is excluded
// ✔ Safe (non-mutating)
// ✔ slice(start, end)



// 🔹 flat()
// ✔ Removes nesting
// ✔ Depth matters
// ✔ flat(1), flat(2), flat(Infinity)



// 🔹 fill() ⚠️
// ✔ Modifies original array
// ✔ Used to initialize or replace values
// ✔ fill(value, start, end)




// ===================================================
// 🔥 PART 7: Interview Comparison Table
// ===================================================

// | Method | Mutates? | Use            |
// | ------ | -------- | -------------- |
// | concat | ❌ No     | Merge arrays   |
// | slice  | ❌ No     | Copy / extract |
// | flat   | ❌ No     | Flatten array  |
// | fill   | ✅ Yes    | Replace values |




// ===================================================
// ⚠️ PART 8: Common Beginner Mistakes
// ===================================================

// ❌ Confusing slice with splice
// ❌ Expecting fill to return new array
// ❌ Forgetting end index is excluded
// ❌ Not knowing flat() default depth is 1
// ❌ Mutating arrays accidentally in React




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Use slice() to clone array safely
// 🔥 Use concat() instead of push() for immutability
// 🔥 flat(Infinity) useful for deeply nested APIs
// 🔥 Remember: fill() mutates — use carefully
// 🔥 Mutation vs Non-mutation is a very common interview topic