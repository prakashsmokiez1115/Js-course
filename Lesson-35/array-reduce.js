// ===================================================
// 🔰 Array reduce() Method
// ===================================================


// ===================================================
// 1️⃣ Sum Using Normal for Loop
// ===================================================

let arr = [10, 2, 3, 4, 5];

// 10 + 2 + 3 + 4 + 5 => 24

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i];
}

console.log("Total using for loop:", totalVal);



// ===================================================
// 2️⃣ Sum Using reduce()
// ===================================================

let totalVal1 = arr.reduce(
    (acc, cElement, index, array) => {
        return acc + cElement;
    },
    0
);

console.log("Total using reduce:", totalVal1);



// ===================================================
// 3️⃣ Real Example: Total Employee Salary
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



















































// 🧠 WHAT YOU MUST UNDERSTAND ABOUT reduce()

// 🔥 reduce Syntax
// array.reduce((accumulator, currentValue) => {
//     return newValue;
// }, initialValue);








// 🔑 reduce Parameters

// | Parameter | Meaning                             |
// | --------- | ----------------------------------- |
// | acc       | Accumulator (stores running result) |
// | cElement  | Current element                     |
// | index     | Current index (optional)            |
// | array     | Full array (optional)               |
// | 0         | Initial value                       |














// 🔥 How reduce Works Internally

// For this array:

// [10, 2, 3, 4, 5]


// Steps:

// 1️⃣ acc = 0 + 10 = 10
// 2️⃣ acc = 10 + 2 = 12
// 3️⃣ acc = 12 + 3 = 15
// 4️⃣ acc = 15 + 4 = 19
// 5️⃣ acc = 19 + 5 = 24


// Final result → 24












// 🔥 Why reduce is Powerful

// It can:

// ✔ Sum numbers
// ✔ Multiply values
// ✔ Count items
// ✔ Group data
// ✔ Flatten arrays
// ✔ Build objects
// ✔ Complex data transformation
















// 🔥 Interview-Level Comparison



// | Method   | Purpose                      |
// | -------- | ---------------------------- |
// | map()    | Transform each element       |
// | filter() | Filter elements              |
// | reduce() | Convert array → single value |













// ⚠️ IMPORTANT RULES

// ✔ reduce returns ONE value
// ✔ Initial value is important
// ✔ Without initial value → first element becomes accumulator
// ✔ Does NOT modify original array