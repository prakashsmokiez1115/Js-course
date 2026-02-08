// ===================================================
// 🔰 JavaScript Array Methods (Mutation Methods)
// ===================================================

// These methods MODIFY the original array



// ===================================================
// Sample Array
// ===================================================

// let arr = [100, 200, 300, 400];



// ===================================================
// 1️⃣ pop() → Remove LAST element
// ===================================================

// let poppedVal = arr.pop();
// console.log(poppedVal, arr);



// ===================================================
// 2️⃣ push() → Add element(s) at END
// ===================================================

// arr.push(500, 550, 600);
// console.log(arr);



// ===================================================
// 3️⃣ shift() → Remove FIRST element
// ===================================================

// let firstVal = arr.shift();
// console.log(firstVal, arr);



// ===================================================
// 4️⃣ unshift() → Add element(s) at START
// ===================================================

// arr.unshift(-2, -1, 0, 10, 20);
// console.log(arr);



// ===================================================
// 🔥 5️⃣ splice() (VERY IMPORTANT)
// ===================================================

// splice(startIndex, deleteCount, ...items)

// It can:
// ✔ Add elements
// ✔ Remove elements
// ✔ Replace elements



// ===================================================
// Splice Examples
// ===================================================

let newArr = [10, 20, 30, 40];

// Add elements at START (no deletion)
newArr.splice(0, 0, 100, 200, 300);

// Add elements before LAST index using negative index
newArr.splice(-1, 0, 500, 600, 700);

console.log(newArr);











































// 🧠 WHAT A FRESHER MUST UNDERSTAND


// 🔹 pop()
// ✔ Removes last element
// ✔ Returns removed element

// 🔹 push()
// ✔ Adds element(s) to end
// ✔ Returns new length

// 🔹 shift()
// ✔ Removes first element
// ✔ Slower than pop (re-indexing)

// 🔹 unshift()
// ✔ Adds element(s) at start
// ✔ Slower than push








// 🔹 splice() (🔥 Interview Favorite)
// array.splice(start, deleteCount, ...items)


// ✔ Modifies original array
// ✔ Very powerful
// ✔ Can do everything









// 🔥 SPLICE BEHAVIOR TABLE

// | Use     | Example             |
// | ------- | ------------------- |
// | Insert  | `splice(1, 0, "A")` |
// | Delete  | `splice(1, 2)`      |
// | Replace | `splice(1, 1, "X")` |








// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Expecting splice to return new array
// ❌ Confusing splice with slice
// ❌ Forgetting negative index behavior
