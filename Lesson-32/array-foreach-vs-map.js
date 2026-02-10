// ===================================================
// 🔰 Array Methods: forEach() vs map()
// ===================================================

let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"];


// ===================================================
// 1️⃣ forEach()
// 👉 Executes function for EACH element
// 👉 DOES NOT return a new array
// ===================================================

// fruits.forEach(printFruit);

// function printFruit(currentElement, index, totalArray) {
//     console.log(currentElement, index, totalArray);
// }


// Inline callback
// fruits.forEach((currentEle, index, totalArr) => {
//     console.log(currentEle, index, totalArr);
// });


// ❌ forEach does NOT return array
// let newArr = fruits.forEach((cElement) => {
//     console.log(cElement.toUpperCase());
//     return cElement;
// });

// console.log(newArr); // undefined



// ===================================================
// 2️⃣ map()
// 👉 Transforms each element
// 👉 RETURNS a NEW array
// ===================================================

// let newArr1 = fruits.map((cElement, index) => {
//     return { id: index + 1, fruit: cElement };
// });

// console.log(newArr1);



// ===================================================
// 🔥 Method Chaining (map → sort → fill)
// ===================================================

// let newArr = fruits
//     .map(cEle => cEle.toUpperCase())
//     .sort()
//     .fill("123");

// console.log(newArr);



// ❌ forEach cannot be chained
// let newArr1 = fruits
//     .forEach(cEle => cEle.toUpperCase())
//     .sort()
//     .fill("123");

// console.log(newArr1);



// ===================================================
// 3️⃣ Condition-based Transformation
// ===================================================

// map → returns boolean array
let newArr2 = fruits.map(cEle => {
    return cEle === "Apple";
});

console.log(newArr2);



// forEach → just executes logic
fruits.forEach(val => console.log(val === "Apple"));

































// 🧠 OUTPUT EXPLANATION


// Given:
// ["Apple", "WaterMelon", "MuskMelon", "Banana"]

// 👉 map result:
// [true, false, false, false]

// 👉 forEach result:
// true
// false
// false
// false
















// 🔑 KEY DIFFERENCE (INTERVIEW FAVORITE 🔥)

// | Feature            | forEach      | map                 |
// | ------------------ | ------------ | ------------------- |
// | Returns new array  | ❌ No         | ✅ Yes               |
// | Can transform data | ❌ No         | ✅ Yes               |
// | Can chain methods  | ❌ No         | ✅ Yes               |
// | Use case           | Side effects | Data transformation |









// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Expecting forEach to return array
// ❌ Chaining after forEach
// ❌ Using map when no return is needed