// ===================================================
// 🔰 PART 1: JavaScript DOM Selection & Manipulation Methods
// ===================================================
// Description:
// These methods are used to:
// ✔ Select elements
// ✔ Access content
// ✔ Create elements
// ✔ Manipulate the DOM



// ===================================================
// 🧪 PART 2: Accessing document object
// ===================================================

// console.log(document.head);

// 📖 document.head
// ✔ Returns <head> element
// ✔ Direct property access
// ✔ Very fast
// ✔ No selector needed



// ===================================================
// 🔵 PART 3: getElementsByTagName()
// ===================================================

let heading = document.getElementsByTagName("h1");

console.log(heading);

// 📖 Description:
// ✔ Selects elements by tag name
// ✔ Returns HTMLCollection (Live Collection)
// ✔ Updates automatically if DOM changes
// ✔ Must access by index → heading[0]
// ❌ Cannot directly use array methods like map()



// ===================================================
// 🟢 PART 4: getElementsByClassName()
// ===================================================

let para1 = document.getElementsByClassName("para1");

console.log(para1);

// 📖 Description:
// ✔ Selects elements by class
// ✔ Returns HTMLCollection (Live)
// ✔ Automatically updates when DOM changes
// ❌ Cannot use array methods directly
// ✔ Access like: para1[0]



// ===================================================
// 🟡 PART 5: getElementById()
// ===================================================

let uniqPara = document.getElementById("uniq-para");

console.log(uniqPara);

// 📖 Description:
// ✔ Selects single element by ID
// ✔ Returns element OR null
// ✔ Fastest selector in DOM
// ✔ ID must be unique in HTML



// ===================================================
// 🟠 PART 6: getElementsByName()
// ===================================================

let nameAttri = document.getElementsByName("input-1");

console.log(nameAttri);

// 📖 Description:
// ✔ Selects elements by name attribute
// ✔ Returns NodeList
// ✔ Mostly used in forms (radio, checkbox)
// ✔ Rarely used outside forms



// ===================================================
// 🔥 PART 7: querySelector()
// ===================================================

// let selectOne = document.querySelector("h1");
// let selectOne = document.querySelector(".para1");
let selectOne = document.querySelector("#uniq-para");

console.log(selectOne.innerHTML);

// 📖 Description:
// ✔ Selects FIRST matching element
// ✔ Accepts full CSS selectors
// ✔ Returns single element OR null
// ✔ More flexible than getElementById
// ❌ Slightly slower than getElementById



// ===================================================
// 🔥 PART 8: querySelectorAll()
// ===================================================

// let multiElements = document.querySelectorAll("h1");
// let multiElements = document.querySelectorAll(".para1");
let multiElements = document.querySelectorAll("#uniq-para");

console.log(multiElements);

// 📖 Description:
// ✔ Selects ALL matching elements
// ✔ Returns NodeList (Static)
// ✔ Does NOT update automatically
// ✔ Supports forEach()
// ✔ Very flexible (CSS selectors supported)



// ===================================================
// 🧱 PART 9: createElement()
// ===================================================

let newElement = document.createElement("h2");

newElement.innerText = "Manipulating Phase";

console.log(newElement);

// 📖 Description:
// ✔ Creates new element (not yet added to DOM)
// ✔ Can modify content & attributes before inserting
// ✔ Lightweight operation



// ===================================================
// ➕ PART 10: append()
// ===================================================

document.body.append(newElement);

// 📖 Description:
// ✔ Adds element to end of parent
// ✔ Can append multiple nodes
// ✔ Does NOT return anything
// ✔ Modern & recommended



// ===================================================
// 🧠 PART 11: Important Differences
// ===================================================

// 🔹 HTMLCollection
// ✔ Returned by getElementsByTagName / ClassName
// ✔ Live collection (updates automatically)
// ❌ No forEach()
// ✔ Access using index

// 🔹 NodeList
// ✔ Returned by querySelectorAll
// ✔ Static collection
// ✔ Supports forEach()
// ❌ Does NOT auto-update



// ===================================================
// 🔥 PART 12: Performance Ranking (Interview Question)
// ===================================================

// 🥇 getElementById()        → Fastest
// 🥈 getElementsByClassName()
// 🥉 getElementsByTagName()
// 🟠 querySelector()
// 🔴 querySelectorAll()



// ===================================================
// ⚠️ PART 13: Common Beginner Mistakes
// ===================================================

// ❌ Forgetting [0] when using HTMLCollection
// ❌ Using innerHTML when innerText is safer
// ❌ Not checking for null before accessing property
// ❌ Thinking NodeList is live
// ❌ Using querySelectorAll("#id") (ID should be unique)



// ===================================================
// 🧪 PART 14: Safe Access Pattern
// ===================================================

if (selectOne) {
  console.log(selectOne.innerText);
}

// ✔ Always check if element exists before using it
// ✔ Prevents "Cannot read property of null" error



// ===================================================
// 🚀 PRO TIP (Professional DOM Handling)
// ===================================================
// 🔥 Prefer querySelector / querySelectorAll in modern apps
// 🔥 Use getElementById when performance is critical
// 🔥 Always check for null before accessing properties
// 🔥 Avoid overusing innerHTML (security risk - XSS)
// 🔥 Use textContent for better performance & safety