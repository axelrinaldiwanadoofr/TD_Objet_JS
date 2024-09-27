
class Point extends Figure
{
    constructor( x=0, y=0 )
    {
        // Appel du construteur de la classe mère
        super() ;

        // Cree l'attribut x 
        // et le met à jour avec la valeur de l'argument x
        this.x = x ; 
        this.y = y ;
    }

    placer( x , y )
    {
        this.x = x ;
        this.y = y ;
    }

    dessiner( feuille )
    {
        // On cree un objet IMG du DOM
        this.objetHTML = document.createElement( "IMG" ) ;

        // On positionne les propriétés de l'objet
        this.objetHTML.src = "images/point.png" ;
        this.objetHTML.style.position = "absolute" ;
        this.objetHTML.style.left = this.x + "px" ;
        this.objetHTML.style.top = this.y + "px" ;

        feuille.appendChild( this.objetHTML ) ;
    }
}