// ===================================================
// 🔰 PART 1: JavaScript call(), apply(), bind()
// ===================================================
// These methods are used to control the value of `this`
// inside a function.


// ===================================================
// Example Objects
// ===================================================

let person = {
    pFName: "Kesavan",
    pLName: "Murugesan"
};

let person1 = {
    pId: "UQI123",
    pFName: "Nanda",
    pLName: "Kumar",

    introYourself: function (a, b) {
        console.log(this.pFName + " " + this.pLName + " " + (a + b));
        return (a + b);
    }
};



// ===================================================
// 1️⃣ PART 2: call()
// ===================================================
// 👉 Calls function immediately
// 👉 Arguments passed normally (comma separated)

person1.introYourself.call(person, 10, 20);

// 🔎 this → person
// Output:
// Kesavan Murugesan 30



// ===================================================
// 2️⃣ PART 3: apply()
// ===================================================
// 👉 Calls function immediately
// 👉 Arguments passed as ARRAY

person1.introYourself.apply(person, [100, 200]);

// 🔎 this → person
// Output:
// Kesavan Murugesan 300



// ===================================================
// 3️⃣ PART 4: bind()
// ===================================================
// 👉 Does NOT call immediately
// 👉 Returns a NEW function

let newFun = person1.introYourself.bind(person, 500, 300);

console.log(newFun());

// 🔎 this → person
// Output:
// Kesavan Murugesan 800



// ===================================================
// 🧠 PART 5: What is `this` Here?
// ===================================================

// Normally:
// person1.introYourself()
// this → person1

// Using call/apply/bind:
// We manually set this → person

// This is called "Explicit Binding"



// ===================================================
// 🔥 PART 6: call vs apply vs bind (INTERVIEW TABLE)
// ===================================================

// | Method  | Calls Immediately? | Arguments Format | Returns      |
// | ------- | ------------------ | ---------------- | ------------ |
// | call()  | ✅ Yes              | Comma separated  | Return value |
// | apply() | ✅ Yes              | Array            | Return value |
// | bind()  | ❌ No               | Comma separated  | New function |



// ===================================================
// 🔥 PART 7: When to Use What?
// ===================================================

// ✔ call() → When arguments are separate
// ✔ apply() → When arguments are in array
// ✔ bind() → When you need function reference later
// ✔ bind() heavily used in React event handlers



// ===================================================
// ⚠️ PART 8: Common Beginner Mistake
// ===================================================

// ❌ Using arrow function inside object method

/*
let obj = {
    name: "JS",
    intro: () => {
        console.log(this.name); // ❌ undefined
    }
}
*/

// 🔎 Why?
// Arrow functions DO NOT bind their own `this`
// They use lexical `this` (from outer scope)

// ✅ Correct way:
let obj = {
    name: "JS",
    intro: function () {
        console.log(this.name);
    }
};

obj.intro();



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 call & apply are rarely used in modern apps
// 🔥 bind is common in class-based React
// 🔥 Spread operator replaced many apply use-cases
// 🔥 Understand explicit vs implicit binding deeply
// 🔥 `this` questions are VERY common in interviews