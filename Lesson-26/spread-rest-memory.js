// ===================================================
// 🔰 JavaScript Spread Operator ( ... )
// ===================================================

// Spread operator is used to:
// ✔ Copy arrays
// ✔ Merge arrays
// ✔ Copy objects
// ✔ Update values immutably (VERY IMPORTANT in React)



// ===================================================
// 1️⃣ Spread Operator with Arrays
// ===================================================

// let hobbies = ["Cricket", "Football", "BasketBall"];
// let hobbies1 = ["Reader", "Writer"];

// Merge arrays
// let newArr = [...hobbies, ...hobbies1];

// Change original array
// hobbies[0] = "BaseBall";

// Add new values
// let newArr1 = [...newArr, "VideoCreator", "Content Writer"];

// console.log(newArr);
// console.log(newArr1);



// ===================================================
// 2️⃣ Spread Operator with Objects
// ===================================================

let empDetail = {
    empId: "IQ123",
    empName: "Kesavan",
    empRole: "React Developer"
};

// Copy + override + add new properties
let team2 = {
    ...empDetail,
    empId: "IQ456",                 // override
    empSalary: 100000,              // new property
    team2Desig: "Full Stack Developer"
};

console.log(team2);



// ===================================================
// 🔰 Rest Parameter ( ... )
// ===================================================

// Rest parameter collects remaining arguments into an array

function restParams(a, b, ...arr) {
    console.log(a, b, arr);
}

restParams(1, 2, 3, 4, 5);








































































// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 Spread Operator (...)

// Used to expand values.

// [...array]
// {...object}


// ✔ Creates a new copy
// ✔ Prevents accidental data change
// ✔ Used heavily in React & Redux













// 🔹 Spread vs Reference (IMPORTANT 🔥)

// ❌ Reference copy
// let b = a;


// ✅ Spread copy
// let b = [...a];













// 🔹 Rest Parameter

// Used in function parameters.
// function demo(a, ...rest) {}


// ✔ rest is always an array
// ✔ Must be the last parameter







// 🔥 SPREAD vs REST (INTERVIEW FAVORITE)


// | Feature  | Spread          | Rest                |
// | -------- | --------------- | ------------------- |
// | Usage    | Copy / Merge    | Collect             |
// | Location | RHS             | Function parameters |
// | Output   | Expanded values | Array               |













// 🧠 MEMORY CONCEPT (IMPORTANT THEORY)

// 🔹 Stack Memory
// Stores primitive values
// Stores references (addresses)

// Variable  → Address
// objRef    → 0x001





// 🔹 Heap Memory
// Stores actual objects & arrays

// 0x001 → { name: "Bob" }


// ✔ Multiple variables can point to same object
// ✔ Spread creates a new address













// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Forgetting spread creates a new copy
// ❌ Using rest parameter in wrong position
// ❌ Confusing spread & rest (same syntax, different usage)