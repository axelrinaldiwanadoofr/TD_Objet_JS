let feuille = document.getElementById( "main" ) ;

let dessin = [] ;

dessin.push( new Figure() ) ;
dessin.push( new Point( 50, 30 ) ) ;
dessin.push( new Etoile() ) ;

class Schtroumf extends Figure
{
    constructor()
    {
        super() ;
    }
}

dessin.push( new Schtroumf() ) ;

function DessineDessin( d )
{
    for( let i=0 ; i<d.length ; i++ ) d[i].dessiner( feuille ) ;
}

DessineDessin( dessin ) ;

