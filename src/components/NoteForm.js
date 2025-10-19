class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                form { display: flex; flex-direction: column; gap: 10px; }
                input, button { padding: 10px; font-size: 16px; }
                button { background: dodgerblue; color: white; border: none; cursor: pointer; }
                button:hover { background: navy; }
            </style>
            <form>
                <input type="text" placeholder="Judul" id="title" required>
                <input type="text" placeholder="Isi" id="body" required>
                <button type="submit">Tambahkan</button>
            </form>
        `;

        this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = this.shadowRoot.querySelector('#title').value;
            const body = this.shadowRoot.querySelector('#body').value;
            if (title && body) {
                this.dispatchEvent(new CustomEvent('add-note', {
                    detail: { title, body },
                    bubbles: true,
                    composed: true
                }));
                this.shadowRoot.querySelector('form').reset();
            }
        });
    }
}

customElements.define('note-form', NoteForm);