// ===================================================
// 🔰 PART 1: JavaScript Switch Statement
// ===================================================
// Description:
// switch is used when you want to compare
// ONE value against MULTIPLE fixed values.
// It is cleaner than writing many else-if statements.


// ===================================================
// 📌 PART 2: Syntax of Switch Statement
// ===================================================
/*
switch (expression) {

    case value1:
        // statement
        break;

    case value2:
        // statement
        break;

    default:
        // statement
        break;
}
*/

// 👉 expression is evaluated once.
// 👉 It compares using strict comparison (===).
// 👉 break is very important to stop execution.



// ===================================================
// 1️⃣ PART 3: Example – Traffic Light
// ===================================================

// Uncomment and test

// let trafficLight = "over speed";

// switch (trafficLight) {

//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Slow Down");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Pay Fine");
//         break;
// }

// 🔎 Explanation:
// ✔ Compares trafficLight value with each case.
// ✔ If no case matches → default runs.
// ✔ break prevents execution from continuing to next case.



// ===================================================
// 2️⃣ PART 4: Example – Days (Fall-Through Method)
// ===================================================

let day = "Jan";

switch (day) {

    case "Monday":
    case "Wednesday":   // Fall-through
    case "Friday":
        console.log("Weekday");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("It is not a day");
}

// 🔎 Explanation:
// ✔ Multiple cases share the same block.
// ✔ This is called Fall-Through.
// ✔ Since day = "Jan", no match → default runs.



// ===================================================
// 🧠 PART 5: What a Fresher MUST Understand
// ===================================================

// 🔹 What is switch?

// ➡️ Used instead of multiple else if
// ➡️ Best when checking fixed values
// ➡️ Cleaner and more readable



// ===================================================
// 🔹 PART 6: break Keyword (VERY IMPORTANT 🔥)
// ===================================================

// ➡️ Stops execution of the switch
// ➡️ Without break, execution continues
//     into next case (even if it doesn't match)

// Example (Without break):
// case "red":
//     console.log("Stop");
// case "yellow":
//     console.log("Slow Down");
// 👉 Both would run if break is missing.



// ===================================================
// 🔹 PART 7: Fall-Through Method (Interview Favorite)
// ===================================================

// case "Monday":
// case "Wednesday":
// case "Friday":
//     console.log("Weekday");

// 👉 Multiple cases execute same code
// 👉 Useful for grouping values



// ===================================================
// ⚠️ PART 8: Common Beginner Mistakes
// ===================================================

// ❌ Forgetting break
// ❌ Using range conditions (>, <) inside switch
// ❌ Misspelling case values
// ❌ Expecting switch to behave like if/else
// ❌ Forgetting default block



// ===================================================
// 🔥 PART 9: When To Use What (Interview)
// ===================================================

// | Situation           | Use         |
// | ------------------- | ----------- |
// | Fixed values        | `switch`    |
// | Ranges / conditions | `if / else` |




// ===================================================
// 🚀 PRO TIP (Professional Practice)
// ===================================================
// 🔥 switch uses strict comparison (===)
// 🔥 Use switch for menus, roles, fixed categories
// 🔥 Use if/else for complex logic & ranges
// 🔥 Always include default for safety
// 🔥 Clean grouping improves readability