
class DessinMeuble extends Vue
{
    constructor( id )
    {
        super( id ) ;
    }

    updateVue( modele )
    {
        super.updateVue( modele ) ;

        let div = document.getElementById( "m1" ) ;

        div.style.width = this.modele.largeur + "px" ;
        div.style.height = this.modele.hauteur + "px" ;
    }
}