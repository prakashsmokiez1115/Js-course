// ===================================================
// 🔰 PART 1: Array Methods – forEach() vs map()
// ===================================================
// Description:
// Both methods iterate over array elements.
// ✔ forEach → Used for side effects (no return)
// ✔ map     → Used for transformation (returns new array)



let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"];



// ===================================================
// 1️⃣ PART 2: forEach()
// ===================================================
// 👉 Executes function for EACH element
// 👉 DOES NOT return a new array
// 👉 Used for logging, API calls, DOM updates

// fruits.forEach(printFruit);

// function printFruit(currentElement, index, totalArray) {
//     console.log(currentElement, index, totalArray);
// }


// 🔹 Inline callback
// fruits.forEach((currentEle, index, totalArr) => {
//     console.log(currentEle, index, totalArr);
// });


// ❌ forEach does NOT return array
// let newArr = fruits.forEach((cElement) => {
//     console.log(cElement.toUpperCase());
//     return cElement;
// });

// console.log(newArr); // undefined

// 🔎 Important:
// ✔ forEach always returns undefined
// ✔ Even if you use return inside callback
// ✔ Cannot be chained



// ===================================================
// 2️⃣ PART 3: map()
// ===================================================
// 👉 Transforms each element
// 👉 RETURNS a NEW array
// 👉 Used when you need modified data

// let newArr1 = fruits.map((cElement, index) => {
//     return { id: index + 1, fruit: cElement };
// });

// console.log(newArr1);

// 🔎 Important:
// ✔ map returns new array
// ✔ Original array remains unchanged
// ✔ Can be chained



// ===================================================
// 🔥 PART 4: Method Chaining (map → sort → fill)
// ===================================================

// let newArr = fruits
//     .map(cEle => cEle.toUpperCase())
//     .sort()
//     .fill("123");

// console.log(newArr);

// 🔎 Explanation:
// ✔ map transforms
// ✔ sort sorts
// ✔ fill replaces
// ✔ All chainable because map returns array



// ❌ forEach cannot be chained
// let newArr1 = fruits
//     .forEach(cEle => cEle.toUpperCase())
//     .sort()
//     .fill("123");

// console.log(newArr1);

// ❌ Error because forEach returns undefined



// ===================================================
// 3️⃣ PART 5: Condition-based Transformation
// ===================================================

// map → returns boolean array
let newArr2 = fruits.map(cEle => {
    return cEle === "Apple";
});

console.log(newArr2);

// forEach → just executes logic
fruits.forEach(val => console.log(val === "Apple"));



// ===================================================
// 🧠 PART 6: Output Explanation
// ===================================================

// Given:
// ["Apple", "WaterMelon", "MuskMelon", "Banana"]

// 👉 map result:
// [true, false, false, false]

// 👉 forEach result:
// true
// false
// false
// false

// ✔ map collects results into array
// ✔ forEach just executes code



// ===================================================
// 🔑 PART 7: Key Difference (Interview Favorite 🔥)
// ===================================================

// | Feature            | forEach      | map                 |
// | ------------------ | ------------ | ------------------- |
// | Returns new array  | ❌ No         | ✅ Yes               |
// | Can transform data | ❌ No         | ✅ Yes               |
// | Can chain methods  | ❌ No         | ✅ Yes               |
// | Use case           | Side effects | Data transformation |




// ===================================================
// ⚠️ PART 8: Common Beginner Mistakes
// ===================================================

// ❌ Expecting forEach to return array
// ❌ Chaining after forEach
// ❌ Using map when no return is needed
// ❌ Forgetting to return inside map callback
// ❌ Mutating original array inside map




// ===================================================
// 🚀 PRO TIP (Professional Insight)
// ===================================================
// 🔥 Use map when you need new transformed data
// 🔥 Use forEach for logging, API calls, side effects
// 🔥 In React, always use map for rendering lists
// 🔥 If you forget return in map → array of undefined
// 🔥 This difference is VERY common in interviews