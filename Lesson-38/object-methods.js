// ===================================================
// 🔰 PART 1: JavaScript Object Built-in Methods
// ===================================================
// Description:
// These methods help you:
// ✔ Convert object ↔ array
// ✔ Extract keys & values
// ✔ Lock objects
// ✔ Inspect object state



// ===================================================
// 1️⃣ PART 2: Object.entries()
// ===================================================
// 👉 Converts object → array of [key, value]

let employee = {
    eName: "Murugan",
    eRole: "Back end Developer"
};

let multiArr = Object.entries(employee);

multiArr.push(["Name", "Murugesan"]);

console.log("Entries Array:", multiArr);

// 🔎 Output format:
// [
//   ["eName", "Murugan"],
//   ["eRole", "Back end Developer"]
// ]

// ✔ Very useful for transformations
// ✔ Can manipulate array easily
// ✔ Common in data processing



// ===================================================
// 2️⃣ PART 3: Object.fromEntries()
// ===================================================
// 👉 Converts array of [key, value] → object

let normalObj = Object.fromEntries(multiArr);

console.log("Converted Back to Object:", normalObj);

// 🔎 Opposite of Object.entries()
// ✔ Array → Object
// ✔ Very common in API transformations



// ===================================================
// 3️⃣ PART 4: Object.keys()
// ===================================================
// 👉 Returns array of keys

let onlyKeys = Object.keys(normalObj);

console.log("Keys:", onlyKeys);

// ✔ Returns ["eName", "eRole", "Name"]



// ===================================================
// 4️⃣ PART 5: Object.values()
// ===================================================
// 👉 Returns array of values

let onlyValues = Object.values(normalObj);

console.log("Values:", onlyValues);

// ✔ Returns array of property values



// ===================================================
// 5️⃣ PART 6: Object.freeze()
// ===================================================
// 👉 Prevents modification of object

let newObj1 = {
    id: 1
};

Object.freeze(newObj1);

newObj1.name1 = "Javascript";   // ❌ Not allowed
newObj1.id = "QUI123";          // ❌ Not allowed

console.log("Frozen Object:", newObj1);

// 🔎 After freezing:
// ✔ Cannot add properties
// ✔ Cannot modify properties
// ✔ Cannot delete properties
// ❗ Only shallow freeze



// ===================================================
// 6️⃣ PART 7: Object.isFrozen()
// ===================================================
// 👉 Checks if object is frozen

console.log("Is normalObj frozen?", Object.isFrozen(normalObj));

// ✔ Returns true or false




// ===================================================
// 🧠 PART 8: Important Concepts You MUST Know
// ===================================================

// 🔥 Object.entries(obj)

// Output format:
// [
//   ["key1", value1],
//   ["key2", value2]
// ]

// Useful for:
// ✔ Looping objects
// ✔ Converting to Map
// ✔ Transforming data




// 🔥 Object.fromEntries()
// ✔ Opposite of entries()
// ✔ Array → Object
// ✔ Used in transformations




// 🔥 Object.keys() vs Object.values()

// | Method   | Returns         |
// | -------- | --------------- |
// | keys()   | Array of keys   |
// | values() | Array of values |




// 🔥 Object.freeze()

// After freezing:
// ✔ Cannot add properties
// ✔ Cannot modify properties
// ✔ Cannot delete properties
// ❗ Nested objects are NOT frozen (shallow freeze)




// 🔥 Object.isFrozen()
// ✔ true → if frozen
// ✔ false → if not




// ===================================================
// ⚠️ PART 9: Important Difference
// ===================================================

// | Method          | Can Modify Original?      |
// | --------------- | ------------------------- |
// | Object.assign   | ✅ Yes (target modified)  |
// | Spread Operator | ❌ No (creates new object) |
// | Object.freeze   | ❌ No (locks object)       |




// ===================================================
// 🚀 PRO TIP (Professional Level)
// ===================================================
// 🔥 Use entries + fromEntries for transformations
// 🔥 Freeze objects for configuration constants
// 🔥 Remember freeze is shallow (deepFreeze for nested)
// 🔥 keys() & values() common in loops
// 🔥 Very common in real-world & interview questions