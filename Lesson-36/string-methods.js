// ===================================================
// 🔰 JavaScript String Methods
// ===================================================


// ===================================================
// 1️⃣ charAt()
// ===================================================

// let str = "Hello World";
// console.log(str.charAt(str.length - 1));


// ===================================================
// 2️⃣ charCodeAt()
// ===================================================

// let str1 = "JAvscript";
// console.log(str1.charCodeAt(5));


// ===================================================
// 3️⃣ concat()
// ===================================================

// let newStr = str.concat(" ", str1);
// console.log(newStr);


// ===================================================
// 4️⃣ includes()
// ===================================================

// let str2 = "Single Threaded";
// console.log(str2.includes("i", 1));
// console.log(str2.includes("j"));


// ===================================================
// 5️⃣ indexOf()
// ===================================================

// let newStr1 = "Kesavan";
// console.log(newStr1.indexOf("a", 4));


// ===================================================
// 6️⃣ lastIndexOf()
// ===================================================

// let newStr1 = "Kesavan";
// console.log(newStr1.lastIndexOf("a", 5));


// ===================================================
// 7️⃣ repeat()
// ===================================================

// let newStr = "Javascript";
// console.log(newStr.repeat(3));


// ===================================================
// 8️⃣ replace() & replaceAll()
// ===================================================

// let str = "Js is a Script lang - Js";
// console.log(str.replace("Js", "Javascript"));
// console.log(str.replaceAll("Js", "Javascript"));


// ===================================================
// 9️⃣ slice()
// ===================================================

// let newStr = "Single Thread";
// console.log(newStr.slice(3));
// console.log(newStr.slice(3, 8));
// console.log(newStr.slice(-3));
// console.log(newStr.slice(-3, -1));


// ===================================================
// 🔟 substring() & substr()
// ===================================================

// let newStr1 = "Single Thread";
// console.log(newStr1.substring(3));
// console.log(newStr1.substring(3, 8));
// console.log(newStr1.substring(-3));
// console.log(newStr1.substring(8, 0));


// ===================================================
// 1️⃣1️⃣ split()
// ===================================================

// let words = "My Name is Iron-Man";
// console.log(words.split(" "));
// console.log(words.split(" ", 3));
// console.log(words.split("-"));
// console.log(words.split("-", 1));


// ===================================================
// 1️⃣2️⃣ startsWith() & endsWith()
// ===================================================

let words = "  My Name is Iron-Man  ";

// console.log(words.startsWith("M"));
// console.log(words.startsWith("N", 3));
// console.log(words.startsWith("N", 4));
// console.log(words.startsWith("Name", 3));


// endsWith()
console.log(words.endsWith("n", words.length));
console.log(words.endsWith("Iron", 15));


// ===================================================
// 1️⃣3️⃣ Case Conversion
// ===================================================

console.log(words.toLowerCase());
console.log(words.toUpperCase());


// ===================================================
// 1️⃣4️⃣ trim()
// ===================================================

console.log(words.trim());


// trimStart / trimLeft
console.log(words.trimLeft());
console.log(words.trimStart());


// trimEnd / trimRight
console.log(words.trimRight());
console.log(words.trimEnd());
















// 🧠 IMPORTANT CONCEPTS YOU MUST UNDERSTAND


// 🔥 slice vs substring Difference


// | Feature | slice | substring |
// | --------------- | ----- | --------- |
// | Negative index | ✅ Yes | ❌ No |
// | Swaps start / end | ❌ No | ✅ Yes |
// | Recommended | ✅ Yes | ⚠️ Avoid |








// 👉 In modern JS → prefer slice().

// 🔥 replace vs replaceAll
// replace() → replaces first occurrence only
// replaceAll() → replaces all matches







// 🔥 trim()

// Removes:
// Leading spaces
// Trailing spaces



// Very common in:
// Form validation
// User input cleaning










// 🔥 startsWith & endsWith

// Useful for:
// File extensions
// Prefix validation
// Authentication logic






// ⚠️ Important Notes
// ✔ Strings are immutable (original string never changes)
// ✔ All string methods return NEW string
// ✔ Negative index works only in slice()











































