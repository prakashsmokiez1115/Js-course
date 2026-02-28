// ===================================================
// 🔰 PART 1: Fetch API using .then() / .catch()
// ===================================================

fetch("https://fakestoreapi.com/users/abcd")
  .then((response) => {

    if (!response.ok) {
        throw new Error("Data Not Found");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });



// ===================================================
// 🔰 PART 2: Fetch API using async / await
// ===================================================

async function fetchData() {

    try {

        let responce = await fetch("https://fakestoreapi.com/users", {
            method: "PUT"
        });

        if (!responce.ok) {
            throw new Error("Data Not found");
        }

        let data = await responce.json();

        console.log(data[0]);

    }
    catch (error) {
        console.log(error.message);
    }

}

fetchData();



// ===================================================
// 🧠 PART 3: What You MUST Understand
// ===================================================

// 🔥 What is fetch()?

// ✔ Used to make HTTP requests
// ✔ Returns a Promise
// ✔ Used for API communication
// ✔ Works in browser & modern Node.js



// ===================================================
// 🔥 PART 4: Very Important Concept → response.ok
// ===================================================

// if (!response.ok)

// ✔ true  → status 200–299 (success)
// ❌ false → 404, 500, 403, etc.

// ⚠️ Interview Point:
// fetch DOES NOT reject on HTTP errors.
// It only rejects on network failure.

// So we manually check:
if (!response.ok) {
   throw new Error("Custom error");
}



// ===================================================
// 🔥 PART 5: First Example Behavior
// ===================================================

// URL: /users/abcd

// ✔ Server returns 404
// ✔ response.ok = false
// ✔ You throw Error
// ✔ Goes to .catch()

// Output:
// Data Not Found



// ===================================================
// 🔥 PART 6: Second Example Behavior (PUT)
// ===================================================

// method: "PUT"

// ✔ PUT is used to update data
// ✔ If endpoint does not support PUT
// ✔ response.ok = false
// ✔ Error thrown
// ✔ catch block runs



// ===================================================
// 🔥 PART 7: Why await response.json()?
// ===================================================

// Because:
// response.json()

// ALSO returns a Promise.

// So we must await it.



// ===================================================
// 🔥 PART 8: Execution Flow (Async Version)
// ===================================================

// fetchData();

// 1️⃣ Await fetch()
// 2️⃣ Check response.ok
// 3️⃣ Await response.json()
// 4️⃣ Print data
// 5️⃣ Catch errors if thrown



// ===================================================
// 🔥 PART 9: Then/Catch vs Async/Await
// ===================================================

// | Then/Catch              | Async/Await            |
// | ----------------------- | ---------------------- |
// | Chain-based             | Cleaner                |
// | Harder to read          | Looks synchronous      |
// | Good for simple flows   | Better for structured  |



// ===================================================
// 🔥 PART 10: HTTP Methods (Interview)
// ===================================================

// | Method | Purpose             |
// | ------ | ------------------- |
// | GET    | Fetch data          |
// | POST   | Create data         |
// | PUT    | Update full data    |
// | PATCH  | Update partial data |
// | DELETE | Remove data         |



// ===================================================
// ⚠️ COMMON BEGINNER MISTAKES
// ===================================================

// ❌ Forgetting response.ok check
// ❌ Not awaiting response.json()
// ❌ Forgetting try/catch in async
// ❌ Assuming fetch rejects on 404
// ❌ Using wrong HTTP method



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Always handle HTTP errors manually
// 🔥 Use async/await for cleaner production code
// 🔥 Add timeout handling in real apps
// 🔥 Handle loading states in UI frameworks
// 🔥 Understand fetch lifecycle deeply for interviews