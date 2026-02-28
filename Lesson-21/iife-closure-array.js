// ===================================================
// 🔰 PART 1: JavaScript IIFE, Closures & Array Internals
// ===================================================
// Description:
// This section covers:
// ✔ Normal functions
// ✔ IIFE (Immediately Invoked Function Expression)
// ✔ Closures (Very Important 🔥)
// ✔ Array internal behavior (length & sparse arrays)



// ===================================================
// 1️⃣ PART 2: Normal Function
// ===================================================
// Description:
// A normal function runs ONLY when you call it.

// function normalFun() {
//     console.log("Executed whenever I am called");
// }

// normalFun();
// normalFun();
// normalFun();

// 🔎 Explanation:
// ✔ Function is defined
// ✔ It executes only when invoked
// ✔ Can be called multiple times



// ===================================================
// 2️⃣ PART 3: IIFE – Immediately Invoked Function Expression
// ===================================================
// Description:
// IIFE runs IMMEDIATELY after definition.
// Used to avoid polluting global scope.

// (function iifePattern(userName, age) {
//     console.log("Self Invoked Function", userName + age);
// })("Kesavan", 45);

// ❌ Cannot call again
// iifePattern(); // ReferenceError

// 🔎 Explanation:
// ✔ Wrapped in ( )
// ✔ Immediately executed using ()
// ✔ Function name not accessible outside
// ✔ Used for one-time execution



// ===================================================
// 3️⃣ PART 4: Closure (VERY IMPORTANT 🔥)
// ===================================================
// Description:
// Closure means:
// ✔ Inner function remembers variables of outer function
// ✔ Even after outer function execution ends

// function outerFunction() {

//     let outerVariable = "I'm from outer scope";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// let innerFun = outerFunction();
// innerFun(); // Accesses outerVariable

// 🔎 Execution Flow:
// 1️⃣ outerFunction() runs
// 2️⃣ innerFunction is returned
// 3️⃣ outerFunction finishes
// 4️⃣ innerFun() still remembers outerVariable

// ✔ This memory behavior is called Closure
// ✔ Closure works because of lexical scope




// ===================================================
// 4️⃣ PART 5: Array Internals (Length Behavior)
// ===================================================

// Creating array using constructor
const arr = new Array();

// Assigning value at index 1
arr[1] = "Kesavan";

console.log(arr);
// Output: [ <1 empty item>, 'Kesavan' ]

// 🔎 Explanation:
// ✔ Index 0 is empty
// ✔ Array becomes sparse array
// ✔ JavaScript allows non-continuous indexes



// ===================================================
// PART 6: Reset Array Using length
// ===================================================

arr.length = 0;

console.log(arr); // []

// 🔎 Explanation:
// ✔ Setting length = 0 clears array instantly
// ✔ Faster than creating new array
// ✔ Common performance trick




// ===================================================
// 🧠 PART 7: What a Fresher MUST Understand
// ===================================================

// 🔹 IIFE
// ✔ Runs immediately
// ✔ Used for:
//    ➡ One-time execution
//    ➡ Data privacy
//    ➡ Avoiding global variables

// Syntax:
// (function(){})();



// 🔹 Closure (INTERVIEW FAVORITE 🔥)
// A closure is created when:
// ✔ A function is defined inside another function
// ✔ Inner function remembers outer variables

// Used in:
// ✔ Data hiding
// ✔ Callbacks
// ✔ Currying
// ✔ React hooks



// 🔹 Why Closure Works?
// Because JavaScript remembers lexical scope
// (Scope is determined by where function is defined)



// 🔹 Array Length Trick
// arr.length = 0;

// ✔ Clears array instantly
// ✔ Faster than creating new array
// ✔ Used in real projects




// ===================================================
// ⚠️ PART 8: Common Beginner Confusions
// ===================================================

// ❌ Thinking array indexes must be continuous
// ❌ Expecting IIFE to be reusable
// ❌ Thinking closure copies values (it references memory)
// ❌ Confusing closure with function call



// ===================================================
// 🔥 PART 9: Interview Quick Table
// ===================================================

// | Concept        | Meaning                        |
// | -------------- | ------------------------------ |
// | IIFE           | Self-executing function        |
// | Closure        | Function remembers outer scope |
// | arr.length = 0 | Clears array                   |
// | Sparse array   | Missing indexes                |




// ===================================================
// 🚀 PRO TIP (Advanced Concept Clarity)
// ===================================================
// 🔥 Closure is about memory retention, not copying
// 🔥 IIFE was heavily used before ES6 modules
// 🔥 Sparse arrays affect loops & performance
// 🔥 Master closure deeply — very common interview topic
// 🔥 These concepts are foundation for async & React hooks