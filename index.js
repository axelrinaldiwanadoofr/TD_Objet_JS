
class MonWC extends HTMLElement
{
    constructor()
    {
        super() ;
    }

    connectedCallback()
    {
        this.innerHTML = "<span>Mon Web Component</span><br>" ;
    }

}

// Enregistre le web component dans JS
customElements.define( "mon-wc", MonWC ) ;