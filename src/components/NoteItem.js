class NoteItem extends HTMLElement {
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
                div { padding: 15px; background: #fff; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); }
                h3 { margin: 0; }
                p { font-size: 14px; }
                button { margin-top: 10px; padding: 8px 12px; background: crimson; color: white; border: none; cursor: pointer; }
                button:hover { background: darkred; }
            </style>
            <div>
                <h3>${this.getAttribute('title')}</h3>
                <p>${this.getAttribute('body')}</p>
                <small>${new Date(this.getAttribute('createdAt')).toLocaleDateString()}</small>
                <button id="delete-btn">Hapus</button>
            </div>
        `;

        this.shadowRoot.querySelector('#delete-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('delete-note', {
                detail: this.getAttribute('id'),
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define('note-item', NoteItem);