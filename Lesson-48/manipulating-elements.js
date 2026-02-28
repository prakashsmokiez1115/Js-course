// ===================================================
// 🔰 PART 1: DOM Element Creation & Manipulation
// ===================================================
// Description:
// This function demonstrates:
// ✔ Creating elements
// ✔ Getting user input
// ✔ Inserting elements into DOM
// ✔ Replacing / Removing elements
// ✔ Styling dynamically (Inline CSS)



// ===================================================
// 🔹 PART 2: Creating a New Element
// ===================================================

function manipulateElements(){

    // Create new <li> element
    let newListElement = document.createElement("li")

    // 👉 createElement() only creates element
    // 👉 It is NOT yet added to DOM



// ===================================================
// 🔹 PART 3: Accessing Input Value
// ===================================================

    let input = document.querySelector("input")

    // console.log(input.value);

    // Set user input as list item text
    newListElement.innerText = input.value

    // 🔎 innerText vs innerHTML vs textContent
    // innerText   → Ignores HTML tags
    // innerHTML   → Parses HTML tags
    // textContent → Returns exact text (faster & safer)



// ===================================================
// 🔹 PART 4: Selecting Parent Element
// ===================================================

    let orderList = document.querySelector("ol")



    // ===================================================
    // 🔹 PART 5: DOM Manipulation Methods (Commented)
    // ===================================================

    // orderList.append("Text Node", newListElement)
    // 👉 Adds content at END (modern)

    // orderList.insertBefore(newListElement, orderList.children[2])
    // 👉 Inserts before specific child

    // orderList.replaceChild(newListElement, orderList.children[2])
    // 👉 Replaces specific child

    // orderList.removeChild(orderList.children[0])
    // 👉 Removes specific child

    // orderList.remove()
    // 👉 Removes entire <ol> element



// ===================================================
// 🔹 PART 6: Dynamic Styling (Inline CSS)
// ===================================================

    // Dynamic Cascading (Inline styles via JavaScript)
    newListElement.style.color = "green"
    newListElement.style.textShadow = "10px 10px 1px white"

    // 👉 style property modifies inline CSS
    // 👉 Property names use camelCase (textShadow)



// ===================================================
// 🔹 PART 7: Adding Element to DOM
// ===================================================

    orderList.appendChild(newListElement)

    // 👉 appendChild() adds element at END
    // 👉 Only accepts ONE node
    // 👉 Returns appended node

    // orderList.prepend("Text Node", newListElement)
    // 👉 Adds at BEGINNING (modern method)

}



// ===================================================
// 🧠 WHAT A FRESHER MUST UNDERSTAND
// ===================================================

// 🔹 createElement()
// Creates element but does NOT attach to DOM

// 🔹 innerText vs innerHTML
// innerText → Safe (no HTML parsing)
// innerHTML → Parses HTML (can be risky - XSS)

// 🔹 appendChild()
// Adds node at end of parent

// 🔹 insertBefore()
// Inserts at specific position

// 🔹 replaceChild()
// Replaces existing node

// 🔹 removeChild()
// Removes specific child

// 🔹 remove()
// Removes entire element



// ===================================================
// ⚠️ COMMON BEGINNER MISTAKES
// ===================================================

// ❌ Not checking if input.value is empty
// ❌ Overusing innerHTML (security risk)
// ❌ Forgetting to append element to DOM
// ❌ Styling too much via JS instead of CSS class



// ===================================================
// 🚀 PRO TIP (Professional Practice)
// ===================================================
// 🔥 Always validate: if (input.value.trim() !== "")
// 🔥 Prefer classList.add() instead of inline styling
// 🔥 Use append() in modern apps (more flexible)
// 🔥 Clear input after appending → input.value = ""
// 🔥 Keep styling in CSS, not JavaScript