// ===================================================
// 🔰 PART 1: Array Methods – filter() vs find()
// ===================================================
// Description:
// Both methods search elements based on a condition.
// ✔ filter() → returns ALL matching elements
// ✔ find()   → returns FIRST matching element
// 🔥 Very common interview question



let employees = [
    { empName: "KEsavan", salary: 150000 },
    { empName: "Murugesan", salary: 100000 },
    { empName: "John", salary: 120000 }
];



// ===================================================
// 1️⃣ PART 2: filter()
// ===================================================
// 👉 Returns ALL matching elements
// 👉 Output is always an ARRAY
// 👉 Callback runs for EVERY element

let filterData = employees.filter((val, index, array) => {
    console.log("filter index:", index);
    return val.salary > 110000;
});

console.log("Filter Result:", filterData);

// 🔎 Explanation:
// ✔ Checks all 3 elements
// ✔ Returns new array
// ✔ Does NOT modify original array
// ✔ Even if first match found → continues checking



// ===================================================
// 2️⃣ PART 3: find()
// ===================================================
// 👉 Returns FIRST matching element
// 👉 Output is a SINGLE OBJECT
// 👉 Stops execution after match

let filterDataByFind = employees.find((val, index, array) => {
    console.log("find index:", index);
    return val.salary > 100000;
});

console.log("Find Result:", filterDataByFind);

// 🔎 Explanation:
// ✔ Stops at first match
// ✔ Returns object (not array)
// ✔ Faster than filter when you need single result
// ✔ Returns undefined if no match




// ===================================================
// 🧠 PART 4: Output Explanation
// ===================================================

// Employees Array:
// [
//   { empName: "KEsavan", salary: 150000 },
//   { empName: "Murugesan", salary: 100000 },
//   { empName: "John", salary: 120000 }
// ]


// 👉 filter result:
// [
//   { empName: "KEsavan", salary: 150000 },
//   { empName: "John", salary: 120000 }
// ]

// ✔ Checked all elements
// ✔ Returned multiple values
// ✔ Output type → Array


// 👉 find result:
// { empName: "KEsavan", salary: 150000 }

// ✔ Stopped after first match
// ✔ Returned single object
// ✔ Output type → Object




// ===================================================
// 🔥 PART 5: Interview Comparison Table
// ===================================================

// | Feature          | filter() | find()                |
// | ---------------- | -------- | --------------------- |
// | Return type      | Array    | Single value          |
// | Multiple matches | ✅ Yes    | ❌ No                  |
// | Stops early      | ❌ No     | ✅ Yes                 |
// | Chainable        | ✅ Yes    | ❌ No (returns object) |




// ===================================================
// ⚠️ PART 6: Important Notes
// ===================================================

// ❌ filter() always loops full array
// ❌ find() stops when match found
// ❌ find() returns undefined if no match
// ❌ filter() returns empty array if no match
// ❌ Confusing filter with map



// ===================================================
// 🚀 PRO TIP (Professional Insight)
// ===================================================
// 🔥 Use filter() when you expect multiple results
// 🔥 Use find() when you need only first match
// 🔥 For index → use findIndex()
// 🔥 filter() is chainable (great for pipelines)
// 🔥 Choosing correct method improves performance