// ===================================================
// 🔰 JavaScript Array Methods (concat, slice, flat, fill)
// ===================================================



// ===================================================
// 1️⃣ concat() → Merge arrays / values (NON-mutating)
// ===================================================

// let arr = [1, 2, 3, 4];
// let arr1 = [4, 5, 6, 7];

// Merge arrays
// let newArr = arr.concat(arr1);

// Add values
// let newArr1 = arr.concat(10, 20, 30);

// Copy array
// let newArr2 = [].concat(arr);

// Change original array
// arr[0] = 111;

// console.log(newArr, newArr1, newArr2, arr);



// ===================================================
// 2️⃣ slice() → Extract part of array (NON-mutating)
// ===================================================

// let newArr = [10, 2, 3, 4, 5, 6, 7];

// Copy full array
// let slicedVal = newArr.slice();

// Modify original
// newArr[0] = 101;

// Slice from index
// let slicedVal1 = newArr.slice(1);

// Slice with range (start, end-1)
// let slicedVal2 = newArr.slice(1, 4);
// let slicedVal3 = newArr.slice(0, 3);

// console.log(slicedVal, slicedVal1, slicedVal2, slicedVal3);



// ===================================================
// 3️⃣ flat() → Flatten nested arrays
// ===================================================

// let arr = [1, 2, 3, [4, [5, 6, [40, 50, [70, 80]]]]];

// Flatten up to depth 2
// let newArr = arr.flat(2);

// Flatten completely
// let newArr1 = arr.flat(Infinity);

// console.log(arr, newArr, newArr1);



// ===================================================
// 4️⃣ fill() → Fill array with value (MUTATES array)
// ===================================================

let arr = [10, 20, 30];

// fill(value, startIndex, endIndex)
arr.fill(101, 0, 2);
arr.fill(103, 2, 5);

console.log(arr);






































// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 concat()
// ✔ Returns new array
// ✔ Does not change original
// ✔ Used to merge arrays





// 🔹 slice()
// ✔ Extracts part of array
// ✔ End index is excluded
// ✔ Safe (non-mutating)

// slice(start, end)




// 🔹 flat()
// ✔ Removes nesting
// ✔ Depth matters

// flat(1)
// flat(2)
// flat(Infinity)







// 🔹 fill() ⚠️
// ✔ Modifies original array
// ✔ Used to initialize values

// fill(value, start, end)












// 🔥 INTERVIEW COMPARISON TABLE


// | Method | Mutates? | Use            |
// | ------ | -------- | -------------- |
// | concat | ❌ No     | Merge arrays   |
// | slice  | ❌ No     | Copy / extract |
// | flat   | ❌ No     | Flatten array  |
// | fill   | ✅ Yes    | Replace values |








// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Confusing slice with splice
// ❌ Expecting fill to return new array
// ❌ Forgetting end index is excluded