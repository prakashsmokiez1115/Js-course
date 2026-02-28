// ===================================================
// 🔰 PART 1: DOM Traversing – Parent, Child & Siblings
// ===================================================
// Description:
// This code demonstrates:
// ✔ Parent Traversing
// ✔ Child Traversing
// ✔ Sibling Traversing
// ✔ Creating & Inserting Elements dynamically



// ===================================================
// 🔹 PART 2: Parent Traversing
// ===================================================

function traversingParent(){

    // Select element with class "child1"
    let getParent = document.querySelector(".child1")
    
    // Returns parent ELEMENT only
    console.log(getParent.parentElement);
    
    // Returns parent NODE (can be element, document, etc.)
    console.log(getParent.parentNode);
    
    // Selecting <html> element
    let getParent1 = document.querySelector("html")
    
    // html's parentElement → null (because document is not an element)
    console.log(getParent1.parentElement);
    
    // html's parentNode → #document
    console.log(getParent1.parentNode);
}

// 👉 Node Types:
// Element Node
// Text Node
// Attribute Node
// Document Node



// ===================================================
// 🔹 PART 3: Child Traversing
// ===================================================

function selectChild(){

    // Select parent element
    let getElementByClass = document.querySelector(".parent")

    // Total number of child ELEMENTS (ignores text nodes)
    console.log(getElementByClass.childElementCount);

    // All child NODES (includes text nodes, spaces, comments)
    console.log(getElementByClass.childNodes);

    // Only child ELEMENTS (no text nodes)
    console.log(getElementByClass.children);

    // First child NODE (could be text node)
    console.log(getElementByClass.firstChild);

    // First child ELEMENT
    console.log(getElementByClass.firstElementChild);

    // Last child NODE
    console.log(getElementByClass.lastChild);

    // Last child ELEMENT
    console.log(getElementByClass.lastElementChild);
}



// ===================================================
// 🔹 PART 4: Sibling Traversing & Dynamic Element Creation
// ===================================================

function selectSiblings(){

    // Select element with class child1
    let child1 = document.querySelector(".child1")

    // Next sibling NODE (can be text node)
    console.log(child1.nextSibling);

    // Next sibling ELEMENT
    console.log(child1.nextElementSibling);

    // Previous sibling NODE
    console.log(child1.previousSibling);

    // Previous sibling ELEMENT
    console.log(child1.previousElementSibling);


    // ----------------------------
    // Dynamic List Item Creation
    // ----------------------------

    let input = document.querySelector("input")

    // Create new <li> element
    let newElement = document.createElement("li")

    // Set text from input field
    newElement.innerText = input.value

    // Select ordered list
    let orderList = document.querySelector("ol")

    // Append new <li> at the END
    orderList.append(newElement)

    // Clear input field
    input.value = ""
}



// ===================================================
// 🔹 PART 5: Insert Element at Specific Position
// ===================================================

function insertOne(){

    let input = document.querySelector("input")

    let newElement = document.createElement("li")

    newElement.innerText = input.value

    let orderList = document.querySelector("ol")

    // Insert before 4th child (index 3)
    orderList.insertBefore(newElement, orderList.children[3])
}



// selectSiblings()  // Uncomment to test



// ===================================================
// 🧠 WHAT A FRESHER MUST UNDERSTAND
// ===================================================

// 🔹 parentElement vs parentNode
// parentElement → only element
// parentNode → any node type

// 🔹 childNodes vs children
// childNodes → includes text nodes (spaces)
// children → only element nodes

// 🔹 nextSibling vs nextElementSibling
// nextSibling → includes text
// nextElementSibling → element only

// 🔹 append()
// Adds element at end

// 🔹 insertBefore()
// Inserts element at specific position




// ===================================================
// 🚀 PRO TIP (Important for Real Projects)
// ===================================================
// 🔥 Prefer nextElementSibling & children (avoid text node confusion)
// 🔥 Always trim input before inserting
// 🔥 Validate input value !== ""
// 🔥 Use event listeners instead of inline function calls
// 🔥 DOM Traversing is heavily used in React & vanilla JS projects