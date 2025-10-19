import './styles/style.css';
import './components/NoteList.js';
import './components/NoteForm.js';
import './components/NoteItem.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    const form = document.createElement('note-form');
    const list = document.createElement('note-list');
    
    app.appendChild(form);
    app.appendChild(list);
});

import "./styles/style.css"; 
import "./scripts/views/main.js"; 

import { fetchNotes } from "./scripts/api/api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const notes = await fetchNotes();
    console.log(notes);
});
