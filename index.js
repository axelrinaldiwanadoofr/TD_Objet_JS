let feuille = document.getElementById( "main" ) ;


let f = new Figure() ;

f.placer( 10, 20 ) ;
f.dessiner( feuille ) ;

let p = new Point( 50, 30 ) ;
p.dessiner( feuille ) ;

var e = new Etoile();
e.dessiner(feuille);
