const notesContainer = document.querySelector(".notes-container");
const createNote = document.querySelector(".create-note");
var notes = document.querySelectorAll(".note-box");
var deleteAllNotes = document.querySelector(".create-deleteAll-btn");
// let textArea = document.querySelector(".text-area");
var boldFlag = false;
var italicFlag = false;
document.addEventListener("DOMContentLoaded", function () {
    ShowNotes();
});
// deleteAllNotes.addEventListener("click", () => {
//     localStorage.clear();
//     location.reload();
// });
// Function to add a new note
createNote.addEventListener("click", (e) => {
    e.preventDefault();
    // creating a div with class note-box
    let noteBox = document.createElement("div");
    noteBox.classList.add("note-box");
    // Creating input fields for title and textarea
    let noteTitle = document.createElement("h5");
    noteTitle.classList.add("notes-title");
    //append title
    noteBox.appendChild(noteTitle);
    // calling gettitle()
    noteTitle.textContent = getTitle();
    // creating notestyle div
    let noteStyle = document.createElement("div");
    noteStyle.classList.add("note-styles");
    let nsHeading = document.createElement("h6");
    nsHeading.textContent = "Styles:";
    noteStyle.appendChild(nsHeading);
    //creating bold and italic buttons
    let BoldItalicDiv = document.createElement("div");
    BoldItalicDiv.classList.add("BID");
    let textBold = document.createElement("button");
    textBold.classList.add("bold-text");
    textBold.addEventListener("click", () => {
        userData.style.fontStyle = "bold";
    });
    let italicText = document.createElement("button");
    italicText.classList.add("italic-text");
    italicText.addEventListener("click", () => {
        userData.style.fontStyle = "italic";
    });
    //createing and appending button icons
    let boldIcon = document.createElement("i");
    boldIcon.classList.add("fa", "fa-bold");
    let italicIcon = document.createElement("i");
    italicIcon.classList.add("fa", "fa-italic");
    textBold.appendChild(boldIcon);
    italicText.appendChild(italicIcon);
    //arrenging  the button in the dom
    noteBox.appendChild(noteStyle).appendChild(BoldItalicDiv);
    BoldItalicDiv.appendChild(textBold);
    BoldItalicDiv.appendChild(italicText);
    console.log(noteBox);
    //creating text-area div
    let textArea = document.createElement("div");
    textArea.classList.add("text-area");
    //creating note 
    let userData = document.createElement("p");
    userData.setAttribute("contenteditable", "true");
    userData.classList.add("user-data");
    textArea.appendChild(userData);
    noteBox.appendChild(textArea);
    // creaing note-controles div
    let noteControls = document.createElement("div");
    noteControls.classList.add("note-controls");
    //creating save and delete buttons
    let deleteNote = document.createElement("button");
    deleteNote.classList.add("delete-notes");
    let saveNoets = document.createElement("button");
    saveNoets.classList.add("save-notes");
    saveNoets.setAttribute("onclick", "ContentSave()");
    // append save and delete
    noteControls.appendChild(deleteNote);
    noteControls.appendChild(saveNoets);
    deleteNote.textContent = "Delete ";
    saveNoets.textContent = "Save ";
    //create save and delete icons
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    deleteNote.appendChild(trashIcon);
    //giving event listener to delete button
    deleteNote.addEventListener('click', function (e) {
        confirmYes = confirm("Are you sure?");
        if (confirmYes == true) {
            e.target.parentElement.parentElement.remove();
            localStorage.removeItem("notes");
            console.log("notes deleted");
            ContentSave();
        } else if (confirmYes == false) {
            alert("Thanks for confirmation");

        }
    });

    let fileIcon = document.createElement("i");
    fileIcon.classList.add("fa-regular", "fa-file");
    saveNoets.appendChild(fileIcon);
    //append  controls to note box
    noteBox.appendChild(noteControls);
    notesContainer.appendChild(noteBox);
});
var titleList = [];
function getTitle() {
    userTitle = prompt("Enter the notes  Title: ");
    if (userTitle !== null) {
        for (let search in titleList) {
            if (titleList[search] === userTitle) {
                alert("This title already exists. Please enter another one.");
                return getTitle();
            }
        }
        titleList.push(userTitle);
        return userTitle;
    } else if (userTitle == null) {
        alert("You have entered an invalid title!");
        // return getTitle();
    } else {
        return;
    }
}
function ContentSave() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    // localStorage.setItem("userData", textArea.value);
    console.log(localStorage);
    console.log("content saved");
}
function ShowNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    // textArea.innerHTML = localStorage.getItem("userData");
}
