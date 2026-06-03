//==============================================================
// Selecting elements from the DOM
//==============================================================    

// Using document.getElementById to select elements
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');

// Using querySelector to select the note list
const noteList = document.querySelector('#noteList');

//Coonsole Verification
console.log(noteInput);
console.log(addNoteButton);
console.log(noteList);

//==============================================================
// Array of notes.
//==============================================================

let notes = [];

//==============================================================
// Save all notes to Local Storage
//==============================================================

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log('Note saved to Local Storage:', notes);
}  

//==============================================================
// Function to create and render the note list in the DOM.
//==============================================================

function createNoteList(text) {
    const li = document.createElement('li');
    //modify content of the note list with textContent
    li.textContent = text;

    //Create delete button for each note
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    //read delete event
    deleteButton.addEventListener('click', () => {
        //remove the element from the DOM
        noteList.removeChild(li);
        //remove the note from the array
        notes = notes.filter(note => note !== text);
        //update Local Storage
        saveNotes();
        console.log('Note deleted:', text);
    });

    //Add button to the li element
    li.appendChild(deleteButton);
    //Insert the li element into the note list in the DOM
    noteList.appendChild(li);
}


//==============================================================
// Event listener for the add note button.
//==============================================================

addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
//validations
if (noteText === '') {
    alert('Please enter a note before adding.');
    return;
}
//add to the array of notes and update the DOM
notes.push(noteText);
//rendering in the DOM
createNoteList(noteText);
//save to Local Storage
saveNotes();
//clear the input field
noteInput.value = '';
//focus again on the input field for better user experience
noteInput.focus();

console.log('Note added:', noteText);
});

//==============================================================
// Load notes from Local Storage when the page loads.
//==============================================================

window.addEventListener('DOMContentLoaded', () => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
        notes.forEach(noteText => createNoteList(noteText));
        console.log('Page loaded, notes loaded from Local Storage:', notes.length);
    } else {
        console.log('Page loaded, no notes found in Local Storage.');
    }
});