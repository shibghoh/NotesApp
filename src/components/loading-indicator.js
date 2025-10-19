class LoadingIndicator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    visibility: hidden;
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                .loading.visible {
                    visibility: visible;
                    opacity: 1;
                }
            </style>
            <div class="loading" id="loading">Loading...</div>
        `;
    }

    show() {
        const loadingEl = this.shadowRoot.querySelector("#loading");
        loadingEl.classList.add("visible");
    }

    hide() {
        const loadingEl = this.shadowRoot.querySelector("#loading");
        loadingEl.classList.remove("visible");
    }
}

customElements.define("loading-indicator", LoadingIndicator);
