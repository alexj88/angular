class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Rebeca Amor da minha Vida Te Amo</h1>";
    }
}

customElements.define('card-news',CardNews);