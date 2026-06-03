# Project: DOM Manipulation and Local Storage

## Description

This project consists of a simple web application to manage a notes list using JavaScript, the DOM API, and Local Storage.

The user can:

- Add new notes.
- Delete existing notes.
- Visualize changes without reloading the page.
- Keep notes stored even after closing or reloading the browser thanks to Local Storage.

---

## Objectives

- Practice dynamic DOM manipulation.
- Use different element selection methods.
- Implement events with JavaScript.
- Apply persistent storage using Local Storage.
- Use best practices with `let`, `const` and code comments.

---

## Project Structure

```text
project/
│
├── index.html
├── script.js
└── README.md
```

---

## Implemented Features

### 1. DOM Element Selection

Two selection methods are used:

```javascript
document.getElementById()
document.querySelector()
```

Selected elements:

- Text input.
- Add button.
- Notes list (`ul`).

---

### 2. Add Notes

When pressing the **Add** button:

1. Validates that the field is not empty.
2. Creates an `<li>` element.
3. Assigns text using `textContent`.
4. Creates a **Delete** button.
5. Adds the element to the list using:

```javascript
appendChild()
```

6. Updates Local Storage.
7. Clears and refocuses the input.

---

### 3. Delete Notes

Each note contains a **Delete** button.

When clicked:

1. Removes the element from the DOM using:

```javascript
removeChild()
```

2. Updates the notes array.
3. Updates Local Storage.
4. Displays a message in the console.

---

### 4. Persistence with Local Storage

Notes are stored using:

```javascript
localStorage.setItem()
```

and are retrieved using:

```javascript
localStorage.getItem()
```

Notes remain available even after reloading the page.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- DOM API
- Local Storage

---

## How to Run the Project

### Option 1

1. Download the files.
2. Open `index.html` in any modern browser.

### Option 2

Use the **Live Server** extension of Visual Studio Code:

1. Open the project folder.
2. Right-click on `index.html`.
3. Select **Open with Live Server**.

---

## Required Evidence

### Screenshot 1

Initial page with:

- Empty input.
- Empty list.

### Screenshot 2

After adding notes:

- Visible notes.
- Console showing add and save messages.

### Screenshot 3

After deleting a note:

- Deleted note.
- Console showing update.

### Screenshot 4

Application Panel → Local Storage showing:

```json
["Note 1", "Note 2"]
```

### Screenshot 5

Reload the page and verify that the notes still appear.

---

## Example Console Messages

```text
Input: [object HTMLInputElement]
Button: [object HTMLButtonElement]
List: [object HTMLUListElement]

Note added: Buy milk
Notes saved: ["Buy milk"]

Note added: Do homework
Notes saved: ["Buy milk","Do homework"]

Note deleted: Buy milk

1 notes loaded from Local Storage.
```

---

## Acceptance Criteria Met

- [x] Use of `appendChild()`.
- [x] Use of `removeChild()`.
- [x] Use of `getElementById()`.
- [x] Use of `querySelector()`.
- [x] Use of `textContent`.
- [x] Persistence with Local Storage.
- [x] Data recovery on reload.
- [x] Action logging in console.
- [x] Code commented.
- [x] Use of `let` and `const`.

---

## Author

Academic project developed to practice DOM manipulation, events, and local storage with JavaScript.