// ===================================================
// 🔰 PART 1: JavaScript String Methods
// ===================================================
// Description:
// Strings are immutable in JavaScript.
// ✔ All string methods return NEW string
// ✔ Original string never changes



// ===================================================
// 1️⃣ PART 2: charAt()
// ===================================================

// let str = "Hello World";
// console.log(str.charAt(str.length - 1));

// 🔎 Returns character at given index
// ✔ Safe method
// ✔ Similar to str[index]



// ===================================================
// 2️⃣ PART 3: charCodeAt()
// ===================================================

// let str1 = "JAvscript";
// console.log(str1.charCodeAt(5));

// 🔎 Returns ASCII (Unicode) value of character



// ===================================================
// 3️⃣ PART 4: concat()
// ===================================================

// let newStr = str.concat(" ", str1);
// console.log(newStr);

// 🔎 Joins strings
// ✔ Returns new string
// ✔ Alternative to + operator



// ===================================================
// 4️⃣ PART 5: includes()
// ===================================================

// let str2 = "Single Threaded";
// console.log(str2.includes("i", 1));
// console.log(str2.includes("j"));

// 🔎 Checks if substring exists
// ✔ Returns true/false
// ✔ Case-sensitive



// ===================================================
// 5️⃣ PART 6: indexOf()
// ===================================================

// let newStr1 = "Kesavan";
// console.log(newStr1.indexOf("a", 4));

// 🔎 Returns first matching index
// ✔ If not found → -1



// ===================================================
// 6️⃣ PART 7: lastIndexOf()
// ===================================================

// let newStr1 = "Kesavan";
// console.log(newStr1.lastIndexOf("a", 5));

// 🔎 Searches from right to left



// ===================================================
// 7️⃣ PART 8: repeat()
// ===================================================

// let newStr = "Javascript";
// console.log(newStr.repeat(3));

// 🔎 Repeats string N times



// ===================================================
// 8️⃣ PART 9: replace() & replaceAll()
// ===================================================

// let str = "Js is a Script lang - Js";
// console.log(str.replace("Js", "Javascript"));
// console.log(str.replaceAll("Js", "Javascript"));

// 🔎 replace() → replaces first occurrence
// 🔎 replaceAll() → replaces all occurrences



// ===================================================
// 9️⃣ PART 10: slice()
// ===================================================

// let newStr = "Single Thread";
// console.log(newStr.slice(3));
// console.log(newStr.slice(3, 8));
// console.log(newStr.slice(-3));
// console.log(newStr.slice(-3, -1));

// 🔎 Supports negative index
// ✔ End index excluded



// ===================================================
// 🔟 PART 11: substring() & substr()
// ===================================================

// let newStr1 = "Single Thread";
// console.log(newStr1.substring(3));
// console.log(newStr1.substring(3, 8));
// console.log(newStr1.substring(-3));
// console.log(newStr1.substring(8, 0));

// 🔎 substring()
// ❌ Does NOT support negative index
// ✔ Swaps start/end if start > end

// ⚠️ substr() is deprecated (avoid using)



// ===================================================
// 1️⃣1️⃣ PART 12: split()
// ===================================================

// let words = "My Name is Iron-Man";
// console.log(words.split(" "));
// console.log(words.split(" ", 3));
// console.log(words.split("-"));
// console.log(words.split("-", 1));

// 🔎 Converts string → array
// ✔ Separator based splitting



// ===================================================
// 1️⃣2️⃣ PART 13: startsWith() & endsWith()
// ===================================================

let words = "  My Name is Iron-Man  ";

// console.log(words.startsWith("M"));
// console.log(words.startsWith("N", 3));
// console.log(words.startsWith("N", 4));
// console.log(words.startsWith("Name", 3));

// endsWith()
console.log(words.endsWith("n", words.length));
console.log(words.endsWith("Iron", 15));

// 🔎 Used for prefix & suffix checks
// ✔ Very useful for validation logic



// ===================================================
// 1️⃣3️⃣ PART 14: Case Conversion
// ===================================================

console.log(words.toLowerCase());
console.log(words.toUpperCase());



// ===================================================
// 1️⃣4️⃣ PART 15: trim()
// ===================================================

console.log(words.trim());

// trimStart / trimLeft
console.log(words.trimLeft());
console.log(words.trimStart());

// trimEnd / trimRight
console.log(words.trimRight());
console.log(words.trimEnd());



// ===================================================
// 🧠 PART 16: Important Concepts You MUST Understand
// ===================================================

// 🔥 slice vs substring Difference

// | Feature           | slice | substring |
// | ----------------- | ----- | --------- |
// | Negative index    | ✅ Yes | ❌ No     |
// | Swaps start/end   | ❌ No  | ✅ Yes    |
// | Recommended       | ✅ Yes | ⚠️ Avoid  |

// 👉 Prefer slice() in modern JavaScript



// 🔥 replace vs replaceAll
// replace()    → replaces first occurrence only
// replaceAll() → replaces all matches



// 🔥 trim()
// Removes leading & trailing spaces
// Very common in form validation



// 🔥 startsWith & endsWith
// Used for:
// ✔ File extension validation
// ✔ Prefix checking
// ✔ Authentication logic



// ===================================================
// ⚠️ Important Notes
// ===================================================

// ✔ Strings are immutable
// ✔ All string methods return NEW string
// ✔ Negative index works only in slice()
// ✔ Methods are case-sensitive



// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Always trim user input before validation
// 🔥 Prefer slice() over substring()
// 🔥 Use replaceAll for global replacements
// 🔥 Remember immutability when debugging
// 🔥 String methods are common in interviews