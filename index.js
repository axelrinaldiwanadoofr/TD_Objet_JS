
class MonWC extends HTMLElement
{
    constructor()
    {
        super() ;
    }

    connectedCallback()
    {
        console.log( "Creation d'un element de type MonWC" ) ;
    }

}

// Enregistre le web component dans JS
customElements.define( "mon-wc", MonWC ) ;