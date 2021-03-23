customElements.define("my-bubble", class extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("my-element-template").content;
        const color = this.getAttribute("background") || "white";
        
        template.querySelector(".bubble").style.background = color;
    }
});