
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

class Bougeur extends HTMLElement
{
    constructor()
    {
        super() ;
        this.img = null ;
    }

    connectedCallback()
    {
        let img = document.createElement( "img" ) ;
        img.src = "images/FlecheVertHonri.png" ;
        img.style.position = "absolute" ;
        img.style.left = this.offsetLeft + "px" ;
        img.style.top = this.offsetTop + "px" ;
        this.appendChild( img ) ;

        this.img = img ;
    }
}

// Enregistre le web component dans JS
customElements.define( "bougeur-vh", Bougeur ) ;