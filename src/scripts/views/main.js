// import { getNotes, addNote, deleteNote, updateNote } from "../api/api.js";
import { fetchNotes } from '../api/api.js';


document.addEventListener("DOMContentLoaded", async () => {
    const notesContainer = document.getElementById("notes-container");

    async function renderNotes() {
        notesContainer.innerHTML = ""; 
        const { data } = await getNotes();

        data.forEach(note => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.body}</p>
                <button class="delete-btn" data-id="${note.id}">Hapus</button>
            `;
            notesContainer.appendChild(noteElement);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", async () => {
                await deleteNote(button.dataset.id);
                renderNotes(); 
            });
        });
    }

    document.getElementById("add-note-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const title = document.getElementById("note-title").value;
        const body = document.getElementById("note-body").value;
        
        await addNote(title, body);
        renderNotes();
    });

    renderNotes();
});
