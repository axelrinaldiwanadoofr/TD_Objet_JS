
class DessinMeuble extends Vue
{
    constructor( id )
    {
        super( id ) ;

        this.xMouse = 0 ;
        this.yMouse = 0 ;
        this.moving = false ;

        let div = document.getElementById( "m1" ) ;

        // On cree un listener pour l'évenement mousedown
        div.addEventListener( "mousedown", (event)=>
        {
            this.xMouse = event.clientX ;
            this.yMouse = event.clientY ;
            this.moving = true ;
        }) ;

        div.addEventListener( "mousemove", (event)=>
        {
            if( this.moving )
            {
                let dx = event.clientX - this.xMouse ;
                let dy = event.clientY - this.yMouse;
                this.xMouse = event.clientX ;
                this.yMouse = event.clientY ;

                let div = document.getElementById( "m1" ) ;
                div.style.width = div.offsetWidth + dx + "px" ;
                div.style.height = div.offsetHeight + dy + "px" ;

                this.modele.largeur = div.offsetWidth ;
                this.modele.heuteur = div.offsetHeight ;
            }
        }) ;

        div.addEventListener( "mouseup", (event)=>
        {
            this.moving = false ;
        }) ;

    }

    updateVue( modele )
    {
        super.updateVue( modele ) ;

        let div = document.getElementById( "m1" ) ;

        div.style.width = this.modele.largeur + "px" ;
        div.style.height = this.modele.hauteur + "px" ;
    }
}