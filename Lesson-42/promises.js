// ===================================================
// 🔰 PROMISE – COMPLETE UNDERSTANDING (Interview Ready)
// ===================================================


// ===================================================
// 1️⃣ Creating a Promise
// ===================================================

let newPromise = new Promise((resolve, reject) => {

    let dataRecieved = false;

    if (dataRecieved) {
        resolve("Data Recieved");
    } else {
        reject("Data Not Recieved");
    }

});



// ===================================================
// 2️⃣ Promise States (VERY IMPORTANT)
// ===================================================

// | State      | Meaning                     |
// | ---------- | --------------------------- |
// | Pending    | Initial state               |
// | Fulfilled  | resolve() is called         |
// | Rejected   | reject() is called          |


// Once fulfilled or rejected → state is FINAL.
// It cannot change again.


// ===================================================
// 3️⃣ Handling Promise (then / catch / finally)
// ===================================================

newPromise
.then((message) => {
    console.log("Success: " + message);
    return "Next Success " + message;  // value passed to next then
})
.then((nextMessage) => {
    console.log(nextMessage);
})
.catch((error) => {
    console.log("Failure: " + error);
})
.finally(() => {
    console.log("End");
});


// Since dataRecieved = false
// Output:
// Failure: Data Not Recieved
// End



// ===================================================
// 4️⃣ Important Promise Rules
// ===================================================

// ✔ .then() runs only on resolve
// ✔ .catch() runs only on reject
// ✔ .finally() runs ALWAYS
// ✔ Returning value inside .then() passes to next .then()
// ✔ Throwing error inside .then() jumps to .catch()



// ===================================================
// 5️⃣ Promise Flow (Execution Internally)
// ===================================================

// new Promise()
//    ↓
// Executor runs immediately (synchronously)
//    ↓
// resolve/reject schedules Microtask
//    ↓
// .then()/.catch() executed via Microtask Queue



// ===================================================
// 6️⃣ Event Loop Priority (INTERVIEW FAVORITE 🔥)
// ===================================================

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout


// Why?

// 1️⃣ Call Stack → Start
// 2️⃣ Call Stack → End
// 3️⃣ Microtask Queue → Promise
// 4️⃣ Macrotask Queue → setTimeout



// ===================================================
// 7️⃣ Why Promises Are Better Than Callbacks
// ===================================================

// ❌ Callback Hell

/*
fetchProfile(() => {
    fetchProfile(() => {
        fetchProfile(() => {
            ...
        });
    });
});
*/

// Problems:
// ❌ Deep nesting
// ❌ Hard error handling
// ❌ Poor readability



// ✅ Promise Version

/*
fetchProfile()
   .then()
   .then()
   .catch()
*/

// ✔ Flat structure
// ✔ Easy chaining
// ✔ Centralized error handling



// ===================================================
// 8️⃣ Common Interview Traps
// ===================================================

// ✔ Promise executor runs immediately
// ✔ .then() is always async (Microtask)
// ✔ Promise is not multi-threaded
// ✔ Returning Promise inside .then() chains properly
// ✔ Missing return breaks chain



// ===================================================
// 9️⃣ Promise vs Async/Await
// ===================================================

// | Then/Catch         | Async/Await          |
// | ------------------ | -------------------- |
// | Chain-based        | Looks synchronous    |
// | Hard to read large | Cleaner for logic    |
// | Explicit chaining  | Structured flow      |


// Internally:
// async/await is built on Promises.



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================

// 🔥 Always return inside .then()
// 🔥 Avoid nested .then()
// 🔥 Always handle errors with .catch()
// 🔥 Remember Microtask > Macrotask
// 🔥 async/await is just syntactic sugar over Promise
// 🔥 Promise questions are VERY common in interviews
