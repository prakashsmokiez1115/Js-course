// ===================================================
// 🔰 PART 1: JavaScript Event Loop Basics
// ===================================================
// JavaScript is:
// ✔ Single-threaded
// ✔ Synchronous by default
// ✔ Uses Event Loop for async behavior



// ===================================================
// 1️⃣ PART 2: Normal Synchronous Execution
// ===================================================

function f1() {
    console.log("First");
}

function f2() {
    console.log("Second");
}

function f3() {
    console.log("Third");
}

f1();
f2();
f3();

// 🔎 Output:
// First
// Second
// Third

// ✔ Because JS executes line-by-line
// ✔ Everything runs in Call Stack



// ===================================================
// 🧠 PART 3: Event Loop Concept
// ===================================================

/*
Event Loop Flow:

1️⃣ Call Stack (Synchronous Code)
2️⃣ Web APIs (Browser / Node APIs)
3️⃣ Microtask Queue (Higher Priority)
      - Promise
      - queueMicrotask
4️⃣ Macrotask Queue
      - setTimeout
      - setInterval
      - setImmediate

Priority Order:
Call Stack → Microtask Queue → Macrotask Queue
*/



// ===================================================
// 🔥 PART 4: setTimeout Example
// ===================================================

// f1();
// setTimeout(f2, 2000);
// f3();

// 🔎 Output:
// First
// Third
// Second

// ✔ setTimeout goes to Web API
// ✔ After timer completes → moves to Macrotask Queue
// ✔ Event Loop pushes it to Call Stack
// ✔ Executes AFTER synchronous code



// ===================================================
// 🔥 PART 5: Microtask vs Macrotask Example
// ===================================================

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

/*
🔎 Output:
Start
End
Promise
Timeout
*/

// 🧠 Why?

// 1️⃣ Call Stack → Start
// 2️⃣ Call Stack → End
// 3️⃣ Microtask Queue → Promise
// 4️⃣ Macrotask Queue → setTimeout



// ===================================================
// 🔥 PART 6: Important Concepts
// ===================================================

// ✔ JavaScript is single-threaded
// ✔ Event Loop manages async operations
// ✔ Microtasks have HIGHER priority
// ✔ Promise runs before setTimeout
// ✔ setTimeout(0) ≠ immediate execution



// ===================================================
// 🔥 PART 7: Visual Execution Flow
// ===================================================

/*
Call Stack
   ↓
Web APIs
   ↓
Microtask Queue (Promise)
   ↓
Macrotask Queue (setTimeout)
   ↓
Event Loop pushes tasks back to Call Stack
*/



// ===================================================
// 🚀 PRO TIP (Interview Level)
// ===================================================
// 🔥 Always remember priority:
//    Sync → Microtask → Macrotask
// 🔥 Promise is executed before setTimeout
// 🔥 setTimeout(0) waits until call stack is empty
// 🔥 Event loop questions are VERY common in interviews
// 🔥 Practice multiple Promise + Timeout combinations