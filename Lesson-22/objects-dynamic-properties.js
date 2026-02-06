// ===================================================
// 🔰 JavaScript Objects – Deep Understanding
// ===================================================

// Objects store data in KEY : VALUE pairs



// ===================================================
// 1️⃣ Object with Properties & Method
// ===================================================

// let userProfile = {
//     userName: "Kesavan",
//     age: 30,
//     hairColor: "black",
//     eyeColor: "brown",

//     eat: function () {
//         console.log("I'm gonna eat ice cream");
//         return "Vanilla Ice Cream";
//     }
// };

// console.log(userProfile.hairColor, userProfile.age);
// console.log(userProfile.userName);

// let iceCreamType = userProfile.eat();
// console.log(iceCreamType);



// ===================================================
// 2️⃣ Object with String-Based Property Names
// ===================================================

// Useful when:
// ✔ key has spaces
// ✔ key comes dynamically

// let vehicle = {
//     "vehicleType": "four-wheeler",
//     "price": 20000,
//     fuelType: "petrol",
//     "seater type": ["two", "three", "four"]
// };

// console.log(vehicle.vehicleType);
// console.log(vehicle["vehicleType"]);
// console.log(vehicle["fuelType"]);
// console.log(vehicle["seater type"][0]);



// ===================================================
// 3️⃣ Shorthand Property Assignment (ES6)
// ===================================================

let uName = "Kesavan";
let age = 30;

// Old way ❌
// let person1 = {
//     uName: uName,
//     age: age
// };

// New way ✅ (Recommended)
let dynamicProp = "employeeId";

let person1 = {
    uName,
    age,

    // normal string key
    ['dynamicProp']: "IFS246",

    // dynamic key using variable
    [dynamicProp]: "UQI!@#$"
};

console.log(person1);
console.log(
    person1.uName,
    person1.age,
    person1.dynamicProp,
    person1[dynamicProp]
);



























// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 Object Method
// A function inside an object is called a method.

// eat: function() {}


// Accessed using:
// userProfile.eat()











// 🔹 Dot vs Bracket Notation

// | Case            | Use                  |
// | --------------- | -------------------- |
// | Normal keys     | `object.key`         |
// | Keys with space | `object["key name"]` |
// | Dynamic keys    | `object[variable]`   |





















// 🔹 Shorthand Property (🔥 Interview Favorite)

// let obj = { uName, age };

// ✔ Cleaner
// ✔ Modern JS
// ✔ Used in React, APIs

// 🔹 Dynamic Property Names
// let key = "id";
// let obj = { [key]: 123 };

// ✔ Property name decided at runtime
// ✔ Used in forms, configs, APIs

// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Using dot notation for dynamic keys
// ❌ Forgetting quotes for space keys
// ❌ Confusing "dynamicProp" with [dynamicProp]

// 🔥 INTERVIEW QUICK QUESTIONS

// ✔ Difference between dot & bracket notation
// ✔ What is shorthand property assignment?
// ✔ How to create dynamic object keys?
// ✔ What is a method in object?
