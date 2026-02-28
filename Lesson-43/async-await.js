// ===================================================
// 🔰 PART 1: Async / Await with Promise
// ===================================================

let newPromise = new Promise((fullfilled, failure) => {

    let dataRecieved = false;

    if (dataRecieved) {
        fullfilled("Data Fetched Successfully");
    }
    else {
        // failure("Data Not Found");
        throw new Error("Search Proper Data");
    }

});


// ===================================================
// 1️⃣ PART 2: Async Function with try / catch / finally
// ===================================================

async function executePromise() {

    try {

        let message = await newPromise;

        let newMessage = await newPromise;

        console.log(message);
        console.log(`Next Message: ${newMessage}`);

    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        console.log("End");
    }
}

executePromise();

console.log("Last");



// ===================================================
// 🧠 PART 3: What Happens Internally?
// ===================================================

// Step 1:
// Promise is created immediately.

// let dataRecieved = false;

// So this runs:
throw new Error("Search Proper Data");

// ✔ Throw inside Promise executor
// ✔ Automatically converts into rejection
// ✔ Same as: failure("Search Proper Data")



// ===================================================
// 🔥 PART 4: Execution Order (VERY IMPORTANT)
// ===================================================

// executePromise();
// console.log("Last");

// Output:
// Last
// Search Proper Data
// End

// 🧠 Why?

// 1️⃣ executePromise() starts
// 2️⃣ await pauses inside async function
// 3️⃣ JS continues → prints "Last"
// 4️⃣ Promise rejection goes to Microtask Queue
// 5️⃣ catch block runs
// 6️⃣ finally runs



// ===================================================
// 🔥 PART 5: Important Async Concepts
// ===================================================

// ✔ async keyword
// Automatically makes function return a Promise

// ✔ await keyword
// Waits for Promise resolution
// Can only be used inside async function
// Pauses ONLY inside async function
// Does NOT block entire program



// ===================================================
// 🔥 PART 6: Why Second await Never Runs?
// ===================================================

// let message = await newPromise;
// let newMessage = await newPromise;

// Since first await throws error,
// control jumps to catch immediately.

// ✔ Second await never executes



// ===================================================
// 🔥 PART 7: Then/Catch vs Async/Await
// ===================================================

// | Then/Catch              | Async/Await               |
// | ----------------------- | ------------------------- |
// | Chain based             | Synchronous style         |
// | Less readable (complex) | Cleaner & readable        |
// | Good for chaining       | Good for structured logic |



// ===================================================
// 🔥 PART 8: Event Loop Detail
// ===================================================

// Promise resolution/rejection goes to:
// 👉 Microtask Queue
// 👉 Higher priority than setTimeout

/*
console.log("Start");

executePromise();

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

Execution Order:
Start
End
(Search Proper Data)
End
Timeout
*/



// ===================================================
// ⚠️ COMMON BEGINNER MISTAKES
// ===================================================

// ❌ Using await outside async function
// ❌ Forgetting try/catch
// ❌ Thinking await blocks entire JS
// ❌ Not understanding Microtask priority
// ❌ Awaiting same rejected promise repeatedly



// ===================================================
// 🚀 PRO TIP (Professional + Interview Level)
// ===================================================
// 🔥 Always wrap await inside try/catch
// 🔥 Use async/await for cleaner business logic
// 🔥 Remember: async function ALWAYS returns Promise
// 🔥 Rejected Promise without catch → Unhandled rejection error
// 🔥 Async/Await questions are VERY common in interviews
// 🔥 Understand Microtask Queue deeply