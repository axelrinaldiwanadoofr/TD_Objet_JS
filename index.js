let feuille = document.getElementById( "main" ) ;

let dessin = [] ;

dessin.push( new Figure() ) ;
dessin.push( new Point( 50, 80 ) ) ;
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

let p = new Point( 100, 100 ) ;
p.dessiner( feuille ) ;

p.placer( 150, 100 ) ;
p.dessiner( feuille ) ;

