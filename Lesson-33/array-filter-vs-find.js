// ===================================================
// 🔰 Array Methods: filter() vs find()
// ===================================================

let employees = [
    { empName: "KEsavan", salary: 150000 },
    { empName: "Murugesan", salary: 100000 },
    { empName: "John", salary: 120000 }
];


// ===================================================
// 1️⃣ filter()
// 👉 Returns ALL matching elements
// 👉 Output is always an ARRAY
// 👉 Callback runs for EVERY element
// ===================================================

let filterData = employees.filter((val, index, array) => {
    console.log("filter index:", index);
    return val.salary > 110000;
});

console.log("Filter Result:", filterData);



// ===================================================
// 2️⃣ find()
// 👉 Returns FIRST matching element
// 👉 Output is a SINGLE OBJECT
// 👉 Stops execution after match
// ===================================================

let filterDataByFind = employees.find((val, index, array) => {
    console.log("find index:", index);
    return val.salary > 100000;
});

console.log("Find Result:", filterDataByFind);




































// 🧠 OUTPUT EXPLANATION

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
// ✔ Output type → array













// 👉 find result:
// { empName: "KEsavan", salary: 150000 }


// ✔ Stopped after first match
// ✔ Returned single object
// ✔ Output type → object











// 🔥 INTERVIEW COMPARISON TABLE



// | Feature          | filter() | find()                |
// | ---------------- | -------- | --------------------- |
// | Return type      | Array    | Single value          |
// | Multiple matches | ✅ Yes    | ❌ No                  |
// | Stops early      | ❌ No     | ✅ Yes                 |
// | Chainable        | ✅ Yes    | ❌ No (returns object) |








// ⚠️ IMPORTANT NOTES

// ❌ filter() always loops full array
// ❌ find() stops when match found
// ❌ fill() after filter overwrites result
// ❌ find() returns undefined if no match