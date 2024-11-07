
class MonWC extends HTMLElement
{
    constructor()
    {
        super() ;
    }

    connectedCallback()
    {
        let t = document.getElementById( "MonWC" ) ;
        let clone = document.importNode( t.content, true ) ;
        this.appendChild( clone ) ;
    }

}

// Enregistre le web component dans JS
customElements.define( "mon-wc", MonWC ) ;