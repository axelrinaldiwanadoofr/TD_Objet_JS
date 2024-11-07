
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
        this.seDeplace = false ;
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

        img.addEventListener( "mousedown", (event)=>
        {
            this.onMouseDown( event ) ;
        }) ;
        img.addEventListener( "mousemove", (event)=>
        {
            this.onMouseMove( event ) ;
        }) ;
    }

    onMouseDown( event )
    {
        this.seDeplace = !this.seDeplace ;
        let x = event.clientX ;
        let y = event.clientY ;
        this.img.style.left = x - 12 + "px" ;
        this.img.style.top = y - 12 + "px" ;
    }

    onMouseMove( event )
    {
        if( this.seDeplace )
        {
            let x = event.clientX ;
            let y = event.clientY ;
            this.img.style.left = x - 12 + "px" ;
            this.img.style.top = y - 12 + "px" ;
        }
    }
}

// Enregistre le web component dans JS
customElements.define( "bougeur-vh", Bougeur ) ;