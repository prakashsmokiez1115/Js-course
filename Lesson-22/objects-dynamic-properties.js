// ===================================================
// 🔰 PART 1: JavaScript Objects – Deep Understanding
// ===================================================
// Description:
// Objects store data in KEY : VALUE pairs.
// They are used to represent real-world entities.
// Keys are called properties.
// Functions inside objects are called methods.



// ===================================================
// 1️⃣ PART 2: Object with Properties & Method
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

// 🔎 Explanation:
// ✔ userName, age, hairColor → properties
// ✔ eat → method (function inside object)
// ✔ userProfile.eat() → calls method
// ✔ Method can return value



// ===================================================
// 2️⃣ PART 3: Object with String-Based Property Names
// ===================================================
// Useful when:
// ✔ Key has spaces
// ✔ Key is dynamic
// ✔ Key is not valid JS identifier

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

// 🔎 Dot vs Bracket:
// ✔ Dot notation → simple keys
// ✔ Bracket notation → space keys or dynamic keys



// ===================================================
// 3️⃣ PART 4: Shorthand Property Assignment (ES6)
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

    // normal string key (this creates key literally named "dynamicProp")
    ['dynamicProp']: "IFS246",

    // dynamic key using variable
    [dynamicProp]: "UQI!@#$"
};

console.log(person1);

console.log(
    person1.uName,
    person1.age,
    person1.dynamicProp,      // accesses literal key "dynamicProp"
    person1[dynamicProp]      // accesses key stored in variable
);

// 🔎 Important Difference:
// ['dynamicProp'] → key name is literally "dynamicProp"
// [dynamicProp]   → key name becomes value of variable (employeeId)




// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 Object Method
// A function inside an object is called a method.

// eat: function() {}
// Accessed using:
// userProfile.eat()



// ===================================================
// 🔹 PART 6: Dot vs Bracket Notation
// ===================================================

// | Case            | Use                  |
// | --------------- | -------------------- |
// | Normal keys     | object.key           |
// | Keys with space | object["key name"]   |
// | Dynamic keys    | object[variable]     |



// ===================================================
// 🔹 PART 7: Shorthand Property (🔥 Interview Favorite)
// ===================================================

// let obj = { uName, age };

// ✔ Cleaner
// ✔ Modern JS
// ✔ Used in React, APIs



// 🔹 Dynamic Property Names

// let key = "id";
// let obj = { [key]: 123 };

// ✔ Property name decided at runtime
// ✔ Used in forms, configs, APIs
// ✔ Very common in dynamic UI logic



// ===================================================
// ⚠️ PART 8: Common Beginner Mistakes
// ===================================================

// ❌ Using dot notation for dynamic keys
// ❌ Forgetting quotes for space keys
// ❌ Confusing "dynamicProp" with [dynamicProp]
// ❌ Forgetting method call parentheses (eat vs eat())



// ===================================================
// 🔥 PART 9: Interview Quick Questions
// ===================================================

// ✔ Difference between dot & bracket notation
// ✔ What is shorthand property assignment?
// ✔ How to create dynamic object keys?
// ✔ What is a method in object?
// ✔ What is computed property name?




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Objects are foundation of JSON & APIs
// 🔥 Most React state is object-based
// 🔥 Master dynamic keys for forms & configs
// 🔥 Understand method vs property clearly
// 🔥 Practice accessing nested objects deeply