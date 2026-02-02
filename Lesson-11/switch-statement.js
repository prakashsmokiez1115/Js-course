// ===================================================
// 🔰 JavaScript Switch Statement
// ===================================================

// Switch is used when you want to compare
// ONE value against MULTIPLE fixed values.



// ===================================================
// 📌 Syntax of Switch Statement
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



// ===================================================
// 1️⃣ Example: Traffic Light
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



// ===================================================
// 2️⃣ Example: Days (Fall Through Method)
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
















































// 🧠 WHAT A FRESHER MUST UNDERSTAND

// 🔹 What is switch?

// ➡️Used instead of multiple else if
// ➡️Best when checking fixed values
// ➡️Cleaner and more readable







// 🔹 break keyword (VERY IMPORTANT 🔥)

// ➡️Stops execution of the switch
// ➡️Without break, execution continues to next case











// 🔹 Fall-Through Method (Interview Favorite)
// case "Monday":
// case "Wednesday":
// case "Friday":
//     console.log("Weekday");


// 👉 Multiple cases execute same code









// ⚠️ COMMON BEGINNER MISTAKES

// ❌ Forgetting break
// ❌ Using conditions (>, <) inside switch
// ❌ Misspelling case values
// ❌ Expecting switch to work like if/else









    
// 🔥 WHEN TO USE WHAT (INTERVIEW)
// | Situation           | Use         |
// | ------------------- | ----------- |
// | Fixed values        | `switch`    |
// | Ranges / conditions | `if / else` |
