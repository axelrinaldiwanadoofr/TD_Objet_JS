
class Figure
{
    constructor()
    {
        console.log( "cree un figure") ;
    }

    /*
    Positionne la figure en x et y
    */
    placer( x, y )
    {
        console.log( "la figure devrait etre placée en " + x + ", " + y ) ;
    }

    /*
    Dessine la figure dans l'objet HTML référencé par
    l'argument feuille
    */
    dessiner( feuille )
    {
        console.log( "dessine la figure" ) ;
    }
}