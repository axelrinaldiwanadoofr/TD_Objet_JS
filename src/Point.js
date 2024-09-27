
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

    dessiner( feuille )
    {
        console.log( "dessine un point de coordonnees \
         " + this.x + ", " + this.y ) ;
    }
}