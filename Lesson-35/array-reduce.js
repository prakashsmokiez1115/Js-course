// ===================================================
// 🔰 PART 1: Array reduce() Method
// ===================================================
// Description:
// reduce() is used to convert an array into
// a SINGLE value.
// 🔥 Very powerful & very common in interviews.



// ===================================================
// 1️⃣ PART 2: Sum Using Normal for Loop
// ===================================================

let arr = [10, 2, 3, 4, 5];

// 10 + 2 + 3 + 4 + 5 => 24

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i];
}

console.log("Total using for loop:", totalVal);

// 🔎 Explanation:
// ✔ Start with 0
// ✔ Add each element
// ✔ Store result in same variable



// ===================================================
// 2️⃣ PART 3: Sum Using reduce()
// ===================================================

let totalVal1 = arr.reduce(
    (acc, cElement, index, array) => {
        return acc + cElement;
    },
    0
);

console.log("Total using reduce:", totalVal1);

// 🔎 Explanation:
// ✔ acc → accumulator (stores running total)
// ✔ cElement → current element
// ✔ 0 → initial value
// ✔ Returns single final value



// ===================================================
// 3️⃣ PART 4: Real Example – Total Employee Salary
// ===================================================

let employees = [
    { eName: "Xyz", salary: 1000 },
    { eName: "abc", salary: 10000 },
    { eName: "Kesavan", salary: 20000 },
    { eName: "Alex", salary: 25000 }
];

let calcTotalSalary = employees.reduce(
    (acc, cElement) => {
        return acc + cElement.salary;
    },
    0
);

console.log("Total Salary:", calcTotalSalary);

// 🔎 Explanation:
// ✔ Extract salary from each object
// ✔ Keep adding to accumulator
// ✔ Final result → single number




// ===================================================
// 🧠 PART 5: reduce() Syntax
// ===================================================

// array.reduce((accumulator, currentValue) => {
//     return newValue;
// }, initialValue);




// ===================================================
// 🔑 PART 6: reduce Parameters
// ===================================================

// | Parameter | Meaning                             |
// | --------- | ----------------------------------- |
// | acc       | Accumulator (running result)        |
// | cElement  | Current element                     |
// | index     | Current index (optional)            |
// | array     | Full array (optional)               |
// | 0         | Initial value                       |




// ===================================================
// 🔥 PART 7: How reduce Works Internally
// ===================================================

// For array:
// [10, 2, 3, 4, 5]

// Steps:

// 1️⃣ acc = 0 + 10 = 10
// 2️⃣ acc = 10 + 2 = 12
// 3️⃣ acc = 12 + 3 = 15
// 4️⃣ acc = 15 + 4 = 19
// 5️⃣ acc = 19 + 5 = 24

// Final result → 24




// ===================================================
// 🔥 PART 8: Why reduce is Powerful
// ===================================================

// It can:

// ✔ Sum numbers
// ✔ Multiply values
// ✔ Count items
// ✔ Group data
// ✔ Flatten arrays
// ✔ Build objects
// ✔ Complex data transformation




// ===================================================
// 🔥 PART 9: Interview-Level Comparison
// ===================================================

// | Method   | Purpose                      |
// | -------- | ---------------------------- |
// | map()    | Transform each element       |
// | filter() | Filter elements              |
// | reduce() | Convert array → single value |




// ===================================================
// ⚠️ PART 10: Important Rules
// ===================================================

// ✔ reduce returns ONE value
// ✔ Initial value is important
// ✔ Without initial value → first element becomes accumulator
// ✔ Does NOT modify original array
// ✔ Can return number, string, object, array — anything




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Always provide initial value (prevents bugs)
// 🔥 reduce can replace map + filter in advanced cases
// 🔥 Practice building objects using reduce
// 🔥 Very common in React & data transformation
// 🔥 Master reduce deeply — high interview weight