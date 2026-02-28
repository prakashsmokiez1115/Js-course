// ===================================================
// 🔰 PART 1: JavaScript Date Object
// ===================================================
// Description:
// The Date object is used to work with:
// ✔ Current date & time
// ✔ Custom dates
// ✔ Date formatting
// ✔ Date modification (set methods)



// ===================================================
// 1️⃣ PART 2: Create Current Date
// ===================================================

let date = new Date();

console.log("Full Date Object:", date);

// 🔎 Explanation:
// ✔ new Date() gives current system date & time
// ✔ Includes timezone information



// ===================================================
// 2️⃣ PART 3: Get Methods
// ===================================================

// Year
console.log("Year:", date.getFullYear());

// Month (0–11) → add +1
console.log("Month:", date.getMonth() + 1);

// Date (Day of month)
console.log("Date:", date.getDate());

// Hours
console.log("Hours:", date.getHours());

// Minutes
console.log("Minutes:", date.getMinutes());

// Seconds
console.log("Seconds:", date.getSeconds());

// 🔎 Important:
// ✔ getMonth() is 0-based (January = 0)
// ✔ Always add +1 for human-readable month



// ===================================================
// 3️⃣ PART 4: Set Methods
// ===================================================

// date.setFullYear(2020);
// console.log(date);

// Month (0-based index)
// Setting month = 12 → moves to next year
date.setMonth(12, 15);

console.log("Updated Date:", date);

// 🔎 Explanation:
// ✔ setMonth(monthIndex, day)
// ✔ Month is 0-based
// ✔ JS auto-adjusts overflow values
// ✔ 12 → January of next year



// ===================================================
// 4️⃣ PART 5: Date Formatting Methods
// ===================================================

console.log("toLocaleDateString:", date.toLocaleDateString());
console.log("toDateString:", date.toDateString());
console.log("toLocaleString:", date.toLocaleString());
console.log("toLocaleTimeString:", date.toLocaleTimeString());

// 🔎 Formatting:
// ✔ toDateString()       → Simple readable date
// ✔ toLocaleDateString() → Region-based format
// ✔ toLocaleString()     → Date + Time
// ✔ toLocaleTimeString() → Time only



// ===================================================
// PART 6: Other Set Methods (Reference)
// ===================================================

// date.setDate(day)
// date.setHours(hour, minute, second, millisecond)
// date.setMinutes(minute, second, millisecond)
// date.setSeconds(second, millisecond)

// ✔ All set methods modify original date object




// ===================================================
// 🧠 PART 7: Important Things You MUST Know
// ===================================================

// 🔥 Month is 0-Based

// | Month    | Value |
// | -------- | ----- |
// | January  | 0     |
// | February | 1     |
// | December | 11    |

// ✔ So always use:
// date.getMonth() + 1



// ===================================================
// 🔥 PART 8: What Happens When You Set Month to 12?
// ===================================================

// date.setMonth(12)

// ✔ Moves to January of next year
// ✔ JavaScript auto-adjusts date
// ✔ Handles overflow automatically



// ===================================================
// 🔥 PART 9: Creating Custom Date
// ===================================================

// let customDate = new Date(2024, 0, 15); // Jan 15, 2024
// console.log(customDate);

// Format:
// new Date(year, monthIndex, day, hour, minute, second)

// ✔ monthIndex is 0-based
// ✔ Missing values default to 0




// ===================================================
// ⚠️ Common Beginner Mistakes
// ===================================================

// ❌ Forgetting month is 0-based
// ❌ Not adding +1 for display
// ❌ Expecting set methods to return new object
// ❌ Ignoring timezone differences
// ❌ Using Date without understanding local vs UTC




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Date objects are mutable
// 🔥 Use toISOString() for backend APIs
// 🔥 Always handle timezone carefully
// 🔥 For complex date handling → use libraries (dayjs, date-fns)
// 🔥 Date questions are common in interviews